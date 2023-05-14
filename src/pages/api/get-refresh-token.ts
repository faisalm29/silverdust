import type { NextApiRequest, NextApiResponse } from "next";

import quersystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const code = process.env.SPOTIFY_CODE;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${basic}`,
    },
    body: quersystring.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri,
    }),
  });

  const data = await response.json();
  res.send(data);
};

export default handler;