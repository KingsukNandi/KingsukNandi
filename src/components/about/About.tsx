import { ExpandingLine } from "@/animations/lines/ExpandingLine";
import { BlurIn } from "@/animations/text/BlurIn";
import Image from "next/image";
import Link from "next/link";
import { StatsGrid } from "./StatsGrid";

const About = () => {
  return (
    <article className="min-h-dvh relative flex items-center">
      <div>
        <div className="w-fit pb-4 md:pb-10">
          <BlurIn>
            <h1 className="text-4xl md:text-8xl font-bold">About Me</h1>

            <ExpandingLine />
          </BlurIn>
        </div>

        <div className="md:flex">
          <BlurIn>
            <p className="text-lg md:text-2xl lg:w-1/2">
              I’m Kingsuk, a Computer Science student and backend-focused full
              stack developer. I enjoy designing scalable APIs, managing
              databases, and building meaningful web applications that bring
              ideas to life.
            </p>
          </BlurIn>
          <div className="absolute -z-10 bottom-0 2xl:-right-40 xl:-right-44 lg:-right-56">
            <BlurIn>
              <div className="hidden relative lg:block w-[900px] max-w-dvh">
                <Image
                  src={"/kingsuk_nandi-removebg.png"}
                  alt="me"
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

          <section className="flex flex-col items-center justify-center md:flex-row gap-4 py-8 md:py-16 lg:w-1/2">
            <BlurIn>
              <Link
                href={"/about"}
                className="py-3 px-6 text-white/60 rounded-full border bg-black w-fit hover:scale-105 transition-all duration-300 cursor-crosshair"
              >
                Read More About Me
              </Link>
            </BlurIn>
          </section>
        </div>
      </div>
    </article>
  );
};

export default About;
