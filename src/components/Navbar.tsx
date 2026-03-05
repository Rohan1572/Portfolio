import ThemeToggle from './ThemeToggle';

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/70 dark:border-slate-800">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg text-primary">Rohan Gupta</a>
        <div className="hidden md:flex gap-6">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="text-sm font-medium hover:text-primary transition-colors">{label}</a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
