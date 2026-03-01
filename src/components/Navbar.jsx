import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

import heroBg from "../images/hero-bg.PNG";

const TechnicalHero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // --- Loading Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  // --- Hero Animations ---
  const { scrollY } = useScroll();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 120, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 120, damping: 25 });

  const handleMouseMove = (e) => {
    x.set(e.clientX / window.innerWidth - 0.5);
    y.set(e.clientY / window.innerHeight - 0.5);
  };

  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const blurOpacity = useTransform(scrollY, [0, 300], [0.4, 0.1]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <div className="relative">
      {/* --- PRELOADER --- */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1C0770] text-white"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 text-4xl font-bold tracking-tighter"
            >
              {loadingProgress}%
            </motion.div>
            <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-blue-400"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section
        onMouseMove={handleMouseMove}
        className="relative w-full h-[100dvh] overflow-hidden bg-[#F9FAFB] text-[#1A1A1E]"
        style={{ perspective: "1500px", fontFamily: "'Inter', sans-serif" }}
        aria-label="Hero section for web development services"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url(${heroBg})` }}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={!isLoading ? { scale: 1.1, opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            role="img"
          />
          <div className="absolute inset-0 bg-white/85" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Main Content */}
        <motion.div
          style={{ y: contentY }}
          variants={containerVariants}
          initial="hidden"
          animate={!isLoading ? "visible" : "hidden"}
          className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 sm:px-6 max-w-5xl mx-auto"
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-4 text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500">
              Modern
            </span>{" "}
            <span className="text-[#1C0770] block sm:inline">Web Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-xs sm:text-sm md:text-lg max-w-xl mx-auto leading-relaxed mb-8 text-center"
          >
            We create fast, responsive, and professional websites that help your
            business grow and stand out online.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full mb-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-10 sm:py-4 rounded-full font-semibold text-white tracking-[0.1em] uppercase text-[10px] sm:text-xs text-center bg-gradient-to-r from-[#1C0770] via-[#2b0bb5] to-[#3b82f6] shadow-[0_10px_20px_rgba(28,7,112,0.2)]"
            >
              Get Started
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{
                y: -2,
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-10 sm:py-4 rounded-full font-semibold tracking-[0.1em] uppercase text-[10px] sm:text-xs text-center border border-black/10 backdrop-blur-md bg-white/30 shadow-sm"
            >
              Our Work
            </motion.a>
          </motion.div>

          {/* --- LIQUID GLASS STATS BOX (RESPONSIVE) --- */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-2xl relative overflow-hidden rounded-2xl md:rounded-3xl backdrop-blur-xl bg-white/40 border border-white/50 shadow-[0_8px_32px_rgba(28,7,112,0.08)] p-4 sm:p-8 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0"
          >
            {/* Liquid Background Blobs */}
            <motion.div
              animate={{
                x: [0, 20, -10, 0],
                y: [0, -20, 10, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-400/20 rounded-full blur-3xl z-0 pointer-events-none"
            />
            <motion.div
              animate={{
                x: [0, -20, 15, 0],
                y: [0, 20, -15, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 w-28 h-28 sm:w-40 sm:h-40 bg-[#1C0770]/15 rounded-full blur-3xl z-0 pointer-events-none"
            />

            {/* Stat 1: Projects */}
            <div className="relative z-10 flex-1 flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500 mb-1">
                10+
              </h3>
              <p className="text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">
                Projects Launched
              </p>
            </div>

            {/* Divider (Hidden on small screens) */}
            <div className="hidden sm:block relative z-10 w-[1px] h-10 sm:h-12 bg-gradient-to-b from-transparent via-[#1C0770]/20 to-transparent mx-2" />

            {/* Stat 2: Satisfaction */}
            <div className="relative z-10 flex-1 flex flex-col items-center text-center">
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500 mb-1">
                100%
              </h3>
              <p className="text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-500">
                Client Satisfaction
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={!isLoading ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ opacity: blurOpacity }}
          className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-8 bg-gradient-to-b from-[#1C0770] to-transparent"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default TechnicalHero;