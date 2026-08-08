export type Accent = "violet" | "mint" | "amber";

export interface Project {
  num: string;
  title: string;
  type: string;
  desc: string;
  tags: string[];
  accent: Accent;
  link: string;
}