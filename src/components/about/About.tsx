import { ExpandingLine } from "@/animations/lines/ExpandingLine";
import { BlurIn } from "@/animations/text/BlurIn";
import Image from "next/image";
import Link from "next/link";
import { StatsGrid } from "./StatsGrid";

const About = () => {
  return (
    <article id="about" className="min-h-lvh relative flex items-center py-20">
      <div>
        <div className="w-fit pb-4 md:pb-10">
          <BlurIn>
            <h2 className="text-4xl md:text-8xl font-bold">About Me</h2>
            <ExpandingLine />
          </BlurIn>
        </div>

        <div className="md:flex">
          <BlurIn>
            <div className="space-y-4 lg:w-1/2 text-justify">
              <p className="text-lg md:text-2xl">
                I&apos;m Kingsuk, a Computer Science student at{" "}
                <span className="text-white font-semibold">KIIT</span> and a
                Software Developer Intern at{" "}
                <span className="text-white font-semibold">Antbox</span>,
                building full-stack web applications with React, Next.js,
                Node.js, and PostgreSQL.
              </p>
              <p className="text-base md:text-xl text-white/70">
                I have hands-on exposure to Python ML pipelines, geospatial
                analysis, and REST API design. Team-focused and driven to
                solve complex, real-world problems through scalable
                architecture.
              </p>
              <p className="text-base md:text-xl text-white/70">
                When I&apos;m not shipping production code, you&apos;ll find me
                competing in hackathons, contributing to campus dev teams, or
                tinkering with new frameworks.
              </p>
            </div>
          </BlurIn>
          <div className="absolute -z-10 bottom-0 2xl:-right-40 xl:-right-44 lg:-right-56">
            <BlurIn>
              <div className="hidden relative lg:block w-[900px] max-w-dvh">
                <Image
                  src={"/kingsuk_nandi-removebg.png"}
                  alt="Kingsuk Nandi"
                  width={1000}
                  height={1000}
                  className="opacity-100"
                />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-black/35 to-black"></div>
              </div>
            </BlurIn>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-col">
          <section className="lg:w-1/2">
            <BlurIn>
              <StatsGrid />
            </BlurIn>
          </section>
          <BlurIn>
            <section className="flex flex-col items-center justify-center md:flex-row gap-4 py-8 md:pt-16 md:py-0 lg:w-1/2">
              <Link
                href={"/resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 text-white/60 rounded-full border bg-black w-fit hover:scale-105 transition-all duration-300 cursor-crosshair"
              >
                Download Resume
              </Link>
            </section>
          </BlurIn>
        </div>
      </div>
    </article>
  );
};

export default About;
