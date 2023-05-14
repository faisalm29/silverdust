import { NextPage } from "next";
import { NextSeo } from "next-seo";
import siteConfig from "@/config/site";

const About: NextPage = (): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`About | ${siteConfig.details.title}`}
        description={`About ${siteConfig.details.title}`}
      />
      <h1>About</h1>
    </>
  );
};

export default About;
