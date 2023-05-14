import { NextPage } from "next";
import { NextSeo } from "next-seo";
import siteConfig from "@/config/site";

const Profile: NextPage = (): JSX.Element => {
  return (
    <>
      <NextSeo
        title={`Profile | ${siteConfig.details.title}`}
        description={`${siteConfig.details.author}'s profile`}
      />
      <h1>Profile</h1>
    </>
  );
};

export default Profile;
