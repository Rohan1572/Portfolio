import { IconType } from 'react-icons';
import { FaCode, FaLock, FaServer, FaTools } from 'react-icons/fa';

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: string[];
}

export const skills: SkillCategory[] = [
  { title: 'Frontend', icon: FaCode, skills: ['React.js', 'Next.js', 'Redux', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'Material UI'] },
  { title: 'Backend', icon: FaServer, skills: ['FastAPI', 'PHP', 'MySQL', 'PostgreSQL', 'REST APIs', 'Prisma'] },
  { title: 'Tools', icon: FaTools, skills: ['Git', 'GitHub', 'JIRA', 'Jenkins', 'Figma', 'Webpack', 'Jest', 'CI/CD'] },
  { title: 'Engineering Focus', icon: FaLock, skills: ['Performance Optimization', 'Responsive Design', 'Cross-Browser Compatibility', 'Component Architecture', 'Agile Methodology', 'Code Reviews'] },
];
