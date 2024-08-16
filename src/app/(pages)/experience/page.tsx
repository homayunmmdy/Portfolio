import Experience from "@/components/Experience";
import PageTitle from "@/components/PageTitle";

const ServicesPage = () => {
  return (
    <div>
      <PageTitle titr="services" title="High-Impact Services" />
      <div className="px-5 w-[98%] md:w-[92%] mx-auto">
        <Experience />
      </div>
    </div>
  );
};

export default ServicesPage;
