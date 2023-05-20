import { InferGetStaticPropsType, NextPage } from "next";
import { allSnippets, type Snippet } from "contentlayer/generated";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { NextSeo } from "next-seo";
import siteConfig from "@/config/site";

const Snippets: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  snippets,
}): JSX.Element => {
  const pageTitle = "Snippets";
  const pageDesc = "Coders' panacea.";

  return (
    <div className="px-4 md:px-8">
      <NextSeo
        title={`${pageTitle} | ${siteConfig.details.title}`}
        description={pageDesc}
      />
      <PageHeader title={pageTitle} subTitle={pageDesc} />
      <div className="mb-20 grid grid-cols-1 grid-rows-[auto] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {snippets.map((snippet) => (
          <Card notPost={true} snippet={snippet} key={snippet._id} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const snippets: Snippet[] = allSnippets.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  return {
    props: {
      snippets,
    },
  };
};

export default Snippets;
