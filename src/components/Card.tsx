import Link from "next/link";
import { Post, Project, Tweet, Snippet } from "contentlayer/generated";
import Image from "next/legacy/image";
import { ArrowOutward, Github, Twitter } from "./Icon";
import { format, parseISO } from "date-fns";

type CardProps = {
  notPost: boolean;
  post?: Post;
  project?: Project;
  tweet?: Tweet;
  snippet?: Snippet;
  isHome?: boolean;
};

const Card = ({
  notPost,
  post,
  project,
  tweet,
  snippet,
  isHome,
}: CardProps): JSX.Element => {
  if (project) {
    return (
      <div className="border border-secondary p-8">
        <h2 className="mb-4 text-[38px] font-bold">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        <ul className="mb-8 flex gap-4">
          {project.tags.map((tag: any) => (
            <li key={tag}>{`#${tag}`}</li>
          ))}
        </ul>
        <div className="flex items-center gap-8">
          <a
            href={project.demoUrl}
            target="_blank"
            className="flex items-center gap-1"
          >
            Live Demo <ArrowOutward width={24} height={24} />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            className="flex items-center gap-1"
          >
            Source Code <Github width={24} height={24} />
          </a>
        </div>
      </div>
    );
  }

  if (tweet) {
    return (
      <a
        href={tweet.url}
        target="_blank"
        className="border border-secondary p-8"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <Image
                src={tweet.profilePicture}
                width={35}
                height={35}
                layout="fixed"
                objectFit="cover"
                alt={`${tweet.name} profile picture`}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-bold">{tweet.name}</p>
              <p className="font-light">{tweet.userName}</p>
            </div>
          </div>
          <Twitter />
        </div>
        <p className="mb-4">{tweet.tweet}</p>
        <div className="font-light">
          <time>{format(parseISO(tweet.publishedAt), "LLL d, yyyy")}</time>
        </div>
      </a>
    );
  }

  if (snippet) {
    return (
      <div className="border border-secondary p-8">
        <Link href={`/snippets/${snippet.slug}`}>
          <h2 className="mb-4 text-[38px] font-bold">{snippet.title}</h2>
          <p className="mb-4">{snippet.description}</p>
          <ul className="flex items-center gap-4">
            {snippet.tags.map((tag) => (
              <li key={tag} className="bg-secondary px-4 py-[6px] text-primary">
                {tag}
              </li>
            ))}
          </ul>
        </Link>
      </div>
    );
  }

  return (
    <>
      {!notPost && (
        <div>
          <Link href={`/blog/${post?.slug}`}>
            <div>
              <Image
                src={post?.thumbnail.imageDir}
                width={2024}
                height={1012}
                layout="responsive"
                objectFit="cover"
                alt={post?.title}
              />
            </div>
            <div>
              {isHome ? (
                <h3 className="text-[38px] font-bold">{post?.title}</h3>
              ) : (
                <h2 className="text-[38px] font-bold">{post?.title}</h2>
              )}
              <p>{post?.description}</p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Card;
