import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { fadeInUp } from '@/animations/fadeIn';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="section-title">Skills</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <motion.article key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="card">
            <div className="flex items-center gap-3 text-primary"><group.icon /><h3 className="font-bold text-lg">{group.title}</h3></div>
            <div className="mt-4 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="rounded-lg px-3 py-1 bg-slate-200 dark:bg-slate-800 text-sm">{skill}</span>)}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
