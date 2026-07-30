export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features?: string[];
  link?: string;
  status?: 'shipped' | 'ongoing';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
}

export interface AwardItem {
  title: string;
  description: string;
  detail: string;
}
