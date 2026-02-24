"use client";

import { motion, Variants } from "framer-motion";
import { skillsData } from "../data/skills";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center px-8 md:px-24 mx-auto max-w-7xl py-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Tech.<span className="text-[var(--accent-red)]">Stack</span>
          </h2>
          <div className="flex-1 h-[1px] bg-[var(--border-color)] ml-4" />
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {skillsData.map((category, idx) => {
          const IconComponent = category.icon;
          
          return (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group border border-[var(--border-color)] bg-[var(--surface-1)] p-6 hover:border-[var(--accent-red)] transition-colors duration-300 relative overflow-hidden"
            >
              {/* Hover glow effect behind content */}
              <div className="absolute -inset-4 bg-[var(--accent-red)] opacity-0 blur-xl group-hover:opacity-10 transition-opacity duration-500 rounded-full" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2 bg-[var(--surface-2)] group-hover:bg-[var(--accent-red)]/10 text-[var(--accent-rose)] group-hover:text-[var(--accent-red)] transition-colors duration-300 border border-[var(--border-color)] group-hover:border-[var(--accent-red)]/30">
                  <IconComponent size={20} suppressHydrationWarning />
                </div>
                <h3 className="font-bold tracking-wide">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 text-xs mono bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border-color)] opacity-80 group-hover:opacity-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
