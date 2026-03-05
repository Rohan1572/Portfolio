import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations/fadeIn';

export default function About() {
  return (
    <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="section-title">About</h2>
      <div className="card mt-6">
        <p>
          Frontend Developer with 1.5 years of experience building scalable digital banking platforms using React.js,
          Next.js, and TypeScript. I focus on performance-driven web apps, resilient REST API integrations,
          responsive UI architecture, and maintainable component systems for enterprise teams.
        </p>
      </div>
    </motion.section>
  );
}
