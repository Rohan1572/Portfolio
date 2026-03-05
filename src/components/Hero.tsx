import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations/fadeIn';
import { staggerContainer } from '@/animations/stagger';

const rotating = ['Digital Banking Platforms', 'Scalable React Apps', 'High-Performance Web Interfaces'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % rotating.length), 1600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-mesh animate-pulse opacity-80" />
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative mx-auto max-w-6xl px-4 text-center">
        <motion.p variants={fadeInUp} className="mb-4 text-accent font-semibold">Frontend Developer at Deloitte · 1.5 Years Experience</motion.p>
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold leading-tight">
          Building Scalable Frontends for Enterprise FinTech
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-5 text-slate-700 dark:text-slate-300 text-lg">
          React.js · Next.js · TypeScript · API Integrations · 80%+ Test Coverage
        </motion.p>
        <motion.p variants={fadeInUp} className="mt-6 text-primary text-xl font-semibold">I build: {rotating[index]}</motion.p>
        <motion.div variants={fadeInUp} className="mt-8 flex justify-center gap-4">
          <a href="#projects" className="px-6 py-3 rounded-xl bg-primary text-white shadow-glow">View Projects</a>
          <a href="#contact" className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700">Contact Me</a>
        </motion.div>
      </motion.div>
    </section>
  );
}
