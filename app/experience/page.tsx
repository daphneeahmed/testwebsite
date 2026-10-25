import Link from "next/link";

export default function ExperiencePage() {
  return (
<main className="w-full pt-20 bg-background min-h-screen" id="main-content"><div className="flex flex-col w-full">
<div className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-xl w-full">
{/*  Top Strategic Context Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-xl">
<div className="max-w-2xl space-y-space-xs">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-secondary-container text-on-secondary-container">
<span className="material-symbols-outlined text-base">work_history</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Career Track Record</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Professional Experience &amp; Career Timeline</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Demonstrated impact across commercial banking and central bank regulatory analytics.</p>
</div>
{/*  Quick Action / Status Badge  */}
<div className="flex flex-wrap items-center gap-space-sm">
<div className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container text-primary shadow-sm">
<span className="material-symbols-outlined text-secondary">verified_user</span>
<span className="font-label-md text-label-md font-semibold">2 Tier-1 Financial Institutions</span>
</div>
<a className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-secondary transition-all shadow-sm" href="mailto:daphnee.ahmed@gmail.com">
<span className="material-symbols-outlined text-base">download</span>
<span className="">Request Full Dossier</span>
</a>
</div>
</div>
{/*  Key Impact Metrics Strip (High-Contrast Analytical Grid)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
{/*  Metric 1  */}
<div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="absolute -right-3 -top-3 w-16 h-16 bg-surface-container-low rounded-full opacity-60 pointer-events-none"></div>
<div>
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">UOB Automation</span>
<span className="material-symbols-outlined text-secondary text-xl">schedule</span>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-metric-display text-metric-display text-primary">40h</span>
<span className="font-label-md text-label-md text-on-tertiary-container font-semibold bg-tertiary-fixed/30 px-space-xs rounded">Monthly</span>
</div>
</div>
<div className="mt-space-md pt-space-sm">
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[85%] rounded-full"></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Manual reporting effort eliminated</p>
</div>
</div>
{/*  Metric 2  */}
<div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="absolute -right-3 -top-3 w-16 h-16 bg-secondary-fixed/40 rounded-full pointer-events-none"></div>
<div>
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Bank Negara Malaysia</span>
<span className="material-symbols-outlined text-secondary text-xl">shield</span>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-metric-display text-metric-display text-primary">100+</span>
<span className="font-label-md text-label-md text-secondary font-semibold">Incidents</span>
</div>
</div>
<div className="mt-space-md pt-space-sm">
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[95%] rounded-full"></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Deep-dive forensics telemetry cases</p>
</div>
</div>
{/*  Metric 3  */}
<div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="absolute -right-3 -top-3 w-16 h-16 bg-surface-container-high rounded-full pointer-events-none"></div>
<div>
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Central Bank Readiness</span>
<span className="material-symbols-outlined text-secondary text-xl">trending_up</span>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-metric-display text-metric-display text-primary">+75%</span>
<span className="font-label-md text-label-md text-on-tertiary-container font-semibold bg-tertiary-fixed/30 px-space-xs rounded">Uplift</span>
</div>
</div>
<div className="mt-space-md pt-space-sm">
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-tertiary-container h-full w-[75%] rounded-full"></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Simulated cyber-range drills</p>
</div>
</div>
{/*  Metric 4  */}
<div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="absolute -right-3 -top-3 w-16 h-16 bg-surface-container-low rounded-full pointer-events-none"></div>
<div>
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Governance &amp; SLA</span>
<span className="material-symbols-outlined text-secondary text-xl">task_alt</span>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-metric-display text-metric-display text-primary">100%</span>
<span className="font-label-md text-label-md text-secondary font-semibold">On-Time</span>
</div>
</div>
<div className="mt-space-md pt-space-sm">
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-full rounded-full"></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Executive reporting cycle delivery</p>
</div>
</div>
</div>
{/*  Main Experience Timeline Section  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  Interactive Filter & Institutional Context Sidebar (4 Cols)  */}
<div className="lg:col-span-4 space-y-space-md sticky top-28">
{/*  Executive Summary Card  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center gap-space-xs text-primary mb-space-sm">
<span className="material-symbols-outlined text-xl">account_balance</span>
<h2 className="font-headline-sm text-headline-sm font-bold">Domain Expertise</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
            Operational trajectory focused on mission-critical banking domains: workforce learning performance optimization at UOB and national financial cyber incident telemetry at Bank Negara Malaysia.
          </p>
<div className="space-y-space-xs">
<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<span className="font-label-md text-label-md text-primary font-medium">Commercial Banking (UOB)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Analytics / BI</span>
</div>
<div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
<span className="font-label-md text-label-md text-primary font-medium">Central Banking (BNM)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Cyber CSOC Ops</span>
</div>
</div>
</div>
{/*  Analytical Tooling Matrix  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<h3 className="font-label-md text-label-md uppercase tracking-wider font-bold text-on-surface-variant mb-space-md">Tooling &amp; Architecture Matrix</h3>
<div className="space-y-space-sm">
<div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface mb-1">
<span className="">Power BI &amp; DAX Modeling</span>
<span className="text-secondary font-semibold">95%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"95%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface mb-1">
<span className="">Advanced Excel, VBA &amp; Power Query</span>
<span className="text-secondary font-semibold">92%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"92%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface mb-1">
<span className="">SQL Data Cleansing &amp; Wrangling</span>
<span className="text-secondary font-semibold">88%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width":"88%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface mb-1">
<span className="">SIEM Telemetry &amp; SANS Incident Framework</span>
<span className="text-secondary font-semibold">84%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-tertiary-container h-full rounded-full" style={{"width":"84%"}}></div>
</div>
</div>
</div>
</div>
{/*  Institutional Snapshot  */}
<div className="bg-surface-container-high rounded-xl p-space-md flex items-center gap-space-md">
<img className="w-16 h-16 rounded-lg object-cover shadow-sm flex-shrink-0" data-alt="Modern high-rise commercial banking towers in Kuala Lumpur financial district with sleek blue glass facade reflecting clear daylight, sharp architectural focus." src="/images/experience-main.jpg" />
<div className="min-w-0">
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">Location Anchor</span>
<p className="font-body-sm text-body-sm font-semibold text-primary truncate">Kuala Lumpur Financial Hub</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Central Banking &amp; Regional APAC Ops</p>
</div>
</div>
</div>
{/*  Detailed Chronological Timeline (8 Cols)  */}
<div className="lg:col-span-8 relative">
{/*  Vertical Spine Line  */}
<div className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-surface-container-highest"></div>
<div className="space-y-space-xl">
{/*  Experience Card 1: UOB  */}
<div className="relative pl-12 sm:pl-16">
{/*  Timeline Node Indicator  */}
<div className="absolute left-2 sm:left-4 top-1 -translate-x-1/2 w-6 h-6 rounded-full bg-surface-container-lowest ring-4 ring-secondary-container flex items-center justify-center">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
</div>
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
{/*  Header Bar  */}
<div className="bg-surface-container-low p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div>
<div className="flex items-center gap-space-xs text-primary mb-1">
<span className="material-symbols-outlined text-lg">corporate_fare</span>
<span className="font-label-md text-label-md font-bold uppercase tracking-wider text-secondary">United Overseas Bank (Malaysia) Bhd.</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Learning Analytics Support Trainee</h3>
</div>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="inline-flex items-center gap-1 px-space-sm py-1 bg-surface-container-lowest rounded-md text-primary font-label-sm text-label-sm font-medium shadow-sm">
<span className="material-symbols-outlined text-sm">calendar_month</span>
                    Jun 2026 – Oct 2026
                  </span>
<span className="inline-flex items-center gap-1 px-space-sm py-1 bg-surface-container-lowest rounded-md text-on-surface-variant font-label-sm text-label-sm font-medium shadow-sm">
<span className="material-symbols-outlined text-sm">place</span>
                    Kuala Lumpur, MY
                  </span>
</div>
</div>
{/*  Main Content Body  */}
<div className="p-space-lg space-y-space-md">
{/*  Impact Callout  */}
<div className="p-space-md rounded-lg bg-surface-container flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-2xl flex-shrink-0">bolt</span>
<div>
<h4 className="font-label-md text-label-md text-primary font-bold">40 Hours Reclaimed Monthly via Automated Macro Workflows</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Replaced error-prone human spreadsheet collation with fully autonomous Power Query pipelines and programmed VBA procedures.</p>
</div>
</div>
{/*  Structured Bullet Achievements  */}
<div className="space-y-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
<p className="font-body-md text-body-md text-on-surface">
<strong className="font-semibold text-primary">Executive Visualization &amp; Modeling:</strong> Designed, modeled, and published executive Power BI dashboards that streamlined monthly and quarterly reporting cycles for both senior leadership and operational supervisors.
                    </p>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
<p className="font-body-md text-body-md text-on-surface">
<strong className="font-semibold text-primary">Data Integrity Engineering:</strong> Managed end-to-end data cleansing, dataset maintenance, and complex SQL/Excel queries leveraging XLOOKUP, advanced lookup indexes, and VBA scripts to guarantee pristine audit standards.
                    </p>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
<p className="font-body-md text-body-md text-on-surface">
<strong className="font-semibold text-primary">Institutional Governance:</strong> Formulated comprehensive technical documentation and standardized data dictionary guidelines for peer onboarding and continuous reporting accuracy.
                    </p>
</div>
</div>
{/*  Mini Data Metric Visualization  */}
<div className="p-space-md bg-surface-container-low rounded-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Workflow Acceleration</span>
<p className="font-body-sm text-body-sm text-primary font-medium">Monthly reporting turnaround reduced from 5 business days to 4.5 hours.</p>
</div>
<div className="flex items-center gap-space-sm flex-shrink-0">
<div className="text-right">
<div className="font-label-sm text-label-sm text-on-surface-variant">Cycle Efficiency</div>
<div className="font-headline-sm text-headline-sm font-bold text-primary">+88%</div>
</div>
<svg className="w-16 h-8 text-primary" viewBox="0 0 100 40">
<path d="M 5 35 Q 30 30 50 20 T 95 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="95" cy="5" fill="#3b6090" r="3"></circle>
</svg>
</div>
</div>
{/*  Core Tools Chips  */}
<div>
<span className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold mb-space-xs">Core Tech Stack &amp; Methodologies</span>
<div className="flex flex-wrap gap-space-xs">
<span className="px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">Power BI</span>
<span className="px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">Power Query (M)</span>
<span className="px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">Excel (VBA / Macros)</span>
<span className="px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">Advanced XLOOKUP</span>
<span className="px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">DAX Calculations</span>
<span className="px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">Data Dictionary Governance</span>
</div>
</div>
</div>
</div>
</div>
{/*  Experience Card 2: Bank Negara Malaysia  */}
<div className="relative pl-12 sm:pl-16">
{/*  Timeline Node Indicator  */}
<div className="absolute left-2 sm:left-4 top-1 -translate-x-1/2 w-6 h-6 rounded-full bg-surface-container-lowest ring-4 ring-secondary-container flex items-center justify-center">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
</div>
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
{/*  Header Bar  */}
<div className="bg-surface-container-low p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div>
<div className="flex items-center gap-space-xs text-primary mb-1">
<span className="material-symbols-outlined text-lg">assured_workload</span>
<span className="font-label-md text-label-md font-bold uppercase tracking-wider text-secondary">Bank Negara Malaysia (Central Bank)</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Cyber Security Operations Centre (CSOC) Analytics Intern</h3>
</div>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="inline-flex items-center gap-1 px-space-sm py-1 bg-surface-container-lowest rounded-md text-primary font-label-sm text-label-sm font-medium shadow-sm">
<span className="material-symbols-outlined text-sm">calendar_month</span>
                    May 2024 – Dec 2024
                  </span>
<span className="inline-flex items-center gap-1 px-space-sm py-1 bg-surface-container-lowest rounded-md text-on-surface-variant font-label-sm text-label-sm font-medium shadow-sm">
<span className="material-symbols-outlined text-sm">place</span>
                    Kuala Lumpur, MY
                  </span>
</div>
</div>
{/*  Main Content Body  */}
<div className="p-space-lg space-y-space-md">
{/*  Impact Callout  */}
<div className="p-space-md rounded-lg bg-surface-container flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-2xl flex-shrink-0">security</span>
<div>
<h4 className="font-label-md text-label-md text-primary font-bold">Real-Time Threat Intelligence &amp; 75% Readiness Elevation</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Architected central monitoring dashboard for national-level CSOC incident ingestion, mapping threat vectors directly into SANS lifecycle schemas.</p>
</div>
</div>
{/*  Structured Bullet Achievements  */}
<div className="space-y-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
<p className="font-body-md text-body-md text-on-surface">
<strong className="font-semibold text-primary">Automated Incident Dashboarding:</strong> Created and automated a comprehensive cyber incident dashboard in Power BI to enhance real-time situational awareness and threat visibility for the Cyber Security Operations Centre (CSOC).
                    </p>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
<p className="font-body-md text-body-md text-on-surface">
<strong className="font-semibold text-primary">Forensics Telemetry Analysis:</strong> Ingested and analyzed 100+ cybersecurity incidents, actively assisting digital forensics teams with technical impact assessments, root-cause telemetry, and anomaly identification.
                    </p>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
<p className="font-body-md text-body-md text-on-surface">
<strong className="font-semibold text-primary">Cyber Range Drill Leadership:</strong> Supported the planning and execution of enterprise cyber exercises within a specialized cyber range environment, elevating organizational cyber readiness by 75%.
                    </p>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
<p className="font-body-md text-body-md text-on-surface">
<strong className="font-semibold text-primary">Pipeline Architecture:</strong> Structured robust data pipelines mapping live security events against the 5 critical phases of the SANS Incident Handling framework (Identification, Containment, Eradication, Recovery, Lessons Learned).
                    </p>
</div>
</div>
{/*  SANS Framework Visual Pipeline Representation  */}
<div className="p-space-md bg-surface-container-low rounded-lg space-y-space-xs">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm font-semibold uppercase text-on-surface-variant">SANS Incident Handling Architecture</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Phase Coverage 100%</span>
</div>
<div className="grid grid-cols-5 gap-1.5 text-center">
<div className="bg-surface-container p-2 rounded text-[11px] font-semibold text-primary">1. Identify</div>
<div className="bg-surface-container p-2 rounded text-[11px] font-semibold text-primary">2. Contain</div>
<div className="bg-surface-container p-2 rounded text-[11px] font-semibold text-primary">3. Eradicate</div>
<div className="bg-surface-container p-2 rounded text-[11px] font-semibold text-primary">4. Recover</div>
<div className="bg-primary text-on-primary p-2 rounded text-[11px] font-semibold shadow-sm">5. Lessons</div>
</div>
</div>
{/*  Core Tools Chips  */}
<div>
<span className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold mb-space-xs">Core Tech Stack &amp; Methodologies</span>
<div className="flex flex-wrap gap-space-xs">
<span className="px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">Power BI Dashboards</span>
<span className="px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">SIEM Ingestion</span>
<span className="px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">SQL Relational Modeling</span>
<span className="px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">Cyber Forensics Telemetry</span>
<span className="px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">SANS Incident Framework</span>
<span className="px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-sm text-label-sm font-semibold">Simulated Cyber Range</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Interactive Bottom Endorsement & Verification Callout  */}
<div className="mt-space-xl p-space-lg rounded-xl bg-surface-container-low shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0">
<span className="material-symbols-outlined text-2xl">verified</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Institutional References &amp; Validation</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Supervisor validations and academic transcript cross-certifications available upon request.</p>
</div>
</div>
<div className="flex items-center gap-space-sm w-full md:w-auto">
<Link className="w-full md:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-secondary transition-all shadow-sm" href="/projects">
<span className="">Explore Analytics Projects</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</Link>
</div>
</div>
</div>
</div></main>
  );
}
