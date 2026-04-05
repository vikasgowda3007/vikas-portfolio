export interface ResumeLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  impact?: string;
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  period?: string;
  linkLabel?: string;
  linkHref?: string;
  technologies?: string[];
  type?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location?: string;
  gpa?: string;
  highlights?: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  availability?: string;
  authorization?: string;
}

export interface ResumeMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ResumePortrait {
  src: string;
  srcSet?: string;
  avifSrcSet?: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
}

export interface Resume {
  name: string;
  role: string;
  location: string;
  summary: string;
  links: ResumeLink[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
  contact: ContactInfo;
  metrics?: ResumeMetric[];
  coursework?: string[];
  currentFocus?: string[];
  profileStatement?: string;
  portrait?: ResumePortrait;
}
