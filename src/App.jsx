import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { navLinks, projects } from './data/content';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SecurityEdge from './components/SecurityEdge';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import styles from './styles/App.module.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 850);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className={styles.app}>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <Header navLinks={navLinks} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects
          projects={filteredProjects}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          allProjects={projects}
        />
        <Skills />
        <SecurityEdge />
        <Contact />
      </main>
      <Footer />
      <motion.div
        className={styles.scrollIndicator}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />
    </div>
  );
}

export default App;
