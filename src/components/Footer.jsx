import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Rohan Gupta. Crafted with React, performance, and fintech precision.</p>
    </footer>
  );
}

export default Footer;
