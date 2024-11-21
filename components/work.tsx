import React from "react";
import images from "../assets/images.json";
import Image from "next/image";

const projects = [
  {
    src: images.projectSection.recens,
    alt: "Envox project",
    title: "Envox",
    description: "User Focused digital experience",
    href: "https://recens.co.in",
  },
  {
    src: images.projectSection.recens,
    alt: "Recens Brand",
    title: "Recens Visual Identity Kit",
    description: "Aesthetic Fashion Clothing",
    href: "/recens",
  },
  {
    src: images.projectSection.recens,
    alt: "Recens Brand",
    title: "Recens Visual Identity Kit",
    description: "Aesthetic Fashion Clothing",
    href: "/envox",
  },
  {
    src: images.projectSection.recens,
    alt: "Recens Brand",
    title: "Recens",
    description: "Aesthetic Fashion Clothing",
    href: "/petalsnpromises",
  },
  {
    src: images.projectSection.recens,
    alt: "Recens Brand",
    title: "Recens",
    description: "Aesthetic Fashion Clothing",
    href: "/envox",
  },
];

export default function Work() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="overflow-hidden">
          <a href={project.href} className="block text-decoration-none">
            <div className="img-hover-zoom">
              <Image
                src={project.src}
                alt={project.alt}
                className="w-[700px] h-auto transition-transform duration-300 hover:scale-90"
                width={400}
                height={400}
                quality={90}
              />
            </div>
            <div className="px-4">
              <h2 className="font-serif text-2xl text-black leading-6 font-normal mt-4 mb-4 border-b border-[#28282B]">
                {project.title}
              </h2>
              <p className="text-brown mt-[1px] pt-[3px] mb-[30px]">
                {project.description}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
