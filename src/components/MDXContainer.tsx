import Link from "next/link";
import { Hashtag } from "./Icon";

const MDXContainer = {
  a: ({ ...props }) => {
    if (props.href.startsWith("#")) {
      return (
        <a
          {...props}
          href={props.href}
          className="inline-block origin-left scale-0 opacity-0 transition-transform duration-75 ease-in-out group-hover:scale-100 group-hover:opacity-100"
        >
          <Hashtag />
        </a>
      );
    }
    return <Link href={props.href} {...props} />;
  },
  h2: ({ ...props }) => {
    return <h2 {...props} data-heading className="group flex items-center justify-between" />;
  },
  h3: ({ ...props }) => {
    return <h3 {...props} data-heading className="group flex items-center justify-between" />;
  },
};

export default MDXContainer;
