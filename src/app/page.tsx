"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

// Lazy load the heavy Three.js background
const BackgroundScene = dynamic(() => import("@/components/BackgroundScene"), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 z-[-1] bg-black" />
});

export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen">
      <BackgroundScene />
      
      {/* Optional ambient sound UI toggle (audio file not included, UI only) */}
      {mounted && (
        <button 
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="fixed top-6 right-6 z-50 p-3 bg-[var(--surface-1)] border border-[var(--border-color)] text-[var(--foreground)] hover:text-[var(--accent-red)] hover:border-[var(--accent-red)] transition-all cursor-pointer group rounded-none"
          title={soundEnabled ? "Disable Ambient Sound" : "Enable Ambient Sound"}
        >
          {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          <span className="absolute top-1/2 -translate-y-1/2 right-12 mono text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block text-[var(--accent-red)]">
            SYS.AUDIO_{soundEnabled ? "ON" : "OFF"}
          </span>
        </button>
      )}

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
