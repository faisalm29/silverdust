import Link from "next/link";
import SpotifyWidget from "./SpotifyWidget";

const connects = [
  { placeholder: "Twitter", url: "https://twitter.com" },
  { placeholder: "Instagram", url: "https://instagram.com" },
  { placeholder: "LinkedIn", url: "https://linkedin.com" },
  { placeholder: "Github", url: "https://github.com" },
  { placeholder: "Contact", url: "mailto:faisal.muhammad2911@gmail.com" },
];

const navigations = [
  { placeholder: "About", url: "/about" },
  { placeholder: "Blog", url: "/blog" },
  { placeholder: "Projects", url: "/projects" },
  { placeholder: "Archives", url: "/archives" },
];

const others = [
  { placeholder: "Profile", url: "/profile" },
  { placeholder: "Snippets", url: "/snippets" },
  { placeholder: "Charts", url: "/charts" },
];

const year = new Date().getFullYear();

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-secondary pb-12 pt-20 text-primary">
      <div className="mx-auto max-w-[1238px]">
        <div className="mb-[80px] grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <p>
              Created with 🤍 using{" "}
              <a href="https://nextjs.org" target="_blank">
                next
              </a>
              ,{" "}
              <a href="https://contentlayer.dev" target="_blank">
                contentlayer
              </a>
              ,{" "}
              <a href="https://tailwindcss.com" target="_blank">
                tailwind
              </a>
              , and deployed by{" "}
              <a href="https://vercel.com" target="_blank">
                vercel
              </a>
            </p>
          </div>
          <div className="col-span-6 justify-self-center">
            <div className="flex flex-row items-start justify-center gap-[84px]">
              <div>
                <p className="mb-8 font-bold">Connect</p>
                <ul>
                  {connects.map((connect) => (
                    <li key={connect.placeholder} className="mb-4 last:mb-0">
                      <a href={connect.url} target="_blank">
                        {connect.placeholder}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-8 font-bold">Navigation</p>
                <ul>
                  {navigations.map((navigation) => (
                    <li key={navigation.placeholder} className="mb-4 last:mb-0">
                      <Link href={navigation.url}>
                        {navigation.placeholder}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-8 font-bold">Others</p>
                <ul>
                  {others.map((other) => (
                    <li key={other.placeholder} className="mb-4 last:mb-0">
                      <Link href={other.url}>{other.placeholder}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <SpotifyWidget />
        </div>
        <p className="text-center">
          &copy; {`Silverdust ${year}. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
