import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "About", url: "/about" },
  { name: "Blog", url: "/blog" },
  { name: "Projects", url: "/projects" },
  { name: "Archives", url: "/archives" },
];

const Navbar = (): JSX.Element => {
  return (
    <nav className="mb-20 mt-4">
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
          <div>
            {links.map((link) => (
              <Link href={link.url} key={link.name} className="mr-16 last:mr-0">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
