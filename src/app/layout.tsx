import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

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
  title: "Kingsuk Nandi · Full Stack Developer",
  description:
    "Portfolio of Kingsuk Nandi — Computer Science student at KIIT and Software Developer Intern at Antbox. Building full-stack web apps with React, Next.js, Node.js, and PostgreSQL.",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
