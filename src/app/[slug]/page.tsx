// src/app/[slug]/page.tsx
import { Suspense } from "react";
import { ComponentData, renderComponent } from "../components/componentMapping";

type Props = {
  params: {
    slug: string;
  };
  searchParams: Record<string, string>;
};

async function fetchData(slug: string, searchParams: Record<string, string>) {
  const query = new URLSearchParams(searchParams).toString();

  // Use the NEXT_PUBLIC_API_BASE_URL environment variable
  const baseUrl = "https://teste2-three-kappa.vercel.app" || "";
  const url = `${baseUrl}/api/layoutProps?slug=${slug}&${query}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params, searchParams }: Props) {
  const { slug } = params;
  const data = await fetchData(slug, searchParams);

  return (
    <Suspense fallback={<>Loading...</>}>
      <div id="tag1"></div>
      {data?.map((componentData: ComponentData, index: number) =>
        renderComponent(componentData, index)
      )}
    </Suspense>
  );
}
