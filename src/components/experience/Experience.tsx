"use client";

import { ExpandingLine } from "@/animations/lines/ExpandingLine";
import { BlurIn } from "@/animations/text/BlurIn";
import { Card } from "@/cards/Card";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Kutlerri",
    link: "https://kutlerri.ai/",
    role: "Associate Data Engineer · Remote",
    time: "January 2026 – Present",
    description:
      "Redesigned homepage, products, and resources/blog sections of a client-facing Next.js platform. Contributed to a Python/Scikit-Learn ML demand forecasting pipeline for next-day food order volumes, and ran geospatial analysis across 20+ locations using GeoPandas, US Census, LODES, Google Maps/Places, and ArcGIS APIs. Built an event-driven GCP backend with Pub/Sub-triggered email-notification webhooks and BigQuery analytics over 4 years of multi-source data, with services deployed on Cloud Run.",
  },
  {
    title: "KIITFest 8.0 Website",
    link: "https://kiitfest.org/",
    role: "Frontend Developer · Bhubaneswar",
    time: "December 2024 – February 2025",
    description:
      "Engineered UI for the official fest site with 17K+ registrations and 2,000+ concurrent peak users. Integrated a custom QR auth system that cut distribution time by 40%.",
  },
  {
    title: "IoTLab, KIIT",
    role: "Frontend Developer · Bhubaneswar",
    time: "August 2024 – Present",
    description:
      "Architected an events platform with React/TypeScript, including scheduling and API integrations for 6K+ users. Enhanced Innovance 3.0 (Next.js/TypeScript), driving 150% traffic growth via responsive UI components.",
  },
];

const Experience = () => {
  return (
    <article
      id="experience"
      className="min-h-lvh size-full relative flex flex-col justify-center py-20 xl:my-32"
    >
      <section>
        <div className="w-fit pb-2 md:pb-4">
          <BlurIn>
            <h2 className="text-4xl md:text-8xl font-bold">Experience</h2>
            <ExpandingLine />
          </BlurIn>
        </div>

        <BlurIn>
          <p className="text-xs italic md:text-lg pb-2 md:pb-4">
            The journey that shaped my skills
          </p>
        </BlurIn>
      </section>

      <section className="flex xl:gap-64 mt-5 md:mt-10">
        {/* Timeline line */}
        {/*<div className="w-60"></div>*/}
        <div className="min-w-1 bg-gradient-to-b from-blue-600 via-green-500 to-indigo-400"></div>

        {/* Timeline content */}
        <div className="flex flex-col xl:gap-8 w-full md:ml-auto">
          {experiences.map((exp, idx) => (
            <BlurIn key={idx}>
              <div className="pl-10 xl:pl-0">
                {idx == 0 ? (
                  <div className="bg-black w-1 h-1/2 absolute z-10 -left-1 xl:-left-[260px]"></div>
                ) : idx == experiences.length - 1 ? (
                  <div className="bg-black w-1 h-1/2 absolute bottom-0 z-10 -left-1 xl:-left-[260px]"></div>
                ) : (
                  <></>
                )}

                {/* dot */}
                <div className="w-8 h-8 rounded-full bg-white border-10 border-black absolute z-10 -left-[18px] xl:-left-[273px] top-1/2 -translate-y-1/2"></div>

                {/* line */}
                <motion.div
                  className="w-14 md:w-16 lg:w-[280px] h-px absolute left-0 xl:-left-64 top-1/2 -translate-y-1/2 overflow-hidden"
                  initial={{ backgroundPosition: "0% -50%" }}
                  animate={{ backgroundPosition: ["0% 50%", "-100% -50%"] }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(113,113,123,0.0), rgba(113,113,123,1), rgba(113,113,123,0.0), rgba(113,113,123,1),rgba(113,113,123,0.0))",
                    backgroundSize: "200% 100%",
                  }}
                />

                <Card
                  title={exp.title}
                  role={exp.role}
                  time={exp.time}
                  description={exp.description}
                />
              </div>
            </BlurIn>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Experience;
