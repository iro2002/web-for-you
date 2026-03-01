import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 px-6 bg-[#F3F4F6] overflow-hidden">
      {/* The Glass Container */}
      <div className="max-w-7xl mx-auto relative">
        <div className="relative p-10 md:p-16 rounded-[3rem] bg-white/40 backdrop-blur-2xl 
                        border-t border-l border-white/70 border-b border-r border-white/20
                        shadow-[20px_20px_60px_rgba(0,0,0,0.03),-10px_-10px_40px_rgba(255,255,255,0.8)]
                        flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Brand Section */}
          <div className="max-w-xs">
            <h2 className="text-2xl font-black tracking-tighter text-[#1C0770] mb-4">
              GLASSDESIGN<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Creating fluid digital experiences through minimalist aesthetics and liquid glass interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Navigation</span>
              <ul className="space-y-2 text-sm font-bold text-slate-700">
                <li className="hover:text-[#1C0770] cursor-pointer transition-colors">Projects</li>
                <li className="hover:text-[#1C0770] cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-[#1C0770] cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Social</span>
              <ul className="space-y-2 text-sm font-bold text-slate-700">
                <li className="hover:text-[#1C0770] cursor-pointer transition-colors">Twitter</li>
                <li className="hover:text-[#1C0770] cursor-pointer transition-colors">Dribbble</li>
                <li className="hover:text-[#1C0770] cursor-pointer transition-colors">LinkedIn</li>
              </ul>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="w-full md:w-auto">
            <div className="bg-white/50 p-1.5 rounded-2xl border border-white flex items-center shadow-inner">
              <input 
                type="email" 
                placeholder="Join the waitlist" 
                className="bg-transparent border-none outline-none px-4 text-sm font-medium w-full md:w-48 placeholder:text-slate-400"
              />
              <button className="bg-[#1C0770] text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:scale-105 active:scale-95 transition-all">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center px-8 gap-4">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            © {currentYear} Liquid Glass UI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-[11px] font-bold text-slate-400 hover:text-slate-600 cursor-pointer uppercase tracking-widest transition-colors">Privacy</span>
            <span className="text-[11px] font-bold text-slate-400 hover:text-slate-600 cursor-pointer uppercase tracking-widest transition-colors">Terms</span>
          </div>
        </div>
      </div>

      {/* Subtle "Light Leak" behind the glass */}
      <div className="absolute bottom-[-10%] right-[10%] w-64 h-64 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
};

export default Footer;