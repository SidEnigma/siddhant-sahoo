
"use client";

import React from 'react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
          <div className="relative aspect-[4/5] bg-muted rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://picsum.photos/seed/technology/800/1000"
              alt="About Visual"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>
        </div>

        <div className="space-y-8">
          <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold">
            The Vision
          </div>
          <h2 className="text-5xl font-headline font-bold leading-none tracking-tighter">
            Shaping the Future of <span className="text-primary italic">AI-Powered</span> Development
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a Data Engineer with a Master's in AI and with 3+ years of experience in data modeling, analytics, dashboarding, and cloud development. Strong foundation in statistics, machine learning, model evaluation, system design, and data quality monitoring.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {[
              "Data Warehousing and Data Lakes",
              "Distributed Processing",
              "Batch and Streaming Pipelines",
              "Artificial Intelligence and Machine Learning"
            ].map((skill, i) => (
              <li key={i} className="flex items-center space-x-3 text-white/80 group">
                <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
