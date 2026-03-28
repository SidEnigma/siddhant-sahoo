
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Youtube, Twitter } from 'lucide-react';
import { cn } from "@/lib/utils";

const TOTAL_FRAMES = 240;
const FRAME_BASE_URL = "https://qzhoaevehtfomgugjigx.supabase.co/storage/v1/object/public/video/website/website2/andy/frame_";

export function Hero({ onLoaded }: { onLoaded: () => void }) {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(4, '0');
        img.src = `${FRAME_BASE_URL}${frameNum}.webp`;
        img.onload = () => {
          loadedCount++;
          setImagesLoaded(loadedCount);
          if (loadedCount === TOTAL_FRAMES) {
            setIsReady(true);
            onLoaded();
          }
        };
      }
    };
    preloadImages();
  }, [onLoaded]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.abs(rect.top) / (rect.height - window.innerHeight);
      const frameIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.floor(scrollProgress * TOTAL_FRAMES)));
      setCurrentFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isReady) return null;

  return (
    <section ref={containerRef} className="parallax-container relative">
      <div className="parallax-sticky rounded-b-[4rem] md:rounded-b-[8rem] shadow-2xl">
        {/* Parallax Frames */}
        <div className="absolute inset-0 bg-black">
          {Array.from({ length: TOTAL_FRAMES }).map((_, i) => {
            const frameNum = (i + 1).toString().padStart(4, '0');
            return (
              <img
                key={i}
                src={`${FRAME_BASE_URL}${frameNum}.webp`}
                alt={`frame-${i}`}
                className={cn(
                  "parallax-frame",
                  currentFrame === i + 1 ? "opacity-100" : "opacity-0"
                )}
                style={{ zIndex: currentFrame === i + 1 ? 10 : 0 }}
              />
            );
          })}
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-black/80" />

        <div className="relative z-30 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          {/* Identity Block */}
          <div className="absolute top-[20%] left-6 md:left-12 max-w-xl animate-fade-in">
            <span className="text-primary font-headline uppercase tracking-[0.3em] text-xs mb-4 block">
              Hey, welcome to the portfolio of
            </span>
            <h1 className="text-7xl md:text-9xl font-headline font-bold text-white leading-[0.8] tracking-tighter">
              Siddhant<br />Sahoo
            </h1>

            {/* Skill Highlights */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { id: '01', label: 'Data Analytics' },
                { id: '02', label: 'AI Engineering' },
                { id: '03', label: 'Data Engineering' },
                { id: '04', label: 'ML Systems' },
              ].map((skill) => (
                <div key={skill.id} className="flex flex-col">
                  <span className="text-[10px] text-primary/60 font-mono mb-1">#{skill.id}</span>
                  <span className="text-sm font-headline text-white/80 uppercase tracking-widest">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition Block */}
          <div className="absolute top-[45%] right-6 md:right-12 max-w-md text-right animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-white mb-6 leading-tight">
              Building & Optimizing Data Solutions for AI-assisted Business Growth & Strategic Insights.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm ml-auto">
              I specialize in driving product and business impact through robust data engineering, efficient system design and scalable analytical/AI architectures.
            </p>
          </div>

          {/* Bottom Socials */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-8 pointer-events-auto">
            <a href="#" className="text-white/40 hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/siddhant-sahoo" className="text-white/40 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://github.com/siddhant-sahoo" className="text-white/40 hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
