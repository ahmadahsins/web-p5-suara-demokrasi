"use client";

import React, { useState } from 'react'
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';

const Navbar = () => {
    const { setTheme } = useTheme();
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);
  
    useMotionValueEvent(scrollYProgress, "change", (current) => {
      // Check if current is not undefined and is a number
      if (typeof current === "number") {
        let direction = current! - scrollYProgress.getPrevious()!;
  
        if (scrollYProgress.get() < 0.05) {
          setVisible(false);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    });

    return (
      <AnimatePresence mode='wait'> 
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}          
          className={"fixed top-1 md:top-3 lg:top-5 inset-x-0 max-w-2xl mx-auto z-50"}
        >
          <nav
            className="relative rounded-full boder border-transparent bg-black dark:border-white/[0.2] shadow-input flex justify-between items-center space-x-4 px-8 py-6 "
          >
            <Image src="/saba-logo.png" width={36} height={36} alt='logo saba' />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </motion.div>
      </AnimatePresence>
    )
}

export default Navbar
