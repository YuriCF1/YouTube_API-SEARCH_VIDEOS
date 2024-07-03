import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { searchVideos } from "../src/utils/youtubeAPI";
import dotenv from "dotenv";
import { describe, expect, afterEach, it } from '@jest/globals';

dotenv.config({ path: "./.env" });

const mock = new MockAdapter(axios);

describe("searchVideos", () => {
  afterEach(() => {
    mock.reset();
  });

  it("should fetch and format video data", async () => {
    const query = "gatos";
    const mockResponse = {
      items: [
        {
          id: { videoId: "testVideoId1" },
          snippet: {
            channelId: "testChannelId1",
            title: "Test Video Title 1",
            thumbnails: {
              default: { url: "testThumbnailUrl1" },
              high: { url: "testBetterThumbnailUrl1" },
            },
            description: "Test Description 1",
            channelTitle: "Test Channel Title 1",
          },
        },
      ],
    };

    mock.onGet("https://www.googleapis.com/youtube/v3/search").reply(200, mockResponse);

    const result = await searchVideos(query);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(mockResponse.items.length);

    // Verificando a estrutura dos vídeos. Já que os resultados dependem da trending do youtube.
    result.forEach((video: any) => {
      expect(video).toHaveProperty("id");
      expect(video).toHaveProperty("channelId");
      expect(video).toHaveProperty("title");
      expect(video).toHaveProperty("thumbnail");
      expect(video).toHaveProperty("betterThumbnail");
      expect(video).toHaveProperty("description");
      expect(video).toHaveProperty("channelTitle");
    });
  });
});
