"use client";

import { ExpandingLine } from "@/animations/lines/ExpandingLine";
import { BlurIn } from "@/animations/text/BlurIn";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Multi-Document Intelligence System",
    description:
      "Built for Adobe Hackathon 2025. Led a team of 3 to build a RAG pipeline that extracts text and structural metadata (titles, headings, body, captions) from PDFs using PyMuPDF for semantically-aware chunking. Implemented persona-conditioned multi-document retrieval — queries phrased as specific personas surface curated, role-relevant sections via sentence-transformer embeddings.",
    stack: ["Python", "PyMuPDF", "Sentence Transformers", "RAG"],
    repos: [
      { label: "Round 1A", url: "https://github.com/KingsukNandi/Adobe-India-Hackathon-1a" },
      { label: "Round 1B", url: "https://github.com/KingsukNandi/Adobe-India-Hackathon-1b" },
    ],
  },
  {
    title: "Share-Fare@KIIT",
    description:
      "Full-stack campus ride sharing platform for verified peer-to-peer rides among KIIT students. REST API endpoints and a relational schema power ride listing, request handling, and matching workflows.",
    stack: ["Next.js", "PostgreSQL", "REST API"],
    github: "https://github.com/KingsukNandi/share_fare_kiit",
    link: "https://share-fare-teal.vercel.app/",
  },
  {
    title: "Solace",
    description:
      "AI-powered mental healthcare platform serving users in distress, with Pino-based activity logging built around user privacy. Hospital finder uses OpenStreetMap to surface healthcare facilities within a 5km radius. 2nd Runners Up at ICDCIT Hackathon 2.0.",
    stack: ["React.js", "AI Integration", "OpenStreetMap"],
    github: "https://github.com/KingsukNandi/Solace.git",
    link: "https://project-solace.vercel.app/",
  },
  {
    title: "SectionFinder",
    description:
      "Section swapping platform for KIIT students. Node.js/Express backend with JWT auth and KIIT email verification, exposing REST APIs for users, sessions, and swap requests. Real-time matching connects students with compatible swap intents.",
    stack: ["Node.js", "Express.js", "PostgreSQL", "JWT"],
    github: "https://github.com/KingsukNandi/SectionFinder-v2.0",
    link: "https://sectionfinder-v2-0.onrender.com/",
  },
  {
    title: "Deep Learning based NIDS",
    description:
      "End-to-end ML & DL pipeline (data ingestion, feature engineering, model training, evaluation) to identify malicious network traffic. Handles large-scale network datasets with data cleaning and performance tuning for Deep Learning models.",
    stack: ["Python", "Deep Learning", "Pandas", "CNN"],
    github: "https://github.com/KingsukNandi",
  },
];

const Projects = () => {
  return (
    <article
      id="projects"
      className="min-h-lvh size-full relative flex flex-col justify-center py-20 xl:my-32"
    >
      <section>
        <div className="w-fit pb-2 md:pb-4">
          <BlurIn>
            <h1 className="text-4xl md:text-8xl font-bold">Projects</h1>
            <ExpandingLine />
          </BlurIn>
        </div>

        <BlurIn>
          <p className="text-xs italic md:text-lg pb-2 md:pb-4">
            Things I&apos;ve built &amp; experimented with...
          </p>
        </BlurIn>
      </section>

      <section className="grid gap-4 self-stretch grid-cols-1 justify-items-center lg:grid-cols-2 mt-5 md:mt-10">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </section>
    </article>
  );
};

export default Projects;
