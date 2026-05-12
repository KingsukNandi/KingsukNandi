import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20 py-8 px-4 md:px-20 xl:px-40 2xl:px-64 text-white/60 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
      <p>&copy; {new Date().getFullYear()} Kingsuk Nandi. All rights reserved.</p>
      <div className="flex gap-6">
        <Link
          href="https://github.com/KingsukNandi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/kingsuk-nandi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          LinkedIn
        </Link>
        <Link
          href="mailto:kingsuk24nandi@gmail.com"
          className="hover:text-white transition-colors"
        >
          Email
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
