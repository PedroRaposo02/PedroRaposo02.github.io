"use client";

import { motion } from "framer-motion";
import { experienceData } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center px-8 md:px-24 mx-auto max-w-5xl py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Work.<span className="text-[var(--accent-red)]">History</span>
          </h2>
          <div className="flex-1 h-[1px] bg-[var(--border-color)] ml-4" />
        </div>
      </motion.div>

      <div className="relative border-l border-[var(--border-color)] ml-4 md:ml-0">
        {experienceData.map((exp, idx) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="mb-16 pl-8 md:pl-12 relative group"
          >
            {/* Timeline node */}
            <div className="absolute w-4 h-4 bg-[var(--background)] border-2 border-[var(--accent-red)] rounded-full -left-[8.5px] top-1.5 group-hover:bg-[var(--accent-red)] group-hover:shadow-[0_0_10px_var(--accent-red)] transition-all duration-300 z-10" />
            
            {/* Timeline line hover glow */}
            <div className="absolute w-[1px] h-full bg-gradient-to-b from-[var(--accent-red)] to-transparent -left-[1px] top-8 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
               <h3 className="text-2xl font-bold">{exp.role}</h3>
               <span className="text-[var(--accent-red)] mono text-sm hidden md:inline">@</span>
               <span className="text-xl text-[var(--foreground)] opacity-90">{exp.company}</span>
            </div>
            
            <div className="mono text-xs text-[var(--accent-rose)] mb-6 opacity-70">
              {exp.dateRange}
            </div>
            
            <ul className="space-y-3 opacity-80 border-l border-[var(--border-color)] pl-4">
              {exp.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="relative before:content-['>'] before:absolute before:-left-4 before:text-[var(--accent-red)] before:mono before:font-bold">
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
