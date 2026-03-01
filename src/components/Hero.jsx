import React from "react";
import { motion } from "framer-motion";

// --- Professional Minimalist Icons (Scaled Down) ---
const WebsiteIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const EcommerceIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const TourismIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CustomIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const SEOIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

// --- Services Data ---
const services = [
  {
    id: 1,
    title: "Corporate Websites",
    description: "Lightning-fast, high-converting platforms designed to establish absolute authority in your industry.",
    icon: <WebsiteIcon />,
  },
  {
    id: 2,
    title: "Startup E-Commerce",
    description: "Scalable stores with seamless checkout flows, secure gateways, and striking product displays.",
    icon: <EcommerceIcon />,
  },
  {
    id: 3,
    title: "Tourism & Travel",
    description: "Immersive experiences featuring interactive maps, booking engines, and visual storytelling.",
    icon: <TourismIcon />,
  },
  {
    id: 4,
    title: "Custom Web Apps",
    description: "Bespoke digital solutions, portals, and web applications engineered perfectly for your niche.",
    icon: <CustomIcon />,
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Intuitive, pixel-perfect user interfaces and engaging experiences that delight your customers.",
    icon: <DesignIcon />,
  },
  {
    id: 6,
    title: "SEO & Performance",
    description: "Data-driven optimization strategies to improve your search rankings and drive targeted traffic.",
    icon: <SEOIcon />,
  },
];

const Services = () => {

  return (
    <section 
      id="services" 
      className="relative w-full py-16 md:py-24 overflow-hidden bg-[#F9FAFB] text-[#1A1A1E] flex flex-col items-center justify-center"
    >
      {/* --- Ambient Background Liquid Blobs --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -30, 15, 0],
            y: [0, 30, -15, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#1C0770]/5 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] bg-blue-500/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6">
        
        {/* --- Centered Section Header --- */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase mb-3 text-[#1C0770] opacity-80"
          >
            Our Expertise
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-4 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500">
              Digital
            </span>{" "}
            <span className="text-[#1C0770] block sm:inline">Experiences</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-xl mt-2"
          >
            From small local startups to global tourism brands, we craft custom digital platforms that demand attention, load instantly, and drive real business results.
          </motion.p>
        </div>

        {/* --- Symmetrical Professional Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover="hover"
              className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-500 flex flex-col items-center text-center bg-white/40 border border-white/60 shadow-[0_4px_24px_rgba(28,7,112,0.03)] hover:shadow-[0_15px_40px_rgba(28,7,112,0.08)] backdrop-blur-2xl"
            >
              {/* Internal Expanding Liquid Hover Effect */}
              <motion.div
                variants={{
                  hover: { scale: 2.5, opacity: 0.6 }
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-tr from-[#1C0770]/5 to-blue-400/10 blur-xl z-0 rounded-full transition-all duration-700 ease-out pointer-events-none"
              />

              {/* Centered Liquid Icon Container */}
              <div className="relative z-10 w-16 h-16 mb-5 flex items-center justify-center">
                <motion.div
                  animate={{
                    borderRadius: [
                      "40% 60% 70% 30% / 40% 50% 60% 50%",
                      "60% 40% 30% 70% / 60% 30% 70% 40%",
                      "40% 60% 70% 30% / 40% 50% 60% 50%",
                    ],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-white shadow-inner border border-white/50 z-0 group-hover:from-[#1C0770]/10 group-hover:to-blue-200/50 transition-colors duration-500"
                />
                <div className="relative z-10 text-[#1C0770] transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex flex-col items-center flex-grow">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#1C0770]">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm max-w-[260px]">
                  {service.description}
                </p>
              </div>

              {/* Subtle Animated Bottom Border Line on Hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-[#1C0770] to-blue-500 transition-all duration-500 ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;