import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, Sparkles } from "lucide-react";

const FAQ_DATA = [
  {
    question: "How long does a typical project take?",
    answer: "A standard high-performance website usually takes 3-6 weeks. Complexity, custom animations, and backend integrations can shift this timeline, but we prioritize velocity without compromising 'pixel-perfection'.",
  },
  {
    question: "Do you handle hosting and maintenance?",
    answer: "Absolutely. We deploy on edge-network infrastructure (Vercel/AWS) for lightning speeds. We also offer 'Legacy Support' packages to keep your site updated with the latest web standards.",
  },
  {
    question: "Will my site be SEO optimized?",
    answer: "SEO isn't an afterthought; it's baked into our code. From Semantic HTML to Core Web Vitals and Schema Markup, we ensure search engines love your site as much as your users do.",
  },
  {
    question: "Can we integrate custom AI features?",
    answer: "Yes. We specialize in integrating LLMs and generative AI directly into your UI, creating smart dashboards or automated content systems tailored to your business logic.",
  },
  {
    question: "What is your typical payment structure?",
    answer: "We usually work on a 50/50 split (Commencement/Launch) or a milestone-based sprint system. This keeps both parties aligned and ensures steady progress.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className={`group border-b border-gray-200 transition-all duration-500 ${isOpen ? "pb-6" : "pb-0"}`}
    >
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left outline-none"
      >
        <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-[#1C0770]" : "text-[#1A1A1E] group-hover:text-blue-600"}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-transform duration-500 ${isOpen ? "bg-[#1C0770] text-white rotate-180" : "bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600"}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24 md:py-40 bg-[#F9FAFB] overflow-hidden">
      {/* Decorative Blur background */}
      <div className="absolute -top-[10%] -right-[5%] w-[40vw] h-[40vw] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-5 h-5 text-[#1C0770]" />
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#1C0770]">Expertise</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black text-[#1A1A1E] leading-[1.05] mb-8 tracking-tighter">
                  Common <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-600">Queries.</span>
                </h2>
                
                <p className="text-gray-500 font-medium text-lg leading-relaxed mb-10">
                  Transparency is the foundation of our partnership. If your question isn't here, reach out directly.
                </p>

                
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Accordion List */}
          <div className="lg:w-2/3">
            <div className="border-t border-gray-200">
              {FAQ_DATA.map((item, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;