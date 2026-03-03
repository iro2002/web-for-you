import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feedbackData = [
  {
    id: 1,
    name: "Asela Nishshankha",
    role: "Founder",
    company: "thtropicalweldlock.com",
    content: "Excellent work! The website design is clean, modern, and very user-friendly. Everything was delivered on time and exactly as discussed. Highly recommended for anyone looking for a professional website designer.",
    image: "https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-1/492715104_2359429681125018_6861699466228304392_n.jpg?stp=c255.0.1538.1538a_dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_ohc=z3gpcz9LOfoQ7kNvwGhTpVS&_nc_oc=AdmamKMdGd4AF5960uEYzWNKOsfKKYLFgPq2BqeKI8AqdEXEKnI7oLs4OBtzb_uPtHE&_nc_zt=24&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=L-kF68_yLTPJp7lJsEtvNQ&_nc_ss=8&oh=00_AfzZ2C8H0M3M0wWVF2l1GHmzce6unGS4FbmZZgc60IVYdQ&oe=69AC9C04"
  },
  {
    id: 2,
    name: "Sulash De Soyza",
    role: "Founder",
    company: "CraftGrapher / TEARDOWN ART",
    content: "Highly recommend! The website was designed professionally with a clean, modern, and premium look. Very responsive on both mobile and desktop. Great communication and delivered on time. Excellent service overall.",
    image: "https://scontent.fcmb8-1.fna.fbcdn.net/v/t39.30808-1/595977571_122196717512564446_7239449843004284583_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=CZCmBkeGCwwQ7kNvwEDtupi&_nc_oc=Adk7s5khjhZdMwTMZyJUktKhPWS6xIDaWEZM3WZFomIfieAW3C6qb1d52sEOaDuWKls&_nc_zt=24&_nc_ht=scontent.fcmb8-1.fna&_nc_gid=gIL7DXQC0TPELnnBj7bjDQ&_nc_ss=8&oh=00_Afzq8n1NKp8u-a0BvJRMua5_e-GxOWqzRrWiHt18hsLdYA&oe=69ACA455"
  },

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