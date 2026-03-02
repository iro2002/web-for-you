import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/logo2.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Handle scroll behavior for the pill header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  // Framer Motion variants for the full-screen menu links
  const menuContainerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const menuItemVars = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
    exit: { 
      y: 20, 
      opacity: 0, 
      transition: { duration: 0.3 } 
    },
  };

  const navLinks = ["Works", "Services", "Contact"];

  return (
    <>
      {/* ---------------- MAIN HEADER (PILL) ---------------- */}
      <AnimatePresence>
        <header className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
          <motion.nav
            initial={{ y: 0, opacity: 1 }}
            animate={{ 
              y: visible ? 0 : -120, 
              opacity: visible ? 1 : 0 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              layout: { duration: 0.4, ease: "easeOut" } 
            }}
            layout
            className={`
              pointer-events-auto flex items-center justify-between
              px-5 md:px-8 py-3
              backdrop-blur-2xl border
              transition-all duration-500 rounded-full
              ${
                scrolled
                  ? "w-[95%] md:w-[70%] bg-white/85 border-white/50 shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
                  : "w-[95%] md:w-[92%] bg-white/40 border-white/20"
              }
            `}
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <motion.img
                whileHover={{ rotate: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={logo}
                alt="Logo"
                className="w-8 h-8 md:w-9 md:h-9 object-contain relative z-[101]"
              />
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-12 relative z-[101]">
              {navLinks.map((item) => (
                <li key={item} className="relative group cursor-pointer">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 group-hover:text-black transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#1C0770] to-blue-500 transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>

            {/* Desktop Premium CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:block relative group px-8 py-3 rounded-full overflow-hidden text-xs font-bold tracking-[0.18em] uppercase z-[101]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C0770] via-[#2b0bb5] to-[#3b82f6]" />
              <div className="absolute inset-0 backdrop-blur-md bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="absolute -left-40 top-0 h-full w-40 bg-white/20 rotate-12 group-hover:left-full transition-all duration-700 ease-in-out" />
              <span className="relative z-10 text-white">Hire Us</span>
            </motion.button>

            {/* Mobile Hamburger Menu Icon */}
            <div 
              className="md:hidden flex items-center pr-2 cursor-pointer relative z-[101]"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg 
                className="w-7 h-7 text-[#1C0770]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </motion.nav>
        </header>
      </AnimatePresence>

      {/* ---------------- CREATIVE FULL SCREEN MOBILE MENU (WHITE LIQUID GLASS) ---------------- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0)" }}
            animate={{ clipPath: "circle(150% at 100% 0)" }}
            exit={{ clipPath: "circle(0% at 100% 0)", transition: { delay: 0.2, duration: 0.5 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] bg-white/60 backdrop-blur-3xl flex flex-col justify-center items-center font-['Inter']"
          >
            {/* Close Button - Updated to dark color */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-6 p-2 text-gray-500 hover:text-[#1C0770] transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Animated Links */}
            <motion.ul 
              variants={menuContainerVars}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex flex-col items-center gap-10"
            >
              {navLinks.map((item) => (
                <div key={item} className="overflow-hidden">
                  <motion.li variants={menuItemVars}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1E] to-[#1C0770] hover:to-blue-500 transition-all duration-300 tracking-tight"
                    >
                      {item}
                    </a>
                  </motion.li>
                </div>
              ))}
              
              {/* Mobile CTA Button (inside menu) - Updated to use brand gradient */}
              <div className="overflow-hidden mt-8">
                <motion.li variants={menuItemVars}>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="px-10 py-4 rounded-full bg-gradient-to-r from-[#1C0770] via-[#2b0bb5] to-[#3b82f6] text-white font-bold tracking-[0.2em] uppercase text-sm shadow-[0_10px_30px_rgba(28,7,112,0.25)] active:scale-95 transition-transform"
                  >
                    Hire Us
                  </button>
                </motion.li>
              </div>
            </motion.ul>

            {/* Bottom Contact Info - Updated to dark gray */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-500 font-semibold text-xs tracking-widest uppercase"
            >
              <p>hello@modernweb.com</p>
              <p>+1 (234) 567-890</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;