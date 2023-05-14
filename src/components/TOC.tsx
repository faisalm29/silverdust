import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";

const TOC = (): JSX.Element => {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
  const router = useRouter();
  const [hash, setHash] = useState(router.asPath.split("#")[1] || "");

  useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll("[data-heading]")
    );
    setHeadings(headingElements);
    return () => {
      setHeadings([]);
    };
  }, []);

  const getLevel = useMemo(() => {
    return (nodename: string) => {
      return Number(nodename.replace("H", ""));
    };
  }, []);

  const mapHeadings = () => {
    return headings.map((heading) => {
      return (
        <Link
          href={`#${heading.id}`}
          key={heading.id}
          passHref
          className={cn("relative mb-2", {
            "pl-8": getLevel(heading.nodeName) === 3,
          })}
        >
          {heading.innerText}
        </Link>
      );
    });
  };

  return (
    <aside>
      <nav>
        <h2 className="mb-4">Table of Contents</h2>
        <div className="flex flex-col">{mapHeadings()}</div>
      </nav>
    </aside>
  );
};

export default TOC;
