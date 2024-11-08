import { PageDataFetcher } from '@/app/lib/PageDataFetcher';
import { NextResponse } from 'next/server';

/**
 * API Route Handler for Dynamic Page Layout Data
 *
 * This file defines an API route that dynamically returns layout data for different
 * job roles based on the `slug` provided in the query parameters.
 * The data for each slug is managed by the `PageDataFetcher` class, which provides
 * relevant content for each job role.
 *
 * The endpoint can be accessed with a GET request as follows:
 * - `http://localhost:3000/api/layoutProps?slug=substitute-teacher`
 * - `http://localhost:3000/api/layoutProps?slug=para-professional`
 * - `http://localhost:3000/api/layoutProps?slug=child-nutrition`
 * - `http://localhost:3000/api/layoutProps?slug=substitute-custodian`
 *
 * ### Request Method
 * - Only GET requests are supported.
 * - If a method other than GET is used, the endpoint will return a `405 Method Not Allowed` response.
 *
 * ### Query Parameters
 * - `slug`: Specifies the job role, which the `PageDataFetcher` uses to retrieve
 *   the appropriate layout data.
 *
 * ### Response
 * - On success (GET request with a valid slug), it returns a JSON object containing the layout data.
 * - If the method is not allowed, it returns a `405` status with an `Allow` header indicating the allowed method(s).
 *
 * Example:
 * ```http
 * GET /api/layoutProps?slug=substitute-teacher
 * ```
 * Expected Response:
 * ```json
 * {
 *   "components": [
 *     // array of components specific to the "substitute-teacher" slug
 *   ]
 * }
 * ```
 *
 * This API route provides a modular approach to fetching layout data for various job roles, enabling
 * consistent data retrieval across different pages.
 */

export async function GET(req: Request) {
  const url = new URL(req.url);
  const slug = url.searchParams.get('slug') || 'substitute-teacher';

  const fetcher = new PageDataFetcher();
  const data = fetcher.getDataForSlug(slug);

  // Always return substitute-teacher data if any error occurs or if data is undefined
  return NextResponse.json(data || fetcher.getDataForSlug('substitute-teacher'));
}