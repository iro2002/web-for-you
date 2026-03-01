import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    title: 'Basic',
    price: '$29',
    features: ['Standard Support', '3 Projects', 'Basic Analytics'],
  },
  {
    title: 'Pro',
    price: '$59',
    features: ['Priority Support', 'Unlimited Projects', 'Advanced AI Tools', 'Custom Branding'],
    popular: true,
  },
  {
    title: 'Enterprise',
    price: '$99',
    features: ['Dedicated Manager', 'Custom API', 'High-Level Security', 'Unlimited Seats'],
  },
];

const Pricing = () => {
  return (
    <section className="relative w-full py-32 bg-[#EEF0F2] font-sans text-[#1A1A1E] overflow-hidden">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-24 px-6 relative z-10">
        <motion.span
          className="text-[10px] font-black tracking-[0.6em] uppercase text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Investment
        </motion.span>
        <motion.h2
          className="text-5xl md:text-6xl font-black mt-4 leading-tight tracking-tighter text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Choose Your Plan
        </motion.h2>
      </div>

      {/* Pricing Cards Container */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10 justify-center items-stretch relative z-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -12, scale: 1.02 }}
            className={`relative flex-1 p-1 rounded-[3.5rem] transition-all duration-500 group
              ${plan.popular ? 'lg:scale-105 z-20' : 'z-10'}
            `}
          >
            {/* The Main Glass Body */}
            <div className="relative h-full w-full p-12 rounded-[3.4rem] overflow-hidden
              /* High Transparency Glass */
              bg-white/40 backdrop-blur-3xl 
              /* Light Source Simulation (Top/Left) */
              border-t border-l border-white/90 
              /* Depth Simulation (Bottom/Right) */
              border-b border-r border-white/20
              /* Multi-layered shadows: 1. Depth, 2. Inner Glow */
              shadow-[40px_40px_80px_rgba(0,0,0,0.03),inset_0_0_25px_rgba(255,255,255,0.6)]
            ">
              
              {/* Liquid Shimmer (Moving Reflection) */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

              {/* Plan Label */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.25em]">
                  {plan.title}
                </h3>
                {plan.popular && (
                  <span className="bg-[#1C0770] text-white text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    Popular
                  </span>
                )}
              </div>

              {/* Pricing Display */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-[#1C0770] tracking-tighter">{plan.price}</span>
                <span className="text-slate-500 font-bold text-sm">/mo</span>
              </div>

              {/* Minimal Divider */}
              <div className="w-full h-[1px] bg-slate-200 mb-8" />

              {/* Features List */}
              <ul className="mb-14 space-y-5">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-inner border border-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1C0770]" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Enhanced CTA Button */}
              <button
                className={`w-full py-5 rounded-[2rem] font-black tracking-widest text-[11px] uppercase shadow-md transition-all duration-500
                  ${
                    plan.popular
                      ? 'bg-[#1C0770] text-white hover:bg-[#250a8d] hover:shadow-[#1C0770]/30 hover:shadow-2xl'
                      : 'bg-white text-[#1C0770] border border-white hover:bg-slate-50'
                  }
                `}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;