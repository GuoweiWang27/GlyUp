export interface ChartData {
  name: string;
  value: number;
  label: string;
}

export interface Author {
  name: string;
  affiliation: string;
  role: string;
  email?: string;
}

export enum SectionId {
  HOME = 'home',
  ABSTRACT = 'abstract',
  BACKGROUND = 'background',
  METHODS = 'methods',
  RESULTS = 'results',
  FIGURES = 'figures',
  DISCUSSION = 'discussion',
  AUTHORS = 'authors'
}