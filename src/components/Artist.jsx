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

  const customEase = [0.22, 1, 0.36, 1];

  return (
    <section id="feedback" className="relative w-full py-20 md:py-32 bg-[#F9FAFB] overflow-hidden">
      {/* Top Horizontal Line */}
      <div className="absolute top-0 left-0 w-full border-t border-gray-300 opacity-90" />

      {/* Background Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: customEase }}
          className="mb-12 lg:mb-20 max-w-2xl lg:ml-auto flex flex-col items-start lg:items-end text-left lg:text-right"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1C0770]">Client Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[#1A1A1E]">
            Transformations we've <span className="block text-transparent bg-clip-text bg-gradient-to-r lg:bg-gradient-to-l from-[#1C0770] to-blue-500">powered online.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Desktop List */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-4">
            {feedbackData.map((client, index) => (
              <button
                key={client.id}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-5 text-left p-3 rounded-xl transition-opacity duration-300 ${
                  index === activeIndex ? "opacity-100" : "opacity-50 hover:opacity-80"
                }`}
              >
                <img src={client.image} className="w-14 h-14 rounded-full object-cover" alt={client.name} />
                <div>
                  <h4 className="font-bold text-[#1C0770]">{client.name}</h4>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{client.company}</p>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Content Area */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.2, ease: customEase }}
                className="flex flex-col justify-center min-h-[300px] space-y-6"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-[#1A1A1E] font-medium italic">
                  "{active.content}"
                </p>

                {/* Mobile Identity + Arrows */}
                <div className="flex items-center justify-between pt-4 lg:pt-0 border-t lg:border-none border-gray-200">
                  <div className="flex items-center gap-4">
                    <img src={active.image} className="w-12 h-12 rounded-full lg:hidden" alt={active.name} />
                    <div>
                      <p className="font-bold text-[#1A1A1E]">{active.name}</p>
                      <p className="text-[10px] lg:text-xs font-bold tracking-widest text-[#1C0770] uppercase">{active.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 lg:hidden">
                    <button onClick={handlePrev} className="p-3 rounded-full border border-gray-300 active:scale-95 transition-transform">
                      <svg className="w-5 h-5 text-[#1C0770]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button onClick={handleNext} className="p-3 rounded-full border border-gray-300 active:scale-95 transition-transform">
                      <svg className="w-5 h-5 text-[#1C0770]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Line */}
      <div className="absolute bottom-0 left-0 w-full border-t border-gray-300 opacity-90" />
    </section>
  );
};

export default ClientFeedback;