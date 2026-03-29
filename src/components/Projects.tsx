
"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Interactive PowerBI Dashboard",
      desc: "Track crucial KPIs with custom DAX measures and advanced data modeling.",
      image: "https://picsum.photos/seed/pbi/600/400",
      link: "#"
    },
    {
      title: "Azure COVID-19 Pipeline",
      desc: "End-to-end data engineering in Azure Data Factory with Databricks integration.",
      image: "https://picsum.photos/seed/azure/600/400",
      link: "#"
    },
    {
      title: "Airflow Production DAGs",
      desc: "Coding production-grade data pipelines using Airflow for complex ETL flows.",
      image: "https://picsum.photos/seed/airflow/600/400",
      link: "#"
    },
    {
      title: "RAG Chain AI Chat",
      desc: "Conversational AI that allows users to chat with any website content via LLMs.",
      image: "https://picsum.photos/seed/rag/600/400",
      link: "#"
    },
    {
      title: "PubMed Search Engine",
      desc: "LLM-augmented Q&A system for medical literature retrieval.",
      image: "https://picsum.photos/seed/med/600/400",
      link: "#"
    },
    {
      title: "Apple Sales Analysis",
      desc: "Using Databricks to create ETL Pipelines with PySpark for market insights.",
      image: "https://picsum.photos/seed/apple/600/400",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-headline font-bold tracking-tighter mb-6 underline decoration-primary underline-offset-8">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects focusing on data engineering, machine learning pipelines, and AI-driven applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer">
              <Card className="bg-muted/30 border-white/5 overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="text-white w-8 h-8" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-headline font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
