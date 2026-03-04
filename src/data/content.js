export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'security', label: 'Security Edge' },
  { id: 'contact', label: 'Contact' },
];

export const experiences = [
  {
    company: 'Deloitte Touche Tohmatsu India LLP · Gurugram',
    role: 'Frontend Developer',
    timeline: 'Jan 2025 - Present',
    achievements: [
      'Built and optimized scalable React-based web applications for financial sector clients, improving UI performance and reducing load times.',
      'Developed modular, reusable component architectures to accelerate feature development across teams.',
      'Collaborated cross-functionally with backend, UX, and business teams to deliver enterprise-grade digital solutions.',
      'Implemented performance enhancements such as lazy loading, code splitting, and memoization to improve Lighthouse scores and responsiveness.',
      'Ensured adherence to secure development practices aligned with financial compliance standards.',
    ],
  },
  {
    company: 'Ernst & Young LLP (EY) · Gurugram',
    role: 'Technology Intern',
    timeline: 'May 2023 - Jun 2023',
    achievements: [
      'Assisted in developing frontend modules for enterprise applications using modern JavaScript frameworks.',
      'Contributed to UI improvements that enhanced usability and reduced user friction.',
      'Gained exposure to structured SDLC processes and enterprise deployment practices.',
      'Supported debugging and performance tuning of internal web applications.',
    ],
  },
];

export const projects = [
  {
    title: 'CGPA Calculator',
    category: 'Web App',
    problem: 'Students needed a faster and more reliable way to estimate semester and cumulative CGPA.',
    stack: 'React.js, Material-UI, Figma',
    impact: 'Led a team of 4 and launched a tool used by 5,000+ students at VIT Vellore.',
    demo: '#',
    github: '#',
  },
  {
    title: 'FFCS Planner',
    category: 'EdTech',
    problem: 'Course scheduling was fragmented, making timetable planning difficult for students.',
    stack: 'React.js, JavaScript, UI/UX Testing',
    impact: 'Built a planning platform for 5,000+ users and improved usability through iterative feedback.',
    demo: '#',
    github: '#',
  },
  {
    title: 'ProLens',
    category: 'AI/ML',
    problem: 'Image-processing workflows required faster and more accurate object detection support.',
    stack: 'YOLOv8, FastAPI, Python',
    impact: 'Delivered 90% model accuracy with API-backed deployment and improved runtime efficiency.',
    demo: '#',
    github: '#',
  },
];

export const skillGroups = {
  Frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Redux', 'Material-UI'],
  'Backend & Data': ['FastAPI', 'PHP', 'MySQL', 'API Integration', 'YOLOv8'],
  'Tools & Workflow': ['Git', 'JIRA', 'Jenkins', 'Figma', 'Adobe Illustrator', 'Agile Development'],
  Languages: ['Java', 'C', 'C++', 'Python', 'English', 'Hindi', 'Spanish'],
};

export const proficiency = [
  { skill: 'React / Next.js Development', level: 92 },
  { skill: 'JavaScript / TypeScript', level: 90 },
  { skill: 'UI/UX and Responsive Design', level: 88 },
  { skill: 'API Integration and Performance Optimization', level: 85 },
];
