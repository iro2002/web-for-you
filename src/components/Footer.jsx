import React from "react";
import { motion } from "framer-motion";

const SmallFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /> },
    { name: "Twitter", url: "#", icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /> },
    { name: "GitHub", url: "#", icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
  ];

  return (
    <footer 
      className="bg-[#1C0770] py-6 sm:py-8 border-t border-white/10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-white font-bold text-lg tracking-tight">
            Modern<span className="text-blue-400">Web.</span>
          </span>
          <span className="hidden sm:inline-block text-white/20">|</span>
          <span className="text-gray-400 text-xs sm:text-sm">
            &copy; {currentYear} All rights reserved.
          </span>
        </div>

        {/* Center: Legal Links */}
        <div className="flex gap-6 text-xs sm:text-sm text-gray-400">
          <motion.a 
            href="#privacy" 
            whileHover={{ color: "#ffffff", y: -1 }}
            className="transition-colors duration-200"
          >
            Privacy Policy
          </motion.a>
          <motion.a 
            href="#terms" 
            whileHover={{ color: "#ffffff", y: -1 }}
            className="transition-colors duration-200"
          >
            Terms of Service
          </motion.a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              whileHover={{ y: -3, scale: 1.1, color: "#60A5FA" }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 transition-colors"
              aria-label={social.name}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {social.icon}
              </svg>
            </motion.a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default SmallFooter;