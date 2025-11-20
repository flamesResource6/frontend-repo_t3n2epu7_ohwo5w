import React from 'react';

const projects = [
  { id: 1, title: 'E-commerce App', desc: 'End-to-end shopping experience with clean flows.', img: '' },
  { id: 2, title: 'Banking Dashboard', desc: 'Complex data simplified into a calm interface.', img: '' },
  { id: 3, title: 'Travel Planner', desc: 'Explore, plan, and book with confidence.', img: '' },
  { id: 4, title: 'Health Tracker', desc: 'Daily insights designed to motivate.', img: '' },
  { id: 5, title: 'SaaS Marketing', desc: 'Landing system with modular sections.', img: '' },
  { id: 6, title: 'Design System', desc: 'Foundations and components at scale.', img: '' },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Selected Projects</h2>
          <a href="#" className="text-slate-500 hover:text-slate-900 text-sm">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(p => (
            <article key={p.id} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
              <div className="aspect-[16/11] bg-slate-100" />
              <div className="p-5">
                <h3 className="text-lg font-medium text-slate-900 group-hover:translate-x-0.5 transition-transform">{p.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
