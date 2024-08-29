import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="container sm:mx-auto sm:px-4 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Large item */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <Image
              src="/img/pic.webp"
              alt="Main image"
              width={577.453}
              height={1013.28}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white">
                  library and school
                </h3>
                <p className="text-white">
                  Winning the 25th edition of book reading and book keeping and
                  become top student at school
                </p>
              </div>
            </div>
          </div>

          {/* Two small items  */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <Image
              src="/img/pic1.webp"
              alt="image 1"
              width={280.719}
              height={499.047}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <Image
              src="/img/pic2.webp"
              alt="image 2"
              width={280.719}
              height={499.047}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Three medium items  */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <Image
              src="/img/pic3.webp"
              alt="image 3"
              width={280.719}
              height={499.047}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group mb-2">
            <Image
              src="/img/pic4.webp"
              alt="image 4"
              width={280.719}
              height={499.047}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
