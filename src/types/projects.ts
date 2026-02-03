
export type ProjectLink = {
  url: string;
  disabled?: boolean; 
};

export type Project = {
  id: number;
  imageUrl: string;
  deploy?: ProjectLink;
  github?: ProjectLink;
  figma?: ProjectLink;
};

export type ProjectCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  deploy?: ProjectLink;
  github?: ProjectLink;
  figma?: ProjectLink;
  index: number;
  threshold?: number;
};
