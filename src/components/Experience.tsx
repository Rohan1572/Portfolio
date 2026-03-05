import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import { fadeInUp } from '@/animations/fadeIn';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="section-title">Experience</h2>
      <div className="mt-8 border-l-2 border-primary/40 pl-6 space-y-8">
        {experience.map((item) => (
          <motion.article key={`${item.company}-${item.role}`} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative card">
            <span className="absolute -left-9 top-8 h-4 w-4 rounded-full bg-primary" />
            <h3 className="text-xl font-bold">{item.company} — {item.role}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{item.duration}</p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              {item.highlights.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
