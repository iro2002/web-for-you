import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Feedback Data ---
const feedbackData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Founder",
    company: "Lumina Tech",
    content: "They didn't just build a website; they transformed our entire digital presence. The attention to detail and UI/UX design is unmatched. Our conversion rate increased by 40% in the first month.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Marketing Director",
    company: "Apex Tourism",
    content: "Working with this team was a breeze. They understood our vision perfectly and delivered a blazing fast, secure platform. The custom animations gave our brand a massive competitive edge.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "CEO",
    company: "Elevate E-commerce",
    content: "Absolutely phenomenal work. The e-commerce backend is flawless, and the frontend is gorgeous. They were responsive, professional, and delivered exactly what we needed ahead of schedule.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=elena"
  }
];

const ClientFeedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = feedbackData[activeIndex];

  const handlePrev = () => setActiveIndex((p) => (p === 0 ? feedbackData.length - 1 : p - 1));
  const handleNext = () => setActiveIndex((p) => (p === feedbackData.length - 1 ? 0 : p + 1));

  const customEase = [0.19, 1, 0.22, 1];

  return (
    <section id="feedback" className="relative w-full py-24 md:py-32 bg-[#F9FAFB] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Background Decorative Shapes (Creative Motion) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            y: [0, -40, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#1C0770]/5 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: customEase }}
          className="mb-16 md:mb-24"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#1C0770] mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#1A1A1E] tracking-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500">Transformations.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Nav with Sliding Indicator */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-2 relative">
             {/* The Active Background Pill */}
             <motion.div 
                className="absolute left-0 w-full bg-white shadow-sm border border-gray-100 rounded-2xl z-0"
                initial={false}
                animate={{ 
                  top: activeIndex * 84, // Adjust based on button height + gap
                  height: 76 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
             />

            {feedbackData.map((client, index) => (
              <button
                key={client.id}
                onClick={() => setActiveIndex(index)}
                className={`relative z-10 flex items-center gap-4 text-left p-3 h-[76px] rounded-2xl transition-all duration-500 ${
                  index === activeIndex ? "scale-[1.02]" : "opacity-40 hover:opacity-70"
                }`}
              >
                <img src={client.image} className="w-12 h-12 rounded-xl object-cover grayscale-[0.5]" alt={client.name} />
                <div>
                  <h4 className="font-bold text-sm text-[#1C0770]">{client.name}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{client.company}</p>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Content Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.7, ease: customEase }}
                className="flex flex-col space-y-8"
              >
                {/* Modern Quote Icon */}
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#1C0770] to-blue-500" />

                {/* Feedback Text - No Italic, Smaller, Clean */}
                <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-[#1A1A1E] font-medium tracking-tight">
                  {active.content}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8">
                  <div className="flex items-center gap-4">
                    <img src={active.image} className="w-14 h-14 rounded-2xl lg:hidden shadow-lg" alt={active.name} />
                    <div>
                      <p className="font-extrabold text-[#1A1A1E] text-base">{active.name}</p>
                      <p className="text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase mt-1">
                        {active.role} // {active.company}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex gap-2">
                    <button onClick={handlePrev} className="p-4 rounded-full border border-gray-200 bg-white hover:bg-gray-50 active:scale-90 transition-all shadow-sm">
                      <svg className="w-4 h-4 text-[#1C0770]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button onClick={handleNext} className="p-4 rounded-full border border-gray-200 bg-white hover:bg-gray-50 active:scale-90 transition-all shadow-sm">
                      <svg className="w-4 h-4 text-[#1C0770]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modern thin line accents */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default ClientFeedback;