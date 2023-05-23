import { InferGetStaticPropsType, NextPage } from "next";
import { allProjects, type Project } from "contentlayer/generated";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import { NextSeo } from "next-seo";
import siteConfig from "@/config/site";

const Projects: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  projects,
}): JSX.Element => {
  const pageTitle = "Projects";
  const pageDesc = "What I did passionately.";

  return (
    <div className="px-4 md:px-8">
      <NextSeo
        title={`${pageTitle} | ${siteConfig.details.title}`}
        description={pageDesc}
      />
      <PageHeader title={pageTitle} subTitle={pageDesc} />
      <div className="mb-20 grid grid-cols-1 grid-rows-[auto] gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card notPost={true} project={project} key={project._id} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const projects: Project[] = allProjects.sort((a, b) => {
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
      projects,
    },
  };
};

export default Projects;
