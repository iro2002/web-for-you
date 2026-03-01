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

          {/* Newsletter / CTA with Premium Button */}
          <div className="w-full md:w-auto">
            <div className="bg-white/50 p-1.5 rounded-2xl border border-white flex items-center shadow-inner min-w-[300px]">
              <input 
                type="email" 
                placeholder="Join the waitlist" 
                className="bg-transparent border-none outline-none px-4 text-sm font-medium w-full md:w-48 placeholder:text-slate-400"
              />
              
              {/* --- UPDATED PREMIUM BUTTON --- */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="relative group px-6 py-2.5 rounded-xl overflow-hidden text-[10px] font-bold tracking-[0.1em] uppercase whitespace-nowrap"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1C0770] via-[#2b0bb5] to-[#3b82f6]" />
                <div className="absolute inset-0 backdrop-blur-md bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute -left-20 top-0 h-full w-20 bg-white/20 rotate-12 group-hover:left-full transition-all duration-700 ease-in-out" />
                <span className="relative z-10 text-white font-black">Submit</span>
              </motion.button>
              {/* --- END UPDATED BUTTON --- */}

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