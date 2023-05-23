import useSWR from "swr";
import Image from "next/image";
import { Spotify } from "./Icon";

const truncate = (str: string, num: number) => {
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  }
};

const SpotifyWidget = (): JSX.Element => {
  return (
    <div className="flex items-center gap-4">
      <Spotify />
      <div>
        <p>Not Listening</p>
        <p className="font-light">Spotify</p>
      </div>
    </div>
  );
};

export default SpotifyWidget;
