# Wan Daphneelya - Data Analytics & BI Professional Portfolio

A modern, responsive portfolio website built with **Next.js** (App Router), **TypeScript**, and **Tailwind CSS**, based on the Google Stitch design system.

## Key Features

- **Component Architecture**: Navigation Bar (`Navbar.tsx`) and Footer (`Footer.tsx`) are isolated in `components/` and called centrally via the root layout (`app/layout.tsx`).
- **Dynamic Navigation**: Active state indicator highlighting the current route automatically (`usePathname()`), plus a responsive mobile drawer menu.
- **5 Comprehensive Pages**:
  - `/`: **Home / Landing Page** &mdash; Authority narrative, key achievements, metrics strip, core analytical disciplines, and featured cybersecurity case study teaser.
  - `/profile`: **My Profile** &mdash; Academic background, industry certifications, technical skills matrix, and interactive CV download feedback.
  - `/experience`: **Career Timeline** &mdash; Roles at PETRONAS CSOC Analytics & Learning Analytics, with domain expertise & tooling matrices.
  - `/projects`: **Featured Projects** &mdash; Interactive category filtering (`All`, `Machine Learning & AI`, `Business Intelligence & BI`, `Hackathons & Challenges`) across 8 projects with KPI impact metrics.
  - `/contact`: **Contact Me** &mdash; Direct channels, one-click copy email micro-interaction, and an interactive contact inquiry form with validation and live submission feedback.
- **Design System Fidelity**: Custom Material 3-inspired palette, typography matching Inter font weights and metrics display, and localized asset handling.

## Getting Started

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

Build for production:

```bash
npm run build
npm start
```
