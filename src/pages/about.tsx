import { NextPage } from "next";
import { NextSeo } from "next-seo";
import PageHeader from "@/components/PageHeader";
import Image from "next/legacy/image";
import siteConfig from "@/config/site";

const About: NextPage = (): JSX.Element => {
  const pageTitle = "About";
  const pageDesc = `About ${siteConfig.details.title}`;

  return (
    <div className="px-4 mb-20 md:px-8">
      <NextSeo
        title={`${pageTitle} | ${siteConfig.details.title}`}
        description={pageDesc}
      />
      <PageHeader title={pageTitle} />
      <div className="grid grid-cols-1 grid-rows-2 gap-8 md:gap-6 md:grid-cols-12 md:grid-rows-1">
        <div className="prose max-w-none md:col-span-6">
          <p>
            Silverdust is my long-running project. There is two purpose of it.
            First, as my personal portfolio, both as a content writer and a
            self-taught web developer. Second, as a blog where I can write
            anything, not limited to web development - which is what I&apos;m
            learning right now - or something similar to it.
          </p>
          <p>
            Silverdust is taken from the name of a plant with the same name.
            With this name, I want whatever I make even if it&apos;s small -
            like dust - still attracts the attention of many people because
            it&apos;s silver in color - something that glitters will definitely
            catch people&apos;s attention. Hopefully what I do has a positive
            impact on myself and others.
          </p>
        </div>
        <div className="row-start-1 row-end-2 md:col-start-7 md:col-end-13 w-full h-auto relative">
          <Image
            src="/plant.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center 25%"
            alt="Silverdust plant photo."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
