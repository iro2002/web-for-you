import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative w-full py-32 bg-[#F9FAFB] font-sans text-[#1A1A1E] overflow-hidden">
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-24 px-6">
        <motion.span
          className="text-[11px] font-bold tracking-[0.4em] uppercase opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl font-semibold mt-4 leading-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          Let’s talk about your next project
        </motion.h2>
      </div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left – Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-10"
        >
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Tell us about your idea, product or challenge.  
            We help brands and startups design and build meaningful digital
            experiences with precision and clarity.
          </p>

          <div className="space-y-6 text-sm tracking-wide">
            <div className="flex flex-col">
              <span className="uppercase text-[10px] opacity-60 mb-1">Email</span>
              <span className="font-medium">hello@yourstudio.com</span>
            </div>

            <div className="flex flex-col">
              <span className="uppercase text-[10px] opacity-60 mb-1">Phone</span>
              <span className="font-medium">+94 00 000 0000</span>
            </div>

            <div className="flex flex-col">
              <span className="uppercase text-[10px] opacity-60 mb-1">Location</span>
              <span className="font-medium">Sri Lanka</span>
            </div>
          </div>
        </motion.div>

        {/* Right – Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative w-full space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-5 py-4 rounded-2xl bg-white/60 backdrop-blur-md border border-black/10 text-sm outline-none focus:border-[#1C0770]/40 transition"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-5 py-4 rounded-2xl bg-white/60 backdrop-blur-md border border-black/10 text-sm outline-none focus:border-[#1C0770]/40 transition"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full px-5 py-4 rounded-2xl bg-white/60 backdrop-blur-md border border-black/10 text-sm outline-none focus:border-[#1C0770]/40 transition"
          />

          <textarea
            rows={5}
            placeholder="Tell us about your project"
            className="w-full px-5 py-4 rounded-2xl bg-white/60 backdrop-blur-md border border-black/10 text-sm outline-none focus:border-[#1C0770]/40 transition resize-none"
          />

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative mt-4 inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#1C0770] text-white text-[11px] font-bold tracking-[0.2em] uppercase transition"
          >
            Send message
          </motion.button>
        </motion.form>
      </div>

    </section>
  );
};

export default Contact;