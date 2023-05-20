import { InferGetStaticPropsType, NextPage } from "next/types";
import { allSnippets, Snippet } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import MDXContainer from "@/components/MDXContainer";
import siteConfig from "@/config/site";

type SnippetPageProps = {
  snippet: Snippet;
};

const SnippetPage: NextPage<InferGetStaticPropsType<typeof getStaticPaths>> = ({
  snippet,
}: SnippetPageProps): JSX.Element => {
  const Component = useMDXComponent(snippet.body.code);

  return (
    <div className="px-4 md:px-8">
      <NextSeo
        title={`${snippet.title} | ${siteConfig.details.title}`}
        description={snippet.description}
      />

      <div className="prose mx-auto mb-20">
        <h1 className="mb-4 text-[51px] font-bold">{snippet.title}</h1>
        <p className="mb-20">{snippet.description}</p>
        <Component components={MDXContainer} />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allSnippets.map((snippet: Snippet) => ({
      params: {
        slug: snippet.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const snippet = allSnippets.find(
    (_snippet: Snippet) => _snippet.slug === (params?.slug as string)
  );

  if (!snippet) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      snippet,
    },
  };
};

export default SnippetPage;
