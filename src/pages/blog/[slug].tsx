import { InferGetStaticPropsType, NextPage } from "next/types";
import { allPosts, Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/legacy/image";
import MDXContainer from "@/components/MDXContainer";
import TOC from "@/components/TOC";
import { NextSeo } from "next-seo";
import siteConfig from "@/config/site";

type PostPageProps = {
  post: Post;
};

const PostPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}: PostPageProps): JSX.Element => {
  const Component = useMDXComponent(post.body.code);

  return (
    <>
      <NextSeo
        title={`${post.title} | ${siteConfig.details.title}`}
        description={post.description}
        openGraph={{
          url: siteConfig.details.url,
          title: post.title,
          description: post.description,
          images: [
            {
              url: `${siteConfig.details.url}/images/blog/${post.slug}/thumbnail.jpg`,
              width: 1200,
              height: 675,
              alt: post.title,
            },
          ],
          siteName: siteConfig.details.title,
          type: "article",
          locale: "id_ID",
        }}
      />
      {/* Article section */}
      <article className="mb-20">
        {/* Title */}
        <div className="mb-20">
          <h1 className=" text-[51px] font-bold">{post.title}</h1>
          <ul className="flex items-center gap-8">
            <li>
              <time>{format(parseISO(post.publishedAt), "LLL d, yyyy")}</time>
            </li>
            <li>{post.readingTime.text}</li>
            <li>100 views</li>
          </ul>
        </div>

        {/* Thumbnail */}
        <figure className="mb-20">
          <Image
            src={post.thumbnail.imageDir}
            width={2024}
            height={1012}
            layout="responsive"
            objectFit="cover"
            alt={`${post.title}'s thumbnail`}
          />
          <figcaption className="mt-2 text-center">
            Foto oleh{" "}
            <a href={post.thumbnail.sourceUrl} className="underline">
              {post.thumbnail.author}
            </a>{" "}
            dari {post.thumbnail.from}
          </figcaption>
        </figure>

        {/* Body text */}
        <div className="relative grid grid-cols-12 grid-rows-[auto] px-24">
          <div className="prose col-span-7 max-w-none">
            <Component components={MDXContainer} />
          </div>

          {/* Table of Contents */}
          <div className="sticky top-20 col-start-9 col-end-13 self-start">
            <TOC />
          </div>
        </div>
      </article>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((post: Post) => ({
      params: {
        slug: post.slug,
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
  const post = allPosts.find(
    (_post: Post) => _post.slug === (params?.slug as string)
  );

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
