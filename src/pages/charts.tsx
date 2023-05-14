import useSWR from "swr";
import List from "@/components/List";
import PageHeader from "@/components/PageHeader";
import siteConfig from "@/config/site";
import { NextSeo } from "next-seo";

const fetcher = async (input: RequestInfo) => {
  const res = await fetch(input);

  return res.json();
};

const Charts = (): JSX.Element => {
  const pageTitle = "Charts";
  const pageDesc = "My recent heavy rotation on Spotify. Updated weekly.";

  const { data } = useSWR("/api/spotify-top-tracks", fetcher);

  return (
    <>
      <NextSeo
        title={`${pageTitle} | ${siteConfig.details.title}`}
        description={pageDesc}
      />
      <PageHeader title={pageTitle} subTitle={pageDesc} />
      <div>
        <List isArticles={false} data={data} />
      </div>
    </>
  );
};

export default Charts;
