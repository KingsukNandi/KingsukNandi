"use client";

import { BlurIn } from "@/animations/text/BlurIn";
import Link from "next/link";

const Hero = () => {
  return (
    <BlurIn>
      <article className="min-h-dvh text-white w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-8xl font-bold pb-4 md:pb-8">
          Hi, I&apos;m{" "}
          <span className="leading-tight bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Kingsuk Nandi
          </span>
        </h1>

        <h2 className="text-lg md:text-2xl pt-4 md:pt-8 font-semibold">
          Backend-Focused Full Stack Developer
        </h2>
        <p className="text-base md:text-xl py-2 md:py-4 px-2">
          I build reliable systems, scalable APIs, and seamless user
          experiences.
        </p>

        <section className="flex flex-col md:flex-row gap-4 pt-8 md:pt-16">
          <Link
            href="/contact"
            className="bg-white text-black py-3 px-6 rounded-full min-w-[150px] hover:scale-105 transition-all duration-300 cursor-crosshair"
          >
            Contact Me
          </Link>
          <Link
            href="/resume"
            className="py-3 px-6 text-white/60 rounded-full border bg-black min-w-[150px] hover:scale-105 transition-all duration-300 cursor-crosshair"
          >
            Resume
          </Link>
        </section>

        <div className="absolute my-auto -z-10 inset-0 h-[80%] w-full bg-[radial-gradient(#455a64_1px,transparent_1px)] md:bg-[radial-gradient(#455a64_1px,transparent_3px)] [background-size:20px_20px] md:[background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </article>
    </BlurIn>
  );
};

export default Hero;
