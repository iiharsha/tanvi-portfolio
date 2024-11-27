"use client";

import Image from "next/image";
import React from "react";
import images from "../assets/images.json";
import { motion } from "motion/react";
import { TypingEffect } from "./ui/typing-effect";
import { EyeCatchingButton } from "./ui/ShinningButton";

const cartoonTanvi = images.homepage.cartoonTanvi;

export default function Intro() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] sm:gap-[5rem] pb-28px sm:pb-[90px] pt-[50px] box-border">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] ml-14"
      >
        <Image
          src={cartoonTanvi}
          alt="self portrait"
          quality={90}
          width={300}
          height={400}
          className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] rounded-full object-cover"
          priority
        />
      </motion.div>

      {/* Text Section */}
      <div className="md:h-80 md:mt-16 flex flex-col justify-center items-start">
        <TypingEffect
          text="Hey, This is Tanvi, a UI/UX designer.
          I Design for the future of Technology"
        />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-9 p-4 mt-4 cursor-pointer"
        >
          <EyeCatchingButton className="font-zcool text-[18px] px-6 py-4 mx-1.5 mb-9">
            Let&apos;s Connect
          </EyeCatchingButton>
        </motion.div>
      </div>
    </div>
  );
}
