import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Let’s build something great</h2>
        <p className="mt-3 text-slate-600">Tell me about your project and timeline. I’ll get back within 24 hours.</p>

        <form className="mt-10 grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-slate-700">Name</label>
              <input type="text" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Email</label>
              <input type="email" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="name@email.com" />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-700">Message</label>
            <textarea rows="5" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="A few words about what you need..." />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500">By submitting, you agree to be contacted about your project.</p>
            <button type="submit" className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm hover:bg-slate-800 transition-colors">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
