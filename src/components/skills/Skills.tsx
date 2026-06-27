"use client";

import { ExpandingLine } from "@/animations/lines/ExpandingLine";
import { BlurIn } from "@/animations/text/BlurIn";

const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Scikit-Learn",
      "Pandas",
      "GeoPandas",
      "Sentence Transformers",
      "PyMuPDF",
    ],
  },
  {
    label: "Cloud, Databases & Tools",
    items: [
      "GCP",
      "Cloud Run",
      "Cloud Storage",
      "Pub/Sub",
      "BigQuery",
      "PostgreSQL",
      "MySQL",
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "REST APIs",
    ],
  },
  {
    label: "Concepts",
    items: [
      "Full-Stack Development",
      "REST API Design",
      "RAG",
      "Vector Search",
      "Machine Learning",
      "Data Structures & Algorithms",
      "Agile",
    ],
  },
];

const Skills = () => {
  return (
    <article
      id="skills"
      className="min-h-lvh size-full relative flex flex-col justify-center py-20 xl:my-32"
    >
      <section>
        <div className="w-fit pb-2 md:pb-4">
          <BlurIn>
            <h2 className="text-4xl md:text-8xl font-bold">Skills</h2>
            <ExpandingLine />
          </BlurIn>
        </div>

        <BlurIn>
          <p className="text-xs italic md:text-lg pb-2 md:pb-4">
            The tools I reach for to ship things
          </p>
        </BlurIn>
      </section>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-5 md:mt-10">
        {skillGroups.map((group, idx) => (
          <BlurIn key={idx}>
            <div className="h-full rounded-lg border border-white/10 bg-gradient-to-tr from-black via-zinc-950/60 to-zinc-900/10 p-6 md:p-8">
              <h3 className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="border border-white/15 rounded-full px-4 py-1 text-sm md:text-base text-white/80 hover:border-white/40 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </BlurIn>
        ))}
      </section>
    </article>
  );
};

export default Skills;
