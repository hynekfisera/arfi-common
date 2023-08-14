import { Video, VIDEO_TYPE } from "./types/Video";
export { Video, VideoType, VIDEO_TYPE } from "./types/Video";
import Thumbnail0 from "./thumbnails/0.png";
import Thumbnail1 from "./thumbnails/1.png";
import Thumbnail2 from "./thumbnails/2.png";
import Thumbnail3 from "./thumbnails/3.png";
import Thumbnail4 from "./thumbnails/4.png";
import Thumbnail5 from "./thumbnails/5.png";
import Thumbnail5_1 from "./thumbnails/5.1.png";
import Thumbnail5_2 from "./thumbnails/5.2.png";
import Thumbnail6 from "./thumbnails/6.png";

export const videos: Video[] = [
  {
    id: 0,
    type: VIDEO_TYPE.Introduction,
    title: "#0 Úvod k sérii",
    href: "https://youtu.be/uYpxsQ9LXtU",
    released: "7.5.2022",
    content: ["Pro koho je série určena?", "Co se tu naučíte?"],
    thumbnail: Thumbnail0,
  },
  {
    id: 1,
    type: VIDEO_TYPE.Main,
    title: "#1 HTML",
    href: "https://youtu.be/dBQT3xS64CU",
    released: "5.6.2022",
    content: ["Jak funguje web?", "Části HTML dokumentu", "HTML syntax", "Nejpoužívanější HTML tagy"],
    previous: 0,
    thumbnail: Thumbnail1,
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
    thumbnail: Thumbnail2,
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
    thumbnail: Thumbnail3,
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
    thumbnail: Thumbnail4,
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
    thumbnail: Thumbnail5,
  },
  {
    id: 5.1,
    type: VIDEO_TYPE.Extra,
    title: "Domény, DNS a Cloudflare",
    href: "https://youtu.be/pdx-93_JEqw",
    released: "22.6.2023",
    content: ["Co je doména?", "Co je DNS?", "DNS záznamy", "Registrace domény", "Co je Cloudflare?"],
    thumbnail: Thumbnail5_1,
  },
  {
    id: 5.2,
    type: VIDEO_TYPE.Extra,
    title: "Git a GitHub Desktop",
    href: "https://youtu.be/137Q6u4Ct1E",
    released: "11.07.2023",
    content: ["Co je Git?", "Git x GitHub", "Základní pojmy", "Vytvoření repozitáře", "Přidávání změn", "Ukázka pull requestu"],
    thumbnail: Thumbnail5_2,
  },
  {
    id: 6,
    type: VIDEO_TYPE.Main,
    title: "#6 React",
    href: "#",
    released: "?",
    content: ["Co je React?", "Založení projektu", "Základní složky a soubory", "React komponenty", "HTML x JSX", "useState", "Výpis dat a interakce", "Umístění na internet", "Vlastní doména u projektu"],
    previous: 5,
    prerequisites: [1, 4, 5, 5.1, 5.2],
    thumbnail: Thumbnail6,
  },
];
