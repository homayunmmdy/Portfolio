import PageTitle from "@/components/PageTitle";
import SiteConfig from "@/config/site";
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
const links  = [
  {
    name: "Gmail",
    href: "mailto:homayoun763@gmail.com",
    icon: BiLogoGmail
  },
  {
    name: "GitHub",
    href: "https://github.com/homayunmmdy",
    icon: FaGithub
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/homayunmmdy/",
    icon: FaLinkedinIn
  },
  {
    name: "DEV Community",
    href: "https://dev.to/homayunmmdy",
    icon: FaDev
  },
  {
    name: "Newsletter",
    href: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7146597314181193728",
    icon: FaRegNewspaper
  },
];

const Contacts = () => {
  return (
    <div>
      <h1 className="hidden">{`${SiteConfig.siteURL}contacts`}</h1>
      <PageTitle titr="Contacts" title="Get In Touch" />
      <div className="px-5 w-[98%] md:w-[92%] mx-auto">
        <div className=" py-12 sm:py-36">
          <div className="grid grid-cols-12  gap-4 md:gap-8">
            <div className="col-span-12 md:col-span-6 xl:col-span-7">
              <section>
                <h1 className="text-5xl text-center font-light sm:text-6xl md:text-7xl lg:text-8xl tracking-wide racking-wide">
                  Let us take your business to the next level.
                </h1>
              </section>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-5">
              <div>
                <p className="font-light text-center md:font-base md:text-3xl my-2  leading-relaxed">
                  I am always open to exciting opportunities in Frontend
                  Development! if you want to work together and turn you
                  business into next level just contact with me on
                </p>
                <ul className="flex justify-center gap-4 mt-10">
                  {links.map((link, index) => {
                    const LinkIcon = link.icon ;
                    return (
                      <li key={index}>
                        <Link title={link.name} href={link.href}>
                          <LinkIcon size={28} className="hover:text-[#714F04]"/>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
