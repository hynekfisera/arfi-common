import { Video, VIDEO_TYPE } from "./types/Video";
export { Video, VideoType, VIDEO_TYPE } from "./types/Video";

export const videos: Video[] = [
  {
    id: 0,
    type: VIDEO_TYPE.Introduction,
    title: "#0 Úvod k sérii",
    href: "https://youtu.be/uYpxsQ9LXtU",
    released: "7.5.2022",
    content: ["Pro koho je série určena?", "Co se tu naučíte?"],
  },
  {
    id: 1,
    type: VIDEO_TYPE.Main,
    title: "#1 HTML",
    href: "https://youtu.be/dBQT3xS64CU",
    released: "5.6.2022",
    content: ["Jak funguje web?", "Části HTML dokumentu", "HTML syntax", "Nejpoužívanější HTML tagy"],
    previous: 0,
  },
  {
    id: 2,
    type: VIDEO_TYPE.Main,
    title: "#2 CSS",
    href: "https://youtu.be/3DIPAoqpUCs",
    released: "3.7.2022",
    content: ["CSS syntax", "Kde a jak se CSS používá", "CSS selektory", "Nejpoužívanější CSS styly"],
    previous: 1,
    prerequisites: [1],
  },
  {
    id: 3,
    type: VIDEO_TYPE.Main,
    title: "#3 TailwindCSS",
    href: "https://youtu.be/cTvKBiIruNI",
    released: "24.7.2022",
    content: ["Co je TailwindCSS?", "Konfigurace přes NPM", "Princip stylování", "Darkmode", "Responzivita"],
    previous: 2,
    prerequisites: [2],
  },
  {
    id: 4,
    type: VIDEO_TYPE.Main,
    title: "#4 JavaScript",
    href: "https://youtu.be/v9S0CJjqOuU",
    released: "30.10.2022",
    content: ["Co je JavaScript?", "Syntax JavaScriptu", "Výpis do konzole", "Využití na webu"],
    previous: 3,
    prerequisites: [1],
  },
  {
    id: 5,
    type: VIDEO_TYPE.Main,
    title: "#5 TypeScript",
    href: "https://youtu.be/w30tE2paIW4",
    released: "4.3.2023",
    content: ["Co je TypeScript?", "Instalace & kompilace do JS", "Syntax TypeScriptu", "Využití v projektu"],
    previous: 4,
    prerequisites: [4],
  },
  {
    id: 5.1,
    type: VIDEO_TYPE.Extra,
    title: "Domény, DNS a Cloudflare",
    href: "https://youtu.be/pdx-93_JEqw",
    released: "22.6.2023",
    content: ["Co je doména?", "Co je DNS?", "DNS záznamy", "Registrace domény", "Co je Cloudflare?"],
  },
  {
    id: 5.2,
    type: VIDEO_TYPE.Extra,
    title: "Git a GitHub Desktop",
    href: "https://youtu.be/137Q6u4Ct1E",
    released: "11.07.2023",
    content: ["Co je Git?", "Git x GitHub", "Základní pojmy", "Vytvoření repozitáře", "Přidávání změn", "Ukázka pull requestu"],
  },
];
