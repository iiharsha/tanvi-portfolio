import React from "react";
import images from "../assets/images.json";

export default function Work() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-20">
      <div className="overflow-hidden">
        <a href="#" className="block text-decoration-none">
          <div className="img-hover-zoom">
            <img
              src={images.projectSection.envox}
              alt="Envox project"
              className="w-full h-auto transition-transform duration-300"
              style={{ maxWidth: "400px", height: "525px" }} // Adjusted size
            />
          </div>
          <div className="px-4">
            <h2 className="font-serif text-2xl text-gray-800 leading-6 font-normal mt-16 mb-6 border-b border-[#28282B]">
              Envox
            </h2>
            <p className="text-gray-600 mt-[1px] pt-[3px] mb-[30px]">
              User Focused digital experience
            </p>
          </div>
        </a>
      </div>

      <div className="overflow-hidden">
        <a href="#" className="block text-decoration-none">
          <div className="img-hover-zoom">
            <img
              src={images.projectSection.swavya}
              alt="Swavya project"
              className="w-full h-auto transition-transform duration-300"
              style={{ maxWidth: "400px", height: "auto" }} // Adjusted size
            />
          </div>
          <div className="px-4">
            <h2 className="font-serif text-2xl text-gray-800 leading-6 font-normal mt-16 mb-6 border-b border-[#28282B]">
              Swavya
            </h2>
            <p className="text-gray-600 mt-[1px] pt-[3px] mb-[30px]">
              Personalized Health App Design
            </p>
          </div>
        </a>
      </div>

      <div className="overflow-hidden">
        <a href="#" className="block text-decoration-none">
          <div className="img-hover-zoom">
            <img
              src={images.projectSection.irctc}
              alt="IRCTC project"
              className="w-full h-auto transition-transform duration-300"
              style={{ maxWidth: "400px", height: "auto" }} // Adjusted size
            />
          </div>
          <div className="px-4">
            <h2 className="font-serif text-2xl text-gray-800 leading-6 font-normal mt-16 mb-6 border-b border-[#28282B]">
              IRCTC
            </h2>
            <p className="text-gray-600 mt-[1px] pt-[3px] mb-[30px]">
              Streamlined Railway Booking Experience
            </p>
          </div>
        </a>
      </div>

      <div className="overflow-hidden">
        <a href="#" className="block text-decoration-none">
          <div className="img-hover-zoom">
            <img
              src={images.projectSection.clones}
              alt="Clones project"
              className="w-full h-auto transition-transform duration-300"
              style={{ maxWidth: "400px", height: "auto" }} // Adjusted size
            />
          </div>
          <div className="px-4">
            <h2 className="font-serif text-2xl text-gray-800 leading-6 font-normal mt-16 mb-6 border-b border-[#28282B]">
              Clones
            </h2>
            <p className="text-gray-600 mt-[1px] pt-[3px] mb-[30px]">
              Inuitive Familiar Interface Design
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
