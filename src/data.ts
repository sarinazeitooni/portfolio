export type Experience = {
  role: string;
  company: string;
  domain: string;
  period: string;
  highlights: string[];
  stack: string[];
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  repo?: string;
  note?: string;
};

export const profile = {
  name: "Sarina Zeitooni",
  title: "Senior Front-End Developer",
  location: "Tehran, Iran",
  email: "zeitoonisarina@gmail.com",
  github: "https://github.com/sarinazeitooni",
  linkedin: "https://www.linkedin.com/in/sarina-zeitooni",
  summary:
    "Senior front-end developer with 6+ years building scalable, high-performance web applications with React, Next.js and TypeScript. I own technical direction end-to-end — from architecture and API contracts to performance budgets, code review and mentoring — and ship production systems that measurably improve adoption, conversion and reliability.",
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages & Frameworks",
    items: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React 19",
      "Next.js",
      "Node.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    group: "State & Data",
    items: [
      "React Query",
      "Zustand",
      "Redux",
      "Context API",
      "REST",
      "GraphQL",
      "Zod",
    ],
  },
  {
    group: "UI",
    items: [
      "Material UI",
      "Tailwind CSS",
      "ag-Grid",
      "Recharts",
      "RTL / i18n",
      "Accessibility (a11y)",
      "Figma",
    ],
  },
  {
    group: "Tooling & Practices",
    items: [
      "Vite",
      "Webpack",
      "Jest",
      "Docker",
      "CI/CD",
      "Sentry",
      "Capacitor",
      "Agile / Scrum",
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Daroom",
    domain: "Healthcare / Pharmacy E-Commerce",
    period: "2025 — Present",
    highlights: [
      "Spearheaded Daroom's pharmacy-ordering platform from the ground up, architecting the full customer journey from prescription submission and pharmacist review through to home delivery.",
      "Architected and led the Order Management System (OMS): multi-role admin workflows, analytics dashboards, real-time map tracking and a reusable frontend architecture.",
      "Expanded the platform into a hybrid Android app with Capacitor, launching on Myket and Cafe Bazaar as a new acquisition channel.",
      "Raised the frontend performance score to 95% and SEO to 100% via code-splitting, image optimization and data-layer tuning; hardened observability with Sentry.",
      "Directed code review and technical strategy for a key ordering initiative that drove a 30% increase in successful transactions.",
      "Delivered prescription-verification chat, background refresh, geolocation, image compression and a serverless PDF-generation pipeline.",
    ],
    stack: ["React", "TypeScript", "Next.js", "React Query", "Zustand", "MUI", "Capacitor", "Sentry"],
  },
  {
    role: "Front-End Developer",
    company: "Monta",
    domain: "Smart Education & Assessment",
    period: "2021 — 2025",
    highlights: [
      "Built and maintained several production web apps, including a Study Planner using SSR and Redux that cut page load times by 40%.",
      "Optimized a gamified learning platform, reducing SVG and asset sizes by 30% for better mobile performance.",
      "Delivered an e-commerce platform end-to-end: product experience, cart, responsive UI, REST integration and scalable state management.",
      "Built a course-planning platform integrating 4 external educational APIs, improving planning efficiency by 60%.",
      "Mentored junior developers and led code reviews, contributing to a 25% increase in user satisfaction.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "SSR"],
  },
  {
    role: "Front-End Developer",
    company: "ParsWeb Solutions",
    domain: "Data Platforms",
    period: "2021",
    highlights: [
      "Built a React data-entry platform on ag-Grid with drag-and-drop row reordering and streamlined bulk workflows.",
      "Engineered client-side report generation with Excel and PDF export.",
    ],
    stack: ["React", "ag-Grid", "JavaScript"],
  },
];

export const projects: Project[] = [
  {
    name: "Daroom OMS Panel",
    tagline: "Multi-role order management system for a pharmacy marketplace",
    description:
      "A Persian (RTL) operations panel serving three distinct roles — vendor, admin and doctor — covering the entire order lifecycle: intake, pharmacist review, pricing, liquidation, delivery tracking and archiving. Around 600 TypeScript modules behind a lazy-loaded, permission-gated route tree.",
    highlights: [
      "Role- and permission-aware routing with per-route guards that redirect each role to its own dashboard.",
      "Single axios client with transparent token refresh: concurrent refreshes are deduped through a shared promise, 401s retry once, 403s force logout.",
      "Service layer of paired fetcher + React Query hook per endpoint, with mutations owning their own cache invalidation.",
      "Reusable DynamicTable and BaseModal primitives supporting both server-side pagination and static data.",
      "Jalali (Persian) calendar throughout via dayjs + jalaliday, with Neshan maps for address picking and live delivery tracking.",
      "Vite manual vendor chunking, Sentry monitoring and a multi-stage Docker + nginx build.",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "MUI",
      "React Query",
      "Zustand",
      "react-hook-form",
      "Zod",
      "Recharts",
      "Neshan Maps",
      "Docker",
    ],
    note: "Proprietary — source code is not public.",
  },
  {
    name: "Daroom Storefront",
    tagline: "Prescription-to-delivery e-commerce for patients",
    description:
      "The customer-facing pharmacy ordering experience: prescription upload, pharmacist review, cart and checkout, order tracking and delivery — plus a hybrid Android build shipped to Myket and Cafe Bazaar.",
    highlights: [
      "Prescription-verification chat between patients and pharmacists.",
      "Geolocation, client-side image compression and background refresh of live order state.",
      "Serverless PDF generation pipeline for invoices and prescriptions.",
      "95% performance and 100% SEO scores after code-splitting and image optimization.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Capacitor", "Sentry"],
    note: "Proprietary — source code is not public.",
  },
  {
    name: "Monta Study Planner",
    tagline: "SSR study planning for students",
    description:
      "A server-side rendered planner that helps students schedule study sessions across subjects, integrating several external educational APIs for curriculum and exam data.",
    highlights: [
      "SSR + Redux architecture that reduced page load times by 40%.",
      "Integrated 4 external educational APIs, improving planning efficiency by 60%.",
    ],
    stack: ["Next.js", "React", "Redux", "TypeScript"],
    repo: "https://github.com/sarinazeitooni/weekly-schedule-monta",
  },
  {
    name: "Mont Academy",
    tagline: "Learning platform front-end",
    description:
      "Course catalogue and learning experience for Monta's academy, built with Next.js and a component-driven layout system.",
    highlights: [
      "Responsive, content-heavy pages with reusable layout primitives.",
      "Gamified learning UI with optimized SVG animations (30% smaller assets).",
    ],
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    repo: "https://github.com/sarinazeitooni/montAcademyNext",
  },
  {
    name: "Digikala Clone",
    tagline: "E-commerce front-end built end-to-end",
    description:
      "A full e-commerce experience — product listing and detail pages, shopping cart, responsive UI and REST integration with Context API state management.",
    highlights: [
      "Cart and checkout flow with persistent client state.",
      "Pixel-accurate responsive layout across breakpoints.",
    ],
    stack: ["TypeScript", "React", "Context API", "REST"],
    repo: "https://github.com/sarinazeitooni/digikala",
  },
  {
    name: "Decamond Login Dashboard",
    tagline: "Authentication flow and dashboard",
    description:
      "A login-to-dashboard flow with validated forms, protected routing and a clean, responsive dashboard shell.",
    highlights: ["Form validation and session persistence.", "Protected routes with redirect handling."],
    stack: ["Next.js", "TypeScript"],
    repo: "https://github.com/sarinazeitooni/decamond",
  },
  {
    name: "React SSR from Scratch",
    tagline: "Manual server-side rendering demo",
    description:
      "A from-scratch React SSR setup — no framework — demonstrating hydration, routing and data pre-fetching on the server.",
    highlights: ["Hand-rolled Node render pipeline.", "Hydration and route-level data loading."],
    stack: ["React", "Node.js", "Webpack"],
    repo: "https://github.com/sarinazeitooni/ssr-demo",
  },
  {
    name: "Browser Games",
    tagline: "Canvas and p5.js game experiments",
    description:
      "A set of small games — including Minesweeper in p5.js — exploring canvas rendering, game loops and state machines.",
    highlights: ["Grid generation and flood-fill reveal logic.", "Frame-loop rendering and input handling."],
    stack: ["JavaScript", "p5.js", "React"],
    repo: "https://github.com/sarinazeitooni/mineSweeper-p5js",
  },
];
