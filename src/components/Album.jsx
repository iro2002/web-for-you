import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const projects = [
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
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Laptop subtle 3D tilt
  const rotateX = useTransform(smoothProgress, [0, 1], [10, -10]);

  return (
    <section ref={containerRef} className="relative bg-[#F9FAFB] min-h-[400vh]">
      
      {/* ================= STICKY MOCKUP CONTAINER ================= */}
      {/* top-[10vh] ensures it clears your header/notch area */}
      <div className="sticky top-[12vh] lg:top-0 h-[40vh] lg:h-screen w-full lg:w-1/2 lg:ml-auto flex items-center justify-center z-30 pointer-events-none">
        <motion.div 
          style={{ rotateX, perspective: 1200 }} 
          className="relative w-[90%] sm:w-[75%] lg:w-full max-w-[580px] pointer-events-auto shadow-2xl lg:shadow-none rounded-2xl"
        >
          {/* Screen Mockup Frame */}
          <div className="relative bg-[#1A1A1E] rounded-xl lg:rounded-2xl p-1.5 lg:p-2.5 border-[2px] lg:border-[3px] border-[#333] shadow-2xl">
            <div className="relative aspect-[16/10] bg-black rounded-md lg:rounded-lg overflow-hidden">
              
              {projects.map((project, i) => {
                const start = i / projects.length;
                const end = (i + 1) / projects.length;

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(smoothProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const scale = useTransform(smoothProgress, [start, start + 0.1], [0.8, 1]);

                return (
                  <motion.img
                    key={project.id}
                    src={project.image}
                    style={{ opacity, scale }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={project.title}
                  />
                );
              })}

              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Laptop Hinge/Base */}
          <div className="relative w-[110%] h-2 lg:h-3 bg-[#222] left-[-5%] rounded-b-xl border-t border-[#333]" />
        </motion.div>
      </div>

      {/* ================= SCROLLING CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10 lg:-mt-[100vh]">
        <div className="flex flex-col lg:flex-row">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2">
            {projects.map((project, i) => (
              <div key={project.id} className="h-screen flex flex-col justify-end lg:justify-center pb-10 lg:pb-0">
                {/* Mobile: Use a margin-top to prevent text from overlapping the fixed laptop */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ amount: 0.5 }}
                  className="bg-white/95 backdrop-blur-lg lg:bg-transparent p-6 lg:p-0 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] lg:shadow-none border border-white lg:border-none relative z-40"
                >
                  <span className="text-[#1C0770] font-bold tracking-widest text-[10px] lg:text-xs mb-3 block uppercase">
                    Project 0{i + 1}
                  </span>
                  <h3 className="text-3xl lg:text-6xl font-extrabold text-[#1A1A1E] mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-lg max-w-md mb-6 font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] lg:text-[10px] bg-gray-50 border border-gray-100 px-3 py-1 rounded-full font-bold text-gray-500 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block lg:w-1/2 h-screen" />
        </div>
      </div>
    </section>
  );
};

export default Projects;