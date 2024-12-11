export interface IProject {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  link?: string;
  linkButtonTitle?: string;
  githubLink?: string;
  githubButtonTitle?: string;
  otherLink?: string;
  otherButtonTitle?: string;
  image: string;
  icon: string;
}
export interface IProjectItem {
  id: string;
  title: string;
  filters: string[];
  filtersAllButton: string;
  projects: IProject[];
}
