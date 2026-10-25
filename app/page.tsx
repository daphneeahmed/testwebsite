import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full pt-20 bg-background min-h-screen" id="main-content">
      <div className="flex flex-col w-full">
        {/* Top Ambient Glow Canvas Container */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle Data Grid Matrix Background Elements (contained) */}
          <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-96 -left-20 w-[420px] h-[420px] bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* HERO SECTION */}
          <section className="relative max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg pt-space-xl pb-space-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              {/* Left Column: Narrative & Authority */}
              <div className="lg:col-span-7 space-y-space-md">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-high rounded-full border border-outline-variant/30">
                  <span className="w-2 h-2 rounded-full bg-tertiary" />
                  <span className="font-label-sm text-label-sm text-primary font-semibold tracking-wide uppercase">
                    Available for Analytics &amp; BI Roles
                  </span>
                </div>

                <div className="space-y-space-xs">
                  <h1 className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight leading-tight">
                    Hi, I&apos;m <span className="text-secondary">Wan Daphneelya</span> &mdash; Data Analytics &amp; BI Professional.
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    Translating complex, dense data architectures into actionable executive narratives. Specialized in end-to-end telemetry pipelines, automated governance reporting, and enterprise KPI visualization.
                  </p>
                </div>

                {/* Hero CTAs */}
                <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold hover:bg-secondary transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  >
                    <span>View Projects</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                  <Link
                    href="/experience"
                    className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-surface-container border border-outline-variant/40 text-primary rounded-lg font-label-md text-label-md font-semibold hover:bg-surface-container-high transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  >
                    <span>Career Timeline</span>
                    <span className="material-symbols-outlined text-lg">history_edu</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm text-on-surface-variant font-label-md text-label-md font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg"
                  >
                    <span>Get in Touch</span>
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </Link>
                </div>

                {/* Micro Metrics Strip */}
                <div className="pt-space-md border-t border-outline-variant/20 grid grid-cols-3 gap-space-sm">
                  <div className="space-y-0.5">
                    <span className="block font-headline-sm text-headline-sm text-primary font-bold">100%</span>
                    <span className="block font-label-sm text-label-sm text-on-surface-variant">Automated Reporting Delivery</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="block font-headline-sm text-headline-sm text-primary font-bold">3.87</span>
                    <span className="block font-label-sm text-label-sm text-on-surface-variant">Cumulative GPA (Dean&apos;s List)</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="block font-headline-sm text-headline-sm text-primary font-bold">5+</span>
                    <span className="block font-label-sm text-label-sm text-on-surface-variant">Production Data Products</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Dashboard Preview & Credentials Card */}
              <div className="lg:col-span-5">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/40 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-space-md relative">
                  <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/20">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                      <span className="font-label-md text-label-md text-primary font-semibold">Analytical Profile Snapshot</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant px-space-xs py-0.5 bg-surface-container-low rounded">Inter / SQL / Python</span>
                  </div>

                  {/* Profile Highlights Container */}
                  <div className="space-y-space-sm">
                    <div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg">
                      <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5">school</span>
                      <div>
                        <h2 className="font-label-md text-label-md text-primary font-semibold">
                          Universiti Teknologi PETRONAS &bull; Computer Science &amp; Finance
                        </h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Majoring in Financial Data Analytics, Dean&apos;s Honor List across all academic cycles.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg">
                      <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5">verified_user</span>
                      <div>
                        <span className="font-label-md text-label-md text-primary font-semibold block">PETRONAS CSOC Analytics Trainee</span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Orchestrated Splunk and Power BI pipelines resolving cybersecurity event surges and reducing ticket lifecycle.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg">
                      <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5">insights</span>
                      <div>
                        <span className="font-label-md text-label-md text-primary font-semibold block">Key Tooling &amp; Stack</span>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          <span className="px-2 py-0.5 bg-surface-container-high text-primary font-label-sm text-label-sm rounded">Power BI</span>
                          <span className="px-2 py-0.5 bg-surface-container-high text-primary font-label-sm text-label-sm rounded">Python / Pandas</span>
                          <span className="px-2 py-0.5 bg-surface-container-high text-primary font-label-sm text-label-sm rounded">SQL / PostgreSQL</span>
                          <span className="px-2 py-0.5 bg-surface-container-high text-primary font-label-sm text-label-sm rounded">Splunk</span>
                          <span className="px-2 py-0.5 bg-surface-container-high text-primary font-label-sm text-label-sm rounded">Tableau</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-space-xs">
                    <Link
                      href="/profile"
                      className="w-full flex items-center justify-between p-space-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-secondary transition-colors"
                    >
                      <span>Explore Full Profile &amp; Certifications</span>
                      <span className="material-symbols-outlined text-base">chevron_right</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SECTION: PILLARS / DOMAINS OF EXPERTISE */}
        <section className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-xl border-t border-outline-variant/20">
          <div className="space-y-space-lg">
            <div className="space-y-space-xs max-w-2xl">
              <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                Specialized Competencies
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                Core Analytical Disciplines
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Bridging empirical statistics with software engineering to deliver reliable data assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              {/* Pillar 1 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/30 space-y-space-sm hover:border-secondary transition-all group">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">bar_chart</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  Data Analysis &amp; Visualization
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Design and governance of executive dashboards in Power BI and Tableau. Extracting business-critical signals from operational noise with rigorous statistical methods.
                </p>
                <div className="pt-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-medium">Power BI &bull; DAX &bull; Tableau &bull; Seaborn</span>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/30 space-y-space-sm hover:border-secondary transition-all group">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">neurology</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  ML &amp; Predictive Modeling
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Formulating regression, clustering, and classification models. Applying NLP and predictive time-series to resolve real business problems with measurable accuracy uplifts.
                </p>
                <div className="pt-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-medium">Scikit-Learn &bull; TensorFlow &bull; NLP &bull; Pandas</span>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-outline-variant/30 space-y-space-sm hover:border-secondary transition-all group">
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-2xl">account_tree</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  Process Automation &amp; Architecture
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Engineered automated ingestion and ETL scripts in Python and SQL. Streamlining manual reporting workflows to eliminate human latency and ensure compliance integrity.
                </p>
                <div className="pt-space-xs">
                  <span className="font-label-sm text-label-sm text-secondary font-medium">PostgreSQL &bull; Airflow &bull; REST APIs &bull; Python</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FEATURED CASE STUDY TEASER */}
        <section className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-xl border-t border-outline-variant/20">
          <div className="bg-surface-container-low rounded-xl border border-outline-variant/40 p-space-lg lg:p-space-xl space-y-space-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">
                  Featured Case Study
                </span>
                <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
                  Predictive Cybersecurity Incident Resolution
                </h3>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary font-semibold hover:text-secondary transition-colors"
              >
                <span>View all projects</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md pt-space-xs">
              <div className="bg-surface-container-lowest p-space-md rounded-lg border border-outline-variant/20 space-y-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Impact Metric</span>
                <span className="font-headline-lg text-headline-lg text-primary font-bold block">40% Reduction</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Achieved in mean-time-to-triage (MTTT) for Tier 1 incident investigations through automated Splunk enrichment.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-space-md rounded-lg border border-outline-variant/20 space-y-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Telemetry Scale</span>
                <span className="font-headline-lg text-headline-lg text-primary font-bold block">2.4M+ Events</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Normalized, deduplicated, and streamed weekly across enterprise network boundary checkpoints.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-space-md rounded-lg border border-outline-variant/20 space-y-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Methodology</span>
                <span className="font-headline-lg text-headline-lg text-primary font-bold block">Splunk + Power BI</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Custom correlation searches piped to direct executive dashboards for threat intelligence visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CTA BANNER */}
        <section className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg pb-space-xl pt-space-lg">
          <div className="bg-primary text-on-primary rounded-xl p-space-lg lg:p-space-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-lg">
            <div className="space-y-space-xs max-w-xl">
              <h2 className="font-headline-md text-headline-md font-bold text-white">
                Interested in discussing a role or analytical initiative?
              </h2>
              <p className="font-body-sm text-body-sm text-white/80">
                Currently based in Kuala Lumpur, Malaysia, and available for full-time Business Intelligence, Data Analytics, and Reporting Engineering roles.
              </p>
            </div>
            <div className="flex items-center gap-space-sm shrink-0">
              <Link
                href="/contact"
                className="px-space-lg py-space-sm bg-surface-container-lowest text-primary rounded-lg font-label-md text-label-md font-semibold hover:bg-secondary hover:text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                Contact Daphneelya
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
