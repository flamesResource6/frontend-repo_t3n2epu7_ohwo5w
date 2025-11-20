import React from 'react';
import { PenTool, Layout, Component, Smartphone } from 'lucide-react';

const items = [
  { icon: PenTool, title: 'Product Design', desc: 'From discovery to pixel-perfect delivery.' },
  { icon: Layout, title: 'UX Strategy', desc: 'Workshops, journeys, and information architecture.' },
  { icon: Component, title: 'Design Systems', desc: 'Scalable, accessible component libraries.' },
  { icon: Smartphone, title: 'Mobile UX', desc: 'Native patterns and micro-interactions that feel right.' },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Services</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
              <Icon className="h-6 w-6 text-slate-800" />
              <h3 className="mt-4 font-medium text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
