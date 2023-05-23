import {
  allPosts,
  allProjects,
  allArticles,
  type Post,
  type Project,
  type Article,
} from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { id } from "date-fns/locale";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { Github, ArrowOutward } from "@/components/Icon";
import List from "@/components/List";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
  projects,
  articles,
}): JSX.Element => {
  return (
    <>
      <div className="px-4 md:px-8">
        {/* posts section */}
        <PageHeader
          title="Silverdust"
          subTitle="This might be just dust, but it's silver. Who can resist something shiny?"
          isHero={true}
        />
        <PageHeader
          title="Posts"
          subTitle="A safe place for words."
          isHome={true}
        />
        <div className="mb-20 grid grid-cols-1 grid-rows-[auto] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card notPost={false} post={post} key={post._id} />
          ))}
        </div>

        <div className="mb-20 grid grid-cols-1 grid-rows-[auto] gap-20 lg:gap-6 lg:grid-cols-12">
          {/* Featured Project Section */}
          <div className="col-span-1 lg:col-span-7">
            <div>
              <h2 className="mb-4 text-[51px] font-bold">Featured Projects</h2>
              <p className="mb-8 text-[38px]">What I did passionately.</p>
            </div>
            <List isArticles={false} projects={projects} />
          </div>

          {/* Featured Archives Section */}
          <div className="col-span-1 lg:col-start-9 lg:col-end-13">
            <div>
              <h2 className="mb-4 text-[38px] font-bold">Featured Archives</h2>
              <p className="mb-8 text-[28px]">
                My past that wasn`&apos;t here.
              </p>
            </div>
            <List isArticles={true} articles={articles} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const posts: Post[] = allPosts.slice(0, 3).sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });

  const projects: Project[] = allProjects.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  const articles: Article[] = allArticles.slice(0, 3).sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
  });

  return {
    props: {
      posts,
      projects,
      articles,
    },
  };
};

export default Home;
