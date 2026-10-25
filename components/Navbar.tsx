"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Profile", href: "/profile" },
  { name: "Background", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
      role="banner"
    >
      <div className="h-20 max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg flex items-center justify-between gap-space-md">
        {/* Brand / Name */}
        <div className="flex items-center gap-space-sm">
          <Link
            href="/"
            className="flex flex-col rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
              Wan Daphneelya
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium tracking-normal">
              BI &amp; Data Analytics
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-space-xs p-space-xs bg-surface-container-low rounded-full"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "px-space-md py-space-xs rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1 bg-primary text-on-primary font-semibold shadow-sm"
                    : "px-space-md py-space-xs rounded-full font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-1"
                }
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions & Avatar */}
        <div className="flex items-center gap-space-md">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-all shadow-[0_1px_4px_rgba(0,0,0,0.06)] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Get in Touch
          </Link>
          <div className="flex items-center gap-space-xs pl-space-xs">
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-container-high"
              src="/images/avatar.jpg"
            />
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-primary hover:bg-surface-container focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface/95 backdrop-blur-xl px-margin py-space-md space-y-space-xs shadow-lg animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`block px-space-md py-space-sm rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-on-primary font-semibold shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-space-xs sm:hidden">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-space-md py-space-sm bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-all shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
