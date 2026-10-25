"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [showToast, setShowToast] = useState(false);

  const handleDownloadCV = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
<main className="w-full pt-20 bg-background min-h-screen" id="main-content"><div className="flex flex-col w-full">
{/*  Subtle decorative ambient glow container  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-40 right-10 w-96 h-96 bg-secondary-fixed-dim/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-80 -left-20 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-xl">
{/*  Top Meta Breadcrumb & Action Banner  */}
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-space-md mb-space-lg">
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-low text-primary rounded-full shadow-sm w-fit">
<span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold text-on-surface-variant">Data Professional • Computer Scientist • Financial Technologist</span>
</div>
<div className="flex items-center gap-space-sm">
<button className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-secondary transition-all shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-secondary" id="download-cv-btn" onClick={handleDownloadCV}>
<span className="material-symbols-outlined text-base">download</span>
<span className="">Download Full CV / Resume</span>
</button>
<div className="hidden fixed bottom-6 right-6 z-50 bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-lg shadow-xl text-body-sm font-body-sm flex items-center gap-space-xs transition-opacity duration-300" id="cv-toast">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">check_circle</span>
<span className="">Resume download initiated: Wan_Daphneelya_CV.pdf</span>
</div>
</div>
</div>
{/*  Headline & Introduction Hero Section  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start mb-space-xl">
<div className="lg:col-span-8 space-y-space-md">
<h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
            Professional Profile &amp; Credentials
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            I am a Computer Science graduate specialized in Data Analytics with a minor in Financial Management from Universiti Teknologi PETRONAS. My work sits at the intersection of enterprise intelligence, data engineering, and business decision-making. Having automated high-impact reporting at UOB Malaysia and conducted cyber-incident analytics at Bank Negara Malaysia, I build reliable, production-ready data pipelines and intuitive executive dashboards.
          </p>
{/*  Executive Value Pillars Strip  */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center gap-space-xs text-primary mb-space-xs">
<span className="material-symbols-outlined text-xl">account_balance</span>
<span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">Domain</span>
</div>
<p className="font-headline-sm text-headline-sm text-primary font-bold">Fintech &amp; Banking</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">UOB Malaysia &amp; Central Bank (BNM) analytical exposure</p>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center gap-space-xs text-secondary mb-space-xs">
<span className="material-symbols-outlined text-xl">query_stats</span>
<span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">Core Practice</span>
</div>
<p className="font-headline-sm text-headline-sm text-primary font-bold">BI &amp; Pipelines</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Advanced DAX, ETL optimization, automated KPI reporting</p>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm">
<div className="flex items-center gap-space-xs text-tertiary-container mb-space-xs">
<span className="material-symbols-outlined text-xl">verified</span>
<span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">Merit Standing</span>
</div>
<p className="font-headline-sm text-headline-sm text-primary font-bold">3.85 CGPA</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Dean's List 8 consecutive semesters at UTP</p>
</div>
</div>
</div>
{/*  Visual Portrait & Quick Fact Card  */}
<div className="lg:col-span-4 flex flex-col gap-space-md">
<div className="relative bg-surface-container-lowest p-space-md rounded-xl shadow-md overflow-hidden">
<div className="relative w-full h-80 rounded-lg overflow-hidden bg-surface-container-high mb-space-md">
<img className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" data-alt="A professional, polished corporate headshot of Wan Daphneelya, a Southeast Asian young female data analyst and computer scientist in smart business attire. Natural warm professional studio lighting, calm composed demeanor with a soft friendly smile, navy blue blazer with a crisp white blouse. Ultra-clean architectural office background with faint geometric glass partitions." src="/images/profile-main.jpg" />
<div className="absolute bottom-3 left-3 bg-primary/90 text-on-primary px-space-sm py-space-xs rounded-full backdrop-blur-md flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span className="font-label-sm text-label-sm">Available for Roles</span>
</div>
</div>
<div className="space-y-space-xs">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-primary font-bold">Wan Daphneelya</h2>
<span className="px-space-xs py-0.5 bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm rounded">UTP CS '26</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Kuala Lumpur Metropolitan Area • Open to Hybrid &amp; On-site BI Analytics Positions</p>
<div className="pt-space-sm flex items-center gap-space-sm">
<a aria-label="Send email" className="p-2 rounded-lg bg-surface-container-low text-primary hover:bg-primary hover:text-on-primary transition-colors focus:ring-2 focus:ring-secondary" href="mailto:daphnee.ahmed@gmail.com">
<span className="material-symbols-outlined text-lg">mail</span>
</a>
<a aria-label="Call directly" className="p-2 rounded-lg bg-surface-container-low text-primary hover:bg-primary hover:text-on-primary transition-colors focus:ring-2 focus:ring-secondary" href="tel:+60198605028">
<span className="material-symbols-outlined text-lg">call</span>
</a>
<a aria-label="LinkedIn Profile" className="p-2 rounded-lg bg-surface-container-low text-primary hover:bg-primary hover:text-on-primary transition-colors focus:ring-2 focus:ring-secondary" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-lg">share</span>
</a>
<span className="font-label-sm text-label-sm text-on-surface-variant ml-auto font-medium">Bilingual • MS / EN</span>
</div>
</div>
</div>
</div>
</div>
{/*  Main Section 1: Academic Excellence & Certifications Bento  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">
{/*  Education Card (7 cols)  */}
<div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col justify-between">
<div>
<div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold">
<span className="material-symbols-outlined text-2xl">school</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Undergraduate Education</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Universiti Teknologi PETRONAS (UTP)</h3>
</div>
</div>
<span className="px-space-sm py-space-xs bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label-sm text-label-sm font-semibold">
                Class of 2026
              </span>
</div>
<div className="p-space-md rounded-lg bg-surface-container-low mb-space-md">
<p className="font-headline-sm text-headline-sm text-primary font-semibold">
                Bachelor in Computer Science (Data Analytics) (Hons.)
              </p>
<p className="font-body-md text-body-md text-secondary font-medium mt-1">
                Minor in Financial Management
              </p>
</div>
{/*  Academic Merit Metrics  */}
<div className="grid grid-cols-2 gap-space-md mb-space-md">
<div className="bg-surface p-space-md rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Cumulative GPA</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">3.85</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/ 4.00 Max</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">First Class Honors Standing</p>
</div>
<div className="bg-surface p-space-md rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Dean's Honor List</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-headline-lg text-headline-lg text-secondary font-bold tracking-tight">8 / 8</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Semesters</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Unbroken Academic Excellence</p>
</div>
</div>
{/*  Coursework Badges  */}
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm uppercase font-semibold text-on-surface-variant tracking-wider">Core Coursework Highlights</span>
<div className="flex flex-wrap gap-space-xs pt-1">
<span className="px-space-sm py-space-xs bg-surface-container-high text-primary rounded-md font-label-sm text-label-sm font-medium">Advanced Database Systems</span>
<span className="px-space-sm py-space-xs bg-surface-container-high text-primary rounded-md font-label-sm text-label-sm font-medium">Machine Learning &amp; AI</span>
<span className="px-space-sm py-space-xs bg-surface-container-high text-primary rounded-md font-label-sm text-label-sm font-medium">Business Intelligence</span>
<span className="px-space-sm py-space-xs bg-surface-container-high text-primary rounded-md font-label-sm text-label-sm font-medium">Corporate Finance</span>
<span className="px-space-sm py-space-xs bg-surface-container-high text-primary rounded-md font-label-sm text-label-sm font-medium">Predictive Modeling</span>
<span className="px-space-sm py-space-xs bg-surface-container-high text-primary rounded-md font-label-sm text-label-sm font-medium">Data Structures &amp; Algorithms</span>
<span className="px-space-sm py-space-xs bg-surface-container-high text-primary rounded-md font-label-sm text-label-sm font-medium">Financial Risk Analytics</span>
</div>
</div>
</div>
{/*  Academic Performance Sparkline Visualization  */}
<div className="mt-space-md pt-space-md bg-surface-container-low/60 p-space-md rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm font-semibold text-primary">Academic Trajectory (Semesters 1 - 8)</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Consistent &gt; 3.80 Range</span>
</div>
{/*  Clean SVG Sparkline  */}
<svg className="w-full h-12 text-secondary" fill="none" preserveAspectRatio="none" viewBox="0 0 400 50">
<defs>
<linearGradient id="gradAcademic" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="currentColor" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="currentColor" stop-opacity="0.0"></stop>
</linearGradient>
</defs>
<path d="M 10 38 Q 60 30, 110 24 T 210 18 T 310 12 T 390 10 L 390 50 L 10 50 Z" fill="url(#gradAcademic)"></path>
<path d="M 10 38 Q 60 30, 110 24 T 210 18 T 310 12 T 390 10" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="10" cy="38" fill="currentColor" r="3.5"></circle>
<circle cx="110" cy="24" fill="currentColor" r="3.5"></circle>
<circle cx="210" cy="18" fill="currentColor" r="3.5"></circle>
<circle cx="310" cy="12" fill="currentColor" r="3.5"></circle>
<circle cx="390" cy="10" fill="#DD6B20" r="4.5" stroke="#FFFFFF" strokeWidth="1.5"></circle>
</svg>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant mt-1">
<span className="">Sem 1 (3.81)</span>
<span className="">Sem 4 (3.84)</span>
<span className="">Sem 6 (3.86)</span>
<span className="">Sem 8 (3.89)</span>
</div>
</div>
</div>
{/*  Certifications Showcase (5 cols)  */}
<div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-2xl">workspace_premium</span>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Industry Certifications</h3>
</div>
<span className="font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-space-sm py-0.5 rounded-full">Verified 2026</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Rigorous external certifications reinforcing competencies in cloud infrastructure and enterprise data governance.
              </p>
{/*  Certification 1: CompTIA Data+  */}
<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm mb-space-md hover:shadow-md transition-shadow">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-2xl">insights</span>
</div>
<div className="space-y-1 flex-1 min-w-0">
<div className="flex items-center justify-between">
<h4 className="font-headline-sm text-headline-sm text-primary font-bold truncate">CompTIA Data+</h4>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">Active</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant font-medium">Code: DA0-002 • Issued 2026</p>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-snug">
                      Data mining, data governance, quality control procedures, statistical visualization, and executive reporting standards.
                    </p>
<div className="pt-2 flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">verified_user</span>
<span className="">Authorized CompTIA Credential</span>
</div>
</div>
</div>
</div>
{/*  Certification 2: AWS Certified Cloud Practitioner  */}
<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-2xl">cloud_sync</span>
</div>
<div className="space-y-1 flex-1 min-w-0">
<div className="flex items-center justify-between">
<h4 className="font-headline-sm text-headline-sm text-primary font-bold truncate">AWS Cloud Practitioner</h4>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">Active</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant font-medium">Code: CLF-C02 • Issued 2026</p>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-snug">
                      Cloud architecture principles, IAM security governance, AWS data pipelines (S3, CloudWatch, serverless compute basics).
                    </p>
<div className="pt-2 flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">cloud_done</span>
<span className="">Amazon Web Services Validation</span>
</div>
</div>
</div>
</div>
</div>
{/*  Verification Footer Bar  */}
<div className="mt-space-md pt-space-sm bg-surface p-space-sm rounded-lg flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm">Badge IDs available on CV</span>
<Link className="font-label-sm text-label-sm text-secondary font-semibold hover:underline flex items-center gap-1" href="/contact">
<span className="">Request Transcripts</span>
<span className="material-symbols-outlined text-xs">arrow_forward</span>
</Link>
</div>
</div>
</div>
</div>
{/*  Main Section 2: Technical Skills Matrix  */}
<div className="w-full bg-surface-container-lowest p-space-lg rounded-xl shadow-md mb-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
<div>
<div className="inline-flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
<span className="material-symbols-outlined text-base">terminal</span>
<span className="">Capabilities &amp; Competencies</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">Technical Skills Matrix</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl mt-1">
              Engineered for data fidelity, scalable ETL pipelines, and executive dashboards. Categorized by proficiency with production tooling.
            </p>
</div>
{/*  Quick interactive filter indicator  */}
<div className="flex items-center gap-space-xs bg-surface-container-low p-1.5 rounded-lg">
<span className="px-space-sm py-1 rounded bg-surface-container-lowest font-label-sm text-label-sm font-semibold text-primary shadow-sm">All Competencies</span>
<span className="px-space-sm py-1 font-label-sm text-label-sm text-on-surface-variant">Full Stack Data</span>
</div>
</div>
{/*  5-Column/Categorized Grid Matrix  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
{/*  1. Data & Analytics (Prominent / Highlighted Card)  */}
<div className="lg:col-span-2 bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-md bg-primary text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-lg">analytics</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Data &amp; Analytics Core</h3>
</div>
<span className="font-label-sm text-label-sm font-semibold px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed">Primary Expertise</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                End-to-end analytical stack: complex query orchestration, feature modeling, metric standardizations, and visual intelligence.
              </p>
{/*  Deep breakdown of competencies  */}
<div className="space-y-space-sm">
<div className="p-space-sm rounded-lg bg-surface-container-lowest">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-primary">Advanced SQL Architecture</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Senior Proficiency</span>
</div>
<div className="flex flex-wrap gap-1.5 mt-1">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-sm text-label-sm">Window Functions</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-sm text-label-sm">Complex Joins &amp; CTEs</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-sm text-label-sm">Aggregation Pipelines</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-sm text-label-sm">Subquery Optimization</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-lowest">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-primary">Python Data Science Ecosystem</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Advanced</span>
</div>
<div className="flex flex-wrap gap-1.5 mt-1">
<span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-medium">Pandas</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-medium">NumPy</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-medium">Scikit-learn</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-medium">Data Preprocessing</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-medium">Feature Engineering</span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-lowest">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-primary">Power BI &amp; Business Intelligence</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Specialist</span>
</div>
<div className="flex flex-wrap gap-1.5 mt-1">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant font-label-sm text-label-sm">DAX Modeling</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant font-label-sm text-label-sm">Star Schema Modeling</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant font-label-sm text-label-sm">Dynamic KPI Dashboards</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant font-label-sm text-label-sm">Data Cleansing &amp; Power Query</span>
</div>
</div>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="">Production applied at Bank Negara Malaysia &amp; UOB</span>
<span className="font-bold text-primary">Automated &gt; 120hrs / Mo</span>
</div>
</div>
{/*  2. Programming Languages Card  */}
<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs mb-space-sm">
<div className="w-8 h-8 rounded-md bg-secondary text-on-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-lg">code</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Programming</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Formal computer science foundational languages for backend algorithms, scripts, and manipulation.
              </p>
<div className="space-y-space-sm">
<div className="bg-surface-container-lowest p-space-sm rounded-lg">
<div className="flex justify-between items-center mb-1">
<span className="font-label-sm text-label-sm font-bold text-primary">SQL</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">95%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"95%"}}></div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg">
<div className="flex justify-between items-center mb-1">
<span className="font-label-sm text-label-sm font-bold text-primary">Python</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">90%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width":"90%"}}></div>
</div>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg">
<div className="flex justify-between items-center mb-1">
<span className="font-label-sm text-label-sm font-bold text-primary">Java</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">75%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{"width":"75%"}}></div>
</div>
</div>
</div>
</div>
<div className="pt-space-md text-on-surface-variant font-label-sm text-label-sm">
<span className="">Object-Oriented Programming • Algorithmic Efficiency</span>
</div>
</div>
{/*  3. Cloud / Platforms / Database Card  */}
<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs mb-space-sm">
<div className="w-8 h-8 rounded-md bg-primary-container text-on-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-lg">database</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Cloud &amp; Databases</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Enterprise relational databases, cloud storage buckets, and architectural services.
              </p>
<div className="flex flex-col gap-space-xs">
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between">
<div>
<p className="font-label-sm text-label-sm font-bold text-primary">AWS Cloud Services</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-xs">S3 Bucket Storage, CloudWatch, Lambda basics</p>
</div>
<span className="material-symbols-outlined text-secondary">cloud</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between">
<div>
<p className="font-label-sm text-label-sm font-bold text-primary">OracleDB</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-xs">Enterprise schemas, stored procedures, banking DB</p>
</div>
<span className="material-symbols-outlined text-primary">dataset</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between">
<div>
<p className="font-label-sm text-label-sm font-bold text-primary">MySQL</p>
<p className="font-body-sm text-body-sm text-on-surface-variant text-xs">Relational schema design, normalization, indexing</p>
</div>
<span className="material-symbols-outlined text-secondary">storage</span>
</div>
</div>
</div>
<div className="pt-space-md text-on-surface-variant font-label-sm text-label-sm">
<span className="">ACID Compliance • Relational Integrity</span>
</div>
</div>
{/*  4. Tools & Developer Workflow Card  */}
<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs mb-space-sm">
<div className="w-8 h-8 rounded-md bg-secondary text-on-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-lg">build</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Tools &amp; Workflows</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Daily drivers for modeling, version control, exploratory analysis, and automated workflows.
              </p>
<div className="flex flex-wrap gap-2">
<div className="px-space-sm py-2 rounded-lg bg-surface-container-lowest flex items-center gap-2 flex-1 min-w-[130px]">
<span className="material-symbols-outlined text-primary text-base">table_view</span>
<div>
<p className="font-label-sm text-label-sm font-bold text-primary">Advanced Excel</p>
<p className="text-xs text-on-surface-variant">Macros, VBA, XLOOKUP</p>
</div>
</div>
<div className="px-space-sm py-2 rounded-lg bg-surface-container-lowest flex items-center gap-2 flex-1 min-w-[130px]">
<span className="material-symbols-outlined text-secondary text-base">source</span>
<div>
<p className="font-label-sm text-label-sm font-bold text-primary">Git &amp; GitHub</p>
<p className="text-xs text-on-surface-variant">Branching &amp; CI/CD flow</p>
</div>
</div>
<div className="px-space-sm py-2 rounded-lg bg-surface-container-lowest flex items-center gap-2 flex-1 min-w-[130px]">
<span className="material-symbols-outlined text-tertiary-container text-base">menu_book</span>
<div>
<p className="font-label-sm text-label-sm font-bold text-primary">Jupyter Notebook</p>
<p className="text-xs text-on-surface-variant">Exploratory Data Analysis</p>
</div>
</div>
<div className="px-space-sm py-2 rounded-lg bg-surface-container-lowest flex items-center gap-2 flex-1 min-w-[130px]">
<span className="material-symbols-outlined text-primary text-base">laptop_chromebook</span>
<div>
<p className="font-label-sm text-label-sm font-bold text-primary">VS Code</p>
<p className="text-xs text-on-surface-variant">Scripting &amp; debugging</p>
</div>
</div>
</div>
</div>
<div className="pt-space-md text-on-surface-variant font-label-sm text-label-sm">
<span className="">Agile Development • Reproducible Research</span>
</div>
</div>
{/*  5. Languages & Communication  */}
<div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-xs mb-space-sm">
<div className="w-8 h-8 rounded-md bg-tertiary-container text-on-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-lg">translate</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Languages</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Bilingual fluency enabling comfortable communication with executive boards and technical engineering teams.
              </p>
<div className="space-y-space-sm">
<div className="bg-surface-container-lowest p-space-sm rounded-lg">
<div className="flex justify-between items-center mb-1">
<span className="font-headline-sm text-headline-sm text-primary font-bold">English</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">Fluent / Professional</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Professional working proficiency in executive reporting &amp; technical documentation.</p>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg">
<div className="flex justify-between items-center mb-1">
<span className="font-headline-sm text-headline-sm text-primary font-bold">Malay</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">Native Proficiency</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Native first language with comprehensive business and vernacular command.</p>
</div>
</div>
</div>
<div className="pt-space-md text-on-surface-variant font-label-sm text-label-sm">
<span className="">Cross-Functional Stakeholder Alignment</span>
</div>
</div>
</div>
</div>
{/*  Bottom Interactive Callout / Transition to Next Page  */}
<div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="space-y-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">explore</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">Interested in demonstrated work history?</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Explore detailed corporate engagements, including UOB Malaysia and Central Bank (BNM) project delivery timelines.
          </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<Link className="px-space-md py-space-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-secondary transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-secondary" href="/experience">
            View Experience Timeline →
          </Link>
<Link className="px-space-md py-space-sm bg-surface-container-highest text-primary rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all focus:outline-none focus:ring-2 focus:ring-secondary" href="/projects">
            View Projects
          </Link>
</div>
</div>
</div>
</div>

</div></main>
  );
}
