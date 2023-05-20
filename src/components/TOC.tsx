import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Close } from "./Icon";
import Link from "next/link";
import cn from "classnames";

type TOCProps = {
  isTOCOPen: boolean;
  setIsTOCOpen: (isOpen: boolean) => void;
};

const TOC = ({ isTOCOPen, setIsTOCOpen }: TOCProps): JSX.Element => {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);
  const router = useRouter();
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });
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
    <>
      {/* Desktop Table of Contents */}
      {!isTabletOrMobile && (
        <aside className="sticky top-14 col-start-9 col-end-13 self-start pt-14 lg:block">
          <nav>
            <h2 className="mb-8">Table of Contents</h2>
            <div className="flex flex-col">{mapHeadings()}</div>
          </nav>
        </aside>
      )}

      {/* Mobile Table of Contents */}
      <aside
        className={`fixed top-0 left-0 bg-primary w-full h-full z-30 py-3 px-4 lg:hidden ${
          isTOCOPen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-[28px] font-bold mb-4">Table of Contents</h2>
            <nav className="">
              <div className="flex flex-col">{mapHeadings()}</div>
            </nav>
          </div>
          <div className="self-end">
            <button onClick={() => setIsTOCOpen(false)}>
              <Close />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default TOC;
