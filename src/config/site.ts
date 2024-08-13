interface ConfigType {
  name: string;
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
  description: "Endless learning the journey of discovering new things",
  keywords: [
    "homayunmmdy",
    "Homayoun Mohammadi",
    "Frontend Developer",
    "React",
    "JavaScript",
  ],
  siteURL: "https://homayunmmdy.vercel.app/",
  author: { name: "homayunmmdy", url: "https://nextjs.org" },
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
      name: "Services",
      link: "/services",
    },
    {
      id: 3,
      name: "Projects",
      link: "/projects",
    },
    {
      id: 4,
      name: "Courses",
      link: "/courses",
    },
    {
      id: 5,
      name: "Contacts",
      link: "/contacts",
    },
  ],
};

export default SiteConfig;
