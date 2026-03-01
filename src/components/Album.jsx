import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Modern Web App', category: 'Development', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=450' },
  { title: 'E-commerce Platform', category: 'Shopify', image: 'https://images.unsplash.com/photo-1612832021267-8a1b8eaf4e0e?auto=format&fit=crop&w=600&h=450' },
  { title: 'Branding & UI', category: 'Design', image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=600&h=450' },
  { title: 'Creative Dashboard', category: 'SaaS', image: 'https://images.unsplash.com/photo-1581091215365-8a1c3be8b6f1?auto=format&fit=crop&w=600&h=450' },
  { title: 'Marketing Website', category: 'SEO', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=450' },
  { title: 'Analytics Tool', category: 'Data', image: 'https://images.unsplash.com/photo-1581092918363-5d303f4b98ef?auto=format&fit=crop&w=600&h=450' },
];

const OurWork = () => {
  return (
    <section className="relative w-full py-32 bg-[#F3F4F6] font-sans text-[#1A1A1E] overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
        <motion.span
          className="text-[10px] font-black tracking-[0.5em] uppercase opacity-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Portfolio
        </motion.span>
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mt-4 tracking-tight text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Selected Projects
        </motion.h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            whileHover={{ y: -12 }}
            className="group relative p-3 rounded-[2.5rem] bg-white/30 backdrop-blur-md 
                       border-t border-l border-white/60 border-b border-r border-white/10
                       shadow-[20px_20px_40px_rgba(0,0,0,0.03),-10px_-10px_30px_rgba(255,255,255,0.7)]
                       transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[2rem] h-72">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
              />
              
              {/* Glossy Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Info Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  whileInHover={{ y: 0, opacity: 1 }}
                  className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/70 mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </motion.div>
              </div>
            </div>

            {/* External Link Icon / Button Bubble */}
            <div className="absolute -bottom-4 -right-2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C0770" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
               </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;