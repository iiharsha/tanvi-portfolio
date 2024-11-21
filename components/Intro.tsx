import Image from "next/image";
import React from "react";
import images from "../assets/images.json";

const cartoonTanvi = images.homepage.cartoonTanvi;

export default function Intro() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] sm:gap-[5rem] pb-28px sm:pb-[90px] pt-[50px] box-border">
      {/* Image Section */}
      <div className="flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src={cartoonTanvi}
          alt="self portrait"
          quality={90}
          width={300}
          height={400}
          className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] rounded-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:h-80 md:mt-16 flex flex-col justify-center items-start">
        <h1 className="pt-0 sm:pt-32 font-zcool leading-9 text-brown text-[29px] sm:text-[46px] font-normal mt-0 mb-2 max-w-[800px] box-border">
          Hey,
          <span className="text-[50px] sm:text-[58px]">This is Tanvi,</span> a
          UI/UX designer. I design for the future of Technology.
        </h1>
        <div className="mb-9 p-4 mt-4">
          <a className="font-zcool text-[18px] text-brown no-underline rounded-full border border-brown py-4 px-6 bg-beige hover:bg-hovercolor mx-1.5 mb-9">
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </div>
  );
}
