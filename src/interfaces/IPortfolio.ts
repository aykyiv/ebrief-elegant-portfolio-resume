export interface IProject {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
  icon: string;
}
export interface IProjectItem {
  id: string;
  filters: string[];
  projects: IProject[];
}
