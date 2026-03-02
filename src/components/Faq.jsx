import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "How long does a typical website project take?",
    answer: "Most standard business websites are completed within 3-5 weeks. More complex platforms with custom integrations typically take 6-10 weeks from discovery to launch."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, we offer flexible maintenance packages that include security updates, performance monitoring, and content updates to ensure your site stays fast."
  },
  {
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer: "Absolutely. Every site we build is 'mobile-first' and undergoes a rigorous SEO audit to ensure clean metadata and lightning-fast load speeds."
  },
  {
    question: "Can you redesign an existing website?",
    answer: "We specialize in digital transformations. We can take your existing content and brand and wrap it in a modern, high-performance architecture."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const customEase = [0.19, 1, 0.22, 1];

  return (
    <div className="relative group">
      {/* Subtle background glow on hover or when open - no hard card borders */}
      <div 
        className={`absolute -inset-x-4 -inset-y-2 rounded-2xl transition-colors duration-500 z-0 ${
          isOpen ? "bg-blue-50/50" : "group-hover:bg-gray-50/50"
        }`} 
      />

      <button
        onClick={onClick}
        className="relative z-10 flex w-full items-center justify-between py-8 text-left outline-none"
      >
        <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
          isOpen ? "text-[#1C0770]" : "text-[#1A1A1E]"
        }`}>
          {question}
        </span>
        
        {/* Minimalist Icon: Vertical line disappears to turn + into - */}
        <div className="relative flex h-5 w-5 items-center justify-center ml-4">
          <div className="h-[2px] w-full bg-[#1C0770] rounded-full" />
          <motion.div
            initial={false}
            animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
            className="absolute h-full w-[2px] bg-[#1C0770] rounded-full"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: customEase }}
            className="relative z-10 overflow-hidden"
          >
            <p className="pb-8 text-sm md:text-base text-gray-500 max-w-2xl leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thin divider line */}
      <div className="h-[1px] w-full bg-gray-200/60" />
    </div>
  );
};

const QandA = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative w-full py-24 md:py-32 bg-[#F9FAFB] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Decorative Wave-like Shape (matches your hero) */}
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative max-w-3xl mx-auto px-6 z-10">
        
        {/* Header - Aligned Left for a more modern, technical feel */}
        <div className="mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            className="h-[2px] bg-[#1C0770] mb-6"
          />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1C0770] block mb-2">
            Details
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1A1A1E]">
            Frequently <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500">
              Asked Questions.
            </span>
          </h2>
        </div>

        {/* Accordion List - No Wrapper Card */}
        <div className="flex flex-col">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Footer Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-8 text-left"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Still Curious?{" "}
            <a href="#contact" className="text-[#1C0770] border-b-2 border-[#1C0770]/20 hover:border-[#1C0770] transition-all ml-2">
              Get in touch
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default QandA;