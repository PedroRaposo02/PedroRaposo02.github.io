"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projectsData } from "../data/projects";
import { Github, ExternalLink } from "lucide-react";

const TiltCard = ({ project }: { project: typeof projectsData[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-full group perspective-1000 cursor-pointer"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[var(--accent-red)] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
        style={{ transform: "translateZ(-50px)" }}
      />
      
      <div 
        className="h-full bg-[var(--surface-1)] border border-[var(--border-color)] group-hover:border-[var(--accent-red)] p-8 flex flex-col transition-colors duration-300 relative overflow-hidden"
      >
        {isHovered && (
          <motion.div 
            className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-red)] rounded-full blur-[80px] opacity-30 pointer-events-none"
            animate={{ x: x.get() * 100, y: y.get() * 100 }}
          />
        )}
        
        <div className="flex justify-between items-start mb-6" style={{ transform: "translateZ(30px)" }}>
          <span className="mono text-[var(--accent-rose)] text-sm">{project.year}</span>
          <div className="flex gap-4 text-[var(--foreground)] opacity-70">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-red)] transition-colors">
                <Github size={20} suppressHydrationWarning />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-red)] transition-colors">
                <ExternalLink size={20} suppressHydrationWarning />
              </a>
            )}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4" style={{ transform: "translateZ(40px)" }}>
          {project.title}
        </h3>
        
        <p className="text-[var(--foreground)] opacity-80 mb-8 flex-grow" style={{ transform: "translateZ(20px)" }}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-auto" style={{ transform: "translateZ(30px)" }}>
          {project.tech.map((t, idx) => (
            <span key={idx} className="mono text-xs text-[var(--accent-red)] bg-[var(--surface-2)] px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-8 md:px-24 mx-auto max-w-7xl py-20 relative z-10">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
          Core.<span className="text-[var(--accent-red)]">Projects</span>
        </h2>
        <div className="flex-1 h-[1px] bg-[var(--border-color)] ml-4" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 [perspective:1000px]">
        {projectsData.map((project) => (
          <TiltCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
