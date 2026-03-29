
"use client";

import React from 'react';
import { Progress } from "@/components/ui/progress";

interface LoadingScreenProps {
  progress: number;
}

export function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center p-8">
      <div className="mb-8 flex flex-col items-center">
        <div className="text-4xl font-headline font-bold text-primary mb-2 tracking-tighter">SS</div>
        <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Siddhant Sahoo Portfolio</div>
      </div>
      
      <div className="w-full max-w-md space-y-4">
        <div className="flex justify-between items-end">
          <span className="text-xs font-headline text-muted-foreground uppercase tracking-widest">Initializing Visual Experience</span>
          <span className="text-lg font-headline font-bold text-primary">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-1 bg-muted" />
      </div>
      
      <div className="mt-12 flex space-x-4">
        <div className="w-1 h-1 rounded-full bg-primary animate-ping" />
        <div className="w-1 h-1 rounded-full bg-primary animate-ping delay-75" />
        <div className="w-1 h-1 rounded-full bg-primary animate-ping delay-150" />
      </div>
    </div>
  );
}
