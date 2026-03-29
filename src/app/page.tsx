
"use client";

import React, { useState } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { cn } from '@/lib/utils';

export default function Portfolio() {
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleProgress = (progress: number) => {
    setLoadProgress(progress);
    if (progress === 100) {
      // Small delay for smooth transition after assets are ready
      setTimeout(() => setIsLoaded(true), 800);
    }
  };

  return (
    <main className="relative bg-background">
      {/* Loading Screen Overlay */}
      {!isLoaded && <LoadingScreen progress={loadProgress} />}
      
      {/* Main Content - Always mounted but hidden until loaded to preserve state */}
      <div className={cn(
        "transition-opacity duration-1000",
        isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <Navbar />
        <Hero onProgress={handleProgress} />
        <div id="content-sections">
          <About />
          <Experience />
          <Projects />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </main>
  );
}
