
"use client";

import React, { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simulated smooth progress for aesthetic during image sequence load
  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) return prev;
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleHeroReady = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Small buffer for reveal
  };

  return (
    <main className="relative bg-background">
      {isLoading && <LoadingScreen progress={progress} />}
      
      {!isLoading && (
        <div className="animate-fade-in">
          <Navbar />
          <Hero onLoaded={handleHeroReady} />
          <About />
          <Experience />
          <Projects />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      )}
      
      {/* Fallback for pre-load context */}
      <div className="invisible fixed inset-0 pointer-events-none overflow-hidden h-0">
        <Hero onLoaded={handleHeroReady} />
      </div>
    </main>
  );
}
