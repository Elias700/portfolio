
export type Project = {
  id: number;
  imageUrl: string;
  deployUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
};

export type ProjectCardProps = {
  name: string;
  description: string;
  imageUrl: string;
  deployUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  index: number;
  threshold?: number;
};
