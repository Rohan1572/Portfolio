import Image from 'next/image';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { projects, projectFilters, ProjectCategory } from '@/data/projects';
import { fadeInUp } from '@/animations/fadeIn';

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('All');
  const visibleProjects = useMemo(
    () => projects.filter((project) => filter === 'All' || project.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="section-title">Projects</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {projectFilters.map((value) => (
          <button key={value} onClick={() => setFilter(value)} className={`px-4 py-2 rounded-full ${filter === value ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-800'}`}>
            {value}
          </button>
        ))}
      </div>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project) => (
          <motion.article key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} whileHover={{ y: -8 }} className="card overflow-hidden">
            <div className="overflow-hidden rounded-xl">
              <Image src={project.image} alt={project.title} width={500} height={300} className="h-44 w-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <h3 className="mt-4 text-lg font-bold">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="text-xs rounded-full bg-primary/10 text-primary px-2 py-1">{tech}</span>)}</div>
            <div className="mt-4 flex gap-3">
              <a href={project.github} target="_blank" className="btn-secondary">GitHub</a>
              <a href={project.live} target="_blank" className="btn-primary">Live Demo</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
