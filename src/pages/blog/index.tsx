import { InferGetStaticPropsType, NextPage } from "next";
import { allPosts, type Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Card from "@/components/Card";
import PageHeader from "@/components/PageHeader";
import { NextSeo } from "next-seo";
import siteConfig from "@/config/site";

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}): JSX.Element => {
  const pageTitle = "Blog";
  const pageDesc = "A safe place for words.";

  return (
    <>
      <NextSeo
        title={`${pageTitle} | ${siteConfig.details.title}`}
        description={pageDesc}
      />
      <PageHeader title={pageTitle} subTitle={pageDesc} />
      <div className="mb-20 grid grid-cols-1 grid-rows-[auto] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card notPost={false} post={post} key={post._id} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
