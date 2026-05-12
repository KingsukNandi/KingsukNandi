"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navitems = [
  { item: "Home", link: "#home" },
  { item: "About", link: "#about" },
  { item: "Experience", link: "#experience" },
  { item: "Projects", link: "#projects" },
  { item: "Skills", link: "#skills" },
  { item: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed z-30 top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-fit rounded-full border border-white/10 backdrop-blur-md transition-colors ${
        scrolled ? "bg-black/70" : "bg-black/30"
      }`}
    >
      <div className="hidden md:flex gap-2 px-4 py-2">
        {navitems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="px-4 py-1.5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            {item.item}
          </Link>
        ))}
      </div>

      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <Link
          href="#home"
          className="font-bold tracking-wide bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
        >
          Kingsuk Nandi
        </Link>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
        >
          <span className="block w-5 h-0.5 bg-current mb-1"></span>
          <span className="block w-5 h-0.5 bg-current mb-1"></span>
          <span className="block w-5 h-0.5 bg-current"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-1 px-3 pb-3">
          {navitems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-full text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              {item.item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
