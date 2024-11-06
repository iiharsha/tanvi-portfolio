import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] border border-black sm:gap-[5rem] pb-28px sm:pb-[90px] pt-[50px] box-border">
      <div className="sm:px- top-[-10] flex items-center justify-center border border-black h-[400px] md:h-[350px]">
        <Image
          src="https://ik.imagekit.io/harshatanvi/tanvipinterest_converted.webp?updatedAt=1730881817343"
          alt="self portrait"
          quality={100}
          width={400}
          height={400}
          className="h-[400px] w-[420px] md:h-[320px] md:w-[420px] sm:w-[420px] md:mt-36 sm:mt-14 sm:h-[420px] rounded-[60rem]"
        />
      </div>
      <div className="border border-brown md:h-80 md:mt-16">
        <h1 className="pt-0 sm:pt-32 font-zcool leading-9 text-brown text-[29px] sm:text-[46px] font-normal mt-0 mb-2 max-w-[800px] box-border">
          Hey,
          <span className="text-[50px] sm:text-[58px]">This is Tanvi,</span> a
          UX designer. I design for the future of Technology.
        </h1>
        <br />
        <div className="mb-9 border border-brown">
          <a className="font-zcool text-[18px] text-brown no-underline rounded-full border border-brown py-4 px-4 bg-beige hover:bg-hovercolor mx-1.5 mb-9">
            Let&apos;s Connect
          </a>
        </div>
      </div>
      <br />
    </div>
  );
}
