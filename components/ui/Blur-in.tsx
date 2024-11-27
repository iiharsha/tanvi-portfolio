"use client";
import { motion, useInView } from "framer-motion";
import * as React from "react";

export const BlurIn = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.h2
      ref={ref}
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="text-[29px] text-brown sm:text-[46px] font-normal font-zcool tracking-tighter md:text-6xl md:leading-[4rem]"
    >
      {children}
    </motion.h2>
  );
};