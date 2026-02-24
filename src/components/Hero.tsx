"use client";

import { motion, Variants } from "framer-motion";
import { config } from "../data/config";

// Glitch animation variant for individual characters
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, delay: 1.5, ease: "easeOut" } 
  }
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, delay: 2, ease: "easeOut" } 
  },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 0 15px var(--accent-red-glow)",
    borderColor: "var(--accent-red)"
  },
  tap: { scale: 0.95 }
};

export default function Hero() {
  const nameChars = config.name.split("");

  return (
    <section className="relative h-screen flex flex-col justify-center items-start px-8 md:px-24 mx-auto max-w-7xl">
      <div className="z-10">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-[var(--accent-red)] mono mb-4 tracking-widest uppercase text-sm"
        >
          // Init Sequence
        </motion.p>

        <motion.h1 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl font-bold mb-4 flex w-full"
        >
          {nameChars.map((char, index) => (
            <motion.span 
              key={index}
              variants={letterVariants}
              className={char === " " ? "mr-4" : ""}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2 
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-4xl text-[var(--foreground)] mb-6 font-semibold"
        >
          {config.role}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-lg md:text-xl text-[var(--accent-rose)] max-w-2xl mb-10 mono"
        >
          {config.tagline}
        </motion.p>

        <motion.div 
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a 
            href="#projects"
            onClick={(e) => { 
              e.preventDefault(); 
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); 
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-3 border border-[var(--border-color)] bg-[var(--surface-1)] text-white mono font-bold hover:bg-[var(--surface-2)] transition-colors cursor-pointer text-center"
          >
            View Work
          </motion.a>
          
          <motion.a 
            href="#contact"
            onClick={(e) => { 
              e.preventDefault(); 
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); 
            }}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-3 border border-transparent text-white mono font-bold hover:text-[var(--accent-red)] transition-colors cursor-pointer text-center"
          >
            Contact
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="mono text-xs text-[var(--accent-rose)] opacity-70">SCROLL</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[var(--accent-red)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
