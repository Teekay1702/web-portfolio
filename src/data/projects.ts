import { type Project } from "../types/project";

export const projects: Project[] = [
  {
    num: "01",
    title: "Task Management",
    type: "Web Application",
    desc: "A real-time workspace for creating, updating and tracking tasks with secure authentication.",
    tags: ["React", "Firebase", "Authentication"],
    accent: "violet",
  },
  {
    num: "02",
    title: "Student Manager",
    type: "Desktop Application",
    desc: "A C# desktop application for student records and administration.",
    tags: ["C#", "SQL Server", "CRUD"],
    accent: "mint",
  },
  {
    num: "03",
    title: "Dynamic Portfolio",
    type: "Website",
    desc: "A responsive developer portfolio built using React and Vite.",
    tags: ["React", "TypeScript", "CSS"],
    accent: "amber",
  },
];