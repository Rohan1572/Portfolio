import { skillGroups } from '../data/content';
import styles from '../styles/About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>
        I&apos;m a Frontend Developer at Deloitte, building scalable and performance-driven digital platforms for financial
        institutions.
      </p>
      <p>
        With a background in Computer Science (Information Security) from Vellore Institute of Technology, I bring a
        security-first mindset to frontend engineering — ensuring not just beautiful interfaces, but resilient and
        trustworthy systems.
      </p>
      <p>
        I specialize in React-based architectures, performance optimization, and building modular, maintainable UI systems
        used in enterprise environments.
      </p>
      <p>
        Previously, during my internship at EY, I gained hands-on exposure to enterprise workflows and large-scale
        application development.
      </p>
      <p>
        I&apos;m particularly interested in fintech, secure digital banking experiences, and building frontend systems that
        operate at scale with precision.
      </p>
      <div className={styles.grid}>
        {Object.entries(skillGroups).map(([category, skills]) => (
          <article key={category} className={styles.card}>
            <h3>{category}</h3>
            <ul>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
