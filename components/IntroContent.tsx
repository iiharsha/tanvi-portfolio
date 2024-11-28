"use client";

import React from "react";
import { motion } from "motion/react";
import { TypingEffect } from "./ui/typing-effect";
import { EyeCatchingButton } from "./ui/ShinningButton";

export function IntroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col items-start space-y-6"
    >
      <div className="max-w-2xl">
        <TypingEffect
          text="Hey, This is Tanvi, a UI/UX designer.
          I Design for the future of Technology"
        />
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <EyeCatchingButton className="text-lg px-8 py-4">
          Let&apos;s Connect
        </EyeCatchingButton>
      </motion.div>
    </motion.div>
  );
}
