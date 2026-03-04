import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';

function Projects({ projects, activeFilter, onFilterChange, allProjects }) {
  const filters = ['All', ...new Set(allProjects.map((project) => project.category))];

  return (
    <section id="projects" className={styles.projects}>
      <h2>Selected Projects</h2>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? styles.active : ''}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <motion.article whileHover={{ y: -8 }} key={project.title} className={styles.card}>
            <p className={styles.category}>{project.category}</p>
            <h3>{project.title}</h3>
            <p>
              <strong>Problem:</strong> {project.problem}
            </p>
            <p>
              <strong>Stack:</strong> {project.stack}
            </p>
            <p>
              <strong>Impact:</strong> {project.impact}
            </p>
            <div className={styles.links}>
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
