"use client";

import { ExpandingLine } from "@/animations/lines/ExpandingLine";
import { BlurIn } from "@/animations/text/BlurIn";
import { AnimatePresence, motion } from "framer-motion";
//import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "scalable APIs",
  "reliable systems",
  "seamless UIs",
  "products users love",
];

const meta = [
  "Bhubaneswar, India",
  "KIIT  CSE  GPA 9.3",
  "ICDCIT Hackathon Finalist",
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setRoleIdx((i) => (i + 1) % roles.length),
      2400
    );
    return () => clearInterval(t);
  }, []);

  return (
    <article
      id="home"
      className="min-h-dvh relative flex items-center px-4 md:px-20 xl:px-40 2xl:px-64 overflow-hidden"
    >
      {/* background dot grid */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(#455a64_1px,transparent_1px)] md:bg-[radial-gradient(#455a64_1px,transparent_2px)] [background-size:24px_24px] md:[background-size:36px_36px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_45%,transparent_100%)]" />

      {/* glowing blobs */}
      <motion.div
        className="absolute -z-10 top-1/4 -left-32 w-[520px] h-[520px] rounded-full bg-blue-600/15 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -z-10 bottom-1/4 -right-32 w-[520px] h-[520px] rounded-full bg-indigo-500/15 blur-[120px]"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.9, 0.6, 0.9] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center w-full py-28">
        {/* Left: copy */}
        <div className="text-left">
          <BlurIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.04] text-xs md:text-sm text-white/80 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Currently building at Antbox · Open to opportunities
            </div>
          </BlurIn>

          <BlurIn>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight">
              Hi, I&apos;m
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text pb-1">
                Kingsuk Nandi
              </span>
              <ExpandingLine />
            </h1>
          </BlurIn>

          <BlurIn>
            <h2 className="text-xl md:text-3xl mt-6 md:mt-8 text-white/85 font-medium">
              I build{" "}
              <span className="relative inline-block align-baseline min-w-[10ch] md:min-w-[14ch]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIdx}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold"
                  >
                    {roles[roleIdx]}
                  </motion.span>
                </AnimatePresence>
                {/*<span className="ml-1 inline-block w-px h-6 md:h-8 bg-white/60 align-middle animate-pulse" />*/}
              </span>
            </h2>
          </BlurIn>

          <BlurIn>
            <p className="text-base md:text-lg mt-6 text-white/60 max-w-xl leading-relaxed text-justify">
              Computer Science student at KIIT and full-stack developer working
              in the seam between elegant UIs and dependable backends. I like
              turning messy problems into shipping products with the
              team.
            </p>
          </BlurIn>

          <BlurIn>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 bg-white text-black py-3 px-6 rounded-full font-medium hover:scale-[1.03] transition-all duration-300 cursor-crosshair"
              >
                Get in touch
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 text-white/85 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-crosshair"
              >
                Download Resume
              </Link>
              <Link
                href="https://github.com/KingsukNandi"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 text-white/60 rounded-full border border-white/20 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                GitHub
              </Link>
            </div>
          </BlurIn>

          <BlurIn>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 text-xs md:text-sm text-white/50">
              {meta.map((m, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="hidden md:inline-block w-1 h-1 rounded-full bg-white/30" />
                  )}
                  {m}
                </span>
              ))}
            </div>
          </BlurIn>
        </div>

        {/* Right: portrait + floating cards */}

        
        
      </div>

      {/* scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-[10px] md:text-xs flex flex-col items-center gap-2 uppercase tracking-[0.3em]"
      >
        <span>Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </article>
  );
};

export default Hero;
