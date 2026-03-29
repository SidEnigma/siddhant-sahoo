
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const TOTAL_FRAMES = 74;
const FRAME_BASE_URL = "https://mqpfmkdefcbakrzdzspq.supabase.co/storage/v1/object/public/Webp%20Sequence/frame_";

interface HeroProps {
  onProgress: (progress: number) => void;
}

export function Hero({ onProgress }: HeroProps) {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const framesCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadingStarted = useRef(false);

  // Preload frames
  useEffect(() => {
    if (loadingStarted.current) return;
    loadingStarted.current = true;

    let loadedCount = 0;
    
    const reportProgress = () => {
      loadedCount++;
      onProgress((loadedCount / TOTAL_FRAMES) * 100);
    };

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(4, '0');
      const url = `${FRAME_BASE_URL}${frameNum}.webp`;
      
      // Set handlers BEFORE setting src to avoid race conditions
      img.onload = () => {
        framesCache.current.set(i, img);
        if (i === 1) setFirstFrameLoaded(true);
        reportProgress();
      };
      
      img.onerror = () => {
        console.error(`Failed to load frame ${i} from URL: ${url}`);
        reportProgress(); // Still count to avoid progress hang
      };

      // We remove crossOrigin for now as it can block loading if CORS headers are missing
      // Since we are only drawing to canvas and not reading pixels, this is safer
      img.src = url;
    }
  }, [onProgress]);

  // Handle Scroll to update current frame index
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      
      if (scrollHeight <= 0) return;

      // Calculate scroll progress (0 to 1)
      const scrollProgress = Math.max(0, Math.min(1, Math.abs(rect.top) / scrollHeight));
      
      // Map progress to frame index (1 to TOTAL_FRAMES)
      const frameIndex = Math.max(1, Math.min(TOTAL_FRAMES, Math.floor(scrollProgress * (TOTAL_FRAMES - 1)) + 1));
      setCurrentFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Drawing Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frame = framesCache.current.get(currentFrame);
    
    if (frame && frame.complete && frame.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
    } else {
      // If requested frame isn't ready, try to draw the nearest previous one available
      for (let i = currentFrame - 1; i >= 1; i--) {
        const prevFrame = framesCache.current.get(i);
        if (prevFrame && prevFrame.complete && prevFrame.naturalWidth > 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(prevFrame, 0, 0, canvas.width, canvas.height);
          break;
        }
      }
    }
  }, [currentFrame, firstFrameLoaded]);

  return (
    <section ref={containerRef} className="parallax-container relative">
      <div className="parallax-sticky rounded-b-[4rem] md:rounded-b-[8rem] shadow-2xl overflow-hidden bg-[#1A2226]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />

        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-black/80" />

        <div className="relative z-30 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <div className="absolute top-[20%] left-6 md:left-12 max-w-xl animate-fade-in">
            <span className="text-primary font-headline uppercase tracking-[0.3em] text-xs mb-4 block">
              Hey, welcome to the digital identity of
            </span>
            <h1 className="text-7xl md:text-9xl font-headline font-bold text-white leading-[0.8] tracking-tighter">
              Siddhant<br />Sahoo
            </h1>

            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { id: '01', label: 'Data Analytics' },
                { id: '02', label: 'Data and AI Engineering' },
              ].map((skill) => (
                <div key={skill.id} className="flex flex-col">
                  <span className="text-[10px] text-primary/60 font-mono mb-1">#{skill.id}</span>
                  <span className="text-sm font-headline text-white/80 uppercase tracking-widest">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-[45%] right-6 md:right-12 max-w-md text-right animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-white mb-6 leading-tight">
              Building & Optimizing Data Solutions for AI-assisted Business Growth & Strategic Insights
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm ml-auto">
              I specialize in driving product and business impact through robust data engineering, efficient system design and scalable analytical & AI architectures.
            </p>
          </div>

          <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-8 pointer-events-auto">
            <a href="https://www.linkedin.com/in/sahoo-siddhant" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/siddhant-sahoo" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://x.com/Siddhant610" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
