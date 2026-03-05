import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations/fadeIn';

export default function About() {
  return (
    <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="section-title">About</h2>
      <div className="card mt-6">
        <p>
          I design premium frontend systems for fintech products where trust, speed, and compliance matter.
          My work focuses on scalable architecture, secure UI patterns, and experiences that make complex workflows feel effortless.
        </p>
      </div>
    </motion.section>
  );
}
