"use client";
import React from "react";
import images from "../assets/images.json";
import Image from "next/image";
import { motion } from "motion/react";

const projects = [
  {
    src: images.projectSection.recens,
    alt: "Recens Logo",
    title: "therecens.com",
    description: "Best Shopping Experience",
    href: "https://therecens.com",
  },
  {
    src: images.projectSection.recens,
    alt: "Recens Brand",
    title: "Recens Visual Identity Kit",
    description: "Fashion Brand Aesthetics",
    href: "/recens",
  },
  {
    src: images.projectSection.petalsandpromises,
    alt: "Petal and Promises image",
    title: "Petals and Promises",
    description: "Buying Flowers Made Easy",
    href: "/petalsnpromises",
  },
  {
    src: images.projectSection.envox,
    alt: "Envox Picture",
    title: "Envox",
    description: "Revamping the Envox Website",
    href: "/envoxwork",
  },
  {
    src: images.projectSection.swavya,
    alt: "Swavya Image",
    title: "Swavya",
    description: "Health Web Application",
    href: "/swavya",
  },
];

export default function Work() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div key={index}>
          <a href={project.href} className="block text-decoration-none">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="flex items-center justify-center"
            >
              <Image
                src={project.src}
                alt={project.alt}
                className="w-[700px] h-auto"
                width={400}
                height={400}
                quality={90}
                priority
              />
            </motion.div>
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
