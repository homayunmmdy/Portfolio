import PageTitle from "@/components/PageTitle";
import SiteConfig from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaRegNewspaper } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export const metadata: Metadata = {
  title: `${SiteConfig.title} | contacts page`,
  alternates: {
    canonical: `${SiteConfig.siteURL}contacts`,
  },
};


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
                <h1 className="text-5xl text-center font-light text-black  sm:text-6xl md:text-8xl tracking-wide racking-wide">
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
                  <li>
                    <Link title="Gmail" href="mailto:homayoun763@gmail.com">
                      <BiLogoGmail size={28} />
                    </Link>
                  </li>
                  <li>
                    <Link title="GitHub" href="https://github.com/homayunmmdy">
                      <FaGithub size={28} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Linkedin"
                      href="https://www.linkedin.com/feed/"
                    >
                      <FaLinkedinIn size={28} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      title="Newsletter"
                      href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7146597314181193728"
                    >
                      <FaRegNewspaper size={28} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Contacts;
