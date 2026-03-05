import { motion } from 'framer-motion';
import { fadeInUp } from '@/animations/fadeIn';

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="section-title">Education & Certifications</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <motion.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="card">
          <h3 className="text-lg font-bold">Vellore Institute of Technology (VIT)</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">B.Tech in CSE (Information Security) · Sep 2020 - Jul 2024</p>
          <p className="mt-3"><strong>CGPA:</strong> 8.77 / 10</p>
        </motion.article>

        <motion.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="card">
          <h3 className="text-lg font-bold">Certifications & Achievements</h3>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li>Microsoft Certified: Security, Compliance, and Identity Fundamentals</li>
            <li>Published research paper: “Exploiting Flaws in a Wi-Fi Network” (IJERT)</li>
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
