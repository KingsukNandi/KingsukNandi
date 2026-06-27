import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

// Single source of truth for the canonical site URL.
// If you move to a custom domain later (recommended), change only this line.
const SITE_URL = "https://kingsuk-nandi.vercel.app";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat", // Optional: for CSS variables
  weight: ["400", "700"], // Specify desired weights
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // Optional: for CSS variables
  weight: ["400", "500", "700"], // Specify desired weights
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kingsuk Nandi · Full-Stack Developer",
    template: "%s · Kingsuk Nandi",
  },
  description:
    "Kingsuk Nandi — Full-Stack Developer and Computer Science student at KIIT in Bhubaneswar, India. I build full-stack web apps with React, Next.js, Node.js, and PostgreSQL, plus Python ML and Google Cloud data pipelines.",
  applicationName: "Kingsuk Nandi · Portfolio",
  authors: [{ name: "Kingsuk Nandi", url: SITE_URL }],
  creator: "Kingsuk Nandi",
  publisher: "Kingsuk Nandi",
  keywords: [
    "Kingsuk Nandi",
    "Full-Stack Developer",
    "Software Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "PostgreSQL",
    "Python",
    "Machine Learning",
    "RAG",
    "Google Cloud Platform",
    "KIIT",
    "Bhubaneswar",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Kingsuk Nandi · Portfolio",
    title: "Kingsuk Nandi · Full-Stack Developer",
    description:
      "Full-Stack Developer and CS student at KIIT building web apps with React, Next.js, Node.js, and PostgreSQL, plus Python ML and Google Cloud data pipelines.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingsuk Nandi · Full-Stack Developer",
    description:
      "Full-Stack Developer and CS student at KIIT building web apps with React, Next.js, Node.js, and PostgreSQL, plus Python ML and Google Cloud data pipelines.",
  },
  // After you verify ownership in Google Search Console, paste the token here:
  // verification: { google: "your-google-site-verification-token" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

// Person + WebSite structured data (JSON-LD). Helps Google and AI search engines
// understand who you are and surface you for "Kingsuk Nandi" queries.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Kingsuk Nandi",
      url: SITE_URL,
      image: `${SITE_URL}/kingsuk_nandi.jpg`,
      jobTitle: "Full-Stack Developer",
      email: "kingsuk24nandi@gmail.com",
      description:
        "Full-Stack Developer and Computer Science student at KIIT building web apps with React, Next.js, Node.js, and PostgreSQL, plus Python ML and Google Cloud data pipelines.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Kalinga Institute of Industrial Technology (KIIT)",
      },
      knowsAbout: [
        "Full-Stack Development",
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Python",
        "Machine Learning",
        "RAG",
        "Vector Search",
        "Google Cloud Platform",
        "REST API Design",
        "TypeScript",
      ],
      sameAs: [
        "https://github.com/KingsukNandi",
        "https://linkedin.com/in/kingsuk-nandi",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Kingsuk Nandi · Portfolio",
      description:
        "Portfolio of Kingsuk Nandi, Full-Stack Developer and Computer Science student at KIIT.",
      author: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} overflow-x-hidden antialiased bg-black text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
