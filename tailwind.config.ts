import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        accent: '#22C55E',
        dark: '#0F172A',
        light: '#F8FAFC',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(79,70,229,.25), 0 10px 30px rgba(79,70,229,.2)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(at 0% 0%, rgba(79,70,229,.35) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(34,197,94,.25) 0, transparent 50%)',
      },
    },
  },
  plugins: [],
};

export default config;
