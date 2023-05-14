import siteConfig from "@/config/site";
import Layout from "@/components/Layout";

import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextSeo
        title={siteConfig.details.title}
        description={siteConfig.details.description}
        twitter={{
          handle: siteConfig.socialLinks.twitter,
          site: siteConfig.socialLinks.twitter,
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: siteConfig.details.url,
          title: siteConfig.details.title,
          description: siteConfig.details.description,
          images: [
            {
              url: `https://www.silverdust.vercel.app${siteConfig.assets.image}`,
              width: 1012,
              height: 506,
              alt: siteConfig.details.title,
              type: "image/png",
            },
          ],
          siteName: siteConfig.details.title,
          type: "website",
          locale: "id_ID",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
