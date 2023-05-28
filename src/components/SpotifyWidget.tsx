import React from "react";
import useSWR from "swr";
import Image from "next/image";
import { Spotify } from "./Icon";

const fetcher = async (input: RequestInfo) => {
  const res = await fetch(input);

  return res.json();
};

const truncate = (str: string, num: number) => {
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  }
  return str;
};

const SpotifyWidget = (): JSX.Element => {
  const { data } = useSWR(`/api/spotify-now-playing`, fetcher);
  const title = data?.title;

  return (
    <div className="flex items-center gap-4">
      <Spotify />
      {data?.isPlaying ? (
        <a
          href={data?.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Currently playing on Spotify: ${data?.title} - ${data?.artist}`}
        >
          <p>{truncate(title, 20)}</p>
          <p className="font-light">{data?.artist}</p>
        </a>
      ) : (
        <div>
          <p>Not Listening</p>
          <p className="font-light">Spotify</p>
        </div>
      )}
    </div>
  );
};

export default SpotifyWidget;
