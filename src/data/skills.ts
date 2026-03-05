import { IconType } from 'react-icons';
import { FaCode, FaLock, FaServer, FaTools } from 'react-icons/fa';

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: string[];
}

export const skills: SkillCategory[] = [
  { title: 'Frontend', icon: FaCode, skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { title: 'Backend Basics', icon: FaServer, skills: ['Node.js', 'Express', 'REST APIs', 'SQL Fundamentals'] },
  { title: 'Tools', icon: FaTools, skills: ['GitHub Actions', 'Jira', 'Figma', 'Vercel'] },
  { title: 'Security', icon: FaLock, skills: ['OWASP Basics', 'Role-Based Access', 'Secure Session Handling'] },
];
