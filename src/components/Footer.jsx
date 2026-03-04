import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Rohan Gupta · Front-End Developer · New Delhi, India</p>
    </footer>
  );
}

export default Footer;
