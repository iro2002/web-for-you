import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import aboutImg from "../images/abouth.png"; 

// --- Stats Data ---
const statsData = [
  { id: 1, value: "10+", label: "Projects Delivered" },
  { id: 2, value: "10+", label: "Happy Clients" },
  { id: 3, value: "1+", label: "Years Experience" },
  { id: 4, value: "100%", label: "Client Satisfaction" },
];

// --- Number Counter Component ---
const AnimatedNumber = ({ value }) => {
  // Extract the number and the suffix (e.g., "+" or "%")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  
  // Format the number to round it and append the suffix
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2.2, // Matches your ultra-slow duration
        ease: [0.22, 1, 0.36, 1], // Matches your customEase
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const AboutUs = () => {
  // ---- Unified Professional Ease ----
  // This ease creates a very smooth "slow down at the end" effect
  const customEase = [0.22, 1, 0.36, 1];

  // ---- Directional Animations (Ultra Slow) ----
  const slideFromLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 2.2, ease: customEase } } // Increased to 2.2s
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 2.2, ease: customEase } } // Increased to 2.2s
  };

  const slideFromTopRight = {
    hidden: { opacity: 0, x: 40, y: -40 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 2.2, ease: customEase } } // Increased to 2.2s
  };

  const slideFromBottomLeft = {
    hidden: { opacity: 0, x: -40, y: 40 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 2.2, ease: customEase } } // Increased to 2.2s
  };

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: customEase } } // Increased to 1.5s
  };

  // Orchestrates the right-side visual elements to stagger in slowly
  const assembleContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // Badges now wait half a second between each other
        delayChildren: 0.3    // Waits 0.3s after triggering before starting
      }
    }
  };

  return (
    <section
      id="about"
      className="relative w-full py-20 md:py-32 bg-[#F9FAFB] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Subtle Background Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ---------------- LEFT CONTENT (Triggers when text is visible) ---------------- */}
          <motion.div 
            variants={slideFromLeft} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the text is visible
            className="max-w-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-gradient-to-r from-[#1C0770] to-transparent" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#1C0770]">
                About Our Company
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8 text-[#1A1A1E]">
              We build modern websites that help{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500">
                businesses grow online.
              </span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              We are a professional web development team focused on creating fast,
              responsive and secure websites for small businesses, startups,
              e-commerce brands and tourism companies.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-10">
              From UI/UX design to full-stack development and SEO optimization,
              we build digital experiences that convert visitors into customers
              and support long-term business growth.
            </p>

            <motion.a
              href="#services"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-white tracking-[0.15em] uppercase text-[10px] sm:text-[11px]
                         bg-gradient-to-r from-[#1C0770] via-[#2b0bb5] to-[#3b82f6]
                         shadow-[0_10px_25px_rgba(28,7,112,0.25)] hover:shadow-[0_15px_30px_rgba(28,7,112,0.35)] transition-shadow duration-300"
            >
              View Our Services
            </motion.a>
          </motion.div>

          {/* ---------------- RIGHT VISUAL (Triggers ONLY when image scrolls into view) ---------------- */}
          <motion.div
            variants={assembleContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the image container is visible
            className="relative w-full aspect-square max-w-[520px] mx-auto lg:ml-auto"
          >
            {/* Background Glow */}
            <div className="absolute top-10 right-0 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl -z-10" />

            {/* Main Image (Slides from Right) */}
            <motion.div variants={slideFromRight} className="relative w-full h-full z-10">
              <img 
                src={aboutImg} 
                alt="Web development illustration" 
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Top Right Badge */}
            <motion.div
              variants={slideFromTopRight}
              className="absolute top-4 right-0 px-6 py-4 rounded-2xl
                         bg-white/80 backdrop-blur-md border border-white/60
                         shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-20"
            >
              <h3 className="text-sm font-bold text-[#1C0770]">
                Web & App Development
              </h3>
            </motion.div>

            {/* Bottom Left Badge */}
            <motion.div
              variants={slideFromBottomLeft}
              className="absolute bottom-12 left-0 px-5 py-3 rounded-2xl
                         bg-white/80 backdrop-blur-md border border-white/60
                         shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-20"
            >
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500 font-bold">
                100% Responsive
              </p>
            </motion.div>
          </motion.div>
          
        </div>

        {/* ================= STATS (Separate Trigger, Slide Up) ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="border-t border-gray-200 mt-20 pt-12"
          variants={{
            visible: {
              transition: { staggerChildren: 0.3, delayChildren: 0.2 } // Stats appear one by one slower
            }
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat) => (
              <motion.div
                key={stat.id}
                variants={slideUp}
                className="flex flex-col border-l-2 border-[#1C0770]/20 pl-6"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#1C0770] to-blue-500 mb-1">
                  {/* Replaced static value with AnimatedNumber component */}
                  <AnimatedNumber value={stat.value} />
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;