import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";

const ContactInfo = ({ icon: Icon, title, detail }) => (
  <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/50 transition-colors duration-300">
    <div className="bg-blue-50 p-3 rounded-xl">
      <Icon className="w-5 h-5 text-[#1C0770]" />
    </div>
    <div>
      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">{title}</h4>
      <p className="text-[#1A1A1E] font-bold text-sm">{detail}</p>
    </div>
  </div>
);

const Contact = () => {
  const customEase = [0.22, 1, 0.36, 1];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-[#F9FAFB] overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: Text & Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: customEase }}
            >
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#1C0770] mb-4 block">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1E] leading-[1.1] mb-8 tracking-tight">
                Let’s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500">extraordinary.</span>
              </h2>
              <p className="text-gray-500 font-medium text-lg max-w-md mb-12 leading-relaxed">
                Have a vision? We have the expertise. Reach out and let's discuss your next digital breakthrough.
              </p>

              <div className="space-y-4">
                <ContactInfo icon={Mail} title="Email Us" detail="hello@youragency.com" />
                <ContactInfo icon={Phone} title="Call Us" detail="+94 77 123 4567" />
                <ContactInfo icon={MapPin} title="Office" detail="Colombo, Western Province, SL" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div
            className="lg:col-span-7 bg-white/40 backdrop-blur-xl border border-white/60 p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.03)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: customEase }}
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#1C0770] ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 px-1 outline-none focus:border-[#1C0770] transition-colors duration-300 placeholder:text-gray-300 font-medium"
                  />
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#1C0770] ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 px-1 outline-none focus:border-[#1C0770] transition-colors duration-300 placeholder:text-gray-300 font-medium"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#1C0770] ml-1">Project Brief</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your project goals..."
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 px-1 outline-none focus:border-[#1C0770] transition-colors duration-300 placeholder:text-gray-300 font-medium resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-center gap-3 w-full md:w-max px-10 py-4 bg-[#1C0770] rounded-full text-white overflow-hidden shadow-xl shadow-blue-900/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#1C0770] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.2em]">Send Message</span>
                <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;