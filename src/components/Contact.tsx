"use client";

import { motion } from "framer-motion";
import { config } from "../data/config";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 flex flex-col justify-center items-center px-8 relative z-10 border-t border-[var(--border-color)] mt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
          Initiate.<span className="text-[var(--accent-red)]">Protocol</span>
        </h2>
        
        <p className="text-lg text-[var(--foreground)] opacity-80 mb-12">
          Currently exploring new opportunities. Whether you have a question or just want to discuss distributed systems, my inbox is open.
        </p>
        
        <a 
          href={`mailto:${config.email}`}
          className="inline-block px-10 py-4 border border-[var(--accent-red)] text-[var(--accent-red)] hover:bg-[var(--accent-red)] hover:text-white transition-all duration-300 mono font-bold text-lg cursor-pointer hover:shadow-[0_0_20px_var(--accent-red-glow)]"
        >
          CONNECT
        </a>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-24 flex gap-8"
      >
        {config.github && (
          <a href={config.github} target="_blank" rel="noreferrer" className="text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--accent-red)] transition-all transform hover:scale-110">
            <Github size={24} suppressHydrationWarning />
          </a>
        )}
        {config.linkedin && (
          <a href={config.linkedin} target="_blank" rel="noreferrer" className="text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--accent-red)] transition-all transform hover:scale-110">
            <Linkedin size={24} suppressHydrationWarning />
          </a>
        )}
        <a href={`mailto:${config.email}`} className="text-[var(--foreground)] opacity-60 hover:opacity-100 hover:text-[var(--accent-red)] transition-all transform hover:scale-110">
          <Mail size={24} suppressHydrationWarning />
        </a>
      </motion.div>
      
      <div className="absolute bottom-8 mono text-xs text-[var(--foreground)] opacity-30 text-center w-full">
        DESIGNED & BUILT BY {config.name.toUpperCase()} // SYSTEM.EXIT(0)
      </div>
    </section>
  );
}
