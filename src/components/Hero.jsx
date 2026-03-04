import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const metrics = [
  { label: 'Experience', value: '1+ Year' },
  { label: 'Domain', value: 'Banking & Finance' },
  { label: 'Current Role', value: 'Deloitte India' },
];

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          Front-End Developer · New Delhi, India
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Building Secure, Scalable Frontends for Modern Financial Systems
        </motion.h1>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Frontend Developer at Deloitte | VIT CSE (InfoSec) | Crafting high-performance fintech experiences with React
        </motion.p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>
            View Projects
          </a>
          <a href="#contact" className={styles.secondary}>
            Contact Me
          </a>
        </div>
      </div>
      <aside className={styles.panel} aria-label="Career highlights">
        {metrics.map((metric) => (
          <article key={metric.label} className={styles.metricCard}>
            <p>{metric.label}</p>
            <h3>{metric.value}</h3>
          </article>
        ))}
      </aside>
    </section>
  );
}

export default Hero;
