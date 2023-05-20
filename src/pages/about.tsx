import { NextPage } from "next";
import { NextSeo } from "next-seo";
import siteConfig from "@/config/site";

const About: NextPage = (): JSX.Element => {
  return (
    <div className="px-4 md:px-8">
      <NextSeo
        title={`About | ${siteConfig.details.title}`}
        description={`About ${siteConfig.details.title}`}
      />
      <h1>About</h1>
    </div>
  );
};

export default About;
