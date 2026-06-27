"use client";

import { ExpandingLine } from "@/animations/lines/ExpandingLine";
import { BlurIn } from "@/animations/text/BlurIn";
import Link from "next/link";

const channels = [
  {
    label: "Email",
    value: "kingsuk24nandi@gmail.com",
    href: "mailto:kingsuk24nandi@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 94336 19635",
    href: "tel:+919433619635",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kingsuk-nandi",
    href: "https://linkedin.com/in/kingsuk-nandi",
  },
  {
    label: "GitHub",
    value: "github.com/KingsukNandi",
    href: "https://github.com/KingsukNandi",
  },
];

const Contact = () => {
  return (
    <article
      id="contact"
      className="min-h-lvh size-full relative flex flex-col justify-center py-20 xl:my-32"
    >
      <section>
        <div className="w-fit pb-2 md:pb-4">
          <BlurIn>
            <h2 className="text-4xl md:text-8xl font-bold">Contact</h2>
            <ExpandingLine />
          </BlurIn>
        </div>

        <BlurIn>
          <p className="text-xs italic md:text-lg pb-2 md:pb-4">
            Open to internships, freelance work, and collaborations
          </p>
        </BlurIn>
      </section>

      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-5 md:mt-10">
        {channels.map((channel, idx) => (
          <BlurIn key={idx}>
            <Link
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={
                channel.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-center justify-between rounded-lg border border-white/10 bg-gradient-to-tr from-black via-zinc-950/60 to-zinc-900/10 p-6 md:p-8 hover:border-white/40 transition-colors"
            >
              <div>
                <p className="text-sm md:text-base uppercase tracking-[0.25em] text-white/50">
                  {channel.label}
                </p>
                <p className="text-base md:text-2xl font-semibold mt-2 break-all bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  {channel.value}
                </p>
              </div>
              <span className="text-2xl md:text-3xl text-white/40 group-hover:text-white transition-colors pl-4">
                &rarr;
              </span>
            </Link>
          </BlurIn>
        ))}
      </section>

      <BlurIn>
        <section className="flex flex-col items-center justify-center gap-2 mt-16 text-white/60 text-sm md:text-base">
          <p>Based in Bhubaneswar, Odisha, India</p>
          <p>Currently a Software Developer Intern at Antbox</p>
        </section>
      </BlurIn>
    </article>
  );
};

export default Contact;
