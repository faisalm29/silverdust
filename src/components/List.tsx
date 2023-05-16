import { Article, Project } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { ArrowOutward, Github } from "./Icon";
import Image from "next/legacy/image";

type Track = {
  artist: string;
  imageUrl: string;
  songUrl: string;
  title: string;
};

type Tracks = {
  tracks: Track[];
};

type ListProps = {
  isArticles: boolean;
  articles?: Article[];
  projects?: Project[];
  data?: Tracks;
};

const List = ({
  isArticles,
  articles,
  projects,
  data,
}: ListProps): JSX.Element => {
  if (projects) {
    return (
      <div>
        {projects.map((project) => (
          <div key={project._id} className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[38px] font-bold">{project.title}</h3>
              <div className="flex items-center gap-4">
                <a href={project.repoUrl} target="_blank">
                  <Github width={24} height={24} />
                </a>
                <a href={project.demoUrl} target="_blank">
                  <ArrowOutward width={30} height={30} />
                </a>
              </div>
            </div>
            <p className="mb-4">{project.description}</p>
            <ul className="flex items-center gap-4">
              {project.tags.map((tag) => (
                <li key={tag}>{`#${tag}`}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  if (data) {
    return (
      <ol>
        {data?.tracks.map((track: any, id: number) => (
          <li key={track.songUrl} className="mb-8 border-b pb-4 last:mb-20">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <p>{id + 1}</p>
                <div>
                  <a
                    href={track.songUrl}
                    target="_blank"
                    className="mb-4 inline-flex"
                  >
                    {track.title}
                  </a>
                  <p>{track.artist}</p>
                </div>
              </div>
              <Image
                src={track.imageUrl}
                width={65}
                height={65}
                layout="fixed"
                objectFit="cover"
                alt={`${track.title} album cover`}
              />
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <>
      {isArticles && (
        <div>
          {articles?.map((article) => (
            <a href={article.url} key={article._id} target="_blank">
              <h3 className="mb-2 font-bold">{article.title}</h3>
              <p className="mb-2">{article.publishedOn}</p>
              <div className="mb-8">
                <time className="font-light">
                  {format(parseISO(article.publishedAt), "LLL d, yyyy")}
                </time>
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default List;
