import dotenv from "dotenv";
import axios from "axios";

import IVideo from '../Interfaces/IVideo'

dotenv.config({ path: "./.env" });

const MY_KEY = "AIzaSyCWOdrtkYBMb-mZ5ZTXpSZFqJGEAbWcyAw";
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

export const searchVideos = async (query: string) => {
  console.log('testado');
  const response = await axios.get(YOUTUBE_API_URL, {
    params: {
      part: "snippet",
      maxResults: 25,
      q: query,
      type: "video",
      key: MY_KEY,
    },
  });
  return response.data.items?.map((item: IVideo["items"][0]) => ({
    id: item.id.videoId,
    channelId: item.snippet.channelId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.default.url,
    betterThumbnail: item.snippet.thumbnails.high.url,
    description: item.snippet.description,
    channelTitle: item.snippet.channelTitle,
  }));
};
