import React from 'react';
import { User, Layers, PenTool, Sparkles, Code2 } from 'lucide-react';

const skills = [
  { icon: PenTool, label: 'Product Design' },
  { icon: Layers, label: 'Design Systems' },
  { icon: Sparkles, label: 'Prototyping' },
  { icon: Code2, label: 'Handoff' },
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">About Me</h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              I’m a multidisciplinary designer crafting interfaces that feel effortless. Over the past 7+ years, I’ve partnered with startups and global brands to turn complex problems into simple, human experiences.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white py-6 hover:shadow-md transition-shadow">
                  <Icon className="h-6 w-6 text-slate-800" />
                  <span className="mt-3 text-sm text-slate-700">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center"><User className="h-5 w-5" /></div>
              <div>
                <h3 className="font-medium text-slate-900">Experience</h3>
                <p className="text-sm text-slate-500">A quick timeline</p>
              </div>
            </div>

            <ol className="relative border-l border-slate-200 pl-6 space-y-8">
              <li>
                <div className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-slate-900" />
                <h4 className="text-sm font-medium text-slate-900">Senior Product Designer — Freelance</h4>
                <p className="text-sm text-slate-500">2022 — Present</p>
                <p className="mt-2 text-sm text-slate-600">Leading end-to-end design for SaaS platforms and mobile apps.</p>
              </li>
              <li>
                <div className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-slate-900" />
                <h4 className="text-sm font-medium text-slate-900">Product Designer — Studio Nova</h4>
                <p className="text-sm text-slate-500">2019 — 2022</p>
                <p className="mt-2 text-sm text-slate-600">Shipped multiple 0→1 products and design systems.</p>
              </li>
              <li>
                <div className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-slate-900" />
                <h4 className="text-sm font-medium text-slate-900">UI/UX Designer — Creative Labs</h4>
                <p className="text-sm text-slate-500">2017 — 2019</p>
                <p className="mt-2 text-sm text-slate-600">Focused on interaction design and motion principles.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
