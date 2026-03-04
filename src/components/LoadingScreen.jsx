import { motion } from 'framer-motion';
import styles from '../styles/LoadingScreen.module.css';

function LoadingScreen() {
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <motion.div
        className={styles.dot}
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 1.1 }}
      />
      <p>Loading experience...</p>
    </motion.div>
  );
}

export default LoadingScreen;
