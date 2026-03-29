
"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-white mb-12">
          Ready to <span className="text-primary italic">elevate</span> your data strategy?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether it's a coffee chat or a complex engineering challenge, I'm always looking for innovative projects to contribute to.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button size="lg" asChild className="h-16 px-12 text-lg rounded-full font-headline font-bold bg-primary hover:bg-primary/80 text-white shadow-[0_0_30px_rgba(0,179,255,0.4)]">
            <a href="mailto:sahoo.siddhant6@gmail.com">
              Send Email <MessageSquare className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <a href="https://www.linkedin.com/in/sahoo-siddhant/" className="text-white font-headline font-bold hover:text-primary transition-colors flex items-center group text-lg">
            Shoot a message for a coffee chat
            <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
