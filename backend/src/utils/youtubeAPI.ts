import dotenv from "dotenv";
import axios from "axios";

import IVideo from '../Interfaces/IVideo'

dotenv.config({ path: "./.env" });

const MY_KEY = process.env.MY_KEY;
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

export const searchVideos = async (query: string) => {
  // const response = await axios.get(YOUTUBE_API_URL, {
  //   params: {
  //     part: "snippet",
  //     maxResults: 25,
  //     q: query,
  //     type: "video",
  //     key: MY_KEY,
  //   },
  // });
  // return response.data.items.map((item: IVideo["items"][0]) => ({
  //   id: item.id.videoId,
  //   channelId: item.snippet.channelId,
  //   title: item.snippet.title,
  //   thumbnail: item.snippet.thumbnails.default.url,
  //   betterThumbnail: item.snippet.thumbnails.high.url,
  //   description: item.snippet.description,
  //   channelTitle: item.snippet.channelTitle,
  // }));

  // /*
  return [
    {
      "id": "Hy7pbofsyU4",
      "channelId": "UCeYue9Nbodzg3T1Nt88E3fg",
      "title": "Michael &amp; Mason Ho Surf FUN Ala Moana Bowl",
      "thumbnail": "https://i.ytimg.com/vi/Hy7pbofsyU4/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/Hy7pbofsyU4/hqdefault.jpg",
      "description": "Father and son. Michael and Mason Ho go for a surf at a place where Uncle Mike's been taking Mason surfing since he was a kid.",
      "channelTitle": "Ho & Pringle Productions"
    },
    {
      "id": "ma67yOdMQfs",
      "channelId": "UC--3c8RqSfAqYBdDjIG3UNA",
      "title": "These Were The All-Time Surfing Moments Of The Year | Best Of 2020",
      "thumbnail": "https://i.ytimg.com/vi/ma67yOdMQfs/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/ma67yOdMQfs/hqdefault.jpg",
      "description": "Well, that was a weird ride. Though it hasn't been easy, at least when we fixed our gaze on the ocean — or favorite place in the ...",
      "channelTitle": "Red Bull Surfing"
    },
    {
      "id": "ydtNXaCt76c",
      "channelId": "UC3DIR1s_jw1wr4p4wWg7JGQ",
      "title": "Heaven to Ride, Hell to Get Out (Raw Surfing)",
      "thumbnail": "https://i.ytimg.com/vi/ydtNXaCt76c/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/ydtNXaCt76c/hqdefault.jpg",
      "description": "Anyone who has surfed this point a few times has paid the toll and damanged a board, fin or leg in getting out or in at this amazing ...",
      "channelTitle": "Raw Surfing"
    },
    {
      "id": "OdIwg1E6KBQ",
      "channelId": "UChuLeaTGRcfzo0UjL-2qSbQ",
      "title": "John John Florence vs Yago Dora | Vivo Rio Pro Presented By Corona 2024 - Quarterfinals",
      "thumbnail": "https://i.ytimg.com/vi/OdIwg1E6KBQ/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/OdIwg1E6KBQ/hqdefault.jpg",
      "description": "Shop The Vivo Rio Pro Presented By Corona Merchandise - https://www.wslstore.com/collections/... As the biggest celebration of ...",
      "channelTitle": "World Surf League"
    },
    {
      "id": "eX2QG9ZBC4k",
      "channelId": "UChuLeaTGRcfzo0UjL-2qSbQ",
      "title": "Ballito Open presented by Flojos QS 1,000 Day 1",
      "thumbnail": "https://i.ytimg.com/vi/eX2QG9ZBC4k/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/eX2QG9ZBC4k/hqdefault.jpg",
      "description": "Watch the first day of competition at the Ballito Open presented by Flojos QS 1000 in Ballito, South Africa. #WSL Subscribe to the ...",
      "channelTitle": "World Surf League"
    },
    {
      "id": "1c-4NxXvH-g",
      "channelId": "UCjIuqG1hCxUdLLxOD_uR0vQ",
      "title": "Pro Surfer Goes Down Hard! #pipeline  #surfing",
      "thumbnail": "https://i.ytimg.com/vi/1c-4NxXvH-g/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/1c-4NxXvH-g/hqdefault.jpg",
      "description": "Pro surfer Joao Chianca from Brazil wipes out at Backdoor while surfing in Hawaii. Glad to report he is in stable condition.",
      "channelTitle": "Surfers of Hawaii"
    },
    {
      "id": "EiZ_gb__AYU",
      "channelId": "UCQ5kqUO7Pkc7YWRNnjetfbw",
      "title": "Small trench Connects River to Ocean! #shorts #asmr #oddlysatisfying #waves #weird #surfing",
      "thumbnail": "https://i.ytimg.com/vi/EiZ_gb__AYU/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/EiZ_gb__AYU/hqdefault.jpg",
      "description": "",
      "channelTitle": "Skid Kids"
    },
    {
      "id": "9xfkIIv1CsQ",
      "channelId": "UCOtHosOqPe9d6vLy-8LfHzQ",
      "title": "Derrick Disney Surfing in Barra De La Cruz, Mexico | Twinzer Fish",
      "thumbnail": "https://i.ytimg.com/vi/9xfkIIv1CsQ/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/9xfkIIv1CsQ/hqdefault.jpg",
      "description": "A short surf video featuring Surfer/Shaper Derrick Disney surfing on his self-shaped Twinzer Fish surfboard. Exclusively on ...",
      "channelTitle": "NobodySurf : Surfing Videos"
    },
    {
      "id": "-vBUxmWeoc0",
      "channelId": "UCINb0wqPz-A0dV9nARjJlOQ",
      "title": "This Hawaiian Cat Loves Surfing With His Parents | The Dodo",
      "thumbnail": "https://i.ytimg.com/vi/-vBUxmWeoc0/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/-vBUxmWeoc0/hqdefault.jpg",
      "description": "In Honolulu, Hawaii, Hokule'a is one special cat. He loves surfing and swimming with his human parents! You can keep up with ...",
      "channelTitle": "The Dodo"
    },
    {
      "id": "1QKtt6CTf_I",
      "channelId": "UCVo06dBGK9VBBhq15wJxZHQ",
      "title": "🔵4k (ASMR) 10 Hour Store Loop - Tahiti Surfing - With Relaxing Music☑️",
      "thumbnail": "https://i.ytimg.com/vi/1QKtt6CTf_I/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/1QKtt6CTf_I/hqdefault.jpg",
      "description": "Filmed by Boris Martinet: https://www.instagram.com/bogus689 Waves of the World Filmers: Chris Kincade: ...",
      "channelTitle": "Waves of the World"
    },
    {
      "id": "OoMakLSGMYQ",
      "channelId": "UChuLeaTGRcfzo0UjL-2qSbQ",
      "title": "WATCH LIVE - Vivo Rio Pro Presented By Corona 2024 - FINALS DAY",
      "thumbnail": "https://i.ytimg.com/vi/OoMakLSGMYQ/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/OoMakLSGMYQ/hqdefault.jpg",
      "description": "Shop The Vivo Rio Pro Presented By Corona Merchandise ...",
      "channelTitle": "World Surf League"
    },
    {
      "id": "bgmk7uVkgZA",
      "channelId": "UCSPWnWuVALjpQ0s2RL46Wzw",
      "title": "does this shark repellent work surfing?",
      "thumbnail": "https://i.ytimg.com/vi/bgmk7uVkgZA/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/bgmk7uVkgZA/hqdefault.jpg",
      "description": "",
      "channelTitle": "jade darmawangsa"
    },
    {
      "id": "lEsJ7A_lLU8",
      "channelId": "UC0GbKJaeEN9k5CG1NLbN6Ow",
      "title": "This Is Why You Don’t Surf After It Rains 🤢 #gross",
      "thumbnail": "https://i.ytimg.com/vi/lEsJ7A_lLU8/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/lEsJ7A_lLU8/hqdefault.jpg",
      "description": "",
      "channelTitle": "IdkSterling"
    },
    {
      "id": "YyHbJUWOcYA",
      "channelId": "UCsXYYt9hmwvaIl6v73JHKWw",
      "title": "Surfers attempting to ride crazy waves",
      "thumbnail": "https://i.ytimg.com/vi/YyHbJUWOcYA/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/YyHbJUWOcYA/hqdefault.jpg",
      "description": "Waves can do some crazy things and most of the time surfers aren't expecting it. This is what happens. Thanks for watching.",
      "channelTitle": "Brad Jacobson"
    },
    {
      "id": "5FUEm-23wdQ",
      "channelId": "UCoicMEw3njXscfwHlaAJVcQ",
      "title": "SURFING AT BONDI BEACH! FULL POV EXPERIENCE (SURF VLOG)",
      "thumbnail": "https://i.ytimg.com/vi/5FUEm-23wdQ/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/5FUEm-23wdQ/hqdefault.jpg",
      "description": "I finally surfed Bondi Beach! Join me on a day trip to Bondi and get the Full POV Experience TIMESTAMPS 00:00 Intro 00:30 ...",
      "channelTitle": "Surfing With Noz"
    },
    {
      "id": "JI9F0y4V-38",
      "channelId": "UCblfuW_4rakIf2h6aqANefA",
      "title": "Why Brazilians Dominate the World of Surfing? | Red Bull Surfing",
      "thumbnail": "https://i.ytimg.com/vi/JI9F0y4V-38/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/JI9F0y4V-38/hqdefault.jpg",
      "description": "Brazil isn't a country known for its big waves and yet, over the past decade, Brazilians have been dominating the world of surfing.",
      "channelTitle": "Red Bull"
    },
    {
      "id": "QB8GMebrFXg",
      "channelId": "UCJBWZDkunrjWh50Etxdys2g",
      "title": "Big wave surfers in Southern California #shorts",
      "thumbnail": "https://i.ytimg.com/vi/QB8GMebrFXg/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/QB8GMebrFXg/hqdefault.jpg",
      "description": "",
      "channelTitle": "SoCal Surfer"
    },
    {
      "id": "xtHZKToMvus",
      "channelId": "UCTYHNSWYy4jCSCj1Q1Fq0ew",
      "title": "Interlusion | A Billabong Surf Film Shot in the Mentawai Islands",
      "thumbnail": "https://i.ytimg.com/vi/xtHZKToMvus/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/xtHZKToMvus/hqdefault.jpg",
      "description": "Welcome to the Interlusion. What happens when the best surf trip of former world champ Joel Parkinson's life happens years after ...",
      "channelTitle": "Billabong"
    },
    {
      "id": "PsmBu5QTcBw",
      "channelId": "UCSFXQe6VKehRZOLDa0rBz_g",
      "title": "IMPOSSIBLE FOILING !",
      "thumbnail": "https://i.ytimg.com/vi/PsmBu5QTcBw/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/PsmBu5QTcBw/hqdefault.jpg",
      "description": "Aujourd'hui j'ai testé quelque chose d'impossible Today I tried something impossible @virgile676 @gong.galaxy ...",
      "channelTitle": "Benjamin Friant"
    },
    {
      "id": "5qsHU88dwuI",
      "channelId": "UCc-oOp182_mo5TicquwUVoA",
      "title": "Surfing with his son on his back!❤️😲",
      "thumbnail": "https://i.ytimg.com/vi/5qsHU88dwuI/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/5qsHU88dwuI/hqdefault.jpg",
      "description": "shorts Surfing with his child on his back!❤️   (clip via; billykemper on instagram) - : To submit your own content, please reach ...",
      "channelTitle": "Wiry"
    },
    {
      "id": "gWZ8PwO0CkQ",
      "channelId": "UCiiFGfvlKvX3uzMovO3unaw",
      "title": "BIG WAVE SURFING COMPILATION 2024 * TOUR OF DUTY *",
      "thumbnail": "https://i.ytimg.com/vi/gWZ8PwO0CkQ/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/gWZ8PwO0CkQ/hqdefault.jpg",
      "description": "BIG WAVE SURFING COMPILATION 2024 ** TOUR OF DUTY ** ** WORLD RECORD MONSTERS 60-100ft OF PURE FEAR ...",
      "channelTitle": "Absolutely Flawless"
    },
    {
      "id": "T9NAhUoKC54",
      "channelId": "UCLdPicN16eAKPKir8EY1UXQ",
      "title": "INSANELY SHALLOW GLASSY WAVES - POV SURF CLIP | Indonesian Reef",
      "thumbnail": "https://i.ytimg.com/vi/T9NAhUoKC54/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/T9NAhUoKC54/hqdefault.jpg",
      "description": "I'm in Indonesia on a film trip / surf retreat trip. The amount of unexplored waves here on this remote island is incredible! Naturally ...",
      "channelTitle": "Kale Brock"
    },
    {
      "id": "STygciSWUT0",
      "channelId": "UCqt4BRFOqI3z6Sjw6W6gtMQ",
      "title": "Justine Dupont&#39;s game-changing mega-ride at Nazaré",
      "thumbnail": "https://i.ytimg.com/vi/STygciSWUT0/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/STygciSWUT0/hqdefault.jpg",
      "description": "Shop 100 Foot Wave Gear at the store. https://bigwavemerch.myshopify.com Justine Dupont on the bomb that shattered big wave ...",
      "channelTitle": "BIG WAVE CENTRAL"
    },
    {
      "id": "zZqxPozl2Ec",
      "channelId": "UCEUYW6zm6KnUxPcwY1D8HsQ",
      "title": "Surfing Massive Waves Waimea Bay (Jan 22, 2023)  4K",
      "thumbnail": "https://i.ytimg.com/vi/zZqxPozl2Ec/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/zZqxPozl2Ec/hqdefault.jpg",
      "description": "What occurred on January 22, 2023, at Waimea Bay on the North Shore of Oahu is nothing short of historical. We're simply doing ...",
      "channelTitle": "Eimy’s Hawaii Happy life 🏄🏻"
    },
    {
      "id": "OP4Mmhtl7Jk",
      "channelId": "UCyf9zyfKmM4SIQqSnDCGE5g",
      "title": "RUSH WAVE ，Little sister taught you  surf #rushwave  #Surfing #surfboard #electricsurfboard",
      "thumbnail": "https://i.ytimg.com/vi/OP4Mmhtl7Jk/default.jpg",
      "betterThumbnail": "https://i.ytimg.com/vi/OP4Mmhtl7Jk/hqdefault.jpg",
      "description": "whatsapp：+86 18892693143 official website：rush-wave.com WeChat: KHJ3345 ...",
      "channelTitle": "RUSH WAVE"
    }
  ]

  // */
};
