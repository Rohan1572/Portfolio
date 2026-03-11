import { IconType } from 'react-icons';
import { FaCode, FaLock, FaServer, FaTools } from 'react-icons/fa';

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: string[];
}

export const skills: SkillCategory[] = [
  { title: 'Languages', icon: FaCode, skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++'] },
  { title: 'Frontend', icon: FaCode, skills: ['React.js', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'SCSS', 'Material UI', 'Webpack'] },
  { title: 'API & Integration', icon: FaServer, skills: ['REST APIs', 'OpenAI API', 'API Integration', 'Axios'] },
  { title: 'Backend', icon: FaServer, skills: ['FastAPI', 'PHP', 'MySQL', 'PostgreSQL', 'Prisma'] },
  { title: 'Tools & Workflow', icon: FaTools, skills: ['Git', 'GitHub', 'JIRA', 'Jenkins', 'Figma', 'CI/CD', 'Agile Methodology', 'Code Review'] },
  { title: 'Architecture', icon: FaLock, skills: ['Component Architecture', 'State Management', 'Responsive Web Design', 'Cross-Browser Compatibility', 'Performance Optimization'] },
];
