import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md/0">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-tight text-slate-900">Aarav Sharma</a>
        <nav className="hidden md:flex items-center gap-8 text-slate-600">
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="ml-4 inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
          Let’s talk
        </a>
      </div>
    </header>
  );
};

export default Navbar;
