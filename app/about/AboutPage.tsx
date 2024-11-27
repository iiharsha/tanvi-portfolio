"use client";

import React from "react";
import { motion } from "motion/react";
import images from "@/assets/images.json";
import Image from "next/image";
import { TypingEffect } from "@/components/ui/typing-effect";
import { EyeCatchingButton } from "@/components/ui/ShinningButton";

const aboutimage = images.about.mainimage;

export default function AboutPage() {
  return (
    <div className="h-full sm:h-screen mt-[8rem] grid grid-cols-1 sm:grid-cols-[1fr_2fr] sm:gap-[5rem] pb-28px sm:pb-[90px] pt-[50px] box-border">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px] sm:ml-[8rem]"
      >
        <Image
          src={aboutimage}
          alt="self portrait"
          quality={90}
          width={4003}
          height={4000}
          className="rounded-2xl h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] object-cover"
          priority
        />
      </motion.div>

      {/* Text Section */}
      <div className="md:h-80 md:mt-[90px] flex flex-col justify-center items-start">
        <TypingEffect text="About Me" />
        <p className="font-normal font-zcool text-[20px] w-[100vw] sm:w-[50vw]">
          I am a passionate UI/UX designer with an Artificial Intelligence and
          Machine Learning background. I was born and brought up in Hyderabad,
          and I have always been very fond of art. It all started when I was
          twelve years old and had the wonderful opportunity to work with an art
          gallery that represented my school. In my B.tech journey, I have found
          the perfect mix of technical expertise and creative intuition. Ever
          since I’ve tried to bring together experiences that are simple and
          intuitive helping people have an easier and fun life. I worked
          updating website designs for certain clients at Envox Media and
          traffic to both their site and the corporation's site. Each of the
          projects that I have done forms a block and has made me appreciate the
          importance of empathy in design. This Website is the manifestation of
          my narrative – a place where I thought out my development, artistry,
          and commitment to this profession. My entrepreneurial journey has also
          been a driving force in my career goals. Having been working as a
          founder for a fashion brand, I found out that product design and
          management are essential to capturing the principles of ideals and
          usefulness. A key goal is to apply HCI principles for improvements in
          the field of user interface design and make my brand’s web presence
          reflect the class and grandeur of its products. Besides the digital
          world, my other interests include culinary, traveling, and dancing. I
          try to find beauty in everyday moments that inspire me and my work
        </p>
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
