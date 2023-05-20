import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HamburgerMenu, Close } from "./Icon";

const links = [
  { name: "About", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Projects", url: "/projects" },
  { name: "Archives", url: "/archives" },
];

const Navbar = (): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const route = useRouter();

  const showNavHandler = () => {
    setIsNavOpen(true);

    if (typeof window !== "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeNavHandler = () => {
    setIsNavOpen(false);

    document.body.style.overflow = "scroll";
  };

  useEffect(() => {
    setIsNavOpen(false);
    document.body.style.overflow = "unset";
  }, [route.asPath]);

  return (
    <nav className={`sticky top-0 z-20 bg-primary mb-20 `}>
      <div className="mx-auto max-w-[1238px] py-4 px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Silverdust Logo"
              width={30}
              height={30}
            />
          </Link>
          <div className="hidden lg:block">
            {links.map((link) => (
              <Link href={link.url} key={link.name} className="mr-16 last:mr-0">
                {link.name}
              </Link>
            ))}
          </div>
          <button className="block lg:hidden" onClick={showNavHandler}>
            <HamburgerMenu />
          </button>
        </div>
      </div>
      {/* Mobile navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-primary z-50 lg:hidden ${
          isNavOpen ? "fixed" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center py-3 px-4">
          <Link href="/" className="font-bold text-[28px]">
            Silverdust
          </Link>
          <button onClick={closeNavHandler}>
            <Close />
          </button>
        </div>
        <ul className="px-4">
          {links.map((link) => (
            <li key={link.name} className="mb-4 last:mb-0">
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
