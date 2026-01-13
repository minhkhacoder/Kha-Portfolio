import React from "react";
import { Server, Layout, Container, Database, Cpu, MessageSquare, Zap, Cloud } from "lucide-react";
import { Project, Skill } from "./types";

export const PROFILE = {
  fullName: "Vo Minh Kha",
  role: "Fullstack Developer",
  tagline: "Fullstack Developer | Microservices | AI",
  location: "Can Tho, Viet Nam",
  experience: "More than 2 years of experience in software development",
  email: "minhkhawork@gmail.com",
  linkedin: "https://www.linkedin.com/in/minh-kha-v%C3%B5-921325378",
  github: "https://github.com/minhkhacoder",
  about:
    "I am a dedicated Fullstack Developer with a passion for building scalable distributed systems and intelligent AI solutions. With over 2 years of professional experience, I focus on crafting clean, maintainable code and architecting robust microservices environments.",
};

export const SKILLS: Skill[] = [
  { name: "NestJS", category: "Backend", icon: <Server size={20} /> },
  { name: "NextJS", category: "Frontend", icon: <Layout size={20} /> },
  { name: "Docker", category: "DevOps", icon: <Container size={20} /> },
  { name: "Kubernetes", category: "DevOps", icon: <Cloud size={20} /> },
  { name: "Kafka", category: "Backend", icon: <MessageSquare size={20} /> },
  { name: "Redis", category: "Database", icon: <Zap size={20} /> },
  { name: "PostgreSQL", category: "Database", icon: <Database size={20} /> },
  { name: "MongoDB", category: "Database", icon: <Database size={20} /> },
  { name: "Microservices", category: "Backend", icon: <Cpu size={20} /> },
  { name: "AI Agents", category: "AI", icon: <Cpu size={20} /> },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Dolphin",
    description:
      "A comprehensive content management platform for building directory structures, writing articles, and integrating social media platforms for cross-posting. Features AI-powered writing assistant agents and workspace member management.",
    tags: ["Vertex AI", "Microservices", "NestJS", "NextJS"],
    image: "/images/dolphin_project.png",
  },
  {
    id: "2",
    title: "AI Video Studio",
    description:
      "An AI-powered video creation and rendering platform for producing social media content. Supports text-to-video generation, customizable templates, and multi-platform export capabilities.",
    tags: ["AI", "Video Generation", "NestJS", "NextJS"],
    image: "/images/video_ai_project.png",
  },
  {
    id: "3",
    title: "AI Creative Hub",
    description:
      "An all-in-one platform integrating multiple AI tools for image generation, video creation, and content writing. Built for content creators seeking streamlined creative workflows.",
    tags: ["AI Tools", "NestJS", "NextJS"],
    image: "/images/ai_tools_hub.png",
  },
];
