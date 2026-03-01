import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

const ALL_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Revolution",
    tags: ["React", "Node.js", "Tailwind"],
    description: "A high-performance shopping experience with real-time inventory and glassmorphic UI.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Luxury Tourism Portal",
    tags: ["Next.js", "Framer Motion", "SEO"],
    description: "Immersive travel booking system featuring cinematic transitions and 100% responsive design.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    tags: ["TypeScript", "Recharts", "Firebase"],
    description: "Complex data visualization simplified into a clean, intuitive dashboard for startups.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "AI Marketing Suite",
    tags: ["Python", "OpenAI", "Next.js"],
    description: "Automating content creation using generative AI models.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef(null);
  
  const currentProjects = ALL_PROJECTS.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_PROJECTS.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  const rotateX = useTransform(smoothProgress, [0, 1], [8, -8]);

  return (
    <section 
      key={visibleCount} 
      ref={containerRef} 
      className="relative bg-[#F9FAFB] w-full"
      style={{ minHeight: `${currentProjects.length * 100}vh` }}
    >
      {/* --- Global Background Elements (Hero.jsx Theme) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-[#1C0770]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="pt-24 md:pt-32 pb-8">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1C0770] mb-2">Our Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1C0770]">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500">Works</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row relative">
          
          {/* MOCKUP: Pinned at top on Mobile, Centered on Desktop */}
          <div className="sticky top-28 lg:top-0 h-[35vh] lg:h-screen w-full lg:w-1/2 flex items-center justify-center z-[40] pointer-events-none lg:order-2">
            <motion.div 
              style={{ rotateX, perspective: 1200 }} 
              className="relative w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[580px] pointer-events-auto"
            >
              <div className="relative bg-[#0F0F12] rounded-xl lg:rounded-2xl p-1.5 lg:p-3 border-[3px] lg:border-[4px] border-[#2A2A2E] shadow-2xl">
                <div className="relative aspect-[16/10] bg-slate-900 rounded-md lg:rounded-lg overflow-hidden">
                  <AnimatePresence mode="wait">
                    {currentProjects.map((project, i) => {
                      const start = i / currentProjects.length;
                      const end = (i + 1) / currentProjects.length;
                      const opacity = useTransform(smoothProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);

                      return (
                        <motion.img
                          key={project.id}
                          src={project.image}
                          style={{ opacity }}
                          className="absolute inset-0 w-full h-full object-cover"
                          alt={project.title}
                        />
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
              <div className="relative w-[104%] h-2 bg-[#1A1A1E] left-[-2%] rounded-b-lg border-t border-white/10 shadow-lg" />
            </motion.div>
          </div>

          {/* TEXT CONTENT: Scrolls "under" the laptop on mobile */}
          <div className="w-full lg:w-1/2 flex flex-col z-20 lg:order-1 mt-[5vh] lg:mt-0">
            {currentProjects.map((project, i) => (
              <div key={project.id} className="min-h-[70vh] lg:min-h-screen flex flex-col justify-end lg:justify-center pb-24 lg:pb-0">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-10%" }}
                  className="bg-white/80 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none p-8 lg:p-0 rounded-[2.5rem] border border-white/60 lg:border-none shadow-xl lg:shadow-none"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px] bg-gradient-to-r from-[#1C0770] to-blue-500"></span>
                    <span className="text-[#1C0770] font-bold text-xs uppercase tracking-widest">Project 0{i + 1}</span>
                  </div>
                  <h3 className="text-3xl lg:text-7xl font-bold text-[#1A1A1E] mb-4 tracking-tighter">{project.title}</h3>
                  <p className="text-gray-600 text-base lg:text-xl max-w-md mb-8 leading-relaxed font-medium">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-white border border-slate-200 px-3 py-1 rounded-full font-bold text-[#1C0770]/60 uppercase tracking-tighter shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* --- LOAD MORE BUTTON --- */}
        {hasMore && (
          <div className="py-20 flex justify-center lg:justify-start lg:w-1/2">
            <button
              onClick={() => setVisibleCount(prev => prev + 1)}
              className="px-10 py-4 bg-[#1C0770] text-white rounded-full font-bold shadow-2xl active:scale-95 transition-all hover:bg-blue-700"
            >
              Explore More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;