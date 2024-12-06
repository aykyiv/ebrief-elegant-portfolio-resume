export interface IEducation {
  
  concentration?: string;
  specialization?: string;
  description?: string;
  institution: string;
  years: string;
}
export interface IExperience {
  role: string;
  company: string;
  description: string;
  period: string;
  responsibilities: string[];
}
export interface ICertificate {
  name: string;
  issuer: string;
  year: number;
  certLink: string;
  certDescription: string;
}
export interface ISkill {
  category: string;
  icon: string;
  tools: string[];
  proficiency: number;
}
export interface ISkillCarusel {
  skill: string;
  image: string;
}
export interface IResume {
  id: string;
  educationSectionTitle: string;
  experienceSectionTitle: string;
  certificateSectionTitle: string;
  skillsSectionTitle: string;
  education: IEducation[];
  experience: IExperience[];
  certificates: ICertificate[];
  skills: ISkill[];
  skillsCarusel: ISkillCarusel[];
}
