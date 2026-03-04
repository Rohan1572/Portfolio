import { proficiency, skillGroups } from '../data/content';
import styles from '../styles/Skills.module.css';

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills Snapshot</h2>
      <div className={styles.badges}>
        {Object.values(skillGroups)
          .flat()
          .map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
      </div>
      <div className={styles.progressWrap}>
        {proficiency.map((item) => (
          <article key={item.skill}>
            <div className={styles.row}>
              <h3>{item.skill}</h3>
              <span>{item.level}%</span>
            </div>
            <div className={styles.track}>
              <div className={styles.fill} style={{ width: `${item.level}%` }} aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
