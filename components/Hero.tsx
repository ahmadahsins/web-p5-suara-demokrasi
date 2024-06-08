'use client';

import { ImagesSlider } from "./ui/images-slider"
import { TypewriterEffect } from "./ui/typewritter-effect";
import { images, words } from "@/data";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <ImagesSlider className="h-screen bg-black" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <TypewriterEffect words={words} />
      </motion.div>
    </ImagesSlider>
  )
}

export default Hero