/**
 * API Route Handler for Form Submission with Validation and Metadata
 *
 * This file defines an API route that processes and validates form data submissions,
 * appending additional metadata such as user agent and IP address. The validated
 * data is then forwarded to an external endpoint.
 *
 * ### Request Method
 * - **POST**: Required for data submission.
 * - Other HTTP methods are not allowed and will return a `405 Method Not Allowed` response.
        "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`, to post request in production
 * add 
 */

import { NextResponse } from 'next/server';
import { z } from 'zod';
import UAParser from 'ua-parser-js';

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  zipCode: z.string().length(5, "Zip code must be exactly 5 digits"),
  phoneNumber: z.string().refine(val => val.replace(/\D/g, "").length === 10, {
    message: "Phone number must be exactly 10 digits",
  }),
  educationLevel: z.string()
    .refine(value => value !== "", {
      message: "Education level is required",
    })
    .refine(value => ["highSchoolDiploma", "collegeCredits25", "collegeCredits60", "bachelors", "masters"].includes(value), {
      message: "Invalid education level",
    }),
  optIn: z.boolean(),
  yourName: z.string().optional(),
}).passthrough();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate request body with Zod schema
    const validation = schema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const formData = validation.data;
    if (formData.yourName && formData.yourName.trim() !== "") {
      return NextResponse.json({ error: "Bot detected." }, { status: 400 });
    }

    const userAgent = req.headers.get("user-agent") || "Unknown";
    const parser = new UAParser(userAgent);
    const parsedUA = parser.getResult();
    const ipAddress = req.headers.get("x-forwarded-for") || "::1";
    const timeSubmitted = new Date().toISOString();
    const fullUrl = req.headers.get("referer") || "http://localhost:3000";
    const url = new URL(fullUrl);
    const pageUrl = `${url.protocol}//${url.host}`;
    const queryParams = Object.fromEntries(url.searchParams.entries());

    const finalData = {
      ...formData,
      user_agent: JSON.stringify(parsedUA),
      ip_address: ipAddress,
      time_submitted: timeSubmitted,
      page_url: pageUrl,
      query_params: JSON.stringify(queryParams),
      date_submitted: new Date().toLocaleDateString(),
    };

    if (!process.env.CLIENT_ID) {
      return NextResponse.json(
        { error: "Server configuration error: Missing CLIENT_ID." },
        { status: 500 }
      );
    }

    const externalResponse = await fetch("https://us-west1-getsaleswarehouse.cloudfunctions.net/gsi-form-submission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "client-id": process.env.CLIENT_ID,
      },
      body: JSON.stringify(finalData),
    });

    const contentType = externalResponse.headers.get("content-type");
    const responseData = contentType && contentType.includes("application/json")
      ? await externalResponse.json()
      : await externalResponse.text();

    if (!externalResponse.ok) {
      return NextResponse.json(
        { error: "Failed to submit data"},
        { status: externalResponse.status }
      );
    }

    return NextResponse.json({
      message: "Validation passed and data submitted successfully",
      data: responseData,
    });

  } catch (error) {
    console.error("Error in form submission:", error);

    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}