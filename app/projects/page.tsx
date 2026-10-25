"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");

  const matchesFilter = (category: string) => {
    if (filter === "all") return true;
    return category.includes(filter);
  };

  return (
<main className="w-full pt-20 bg-background min-h-screen" id="main-content"><div className="flex flex-col w-full">
{/*  SECTION HEADER & FILTERS  */}
<section className="max-w-7xl mx-auto w-full px-margin md:px-margin-md lg:px-margin-lg pt-space-lg pb-space-md">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="max-w-3xl space-y-space-xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed">
<span className="material-symbols-outlined text-base">terminal</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Portfolio &amp; Engineering Catalog</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          Featured Projects &amp; Technical Innovations
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Machine learning architectures, business intelligence dashboards, and full-scale data pipelines built for enterprise operations and hackathon challenges.
        </p>
</div>
{/*  Quick KPI Counters  */}
<div className="flex items-center gap-space-md bg-surface-container-low px-space-md py-space-sm rounded-xl">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline">Verified Accuracy</span>
<span className="font-metric-display text-metric-display text-primary leading-tight font-bold">90%</span>
</div>
<div className="w-px h-8 bg-surface-container-highest"></div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline">Records Ingested</span>
<span className="font-metric-display text-metric-display text-secondary leading-tight font-bold">20k+</span>
</div>
</div>
</div>
{/*  Interactive Category Filter Bar  */}
<div className="mt-space-lg flex flex-wrap items-center gap-space-xs" id="filter-container">
  <button
    type="button"
    onClick={() => setFilter("all")}
    className={`filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 ${
      filter === "all"
        ? "bg-primary text-on-primary font-semibold shadow-sm"
        : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
    }`}
  >
    All Projects (8)
  </button>
  <button
    type="button"
    onClick={() => setFilter("ml")}
    className={`filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 ${
      filter === "ml"
        ? "bg-primary text-on-primary font-semibold shadow-sm"
        : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
    }`}
  >
    Machine Learning &amp; AI
  </button>
  <button
    type="button"
    onClick={() => setFilter("bi")}
    className={`filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 ${
      filter === "bi"
        ? "bg-primary text-on-primary font-semibold shadow-sm"
        : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
    }`}
  >
    Business Intelligence &amp; BI
  </button>
  <button
    type="button"
    onClick={() => setFilter("hackathon")}
    className={`filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 ${
      filter === "hackathon"
        ? "bg-primary text-on-primary font-semibold shadow-sm"
        : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
    }`}
  >
    Hackathons &amp; Challenges
  </button>
</div>
</section>
{/*  MAIN PROJECT SHOWCASE (FLUID BENTO GRID)  */}
<section className="max-w-7xl mx-auto w-full px-margin md:px-margin-md lg:px-margin-lg py-space-md">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg" id="projects-grid">
{/*  PROJECT 1: AI-Powered Cybersecurity Incident Response Dashboard (BENTO FEATURE - SPAN 8)  */}
<article className="project-card lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group" data-category="ml" style={{ display: matchesFilter("ml") ? "flex" : "none" }}>
{/*  Visual Presentation Top  */}
<div className="relative bg-surface-container-low p-space-md flex flex-col justify-between min-h-[220px]">
<div className="flex items-center justify-between gap-space-sm z-10">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-xs">auto_awesome</span> Featured ML
              </span>
<span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-medium">
                2025
              </span>
</div>
<div className="flex items-center gap-space-xs">
<span className="p-2 bg-surface-container-lowest text-primary rounded-lg shadow-sm hover:bg-secondary-fixed transition-colors cursor-pointer" title="View Source Architecture">
<span className="material-symbols-outlined text-lg">code</span>
</span>
<span className="p-2 bg-surface-container-lowest text-primary rounded-lg shadow-sm hover:bg-secondary-fixed transition-colors cursor-pointer" title="Open Interactive Prototype">
<span className="material-symbols-outlined text-lg">north_east</span>
</span>
</div>
</div>
{/*  Abstract Analytical Circuit Line Preview  */}
<div className="w-full my-space-sm relative rounded-lg bg-surface-container-lowest p-space-sm flex items-center justify-between overflow-hidden shadow-inner">
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-ping"></span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">LightGBM Ingestion Engine</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant font-mono">10,000+ CSOC telemetric rows parsed</p>
</div>
{/*  Inline SVG Sparkline  */}
<svg className="w-36 h-12 text-secondary stroke-current fill-none" strokeWidth="2.5" viewBox="0 0 160 40">
<path d="M0 32 L25 28 L48 35 L75 14 L100 22 L125 8 L155 4" strokeLinecap="round" strokeLinejoin="round"></path>
<circle className="fill-primary stroke-surface-container-lowest stroke-2" cx="155" cy="4" r="3.5"></circle>
</svg>
</div>
</div>
{/*  Content Body  */}
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors font-bold">
              AI-Powered Cybersecurity Incident Response Dashboard
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Built an end-to-end ML-driven incident management dashboard integrated with Python and LightGBM to predict incident resolution time with 90% accuracy. Processed and ingested 10,000+ incident records to streamline CSOC prioritization and threat triage protocols.
            </p>
</div>
{/*  Metric Highlight Box  */}
<div className="grid grid-cols-2 gap-space-md p-space-sm bg-surface-container-low rounded-lg">
<div className="space-y-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Predictive Accuracy</span>
<div className="flex items-center gap-1 font-metric-display text-metric-display text-primary">
                90%
                <span className="material-symbols-outlined text-tertiary-container text-base">verified</span>
</div>
</div>
<div className="space-y-0.5">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Data Scale</span>
<div className="font-metric-display text-metric-display text-secondary">
                10,000+ <span className="font-label-sm text-label-sm font-normal text-on-surface-variant">incidents</span>
</div>
</div>
</div>
{/*  Technology Badges  */}
<div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
      <button
        onClick={() => setFilter("all")}
        className={`filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 ${
          filter === "all"
            ? "bg-primary text-on-primary font-semibold shadow-sm"
            : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
        }`}
      >
        All Projects (8)
      </button>
      <button
        onClick={() => setFilter("ml")}
        className={`filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 ${
          filter === "ml"
            ? "bg-primary text-on-primary font-semibold shadow-sm"
            : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
        }`}
      >
        Machine Learning &amp; AI
      </button>
      <button
        onClick={() => setFilter("bi")}
        className={`filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 ${
          filter === "bi"
            ? "bg-primary text-on-primary font-semibold shadow-sm"
            : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
        }`}
      >
        Business Intelligence &amp; BI
      </button>
      <button
        onClick={() => setFilter("hackathon")}
        className={`filter-btn px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 ${
          filter === "hackathon"
            ? "bg-primary text-on-primary font-semibold shadow-sm"
            : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
        }`}
      >
        Hackathons &amp; Challenges
      </button>
    </div>
</div>
</article>
{/*  PROJECT 2: NLP Trend-to-Product Matchmaker (BENTO SPAN 4)  */}
<article className="project-card lg:col-span-4 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group" data-category="ml hackathon" style={{ display: matchesFilter("ml hackathon") ? "flex" : "none" }}>
{/*  Top Section with Visual Banner  */}
<div className="relative bg-secondary-fixed-dim/20 p-space-md flex flex-col justify-between min-h-[160px]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-tertiary text-on-tertiary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-xs">trophy</span> Datathon Finalist
            </span>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm font-medium">
              Sep 2025
            </span>
</div>
{/*  NLP Semantic Vectors Visual  */}
<div className="mt-space-md p-space-xs bg-surface-container-lowest/80 backdrop-blur rounded-lg flex items-center justify-between">
<span className="font-label-sm text-label-sm font-mono text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-sm">hub</span> TF-IDF Vectors
            </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Streamlit Live App</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors font-bold">
              NLP Trend-to-Product Matchmaker
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Developed an NLP analytics workflow extracting emerging consumer and formulation trends from 10,000+ unstructured rows; synthesized and mapped on an interactive Streamlit UI for the L'Oréal x Monash Datathon.
            </p>
</div>
{/*  Metric  */}
<div className="p-space-sm bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-outline">Dataset Capacity &amp; Challenge</span>
<div className="font-headline-sm text-headline-sm text-primary font-bold">
              10k+ <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">Unstructured Rows | L'Oréal Datathon</span>
</div>
</div>
{/*  Tech Tags  */}
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed">Hugging Face</span>
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed">Streamlit</span>
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed">TF-IDF</span>
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant">Text Mining</span>
</div>
</div>
</article>
{/*  PROJECT 3: Cyber Security Incident Response Dashboard (BI FOCUS - SPAN 4)  */}
<article className="project-card lg:col-span-4 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group" data-category="bi" style={{ display: matchesFilter("bi") ? "flex" : "none" }}>
<div className="p-space-md bg-surface-container-low flex flex-col justify-between min-h-[160px]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-xs">analytics</span> BI &amp; Security
            </span>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm font-medium">
              2024
            </span>
</div>
{/*  SANS Phase mini badges  */}
<div className="flex items-center justify-between gap-1 mt-space-sm">
<span className="px-2 py-1 rounded bg-surface-container-lowest text-center font-label-sm text-[10px] text-primary flex-1 font-mono">1. Prep</span>
<span className="px-2 py-1 rounded bg-surface-container-lowest text-center font-label-sm text-[10px] text-primary flex-1 font-mono">2. ID</span>
<span className="px-2 py-1 rounded bg-surface-container-lowest text-center font-label-sm text-[10px] text-primary flex-1 font-mono">3. Contain</span>
<span className="px-2 py-1 rounded bg-surface-container-lowest text-center font-label-sm text-[10px] text-primary flex-1 font-mono">4. Erad</span>
<span className="px-2 py-1 rounded bg-surface-container-lowest text-center font-label-sm text-[10px] text-primary flex-1 font-mono">5. Rec</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors font-bold">
              Cyber Security Incident Response BI
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Streamlined an end-to-end incident response dashboard aligned to the 5 phases of SANS Incident Handling, supported by robust SQL-based relational data models and dynamic DAX metrics.
            </p>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-outline">Framework &amp; Data Pipeline</span>
<div className="font-headline-sm text-headline-sm text-primary font-bold">
              5 Phases SANS <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">Live SIEM Telemetry</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed">Power BI</span>
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed">DAX Calculations</span>
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed">SQL Warehousing</span>
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant">SIEM Feeds</span>
</div>
</div>
</article>
{/*  PROJECT 4: LinguaHands: Sign Language Translator (SPAN 4)  */}
<article className="project-card lg:col-span-4 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group" data-category="ml" style={{ display: matchesFilter("ml") ? "flex" : "none" }}>
<div className="p-space-md bg-surface-container-low flex flex-col justify-between min-h-[160px]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-xs">visibility</span> Computer Vision
            </span>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm font-medium">
              2025
            </span>
</div>
{/*  Hand Gesture Recognition Mock Icon Graph  */}
<div className="p-space-xs bg-surface-container-lowest rounded-lg flex items-center justify-around">
<span className="material-symbols-outlined text-primary text-2xl">front_hand</span>
<span className="material-symbols-outlined text-secondary-fixed-dim text-lg">arrow_forward</span>
<span className="material-symbols-outlined text-primary text-2xl">graphic_eq</span>
<span className="material-symbols-outlined text-secondary-fixed-dim text-lg">arrow_forward</span>
<span className="material-symbols-outlined text-tertiary-container text-2xl">record_voice_over</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors font-bold">
              LinguaHands: Sign Language Translator
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Contributed to a machine vision-enabled application for real-time sign language translation with high-fidelity Figma UI/UX prototyping, spatial interaction models, and WCAG accessibility standards.
            </p>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-outline">Application Architecture</span>
<div className="font-headline-sm text-headline-sm text-primary font-bold">
              Real-Time <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">Vision &amp; Accessibility UX</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed">Computer Vision</span>
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed">Figma UI/UX</span>
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed">NLP</span>
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant">User Research</span>
</div>
</div>
</article>
{/*  PROJECT 5: EcoLog: Logistics Carbon Tracker (SPAN 4)  */}
<article className="project-card lg:col-span-4 bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group" data-category="hackathon bi" style={{ display: matchesFilter("hackathon bi") ? "flex" : "none" }}>
<div className="p-space-md bg-tertiary-fixed/30 flex flex-col justify-between min-h-[160px]">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-tertiary-container text-tertiary-fixed font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-xs">eco</span> Sustainability / SAP
            </span>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm font-medium">
              2023
            </span>
</div>
{/*  Carbon Reduction Pill Visual  */}
<div className="flex items-center justify-between p-space-xs bg-surface-container-lowest/90 rounded-lg">
<span className="font-label-sm text-label-sm text-on-tertiary-fixed-variant font-medium">EY Tech Challenge</span>
<span className="font-label-sm text-label-sm font-bold text-tertiary-container">-28% CO2e Model</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors font-bold">
              EcoLog: Logistics Carbon Tracker
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Spearheaded a multidisciplinary team of 4 utilizing SAP enterprise technologies to prototype an intelligent logistics solution reducing carbon footprint emissions by 28% for the EY Young Technology Professional Challenge.
            </p>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg">
<span className="font-label-sm text-label-sm text-outline">Simulated Impact</span>
<div className="flex items-center gap-1 font-headline-sm text-headline-sm text-primary font-bold">
              28% Reduction <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">in supply emissions</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed">SAP S/4HANA</span>
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed">ESG Analytics</span>
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed">Figma</span>
<span className="px-space-sm py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant">Enterprise Arch</span>
</div>
</div>
</article>
</div>
</section>
{/*  ADDITIONAL NOTABLE WORKS: COMPACT DATA MATRIX  */}
<section className="max-w-7xl mx-auto w-full px-margin md:px-margin-md lg:px-margin-lg pt-space-xl pb-space-lg">
<div className="space-y-space-xs mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-base">folder_open</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Specialized Prototypes &amp; Systems</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">
        Additional Technical Works &amp; Repositories
      </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  Work 1: PayBridge  */}
<div className="project-card bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-category="hackathon" style={{ display: matchesFilter("hackathon") ? "flex" : "none" }}>
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
              PayHack 2025
            </span>
<span className="material-symbols-outlined text-outline text-lg">credit_score</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold pt-space-xs">PayBridge</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Fintech payment routing prototype featuring machine-learning powered dynamic transaction screening and fraud risk scoring engine.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-mono">Python / FastAPI / ML</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Work 2: Mock Telecom Database  */}
<div className="project-card bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-category="bi" style={{ display: matchesFilter("bi") ? "flex" : "none" }}>
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
              Enterprise Relational DB
            </span>
<span className="material-symbols-outlined text-outline text-lg">database</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold pt-space-xs">Telecom Data Engine</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Multi-tier Oracle DB relational database with rigorous query optimization, execution plan analysis, B-tree indexing, and event triggers.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-mono">Oracle SQL / PL-SQL</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Work 3: Interactive Java Suite  */}
<div className="project-card bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between" data-category="ml" style={{ display: matchesFilter("ml") ? "flex" : "none" }}>
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
              Software Architecture
            </span>
<span className="material-symbols-outlined text-outline text-lg">videogame_asset</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold pt-space-xs">Interactive Systems Suite</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Clean object-oriented architecture designed using Java and GUI frameworks implementing custom collision algorithms and state machines.
          </p>
</div>
<div className="pt-space-md flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-mono">Java OOP / Swing GUI</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
</section>
{/*  TECHNICAL SUMMARY & CTA STRIP  */}
<section className="max-w-7xl mx-auto w-full px-margin md:px-margin-md lg:px-margin-lg py-space-xl">
<div className="bg-primary-container text-on-primary rounded-xl p-space-lg md:p-space-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-space-lg">
{/*  Ambient circuit backdrop line  */}
<div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
<svg fill="currentColor" height="340" viewBox="0 0 200 200" width="340">
<path d="M40 0 H160 V40 H200 V160 H160 V200 H40 V160 H0 V40 H40 Z"></path>
</svg>
</div>
<div className="space-y-space-xs max-w-xl z-10">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">Collaboration &amp; Deployment</span>
<h3 className="font-headline-md text-headline-md text-on-primary font-bold">Interested in deeper pipeline technical specifications?</h3>
<p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
          Full codebases, reproducible research environments, and Power BI report templates are available for technical audits upon request.
        </p>
</div>
<div className="flex items-center gap-space-sm z-10 flex-shrink-0">
<Link className="inline-flex items-center justify-center px-space-md py-space-sm bg-on-primary text-primary font-label-md text-label-md rounded-lg font-semibold hover:bg-secondary-fixed transition-colors shadow-sm" href="/contact">
          Discuss Project Ingestion
        </Link>
<Link className="inline-flex items-center justify-center px-space-md py-space-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg font-medium hover:bg-secondary transition-colors" href="/experience">
          View Experience Log
        </Link>
</div>
</div>
</section>
</div>
{/*  CLIENT INTERACTIVITY: CATEGORY FILTERING SCRIPT  */}
</main>
  );
}
