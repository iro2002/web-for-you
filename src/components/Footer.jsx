import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- Link Data ---
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const servicesLinks = [
    { name: "Web Development", href: "#" },
    { name: "Mobile Apps", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "E-Commerce", href: "#" },
    { name: "SEO Optimization", href: "#" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /> },
    { name: "Twitter", url: "#", icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /> },
    { name: "GitHub", url: "#", icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
  ];

  return (
    <footer
      className="relative bg-[#1C0770] text-white overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Info (Takes up more space) */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Modern<span className="text-blue-400">Web.</span>
            </h2>
            <p className="text-gray-300/80 text-sm leading-relaxed mb-8 max-w-sm">
              We create fast, responsive, and professional websites that help your business grow and stand out online. Built with passion and precision.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ y: -4, scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#60A5FA" }} // Slides slightly right and turns blue
                    className="text-gray-300/80 text-sm transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
              Expertise
            </h3>
            <ul className="flex flex-col gap-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#60A5FA" }}
                    className="text-gray-300/80 text-sm transition-colors inline-block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-gray-300/80 text-sm">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:hello@modernweb.com" className="hover:text-blue-400 transition-colors">
                  hello@modernweb.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300/80 text-sm">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300/80 text-sm">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>
                  123 Innovation Drive,<br />
                  Tech City, TC 90210
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {currentYear} Modern Web Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-xs sm:text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;