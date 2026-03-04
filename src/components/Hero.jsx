import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const metrics = [
  { label: 'Enterprise Programs', value: '10+' },
  { label: 'Avg. Load-time Gain', value: '35%' },
  { label: 'Domain Focus', value: 'Fintech + Security' },
];

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          Frontend Developer at Deloitte · Ex-EY Intern · VIT CSE (InfoSec)
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          I engineer secure, conversion-ready fintech interfaces that scale.
        </motion.h1>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          React specialist focused on frontend architecture, performance, and trusted banking experiences.
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
