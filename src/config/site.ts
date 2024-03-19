interface ConfigType {
  name: string;
  title : string;
  description: string;
  keywords: string[];
  siteURL: string;
  author: { name: string; url: string };
  lang: string;
  dir: string;
  nav: {
    id: number;
    name: string;
    link: string;
  }[];
}

const SiteConfig: ConfigType = {
  name: "Homayoun",
  title : "Homayoun Mohammadi Frontend Developer (Reactjs)",
  description: "Frontend Developer skilled in creating or improving websites that fullfit customers needs. Proficient in the design , testing and mainteance of web.  ",
  keywords: [
    "homayunmmdy",
    "Homayoun Mohammadi",
    "Frontend Developer",
    "React",
    "JavaScript",
  ],
  siteURL: "https://homayunmmdy.vercel.app/",
  author: { name: "homayunmmdy", url: "https://homayunmmdy.vercel.app/" },
  lang: "en",
  dir: "ltr",
  nav: [
    {
      id: 1,
      name: "About",
      link: "/about",
    },
    {
      id: 2,
      name: "Experience",
      link: "/experience",
    },
    {
      id: 3,
      name: "Projects",
      link: "/projects",
    },
    {
      id: 4,
      name: "Contacts",
      link: "/contacts",
    },
  ],
};

export default SiteConfig;