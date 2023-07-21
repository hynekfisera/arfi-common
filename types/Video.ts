export const VIDEO_TYPE = {
  Introduction: "Introduction",
  Main: "Main",
  Extra: "Extra",
} as const;

export type VideoType = keyof typeof VIDEO_TYPE;

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
