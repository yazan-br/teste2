/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Form, FormField } from "@yazan-getscale/getscale-storybook";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import zipcodes from "zipcodes";
import InputMask from "react-input-mask";
import { useSearchParams } from "next/navigation"; // Import useSearchParams
import DOMPurify from "dompurify";

// Define the Zod schema with optIn as a boolean and passthrough for additional properties
const schema = z
  .object({
    firstName: z.string().toLowerCase().min(1, "First name is required"),
    lastName: z.string().toLowerCase().min(1, "Last name is required"),
    email: z.string().toLowerCase().email("Invalid email address"),
    zipCode: z
      .string()
      .length(5, "Zip code must be exactly 5 digits")
      .refine((zip) => !!zipcodes.lookup(zip), {
        message: "Invalid zip code",
      }),
    phoneNumber: z
      .string()
      .transform((val) => val.replace(/\D/g, ""))
      .refine((val) => val.length === 10, {
        message: "Phone number must be exactly 10 digits",
      }),
    educationLevel: z
      .string()
      .refine((value) => value !== "", {
        message: "Education level is required",
      })
      .refine(
        (value) =>
          [
            "highSchoolDiploma",
            "collegeCredits25",
            "collegeCredits60",
            "bachelors",
            "masters",
          ].includes(value),
        {
          message: "Invalid education level",
        }
      ),
    optIn: z.boolean().optional(),
    yourName: z.string().optional(),
  })
  .passthrough();

type FormData = z.infer<typeof schema>;

const MultiStepFormPage: React.FC = () => {
  const searchParams = useSearchParams();
  const queryParamsObject: Record<string, string> = {};

  if (searchParams) {
    searchParams.forEach((value, key) => {
      queryParamsObject[key] = value;
    });
  }

  const jobId = searchParams.get("job_id") || "";

  const [formData, setFormData] = useState<Partial<FormData>>({
    optIn: false,
  });
  const [optIn, setOptIn] = useState<boolean>(false); // Separate state for optIn
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const flattenedFields: FormField[] = [
    {
      name: "firstName",
      label: "First Name",
      placeholder: "Enter your first name",
      type: "text",
    },
    {
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter your last name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      customComponent: (
        <InputMask
          name="phoneNumber"
          className="rounded-none p-3 text-left border border-gray-500 w-full"
          mask="(999) 999-9999"
          maskChar={null}
          placeholder="Enter your phone number"
          value={formData.phoneNumber || ""}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        />
      ),
    },
    {
      name: "zipCode",
      label: "Zip Code",
      customComponent: (
        <InputMask
          name="zipCode"
          mask="99999"
          maskChar={null}
          placeholder="Enter your zip code"
          className="rounded-none p-3 text-left border border-gray-500 w-full"
          value={formData.zipCode || ""}
          onChange={(e) =>
            setFormData({ ...formData, zipCode: e.target.value })
          }
        />
      ),
    },
    {
      name: "educationLevel",
      label: "Select Education Level",
      type: "select",
      options: [
        { value: "highSchoolDiploma", label: "High School Diploma" },
        { value: "collegeCredits25", label: "25 or More College Credits" },
        { value: "collegeCredits60", label: "60 or More College Credits" },
        { value: "bachelors", label: "Bachelor's Degree" },
        { value: "masters", label: "Master's Degree" },
      ],
    },
    {
      name: "optIn",
      label: "",
      customComponent: (
        <div className="flex items-start">
          <input
            type="checkbox"
            id="optIn"
            name="optIn"
            checked={optIn}
            onChange={(e) => setOptIn(e.target.checked)}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="optIn" className="text-sm text-gray-700">
            <span>
              By checking this box, you agree to receive opportunities related
              to this inquiry and other opportunities from Copilot Careers via
              automated calls and text messages, which may use AI technology,
              and to our{" "}
              <a
                href="https://www.copilotcareers.org/terms-and-conditions"
                target="_blank"
              >
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a
                href="https://www.copilotcareers.org/privacy-policy"
                target="_blank"
              >
                Privacy Policy
              </a>
              . <br /> Message and data rates may apply. Reply STOP to opt out.
            </span>
          </label>
        </div>
      ),
    },
  ];
  const [formWasSubmitted, setFormWasSubmitted] = useState(false);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // TrustedForm SDK Script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `${
      document.location.protocol === "https:" ? "https" : "http"
    }://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&l=${
      new Date().getTime() + Math.random()
    }`;
    document.head.appendChild(script);

    // TrustedForm NoScript Fallback
    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.src = "https://api.trustedform.com/ns.gif";
    img.alt = "TrustedForm NoScript";
    noscript.appendChild(img);
    document.head.appendChild(noscript);

    const storedJobId = sessionStorage.getItem("job_id");
    if (storedJobId && storedJobId === jobId) {
      setFormWasSubmitted(true);
    } else {
      setFormWasSubmitted(false);
    }

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(noscript);
    };
  }, [jobId]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const totalSteps = flattenedFields.length;

  const validateStep = (): boolean => {
    const currentField = flattenedFields[currentStep]; // Access only the current field
    let isValid = true;
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    // Type guard to ensure currentField.name is a key in schema.shape
    const fieldName = currentField.name;
    if (typeof fieldName === "string" && fieldName in schema.shape) {
      const fieldSchema = schema.shape[fieldName as keyof typeof schema.shape];

      if (fieldSchema) {
        let value: any;

        // Access optIn state directly, or formData for other fields
        if (fieldName === "optIn") {
          value = optIn;
        } else {
          value = formData[fieldName as keyof FormData];
        }

        const parseResult = fieldSchema.safeParse(value);
        const fieldError = parseResult.error?.issues[0]?.message;

        if (fieldError) {
          newErrors[fieldName as keyof FormData] = fieldError;
          isValid = false; // Set isValid to false if there's any validation error
        }
      }
    }

    setErrors(newErrors); // Update the errors state with any validation errors found
    return isValid; // Only returns true if the current field is valid
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (data: FormData) => {
    setErrors({});
    const sanitizedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        typeof value === "string" ? DOMPurify.sanitize(value) : value,
      ])
    );

    const mergedData = { ...sanitizedData, optIn } as FormData;
    if (mergedData.yourName && mergedData.yourName.trim() !== "") {
      return;
    }

    const validationResult = schema.safeParse(mergedData);
    if (!validationResult.success) {
      const validationErrors = validationResult.error.flatten().fieldErrors;
      setErrors(
        Object.keys(validationErrors).reduce(
          (acc, key) => ({ ...acc, [key]: validationErrors[key]?.[0] }),
          {} as Partial<Record<keyof FormData, string>>
        )
      );
      setFormWasSubmitted(false);
      return;
    }

    try {
      const response = await fetch("/api/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validationResult.data),
      });

      if (response.ok) {
        setIsSuccess(true);
        sessionStorage.setItem("job_id", jobId);
        setFormWasSubmitted(true);
      } else {
        setErrors({ general: "Submission failed. Please try again." });
        setFormWasSubmitted(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ general: "An error occurred. Please try again later." });
      setFormWasSubmitted(false);
    }
  };

  return (
    <div className="bg-white p-10 md:w-[444px] md:h-auto text-left shadow rounded-md ">
      {isClient && formWasSubmitted ? (
        <div className="grid gap-3 place-content-center text-center transition-opacity duration-500 opacity-100">
          <div className="text-green-500 font-bold text-xl">
            Congratulations!
          </div>
          <div className="">You have successfully submited your form!</div>
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="space-y-8 md:h-full">
              <div className="h-2  w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ) : (
            <Form<FormData>
              fields={flattenedFields}
              onSubmit={handleSubmit}
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              errorClassName="absolute"
              nextStepForm
              titleClassName="text-center font-bold text-xl md:pb-2"
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              totalSteps={totalSteps}
              onNext={handleNext}
              onBack={handleBack}
              tailwindClasses=""
              inputClassName="rounded-none p-3 text-left border border-gray-500"
              fieldWrapperClassName="text-left"
              title="Work with us"
              backButtonClassName="md:w-[158px] h-[48px] bg-white border border-solid border-black rounded-[2px] text-black text-[16px] leading-[19px] font-semibold font-poppins text-center shadow-none hover:bg-[rgba(242,194,194,1)] transition-colors duration-300"
              nextButtonClassName="md:w-[160px] h-[50px] bg-[rgba(18,104,207,1)] rounded-[2px] text-white text-[16px] leading-[19px] font-semibold font-poppins text-center shadow-none border-none"
              submitButtonClassName={`w-[160px] h-[50px] rounded-[2px] text-white text-[16px] leading-[19px] font-semibold font-poppins text-center shadow-none border-none transition-colors duration-300 ${
                isSuccess ? "bg-green-500" : "bg-[rgba(18,104,207,1)]"
              }`}
            />
          )}
        </>
      )}
      {/* Form Component */}

      {/* Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="yourName">Your Name</label>
        <input
          id="yourName"
          name="yourName"
          type="text"
          placeholder="Enter your name again"
          tabIndex={-1}
          autoComplete="off"
          onChange={(e) =>
            setFormData({ ...formData, yourName: e.target.value })
          }
        />
      </div>

      {isClient && errors.general && errors.general !== "" && (
        <div className="fixed top-[15%] right-0 transform translate-x-full bg-red-400 text-white p-4 rounded shadow-md transition-transform duration-500 ease-out animate-slide-in">
          <div className="text-white font-bold text-sm">
            An error occurred. Please try again.
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepFormPage;
