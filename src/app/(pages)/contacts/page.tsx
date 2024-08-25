import { PageDescription } from "@/components";
import PageTitle from "@/components/PageTitle";
import SiteConfig from "@/config/site";
import { SocialMedia } from "@/types/entities";
import { Metadata } from "next";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaDev, FaGithub, FaRegNewspaper } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export const metadata: Metadata = {
  title: `${SiteConfig.title} | contacts page`,
  alternates: {
    canonical: `${SiteConfig.siteURL}contacts`,
  },
};

const links: SocialMedia[] = [
  {
    name: "Gmail",
    href: "mailto:homayoun763@gmail.com",
    icon: BiLogoGmail,
  },
  {
    name: "GitHub",
    href: "https://github.com/homayunmmdy",
    icon: FaGithub,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/homayunmmdy/",
    icon: FaLinkedinIn,
  },
  {
    name: "DEV Community",
    href: "https://dev.to/homayunmmdy",
    icon: FaDev,
  },
  {
    name: "Newsletter",
    href: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7146597314181193728",
    icon: FaRegNewspaper,
  },
];

const Contacts = () => {
  return (
    <div>
      <h1 className="hidden">{`${SiteConfig.siteURL}contacts`}</h1>
      <PageTitle titr="Contacts" title="Get In Touch" />
      <div className="px-5 w-[98%] md:w-[92%] mx-auto">
        <PageDescription
          title="Let us take your business to the next level."
          description="I am always open to exciting opportunities in Frontend
                  Development! if you want to work together and turn you
                  business into next level just contact with me on"
          media={links}
        />
      </div>
    </div>
  );
};

export default Contacts;
