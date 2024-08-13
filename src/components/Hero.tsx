import Image from "next/image";

const Hero = () => {

  return (
    <div>
      <div className="h-full w-full">
        <div className="mx-auto py-10">
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="w-full md:w-[49%]">
              <div>
                <div className="text-white relative mb-2">
                  <h2 className="text-2xl">Hello, I am Homayoun</h2>
                  <hr className="border-yellow-600	absolute w-8 left-[-3rem] top-[50%] h-[1px]" />
                </div>
                <h1 className="text-5xl font-light  sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wide leading-relaxed text-white">
                  Frontend Developer
                </h1>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <div className="flex items-end md:justify-end">
                <div className="hidden md:block left-[-3rem] bottom-[0%] z-10	 w-full">
                  <hr className="border-yellow-600 h-[2px] w-full my-4" />
                  <hr className="border-yellow-600 h-[2px] w-full my-4" />
                  <hr className="border-yellow-600 h-[2px] w-full my-4" />
                  <hr className="border-yellow-600 h-[2px] w-full my-4" />
                </div>
                <Image
                  width={340}
                  height={425}
                  alt="Homayoun"
                  src="/img1.jpg"
                  className="flex justify-center md:block max-w-[500px] max-h-[500px]  z-20  right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;