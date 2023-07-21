export const VideoType = {
  Introduction: "Introduction",
  Main: "Main",
  Extra: "Extra",
} as const;

export type VideoType = (typeof VideoType)[keyof typeof VideoType];

export type Video = {
  id: number;
  type: VideoType;
  title: string;
  href: string;
  released: string;
  content?: Array<string>;
  previous?: number;
  prerequisites?: Array<number>;
};
