import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const TechnicalHero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
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
    <div className="relative w-full min-h-[100dvh] overflow-hidden">
      {/* Preloader - Glassmorphism & SVG */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/40 backdrop-blur-xl text-[#1C0770]"
          >
            {/* Animated SVG Spinner */}
            <motion.svg
              className="w-16 h-16 mb-6"
              viewBox="0 0 50 50"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="31.4 100"
                strokeLinecap="round"
              />
            </motion.svg>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-4xl font-bold tracking-tighter"
            >
              {loadingProgress}%
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        onMouseMove={handleMouseMove}
        className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#F9FAFB] text-[#1A1A1E] after:content-[''] "
        style={{ perspective: "1500px", fontFamily: "'Inter', sans-serif" }}
        aria-label="Hero section for web development services"
      >
        {/* Animated Wave Background (Shared) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-end">
          {/* Wave 1 */}
          <motion.svg
            className="absolute bottom-0 w-full h-[60vh] text-[#1C0770]/5"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            initial={{ y: 100, opacity: 0 }}
            animate={!isLoading ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.path
              fill="currentColor"
              animate={{
                d: [
                  "M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,144C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,208C672,203,768,149,864,138.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,144C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ],
              }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            />
          </motion.svg>

          {/* Wave 2 */}
          <motion.svg
            className="absolute bottom-0 w-full h-[45vh] text-blue-500/10"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            initial={{ y: 100, opacity: 0 }}
            animate={!isLoading ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          >
            <motion.path
              fill="currentColor"
              animate={{
                d: [
                  "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,186.7C672,171,768,117,864,112C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,170.7C672,171,768,213,864,224C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,186.7C672,171,768,117,864,112C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ],
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />
          </motion.svg>

          {/* Grainy Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* ============================================== */}
        {/* MOBILE LAYOUT (Integrated Button Design)       */}
        {/* ============================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={!isLoading ? "visible" : "hidden"}
          className="md:hidden relative z-10 flex flex-col justify-between h-full w-full px-6 py-16"
        >
          {/* Top: Left-Aligned Text */}
          <motion.div variants={itemVariants} className="text-left mt-8 z-20">
            <h1 className="text-5xl font-bold tracking-tight leading-[1.1] mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500">
                Modern
              </span>
              <br />
              <span className="text-[#1C0770]">Web Solutions</span>
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed max-w-[90%]">
              We create fast, responsive, and professional websites that help your
              business grow and stand out online.
            </p>
          </motion.div>

          {/* Middle: Custom Vector Graphic with Embedded Button */}
          <motion.div 
            variants={itemVariants} 
            className="relative flex-1 flex items-center justify-center my-6 z-10"
          >
            <motion.svg
              width="280"
              height="280"
              viewBox="0 0 240 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              {/* Floating Base Element & Button Group */}
              <motion.g
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                {/* Glassmorphic Card Background */}
                <rect 
                  x="20" y="50" width="200" height="140" rx="20" fill="white" fillOpacity="0.7"
                  stroke="#1C0770" strokeWidth="2" strokeOpacity="0.15" className="backdrop-blur-md shadow-xl"
                />
                
                {/* Browser Dots */}
                <circle cx="45" cy="70" r="5" fill="#3b82f6" fillOpacity="0.6"/>
                <circle cx="61" cy="70" r="5" fill="#1C0770" fillOpacity="0.4"/>
                <rect x="20" y="86" width="200" height="1" fill="#1C0770" fillOpacity="0.1"/>
                
                {/* Abstract Lines shifted slightly up */}
                <motion.rect 
                  animate={{ width: [70, 110, 70] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  x="45" y="105" width="110" height="8" rx="4" fill="#1C0770" fillOpacity="0.1"
                />
                <rect x="45" y="125" width="80" height="8" rx="4" fill="#3b82f6" fillOpacity="0.2"/>

                {/* Embedded HTML "Get Started" Button using foreignObject */}
                <foreignObject x="40" y="145" width="160" height="60">
                  {/* Added a small wrapper to allow framer-motion scaling to not be clipped */}
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 rounded-full font-bold text-white tracking-[0.1em] uppercase text-[11px] text-center bg-gradient-to-r from-[#1C0770] via-[#2b0bb5] to-[#3b82f6] shadow-[0_8px_15px_rgba(28,7,112,0.3)]"
                    >
                      Get Started
                    </motion.a>
                  </div>
                </foreignObject>
              </motion.g>

              {/* Floating Accent Shape (Stays Independent) */}
              <motion.rect
                animate={{ y: [0, 12, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5, ease: "easeInOut" }}
                x="170" y="20" width="50" height="50" rx="14" fill="url(#mobile-grad)"
                className="drop-shadow-xl"
              />
              <defs>
                <linearGradient id="mobile-grad" x1="170" y1="20" x2="220" y2="70" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1C0770" />
                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.div>

          {/* Bottom: Bento Grid Stats */}
          <div className="z-20 w-full">
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-6">
              <div className="backdrop-blur-xl bg-white/60 border border-white/80 shadow-[0_4px_20px_rgba(28,7,112,0.05)] rounded-2xl p-4 flex flex-col items-start">
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500 mb-1">
                  10+
                </h3>
                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                  Projects Launched
                </p>
              </div>
              <div className="backdrop-blur-xl bg-white/60 border border-white/80 shadow-[0_4px_20px_rgba(28,7,112,0.05)] rounded-2xl p-4 flex flex-col items-start">
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500 mb-1">
                  100%
                </h3>
                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                  Client Satisfaction
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>


        {/* ============================================== */}
        {/* DESKTOP LAYOUT (Original Untouched Design)     */}
        {/* ============================================== */}
        <motion.div
          style={{ y: contentY }}
          variants={containerVariants}
          initial="hidden"
          animate={!isLoading ? "visible" : "hidden"}
          className="hidden md:flex relative z-10 flex-col items-center justify-center h-full w-full px-4 sm:px-6 max-w-5xl mx-auto py-12 md:py-16"
        >
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-4 text-center mt-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500">
              Modern
            </span>{" "}
            <span className="text-[#1C0770] block sm:inline">Web Solutions</span>
          </motion.h1>

          {/* Subtitle */}
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
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full mb-10"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-[40%] max-w-[280px] sm:w-auto px-5 py-3 sm:px-8 rounded-full font-semibold text-white tracking-[0.1em] uppercase text-[10px] sm:text-[11px] text-center bg-gradient-to-r from-[#1C0770] via-[#2b0bb5] to-[#3b82f6] shadow-[0_10px_20px_rgba(28,7,112,0.2)]"
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
              className="w-[40%] max-w-[280px] sm:w-auto px-5 py-3 sm:px-8 rounded-full font-semibold tracking-[0.1em] uppercase text-[10px] sm:text-[11px] text-center border border-black/10 backdrop-blur-md bg-white/30 shadow-sm"
            >
              Our Work
            </motion.a>
          </motion.div>

          {/* Stats Box */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-4xl relative overflow-hidden rounded-2xl md:rounded-3xl backdrop-blur-xl bg-white/40 border border-white/50 shadow-[0_8px_32px_rgba(28,7,112,0.08)] py-8 px-6 sm:p-12 flex flex-row items-center justify-evenly sm:justify-between gap-4 sm:gap-0"
          >
            {/* Liquid Blobs inside the stat box */}
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

            {/* Stat 1 */}
            <div className="relative z-10 flex-1 flex flex-col items-center text-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500 mb-2">
                10+
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-gray-500">
                Projects Launched
              </p>
            </div>

            {/* Divider */}
            <div className="relative z-10 w-[1px] h-16 md:h-20 bg-gradient-to-b from-transparent via-[#1C0770]/30 to-transparent mx-2 sm:mx-4" />

            {/* Stat 2 */}
            <div className="relative z-10 flex-1 flex flex-col items-center text-center">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500 mb-2">
                100%
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-gray-500">
                Client Satisfaction
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default TechnicalHero;