import { IconType } from 'react-icons';
import { FaCode, FaLock, FaServer, FaTools } from 'react-icons/fa';

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: string[];
}

export const skills: SkillCategory[] = [
  { title: 'Languages', icon: FaCode, skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++'] },
  { title: 'Frontend', icon: FaCode, skills: ['React.js', 'Next.js', 'Vue.js', 'Redux', 'HTML5', 'CSS3', 'SCSS', 'Material UI', 'Webpack'] },
  { title: 'API & Integration', icon: FaServer, skills: ['REST APIs', 'OpenAI API', 'Axios', 'Adobe Marketo Engage APIs'] },
  { title: 'Backend', icon: FaServer, skills: ['FastAPI', 'PHP', 'MySQL', 'PostgreSQL', 'Prisma', 'Firebase'] },
  { title: 'Tools & Workflow', icon: FaTools, skills: ['Git', 'GitHub', 'JIRA', 'Jenkins', 'Figma', 'GitHub Copilot', 'CI/CD', 'Agile Methodology', 'Code Review'] },
  { title: 'Architecture', icon: FaLock, skills: ['Component Architecture', 'State Management', 'Responsive Web Design', 'Cross-Browser Compatibility', 'Performance Optimization'] },
];
