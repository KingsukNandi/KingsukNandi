import Link from "next/link";

const Navbar = () => {
  const navitems = [
    {
      item: "Home",
      link: "/",
    },
    {
      item: "Experience",
      link: "/experience",
    },
    {
      item: "Projects",
      link: "/projects",
    },
    {
      item: "About Me",
      link: "/about",
    },
    {
      item: "Contact Me",
      link: "/contact",
    },
  ];
  return (
    <nav className="fixed z-30 top-0 left-1/2 -translate-x-1/2 w-fit flex gap-4">
      {navitems.length > 0 &&
        navitems.map((item, index) => {
          return (
            <Link key={index} href={item.link} className="min-w-[200px] text-center">
              {item.item}
            </Link>
          );
        })}
    </nav>
  );
};

export default Navbar;
