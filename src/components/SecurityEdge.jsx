import styles from '../styles/SecurityEdge.module.css';

function SecurityEdge() {
  return (
    <section id="security" className={styles.security}>
      <h2>Fintech + Security Edge</h2>
      <p>
        My Information Security foundation helps me design frontend systems that are resilient, auditable, and trustworthy.
        I proactively incorporate secure input handling, permission-aware UI states, and frontend threat modeling into product delivery.
      </p>
      <ul>
        <li>Apply secure coding practices and OWASP-informed validation patterns.</li>
        <li>Design UI workflows that reduce operational mistakes in high-value financial transactions.</li>
        <li>Collaborate with security and backend teams to align frontend behavior with compliance requirements.</li>
      </ul>
    </section>
  );
}

export default SecurityEdge;
