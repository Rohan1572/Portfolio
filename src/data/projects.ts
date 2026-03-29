export type ProjectCategory = 'All' | 'FinTech' | 'Web Apps';

export interface Project {
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  description: string;
  stack: string[];
  image: string;
  github: string;
  live?: string;
}

export const projectFilters: ProjectCategory[] = ['All', 'FinTech', 'Web Apps'];

export const projects: Project[] = [
  {
    title: 'CapitalForge',
    category: 'FinTech',
    description: 'Next.js portfolio analytics platform with 10,000-path Monte Carlo simulations, 6 asset classes, risk metrics, and OpenAI-assisted explanations.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'OpenAI API'],
    image: '/og-image.svg',
    github: 'https://github.com/Rohan1572/capital-forge',
  },
  {
    title: 'Monopoly Game',
    category: 'Web Apps',
    description: 'Real-time Monopoly-style multiplayer game with 2 to 4 players, synchronized rooms, AI opponents, and a live strategy dashboard.',
    stack: ['React', 'Firebase Realtime Database', 'JavaScript', 'Responsive UI'],
    image: '/og-image.svg',
    github: 'https://github.com/Bhavya1912/monopoly-game',
    live: 'https://monopoly-game-tau.vercel.app/',
  },
  {
    title: 'AI Business Helper',
    category: 'Web Apps',
    description: 'React business assistant with 5 department modules for marketing, legal, customer relations, inventory, and HR/hiring, powered by OpenAI.',
    stack: ['React', 'React Router', 'OpenAI API', 'Axios', 'CSS'],
    image: '/og-image.svg',
    github: 'https://github.com/Rohan1572/ai-business-helper',
    live: 'https://ai-business-helper.netlify.app/',
  },
];
