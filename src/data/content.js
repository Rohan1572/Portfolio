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
    company: 'Deloitte',
    role: 'Frontend Developer',
    timeline: '2022 - Present',
    achievements: [
      'Built responsive web platforms for banking and finance clients using React and modern component architecture.',
      'Improved key user journeys by optimizing frontend bundles, reducing initial load time by ~35% on critical dashboards.',
      'Collaborated with design, QA, and backend teams to ship secure and compliant interfaces aligned with enterprise standards.',
    ],
  },
  {
    company: 'EY',
    role: 'Technology Intern',
    timeline: '2021',
    achievements: [
      'Developed reusable UI modules for internal reporting tools, reducing duplicated frontend effort across teams.',
      'Contributed to dashboard accessibility enhancements and data presentation consistency.',
      'Documented frontend development practices to streamline onboarding for incoming interns.',
    ],
  },
];

export const projects = [
  {
    title: 'Banking Insights Dashboard',
    category: 'Fintech',
    problem: 'Relationship managers needed a single place to monitor risk, portfolio exposure, and customer activity.',
    stack: 'React, JavaScript, Chart.js, REST APIs',
    impact: 'Enabled faster decision cycles with a centralized dashboard and improved data visibility across teams.',
    demo: 'https://example.com',
    github: 'https://github.com/example/banking-insights-dashboard',
  },
  {
    title: 'Digital Onboarding Portal',
    category: 'Fintech',
    problem: 'Customer onboarding flows had high abandonment due to long forms and unclear steps.',
    stack: 'React, Formik, Yup, Node API',
    impact: 'Streamlined onboarding with progressive forms and inline validation, boosting completion rate by 22%.',
    demo: 'https://example.com',
    github: 'https://github.com/example/digital-onboarding-portal',
  },
  {
    title: 'Secure Payments Interface',
    category: 'Security',
    problem: 'Payment operations required a robust UI with stronger client-side validation and traceability.',
    stack: 'React, TypeScript, Redux Toolkit, Jest',
    impact: 'Reduced transaction input errors by introducing secure validation patterns and resilient state management.',
    demo: 'https://example.com',
    github: 'https://github.com/example/secure-payments-interface',
  },
  {
    title: 'Wealth Portfolio Experience',
    category: 'Web App',
    problem: 'Users struggled to understand multi-asset performance trends across time periods.',
    stack: 'React, D3, CSS Modules, Firebase',
    impact: 'Delivered intuitive visual analytics that increased user engagement with portfolio insights.',
    demo: 'https://example.com',
    github: 'https://github.com/example/wealth-portfolio-experience',
  },
  {
    title: 'Compliance Workflow Console',
    category: 'Security',
    problem: 'Compliance teams needed a more transparent way to track review statuses and exceptions.',
    stack: 'React, Material UI, GraphQL',
    impact: 'Cut manual follow-up by consolidating alerts, status indicators, and reviewer notes into one console.',
    demo: 'https://example.com',
    github: 'https://github.com/example/compliance-workflow-console',
  },
];

export const skillGroups = {
  Frontend: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Responsive Design'],
  'Backend Basics': ['Node.js', 'Express', 'REST APIs', 'Auth Flows'],
  Tools: ['Git', 'Webpack/Vite', 'Jest', 'Figma', 'Postman', 'CI/CD'],
  Security: ['OWASP Basics', 'Secure Coding', 'Input Validation', 'Session Security'],
};

export const proficiency = [
  { skill: 'React Architecture', level: 90 },
  { skill: 'JavaScript Engineering', level: 92 },
  { skill: 'Performance Optimization', level: 85 },
  { skill: 'Secure UI Design', level: 84 },
];
