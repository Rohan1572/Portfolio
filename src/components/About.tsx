import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations/fadeIn';

export default function About() {
  return (
    <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="section-title">About</h2>
      <div className="card mt-6">
        <p>
          Frontend Developer with 1.5 years of experience at Deloitte building enterprise-grade digital banking
          platforms with React.js, Next.js, and TypeScript. I work across production feature delivery, API
          integration, responsive UI architecture, and AI-augmented development workflows in Agile teams.
        </p>
      </div>
    </motion.section>
  );
}
