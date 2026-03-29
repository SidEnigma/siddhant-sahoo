
"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<string>("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="font-headline font-bold text-3xl tracking-tighter text-white mb-6">
              SS<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Engineering high-impact data solutions and AI systems for the next generation of intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-headline font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-headline font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-headline font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/SidEnigma" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="https://linkedin.com/in/sahoo-siddhant" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="mailto:sahoo.siddhant6@gmail.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest order-2 md:order-1">
            © {currentYear || '...'} Siddhant Sahoo
          </p>
          
          <div className="flex items-center space-x-3 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 order-1 md:order-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            <span className="text-[11px] font-bold text-green-400 uppercase tracking-[0.2em]">
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
