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
              <a href="https://github.com/siddhant-sahoo" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="https://linkedin.com/in/siddhant-sahoo" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="mailto:sahoo.siddhant6@gmail.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            © {currentYear || '...'} Siddhant Sahoo. Built with cinematic precision.
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
