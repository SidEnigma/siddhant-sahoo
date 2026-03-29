
"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Amandeep Singh",
      role: "Data Intelligence Engineer",
      category: "Academic",
      quote: "Siddhant's approach to RAG pipelines was innovative. He has a unique talent for bridging complex AI theory with practical data engineering.",
      image: "https://picsum.photos/seed/t1/100/100"
    },
    {
      name: "Marcus Thorne",
      role: "CTO, TechFlow",
      category: "Industry",
      quote: "The Spark optimizations Siddhant implemented saved us thousands in cloud costs. A truly data-driven engineer with a business mindset.",
      image: "https://picsum.photos/seed/t2/100/100"
    },
    {
      name: "Shubham Kumar",
      role: "Assistant Manager",
      category: "Colleague",
      quote: "Collaborating with Siddhant at Deloitte was a highlight. His ETL designs are always scalable, clean, and meticulously documented.",
      image: "https://picsum.photos/seed/t3/100/100"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#1A2226]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-headline font-bold tracking-tighter">Collaborator Voices</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-background/40 border-white/5 relative overflow-hidden group">
              <CardContent className="p-8">
                <Quote className="text-primary w-10 h-10 mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                <p className="text-lg text-white/90 italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary/30 mr-4" />
                  <div>
                    <h4 className="font-headline font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 rounded-sm bg-primary/10 text-primary text-[10px] font-bold uppercase">
                      {t.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
