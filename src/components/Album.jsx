import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ALL_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Revolution",
    description: "A high-performance shopping experience with real-time inventory and glassmorphic UI.",
    images: [
      "https://cdn.dribbble.com/userupload/10753367/file/still-78df3b71964d93fb8216832559b3c0d0.png?resize=1024x0",
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000"
    ],
  },
  {
    id: 2,
    title: "Luxury Tourism Portal",
    description: "Immersive travel booking system featuring cinematic transitions and 100% responsive design.",
    images: [
      "https://cdn.dribbble.com/userupload/44817887/file/still-f07b07f47273119512c5e0a3e1895087.png?resize=1024x0",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000"
    ],
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    description: "Complex data visualization simplified into a clean, intuitive dashboard for startups.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    ],
  },
  {
    id: 4,
    title: "AI Marketing Suite",
    description: "Automating content creation using generative AI models and predictive analytics.",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000"
    ],
  },
  {
    id: 5,
    title: "FinTech Mobile App",
    description: "Secure, lightning-fast banking application with biometric auth and dark mode.",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000"
    ],
  },
  {
    id: 6,
    title: "Smart Home OS",
    description: "A centralized interface to control IoT devices across the entire household.",
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
    ],
  },
  {
    id: 7,
    title: "Cyber Security Hub",
    description: "Enterprise-level threat detection dashboard with real-time network mapping.",
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000"
    ],
  },
  {
    id: 8,
    title: "Health & Fitness Tracker",
    description: "Wearable integration for tracking vital signs and personalized workout plans.",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000"
    ],
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeIndices, setActiveIndices] = useState({}); 
  const containerRef = useRef(null);
  
  const currentProjects = ALL_PROJECTS.slice(0, visibleCount);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
  });

  const rotateX = useTransform(smoothProgress, [0, 1], [8, -8]);

  const handleSlide = (projectId, direction, max) => {
    setActiveIndices(prev => {
      const current = prev[projectId] || 0;
      if (direction === "next") return { ...prev, [projectId]: (current + 1) % max };
      return { ...prev, [projectId]: (current - 1 + max) % max };
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#F9FAFB] w-full"
      style={{ minHeight: `${currentProjects.length * 100}vh` }}
    >
      {/* FIXED IMMERSIVE DYNAMIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          {currentProjects.map((project, i) => {
            const step = 1 / currentProjects.length;
            const start = i * step;
            const end = (i + 1) * step;
            
            // Matches the fade timing of the mockup screens perfectly
            const opacity = useTransform(smoothProgress, [start, start + 0.05, end - 0.05, end], [0, 0.25, 0.25, 0]);
            const currentIndex = activeIndices[project.id] || 0;

            return (
              <motion.div
                key={`bg-${project.id}`}
                style={{ opacity }}
                className="absolute inset-0 transition-all duration-700"
              >
                <div 
                  className="absolute inset-0 blur-[80px] scale-[1.15]"
                  style={{
                    backgroundImage: `url(${project.images[currentIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="pt-24 md:pt-32 pb-8">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1C0770] mb-2">Our Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1C0770]">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C0770] to-blue-500">Works</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row relative">
          {/* STICKY MOCKUP */}
          <div className="sticky top-28 lg:top-0 h-[35vh] lg:h-screen w-full lg:w-1/2 flex items-center justify-center z-[40] pointer-events-none lg:order-2">
            <motion.div style={{ rotateX, perspective: 1200 }} className="relative w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[580px] pointer-events-auto">
              <div className="relative bg-[#0F0F12] rounded-lg p-1.5 lg:p-3 border-[3px] lg:border-[4px] border-[#2A2A2E] shadow-2xl">
                <div className="relative aspect-[16/10] bg-slate-900 rounded-sm overflow-hidden">
                  
                  {currentProjects.map((project, i) => {
                    const step = 1 / currentProjects.length;
                    const start = i * step;
                    const end = (i + 1) * step;
                    
                    const opacity = useTransform(smoothProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
                    const currentIndex = activeIndices[project.id] || 0;

                    return (
                      <motion.div key={project.id} style={{ opacity }} className="absolute inset-0">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentIndex}
                            src={project.images[currentIndex]}
                            initial={{ x: 40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -40, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute inset-0 w-full h-full object-cover"
                            alt={project.title}
                          />
                        </AnimatePresence>

                        <div className="absolute inset-0 flex items-center justify-between px-2 z-50">
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleSlide(project.id, "prev", project.images.length); }}
                            className="p-1 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition-colors pointer-events-auto"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleSlide(project.id, "next", project.images.length); }}
                            className="p-1 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition-colors pointer-events-auto"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <div className="relative w-[104%] h-2 bg-[#1A1A1E] left-[-2%] rounded-b-md border-t border-white/10" />
            </motion.div>
          </div>

          {/* SCROLLING TEXT */}
          <div className="w-full lg:w-1/2 flex flex-col z-20 lg:order-1 mt-[5vh] lg:mt-0">
            {currentProjects.map((project, i) => (
              <div key={project.id} className="min-h-[70vh] lg:min-h-screen flex flex-col justify-end lg:justify-center pb-24 lg:pb-0">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-15%" }}
                  className="bg-white/80 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none p-8 lg:p-0 rounded-xl border border-white/60 lg:border-none shadow-xl lg:shadow-none"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px] bg-gradient-to-r from-[#1C0770] to-blue-500"></span>
                    <span className="text-[#1C0770] font-bold text-xs uppercase tracking-widest">Project 0{i + 1}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#1A1A1E] mb-4 tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg max-w-md mb-8 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;