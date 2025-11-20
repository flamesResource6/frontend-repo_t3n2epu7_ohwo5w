import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-end pb-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-4">UI/UX Designer</p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
            Crafting intuitive, beautiful digital experiences.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600">
            I’m Aarav Sharma — a creative product designer focused on clarity, emotion, and usability.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm hover:bg-slate-800 transition-colors">View Work</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-slate-300 text-slate-800 px-6 py-3 text-sm hover:bg-slate-50 transition-colors">Contact</a>
          </div>
        </div>

        <div className="ml-auto hidden md:block">
          {/* portrait placeholder */}
          <div className="w-44 h-56 md:w-56 md:h-72 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 border border-white shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
