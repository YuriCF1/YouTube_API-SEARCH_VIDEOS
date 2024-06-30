import IVideo from '../Interfaces/IVideo.js';
import { searchVideos as search } from '../utils/youtubeAPI.js';

const favorites: IVideo["items"] = [];

export const searchVideos = async (query: string) => {
  return await search(query);
};

export const getFavorites = async () => {
  return favorites;
};

export const addFavorite = async (video: IVideo["items"][0]) => {
  favorites.push(video);
};

export const removeFavorite = async (id: string) => {
  const index = favorites.findIndex(video => video.id.toString() === id);
  if (index > -1) {
    favorites.splice(index, 1);
  }
};
