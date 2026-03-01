import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const stories = [
  {
    name: 'Alice Johnson',
    role: 'CEO, TechCorp',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    testimonial:
      'Working with this team was a game-changer. Their precision and creativity transformed our digital presence.',
  },
  {
    name: 'Michael Lee',
    role: 'Product Manager, WebSolutions',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    testimonial:
      'Exceptional attention to detail and technical expertise. Our website feels modern and effortless.',
  },
  {
    name: 'Sophia Kim',
    role: 'Founder, CreativeLab',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    testimonial:
      'Their design thinking approach made our project seamless. Highly recommend for any digital solution.',
  },
];

const ClientStories = () => {
  const [current, setCurrent] = useState(0);
  const total = stories.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section className="relative w-full py-32 bg-[#F9FAFB] font-sans text-[#1A1A1E] overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-24">
        <motion.span
          className="text-[11px] font-bold tracking-[0.4em] uppercase opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Client Stories
        </motion.span>
        <motion.h2
          className="text-4xl md:text-5xl font-medium mt-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          What Our Clients Say
        </motion.h2>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex max-w-5xl mx-auto px-6 flex-col gap-24">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className="relative flex items-center gap-8"
          >
            <img
              src={story.photo}
              alt={story.name}
              className="w-24 h-24 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <span className="text-[6rem] font-bold text-[#1C0770]/10 select-none -translate-y-8 block">
                &ldquo;
              </span>
              <p className="text-xl md:text-2xl text-[#1A1A1E] leading-relaxed max-w-3xl">
                {story.testimonial}
              </p>
              <div className="mt-4">
                <span className="block text-[#1C0770] font-semibold text-lg">
                  {story.name}
                </span>
                <span className="block text-gray-400 text-sm">{story.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative max-w-md mx-auto px-6">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="flex flex-col items-center text-center gap-6"
          >
            <img
              src={stories[current].photo}
              alt={stories[current].name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <span className="text-[4rem] font-bold text-[#1C0770]/10 select-none -translate-y-4 block">
              &ldquo;
            </span>
            <p className="text-lg text-[#1A1A1E] leading-relaxed">
              {stories[current].testimonial}
            </p>
            <span className="block text-[#1C0770] font-semibold text-base">
              {stories[current].name}
            </span>
            <span className="block text-gray-400 text-sm">{stories[current].role}</span>
          </motion.div>
        </AnimatePresence>

        {/* Arrow Buttons */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 rounded-full shadow-md"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 rounded-full shadow-md"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default ClientStories;