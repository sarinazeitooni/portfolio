export type Locale = "en" | "fa";
export type Theme = "dark" | "light";

export type Experience = {
  role: string;
  company: string;
  domain: string;
  period: string;
  highlights: string[];
  stack: string[];
};

export type ProjectSection = {
  overview: string;
  role: string;
  engineering: string[];
  technical: string[];
  decisions?: string[];
  impact?: string[];
};

export type Project = {
  name: string;
  tagline: string;
  featured?: boolean;
  sections?: ProjectSection;
  description?: string;
  highlights?: string[];
  stack: string[];
  repo?: string;
  note?: string;
};

export type UiCopy = {
  nav: {
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    ctaContact: string;
    ctaProjects: string;
    github: string;
    linkedin: string;
  };
  sections: {
    skills: string;
    experience: string;
    projects: string;
    otherWork: string;
    contact: string;
  };
  project: {
    overview: string;
    role: string;
    engineering: string;
    technical: string;
    decisions: string;
    impact: string;
    viewSource: string;
  };
  contact: {
    blurb: string;
  };
  a11y: {
    toggleTheme: string;
    toggleLocale: string;
    themeToLight: string;
    themeToDark: string;
    switchToFa: string;
    switchToEn: string;
  };
};

export type Content = {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    summary: string;
    headline: string;
  };
  skills: { group: string; items: string[] }[];
  experience: Experience[];
  projects: Project[];
  ui: UiCopy;
  meta: {
    title: string;
    description: string;
  };
};
