import styles from '../styles/Header.module.css';

function Header({ navLinks, theme, toggleTheme }) {
  return (
    <header className={styles.header}>
      <a href="#home" className={styles.brand} aria-label="Rohan Gupta home">
        RG
      </a>
      <nav aria-label="Primary navigation">
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.toggle} onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

export default Header;
