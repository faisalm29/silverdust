import { InferGetStaticPropsType, NextPage } from "next";
import {
  allArticles,
  allTweets,
  type Article,
  type Tweet,
} from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import List from "@/components/List";
import { NextSeo } from "next-seo";
import siteConfig from "@/config/site";

const Archives: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
  tweets,
}): JSX.Element => {
  const pageTitle = "Archives";
  const pageDesc = "My past that wasn't here.";

  return (
    <div className="px-4 md:px-8">
      <NextSeo
        title={`${pageTitle} | ${siteConfig.details.title}`}
        description={pageDesc}
      />
      <PageHeader title={pageTitle} subTitle={pageDesc} />

      {/* Articles section */}
      <div>
        <h2 className="mb-8 text-[38px] font-bold">Articles</h2>

        <List isArticles={true} articles={articles} />
      </div>

      {/* Tweets section} */}
      <div>
        <h2 className="mb-8 text-[38px] font-bold">Tweets</h2>

        <div className="mb-20 grid grid-cols-1 grid-rows-[auto] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tweets.map((tweet) => (
            <Card notPost={true} tweet={tweet} key={tweet._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const articles: Article[] = allArticles.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });

  const tweets: Tweet[] = allTweets.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });

  return {
    props: {
      articles,
      tweets,
    },
  };
};

export default Archives;
