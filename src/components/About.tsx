"use client";

import { motion } from "framer-motion";
import { aboutData } from "../data/about";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-8 md:px-24 mx-auto max-w-7xl py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            System.<span className="text-[var(--accent-red)]">Profile</span>
          </h2>
          <div className="flex-1 h-[1px] bg-[var(--border-color)] ml-4 relative">
            <div className="absolute left-0 top-[-2px] w-4 h-[5px] bg-[var(--accent-red)]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl text-[var(--foreground)] leading-relaxed">
          <div className="relative">
            {/* Decorative bracket */}
            <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent-red)] to-transparent opacity-50" />
            
            <p className="mb-6">{aboutData.paragraph1}</p>
            <p className="opacity-80">{aboutData.paragraph2}</p>
          </div>
          
          <div className="flex justify-center items-center">
             {/* A stylized geometric representation or purely decorative ASCII/data block */}
             <div className="border border-[var(--border-color)] p-8 bg-[var(--surface-1)]/50 backdrop-blur-sm relative group overflow-hidden w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-red-glow)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="mono text-xs text-[var(--accent-rose)] opacity-50 space-y-2 relative z-10">
                  <p>{">"} INITIALIZING CORE SYSTEMS...</p>
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                  >
                    {">"} ALIGNING DEPENDENCIES... [OK]
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    {">"} BOOTSTRAPPING NEURAL NETWORKS... [OK]
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-[var(--accent-red)] drop-shadow-[0_0_5px_var(--accent-red)]"
                  >
                    {">"} SYSTEM READY.
                  </motion.p>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
