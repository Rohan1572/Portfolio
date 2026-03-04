import { experiences } from '../data/content';
import styles from '../styles/Experience.module.css';

function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((item) => (
          <article key={item.company} className={styles.item}>
            <header>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
              <span>{item.timeline}</span>
            </header>
            <ul>
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
