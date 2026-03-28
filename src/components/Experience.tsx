
"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      title: "Student Assistant",
      company: "University of Passau",
      period: "Apr 2023 - Mar 2024",
      points: [
        "Conducted exploratory data analyses and implemented deep learning classifiers, improved model accuracy by 6%, and strengthened price forecasting",
        "Developed retrieval datasets for LLM applications by implementing chunking strategies and embeddings, enabling RAG pipelines for academic use cases",
        "Implemented MLflow for experiment tracking, model evaluation, and version management, improving reproducibility"
      ]
    },
    {
      title: "Freelance Data Engineer",
      company: "Self-Employed",
      period: "Oct 2020 - Oct 2021",
      points: [
        "Optimized Spark jobs through partitioning strategies, memory tuning, and broadcast joins, reducing runtime by 20% on large datasets",
        "Built data models and deployed transformation pipelines in dbt with testing frameworks, reducing pipeline failures by 18%",
        "Created interactive dashboards in Power BI, enabling users to monitor sales and marketing KPIs, leading to a 15% increase in customer retention",
        "Investigated pipeline failures, delays, and data quality issues, performing monitoring, root cause analyses, and setting up alerts for anomalous patterns"
      ]
    },
    {
      title: "Analyst",
      company: "Deloitte US-India",
      period: "2021 - 2022",
      points: [
        "Engineered data warehouses in Azure, integrating REST APIs and ERP systems, enabling scalable ingestion of >5 million records",
        "Built ETL pipelines using Spark and Databricks to preprocess >14 GB of data, reducing processing time by 30%",
        "Employed Airflow DAGs, enabling pipeline orchestration and quality control across 5+ production workflows via real-time monitoring with Grafana",
        "Collaborated with stakeholders to understand business requirements, simplify technical details, and deliver strategic insights"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#151a1d]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-primary font-mono text-sm uppercase tracking-widest block mb-2">Professional Path</span>
            <h2 className="text-5xl font-headline font-bold tracking-tighter">Experience</h2>
          </div>
          <div className="h-px flex-1 bg-white/10 mx-8 hidden md:block mb-4" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="bg-transparent border-none shadow-none group">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <h3 className="text-2xl font-headline font-bold text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                    <p className="text-primary/70 font-medium text-sm mt-1">{exp.company}</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest mt-2">{exp.period}</p>
                  </div>
                  <div className="md:w-3/4 border-l border-white/10 pl-8 pb-12 relative">
                    <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-primary" />
                    <ul className="space-y-4">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed text-sm flex items-start">
                          <span className="mr-3 mt-1 text-primary">→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
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
