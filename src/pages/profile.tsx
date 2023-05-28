import { NextPage } from "next";
import { NextSeo } from "next-seo";
import PageHeader from "@/components/PageHeader";
import Image from "next/legacy/image";
import siteConfig from "@/config/site";

const Profile: NextPage = (): JSX.Element => {
  const pageTitle = "Profile";
  const pageDesc = `${siteConfig.details.author}'s profile`;

  return (
    <div className="px-4 mb-20 md:px-8">
      <NextSeo
        title={`${pageTitle} | ${siteConfig.details.title}`}
        description={pageDesc}
      />
      <PageHeader title={pageTitle} />
      <div className="grid grid-cols-1 grid-rows-2 gap-8 md:gap-6 md:grid-cols-12 md:grid-rows-1">
        <div className="prose max-w-none md:col-span-6">
          <p>Hello, Faisal here!</p>
          <p>
            I&apos;m a content writer who currently learning web development. I
            love writing and coding so much.
          </p>
          <p>
            Besides writing, I&apos;m currently learning UI/UX design,
            JavaScript, React, and Next. I&apos;m also currently working as a
            freelance content writer at some foundation in Bandung.
          </p>
          <p>
            I grew up in Cirebon, a coastal city on the border between West and
            Central Java and come from a communications background.
          </p>
          <p>
            In the future, I will continue to learn new things. Rust and Ruby
            seem interesting. Can&apos;t wait to learn it. But, let&apos;s see!
          </p>
        </div>
        <div className="row-start-1 row-end-2 md:col-start-7 md:col-end-13 w-full h-auto relative">
          <Image
            src="/portrait.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Faisal's portrait."
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
