import { NextPage } from "next";
import { NextSeo } from "next-seo";
import siteConfig from "@/config/site";

const Profile: NextPage = (): JSX.Element => {
  return (
    <div className="px-4 md:px-8">
      <NextSeo
        title={`Profile | ${siteConfig.details.title}`}
        description={`${siteConfig.details.author}'s profile`}
      />
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
