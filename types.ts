
// Fixed: Added React import to provide the React namespace for React.ReactNode
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export interface Skill {
  name: string;
  category: 'Backend' | 'Frontend' | 'DevOps' | 'AI' | 'Database';
  icon: React.ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}
