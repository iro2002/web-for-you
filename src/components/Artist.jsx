import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feedbackData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Founder",
    company: "Lumina Tech",
    content: "They didn't just build a website; they transformed our entire digital presence. The attention to detail is unmatched. Our conversion rate increased by 40%.",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Marketing Director",
    company: "Apex Tourism",
    content: "Working with this team was a breeze. They delivered a blazing fast, secure platform. The custom animations gave our brand a competitive edge.",
    image: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "CEO",
    company: "Elevate E-commerce",
    content: "Absolutely phenomenal work. The e-commerce backend is flawless. They were responsive and delivered exactly what we needed ahead of schedule.",
    image: "https://i.pravatar.cc/150?u=elena"
  }
];

const ClientFeedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = feedbackData[activeIndex];

  const handlePrev = () => setActiveIndex((p) => (p === 0 ? feedbackData.length - 1 : p - 1));
  const handleNext = () => setActiveIndex((p) => (p === feedbackData.length - 1 ? 0 : p + 1));

  const customEase = [0.25, 0.1, 0.25, 1];

  return (
    <section id="feedback" className="relative w-full py-20 md:py-32 bg-[#F9FAFB] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#1C0770] mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1C0770]">
            Client Transformations.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Desktop Nav */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-2 relative">
             {/* Optimized Sliding Pill */}
             <motion.div 
                className="absolute left-0 w-full bg-white border border-gray-200 rounded-xl z-0 shadow-sm"
                animate={{ top: activeIndex * 84 }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
                style={{ height: "76px" }}
             />

            {feedbackData.map((client, index) => (
              <button
                key={`nav-${client.id}`}
                onClick={() => setActiveIndex(index)}
                className={`relative z-10 flex items-center gap-4 text-left p-3 h-[76px] transition-all duration-300 ${
                  index === activeIndex ? "opacity-100 scale-[1.02]" : "opacity-30 hover:opacity-60"
                }`}
              >
                <img 
                  src={client.image} 
                  className="w-12 h-12 rounded-full aspect-square object-cover border border-gray-100" 
                  alt={client.name} 
                />
                <div>
                  <h4 className="font-bold text-xs text-[#1C0770]">{client.name}</h4>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{client.company}</p>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Content Display */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {/* KEY IS CRITICAL: active.id ensures the whole block re-renders on change */}
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4, ease: customEase }}
                className="flex flex-col space-y-6 md:space-y-8"
              >
                <div className="w-10 h-1 bg-[#1C0770]" />

                <p className="text-lg md:text-2xl lg:text-3xl leading-snug text-[#1A1A1E] font-bold tracking-tight">
                  "{active.content}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    {/* Fixed: This image now updates because it is inside the keyed motion.div */}
                    <img 
                      src={active.image} 
                      className="w-14 h-14 rounded-full aspect-square object-cover shadow-sm border-2 border-white" 
                      alt={active.name} 
                    />
                    <div>
                      <p className="font-black text-[#1A1A1E] text-sm md:text-base uppercase tracking-tight">
                        {active.name}
                      </p>
                      <p className="text-[10px] font-bold text-[#1C0770] uppercase tracking-widest mt-0.5">
                        {active.role} // {active.company}
                      </p>
                    </div>
                  </div>

                  {/* Manual Controls */}
                  <div className="flex gap-2">
                    <button 
                      onClick={handlePrev} 
                      className="p-3 md:p-4 rounded-full border border-gray-200 bg-white hover:border-[#1C0770] active:scale-90 transition-all shadow-sm"
                    >
                      <svg className="w-4 h-4 text-[#1C0770]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={handleNext} 
                      className="p-3 md:p-4 rounded-full border border-gray-200 bg-white hover:border-[#1C0770] active:scale-90 transition-all shadow-sm"
                    >
                      <svg className="w-4 h-4 text-[#1C0770]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;