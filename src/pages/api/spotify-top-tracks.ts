import { getTopTracks } from "lib/spotify";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
    imageUrl: track.album.images[1].url,
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=3600"
  );

  return res.status(200).json({ tracks });
};

export default handler;
