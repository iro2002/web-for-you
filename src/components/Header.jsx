import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../images/logo2.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-6 px-4 pointer-events-none">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className={`
          pointer-events-auto flex items-center justify-between
          px-4 md:px-8 py-3
          backdrop-blur-2xl border
          transition-all duration-500 rounded-full
          ${
            scrolled
              ? "w-full md:w-[70%] bg-white/85 border-white/50 shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              : "w-full md:w-[92%] bg-white/40 border-white/20"
          }
        `}
      >
        {/* ---------------- LOGO ---------------- */}
        <div className="flex items-center gap-3">
          <motion.img
            whileHover={{ rotate: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={logo}
            alt="Logo"
            className="w-9 h-9 object-contain"
          />

      
        </div>

        {/* ---------------- NAVIGATION ---------------- */}
        <ul className="hidden md:flex items-center gap-12">
          {["Works", "Services", "Contact"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 group-hover:text-black transition-colors duration-300">
                {item}
              </span>

              {/* Underline */}
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#1C0770] to-blue-500 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* ---------------- PREMIUM CTA BUTTON ---------------- */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="relative group px-8 py-3 rounded-full overflow-hidden text-xs font-bold tracking-[0.18em] uppercase"
        >
          {/* Gradient Base */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C0770] via-[#2b0bb5] to-[#3b82f6]" />

          {/* Glass Layer */}
          <div className="absolute inset-0 backdrop-blur-md bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* Shine Sweep */}
          <div className="absolute -left-40 top-0 h-full w-40 bg-white/20 rotate-12 group-hover:left-full transition-all duration-700 ease-in-out" />

          {/* Text */}
          <span className="relative z-10 text-white">Hire Us</span>
        </motion.button>
      </motion.nav>
    </header>
  );
};

export default Header;