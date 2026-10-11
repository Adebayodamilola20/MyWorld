import maryamPortrait from "@/assets/maryam/maryam-portrait.jpg";
import maryamSeated from "@/assets/maryam/maryam-seated.jpg";
import maryamSmile from "@/assets/maryam/maryam-smile.jpg";
import maryamVideo01 from "@/assets/maryam/maryam-video-01.mp4";
import maryamVideo02 from "@/assets/maryam/maryam-video-02.mp4";
import maryamVideo03 from "@/assets/maryam/maryam-video-03.mp4";
import maryamVideo04 from "@/assets/maryam/maryam-video-04.mp4";
import maryamVideo05 from "@/assets/maryam/maryam-video-05.mp4";
import maryamVideo06 from "@/assets/maryam/maryam-video-06.mp4";
import maryamVideo07 from "@/assets/maryam/maryam-video-07.mp4";
import maryamVideo08 from "@/assets/maryam/maryam-video-08.mp4";
import maryamVideo09 from "@/assets/maryam/maryam-video-09.mp4";
import maryamVideo10 from "@/assets/maryam/maryam-video-10.mp4";
import maryamVideo11 from "@/assets/maryam/maryam-video-11.mp4";
import archivePhoto1 from "@/assets/archive/archive-photo-1.jpg";
import archivePhoto2 from "@/assets/archive/archive-photo-2.jpg";
import archivePhoto3 from "@/assets/archive/archive-photo-3.jpg";
import archivePhoto4 from "@/assets/archive/archive-photo-4.jpg";
import archiveVideo1 from "@/assets/archive/archive-video-1.mp4";
import archiveVideo2 from "@/assets/archive/archive-video-2.mp4";
import maryamPoster01 from "@/assets/posters/maryam-video-01.jpg";
import maryamPoster02 from "@/assets/posters/maryam-video-02.jpg";
import maryamPoster03 from "@/assets/posters/maryam-video-03.jpg";
import maryamPoster04 from "@/assets/posters/maryam-video-04.jpg";
import maryamPoster05 from "@/assets/posters/maryam-video-05.jpg";
import maryamPoster06 from "@/assets/posters/maryam-video-06.jpg";
import maryamPoster07 from "@/assets/posters/maryam-video-07.jpg";
import maryamPoster08 from "@/assets/posters/maryam-video-08.jpg";
import maryamPoster09 from "@/assets/posters/maryam-video-09.jpg";
import maryamPoster10 from "@/assets/posters/maryam-video-10.jpg";
import maryamPoster11 from "@/assets/posters/maryam-video-11.jpg";
import archivePoster1 from "@/assets/posters/archive-video-1.jpg";
import archivePoster2 from "@/assets/posters/archive-video-2.jpg";

export const maryamPhotos = [
  {
    src: maryamPortrait,
    alt: "Maryam in a deep red dress with a rose bouquet",
    caption: "Maryam in her crimson glow",
  },
  {
    src: maryamSeated,
    alt: "Maryam seated in her red satin dress",
    caption: "Elegance, embodied",
  },
  {
    src: maryamSmile,
    alt: "Maryam smiling in her red dress",
    caption: "That beautiful Maryam smile",
  },
];

export const maryamVideos = [
  maryamVideo01,
  maryamVideo02,
  maryamVideo03,
  maryamVideo04,
  maryamVideo05,
  maryamVideo06,
  maryamVideo07,
  maryamVideo08,
  maryamVideo09,
  maryamVideo10,
  maryamVideo11,
];

// First frame of each video, shown instantly while the video streams in
export const maryamVideoPosters = [
  maryamPoster01,
  maryamPoster02,
  maryamPoster03,
  maryamPoster04,
  maryamPoster05,
  maryamPoster06,
  maryamPoster07,
  maryamPoster08,
  maryamPoster09,
  maryamPoster10,
  maryamPoster11,
];

export type ArchiveItem = {
  type: "photo" | "video";
  src: string;
  alt: string;
  caption: string;
  poster?: string;
};

export const archiveMedia: ArchiveItem[] = [
  { type: "photo", src: archivePhoto1, alt: "Maryam in a rose hijab and glasses", caption: "Soft Mornings" },
  { type: "video", src: archiveVideo1, poster: archivePoster1, alt: "Maryam in her striped top and tinted glasses", caption: "Pure Joy" },
  { type: "photo", src: archivePhoto2, alt: "Maryam smiling in a rose hijab", caption: "Infinite Warmth" },
  { type: "photo", src: archivePhoto3, alt: "Maryam in a colourful scarf", caption: "Golden Light" },
  { type: "video", src: archiveVideo2, poster: archivePoster2, alt: "Maryam dancing in her striped top", caption: "Main Character" },
  { type: "photo", src: archivePhoto4, alt: "Maryam glowing in the sunlight", caption: "Elegant Grace" },
];
