import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeCodeTittles from "rehype-code-titles";
import remarkGfm from "remark-gfm";
import { Pluggable } from "unified";

const prettyCodeOptions = {
  theme: "ultimate-light",

  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ["word"];
  },
};

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    rehypeCodeTittles,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "append",
      },
    ],
    [rehypePrettyCode, prettyCodeOptions],
  ] as Pluggable[],
};

export default mdxOptions;
