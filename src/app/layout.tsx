import type { Metadata } from "next";
import "@fontsource/poppins";
import "./globals.css";

export const metadata: Metadata = {
  icons:
    "https://storage.googleapis.com/copilot-careers-public/copilot_careers_icon.png",
  title:
    "Join Copilot Careers as a Substitute Teacher | Start Your Journey Today",
  description:
    "Become a substitute teacher with Copilot Careers. Start inspiring students, enjoy flexible work options, and advance your teaching career with comprehensive support.",
  openGraph: {
    title:
      "Join Copilot Careers as a Substitute Teacher | Start Your Journey Today",
    description:
      "Become a substitute teacher with Copilot Careers. Start inspiring students, enjoy flexible work options, and advance your teaching career with comprehensive support.",
    url: "https://teach.copilotcareers.org/",
    images: [
      {
        url: "https://storage.googleapis.com/copilot-careers-public/copilot_careers_icon.png",
        width: 1200,
        height: 630,
        alt: "Copilot Careers - Substitute Teacher Opportunity",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Copilot Careers as a Substitute Teacher",
    description:
      "Inspire the next generation and enjoy a rewarding career with flexible options at Copilot Careers.",
    images: [
      "https://storage.googleapis.com/copilot-careers-public/copilot_careers_icon.png",
    ],
  },
  alternates: {
    canonical: "https://teach.copilotcareers.org/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOccupationalProgram",
              name: "Substitute Teacher Program",
              description:
                "Inspire students and grow your career with Copilot Careers as a substitute teacher.",
              provider: {
                "@type": "Organization",
                name: "Copilot Careers",
                url: "https://teach.copilotcareers.org/",
              },
              occupationalCategory: "Education, Teaching",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
