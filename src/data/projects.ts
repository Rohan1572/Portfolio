export type ProjectCategory = 'All' | 'FinTech' | 'Web Apps';

export interface Project {
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  description: string;
  stack: string[];
  image: string;
  github: string;
  live: string;
}

export const projectFilters: ProjectCategory[] = ['All', 'FinTech', 'Web Apps'];

export const projects: Project[] = [
  {
    title: 'CapitalForge',
    category: 'FinTech',
    description: 'Portfolio analytics platform with 10,000-path Monte Carlo simulations, strategy persistence, and AI-assisted risk insights.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'OpenAI'],
    image: '/project-fintech.jpg',
    github: 'https://github.com/Rohan1572/capital-forge',
    live: 'https://rohan-gupta.vercel.app/',
  },
  {
    title: 'Monopoly Game',
    category: 'Web Apps',
    description: 'Real-time multiplayer board game with synchronized turns, configurable modes, and mobile-friendly gameplay.',
    stack: ['React', 'Firebase Realtime Database', 'JavaScript', 'Responsive UI'],
    image: '/profile.jpg',
    github: 'https://github.com/Bhavya1912/monopoly-game',
    live: 'https://monopoly-game-tau.vercel.app/',
  },
];
