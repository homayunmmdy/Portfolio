import SiteConfig from "@/config/site";
import Link from "next/link";

const pages = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Posts", href: "/posts" },
    { name: "Contacts", href: "/contacts" },
];

const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(20deg, hsl(130deg, 8%, 14%) 40%, hsl(0deg, 0%, 13%) 100%)",
      }}
    >
      <hr className=" border-b-1 border-gray-500 " />
      <footer className=" p-5 w-[98%] md:w-[92%] mx-auto  text-base-content">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-12 md:grid-span-12 xl:col-span-6">
            <nav>
              <h3 className="footer-title text-4xl font-light text-gray-100 ">
                About {SiteConfig.name}
              </h3>
              <p className="mt-2 font-bold leading-loose text-white tracking-wide pr-2 text-xl">
                Experienced Frontend Developer skilled in creating or improving
                websites that fulfill customer needs. Proficient in the design,
                installation, testing, and maintenance of web systems...
              </p>
            </nav>
          </div>
          <div className="col-span-12 md:grid-span-6 xl:col-span-3">
            <h3 className="footer-title text-4xl font-light text-gray-50">
              Pages
            </h3>
            <nav className="flex flex-col gap-3 pl-3">
                {pages.map((page ,index)=> (

              <Link
                href={page.href}
                key={index}
                title={page.name}
                className="text-white hover:text-gray-100 text-xl"
              >
                {page.name}
              </Link>
                ))}
            </nav>
          </div>
          <div className="col-span-12 md:grid-span-6 xl:col-span-3">
            <h3 className="footer-title text-4xl font-light text-gray-50">
              Newsletter
            </h3>
            <p className="my-4 text-center font-bold leading-loose text-white tracking-wide pr-2 text-xl">
              I share interesting and useful articles about the world of
              programming.
            </p>
            <div className="text-center">
              <Link
                target="_blank"
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7146597314181193728"
                className="btn btn-warning join-item"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
