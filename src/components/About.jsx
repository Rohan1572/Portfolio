import { skillGroups } from '../data/content';
import styles from '../styles/About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>
        I am a frontend developer with enterprise experience building customer-facing systems for major financial institutions.
        At Deloitte, I architect interfaces that balance performance, accessibility, and compliance. With an Information
        Security background from VIT, I naturally embed secure-by-design thinking into every product decision.
      </p>
      <p>
        I specialize in React ecosystems, frontend architecture, and creating trustworthy user experiences for fintech and
        banking workflows.
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
