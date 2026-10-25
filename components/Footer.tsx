import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full bg-surface-container-low text-on-surface mt-space-xl shadow-[0_-1px_6px_rgba(0,0,0,0.03)]"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg py-space-xl">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-space-xl">
          {/* Bio & Availability */}
          <div className="space-y-space-sm max-w-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                Wan Daphneelya Wan Ahmed
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Senior Data Analytics and Business Intelligence professional translating dense
              data architectures into executive strategy and scalable growth models.
            </p>
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-tertiary-fixed text-on-tertiary-fixed rounded-full">
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
              <span className="font-label-sm text-label-sm font-semibold">
                Open to Data &amp; BI Analytics roles
              </span>
            </div>
          </div>

          {/* Direct Contacts & Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
            <div className="space-y-space-sm">
              <span className="font-label-md text-label-md text-primary font-semibold tracking-wide uppercase">
                Direct Contacts
              </span>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li>
                  <a
                    className="inline-flex items-center gap-space-xs hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded"
                    href="mailto:daphnee.ahmed@gmail.com"
                  >
                    <span className="material-symbols-outlined text-base">mail</span>
                    daphnee.ahmed@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-space-xs hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded"
                    href="tel:+60198605028"
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    +60 198605028
                  </a>
                </li>
                <li>
                  <span className="inline-flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    Kuala Lumpur, Malaysia
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-space-sm">
              <span className="font-label-md text-label-md text-primary font-semibold tracking-wide uppercase">
                Professional Connect
              </span>
              <div className="flex flex-col space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <a
                  className="inline-flex items-center gap-space-xs hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded"
                  href="https://www.linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-base">link</span>
                  LinkedIn Profile
                </a>
                <a
                  className="inline-flex items-center gap-space-xs hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded"
                  href="https://github.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-base">code</span>
                  GitHub Repository
                </a>
                <Link
                  className="inline-flex items-center gap-space-xs hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded"
                  href="/experience"
                >
                  <span className="material-symbols-outlined text-base">description</span>
                  Curriculum Vitae
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-space-xl pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
          <span>&copy; 2026 Wan Daphneelya Wan Ahmed. All rights reserved.</span>
          <span className="flex items-center gap-space-sm">
            <a
              className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded"
              href="#main-content"
            >
              Back to top &uarr;
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
