import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does the liquid glass UI benefit my brand?",
    answer: "It creates a high-end, modern aesthetic that feels tactile and premium. The transparency and depth help your content breathe while maintaining a sophisticated technical edge."
  },
  {
    question: "Is the glass effect mobile-friendly?",
    answer: "Absolutely. We use optimized CSS backdrop-filters and hardware-accelerated transforms to ensure the 'frosted' look remains fluid even on mobile devices."
  },
  {
    question: "Can I customize the glass transparency?",
    answer: "Yes, the system is built with Tailwind utility classes, allowing you to easily adjust the opacity (from white/10 to white/60) to match your brand's specific needs."
  },
  {
    question: "Do these components support dark mode?",
    answer: "The liquid glass effect naturally adapts. In dark mode, we simply swap the white glass for a deep obsidian or sapphire glass tint with subtle neon highlights."
  }
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="relative w-full py-32 bg-[#F3F4F6] font-sans text-[#1A1A1E] overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.span
            className="text-[10px] font-black tracking-[0.5em] uppercase opacity-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Support
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Questions?
          </motion.h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-[2rem] transition-all duration-500
                ${expanded === index 
                  ? 'bg-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.04)] scale-[1.02]' 
                  : 'bg-white/30 hover:bg-white/40 shadow-[10px_10px_20px_rgba(0,0,0,0.02)]'}
                backdrop-blur-xl border-t border-l border-white/60 border-b border-r border-white/10
              `}
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full p-8 flex justify-between items-center text-left outline-none group"
              >
                <span className={`text-lg font-bold transition-colors duration-300 ${expanded === index ? 'text-[#1C0770]' : 'text-slate-700'}`}>
                  {faq.question}
                </span>
                
                {/* Custom Glass Icon */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border border-white transition-all duration-500
                  ${expanded === index ? 'bg-[#1C0770] rotate-45' : 'bg-white/50 group-hover:bg-white'}`}>
                  <svg 
                    width="16" height="16" viewBox="0 0 24 24" fill="none" 
                    stroke={expanded === index ? "white" : "#1C0770"} 
                    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8 pt-0 text-slate-500 font-medium leading-relaxed">
                      <div className="h-px w-full bg-white/50 mb-6" />
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Subtle bottom light leak to match the theme */}
      <div className="absolute top-1/2 left-[-10%] w-[40vw] h-[40vw] bg-white/40 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default FAQ;