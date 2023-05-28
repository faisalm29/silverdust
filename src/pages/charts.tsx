import useSWR from "swr";
import List from "@/components/List";
import PageHeader from "@/components/PageHeader";
import siteConfig from "@/config/site";
import { NextSeo } from "next-seo";
import Loading from "@/components/Loading";

const fetcher = async (input: RequestInfo) => {
  const res = await fetch(input);

  return res.json();
};

const Charts = (): JSX.Element => {
  const pageTitle = "Charts";
  const pageDesc = "My recent heavy rotation on Spotify. Updated daily.";

  const { data, error } = useSWR("/api/spotify-top-tracks", fetcher);

  if (error) return <div className="text-red-600">Failed to Load.</div>;
  if (!data) return <Loading />;

  return (
    <div className="px-4 md:px-8">
      <NextSeo
        title={`${pageTitle} | ${siteConfig.details.title}`}
        description={pageDesc}
      />
      <PageHeader title={pageTitle} subTitle={pageDesc} />
      <div>
        <List isArticles={false} data={data} />
      </div>
    </div>
  );
};

export default Charts;
