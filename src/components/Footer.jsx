import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Aarav Sharma. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Dribbble</a>
          <a href="#" className="hover:text-slate-900">Behance</a>
          <a href="#" className="hover:text-slate-900">LinkedIn</a>
          <a href="#" className="hover:text-slate-900">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
