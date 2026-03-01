import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  // --- Slide-In Variants ---
  const slideLeft = {
    hidden: { x: -150, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const slideRight = {
    hidden: { x: 150, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };

  return (
    <section className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden bg-[#F4F7FC] text-[#1A1A1E] flex flex-col items-center justify-center">
      {/* --- Liquid Background Blobs --- */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{
            borderRadius: [
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 70% 50% 50% / 50% 60% 40% 60%",
              "40% 60% 70% 30% / 40% 50% 60% 50%",
            ],
            rotate: [0, 90, 180, 360],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-gradient-to-tr from-[#1C0770] to-indigo-500 opacity-20 blur-[80px]"
        />

        <motion.div
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "50% 50% 60% 40% / 60% 40% 50% 50%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
            rotate: [360, 180, 90, 0],
            scale: [0.9, 1.1, 1, 0.9],
            x: [0, 50, -50, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute ml-[20vw] mt-[10vw] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gradient-to-tl from-blue-400 to-cyan-300 opacity-20 blur-[100px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* --- LEFT COLUMN: Sliding Text --- */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={slideLeft} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-[#1C0770] opacity-30" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1C0770]">
                Our Philosophy
              </span>
            </motion.div>

            <motion.h2
              variants={slideLeft}
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8"
            >
              Crafting the web, <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500">
                exclusively for you.
              </span>
            </motion.h2>

            <motion.p
              variants={slideLeft}
              className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6 font-light max-w-lg"
            >
              At Web For You, we believe digital spaces should feel fluid, intuitive, and perfectly tailored to your brand's unique pulse.
            </motion.p>

            <motion.p
              variants={slideLeft}
              className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg"
            >
              We merge cutting-edge development with stunning, immersive design to create web experiences that don't just function—they flow.
            </motion.p>
          </motion.div>

          {/* --- RIGHT COLUMN: Floating Glass Cards --- */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] flex items-center justify-center">

            {/* Main Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="relative z-20 w-full max-w-md p-8 sm:p-10 rounded-[40px] bg-white/30 backdrop-blur-3xl border border-white/60 shadow-[0_8px_32px_0_rgba(28,7,112,0.1)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-[40px]" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#1C0770] mb-3">
                  Fluid Architecture
                </h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Websites built to adapt beautifully to any device, engineered with clean code that moves as fast as your business.
                </p>
              </div>
            </motion.div>

            {/* Top Right Small Card */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-[10%] right-[5%] z-30 w-48 p-5 rounded-[30px] bg-white/20 backdrop-blur-2xl border border-white/50 shadow-[0_8px_24px_0_rgba(28,7,112,0.08)]"
            >
              <p className="text-xs font-semibold text-[#1C0770] relative z-10">
                Pixel Perfect
              </p>
            </motion.div>

            {/* Bottom Left Small Card */}
            <motion.div
              initial={{ opacity: 0, x: -100, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-[10%] left-[5%] z-10 w-56 p-5 rounded-[30px] bg-white/40 backdrop-blur-3xl border border-white/70 shadow-[0_8px_32px_0_rgba(255,255,255,0.4)]"
            >
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                Performance
              </p>
              <div className="w-full h-1.5 bg-gray-200/50 rounded-full overflow-hidden mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "circOut" }}
                  className="h-full bg-gradient-to-r from-[#1C0770] to-blue-500 rounded-full"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;