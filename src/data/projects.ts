export type ProjectCategory = 'All' | 'FinTech' | 'Web Apps' | 'Tools';

export interface Project {
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  description: string;
  stack: string[];
  image: string;
  github: string;
  live: string;
}

export const projectFilters: ProjectCategory[] = ['All', 'FinTech', 'Web Apps', 'Tools'];

export const projects: Project[] = [
  {
    title: 'RiskPulse Treasury Dashboard',
    category: 'FinTech',
    description: 'Real-time liquidity and exposure analytics dashboard with secure role-based workflows.',
    stack: ['Next.js', 'TypeScript', 'Recharts', 'Auth0'],
    image: '/project-fintech.jpg',
    github: 'https://github.com/Rohan1572/Portfolio',
    live: '#',
  },
  {
    title: 'TradeFlow Operations Suite',
    category: 'Web Apps',
    description: 'Workflow engine for onboarding and transaction review with intelligent status orchestration.',
    stack: ['React', 'Node.js', 'Tailwind', 'Framer Motion'],
    image: '/profile.jpg',
    github: 'https://github.com/Rohan1572/Portfolio',
    live: '#',
  },
  {
    title: 'Dev Velocity CLI',
    category: 'Tools',
    description: 'Internal front-end tooling to scaffold secure UI modules and enforce code standards.',
    stack: ['TypeScript', 'ESBuild', 'Jest', 'CI/CD'],
    image: '/project-fintech.jpg',
    github: 'https://github.com/Rohan1572/Portfolio',
    live: '#',
  },
];
