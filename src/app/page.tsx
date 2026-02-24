"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { cn } from "@/utils";

// Lazy load the heavy Three.js background
const BackgroundScene = dynamic(() => import("@/components/BackgroundScene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-[-1] bg-black" />
});

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.5);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (soundEnabled) {
      audio.volume = volume;
      audio.play().catch(() => { }); // catch autoplay policy errors
    } else {
      audio.pause();
    }
  }, [soundEnabled]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  return (
    <main className="relative min-h-screen">
      <BackgroundScene />

      {mounted && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
          {soundEnabled && (
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-20 accent-[var(--accent-red)] cursor-pointer"
              title="Volume"
            />
          )}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-3 bg-[var(--surface-1)] border border-[var(--border-color)] text-[var(--foreground)] hover:text-[var(--accent-red)] hover:border-[var(--accent-red)] transition-all cursor-pointer group rounded-none"
            title={soundEnabled ? "Disable Ambient Sound" : "Enable Ambient Sound"}
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            <span className={cn("absolute top-1/2 right-14 mono text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block text-[var(--accent-red)]",
              soundEnabled ? "-translate-y-6" : "-translate-y-1/2")}>
              SYS.AUDIO_{soundEnabled ? "ON" : "OFF"}
            </span>
          </button>
        </div>
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
