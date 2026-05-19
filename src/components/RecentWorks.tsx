import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink, Filter } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

interface RecentWorksProps {
  selectedTag: string;
  onTagClick: (tag: string) => void;
}

export default function RecentWorks({ selectedTag, onTagClick }: RecentWorksProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Extract all categories
  const categories = ["All", "Fintech", "Crypto", "Saas", "E-Commerce", "Robotics"];

  // Filter projects by either category or selected state-level tag
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS);

  useEffect(() => {
    let result = PROJECTS;

    // First filter by state level category
    if (activeCategory !== "All") {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Next filter by high-level tag click if an actual match exists
    if (selectedTag) {
      result = result.filter((p) =>
        p.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase()) || 
        p.category.toLowerCase() === selectedTag.toLowerCase()
      );
    }

    setFilteredProjects(result);
  }, [activeCategory, selectedTag]);

  // Handle slide scrolling left/right
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = 
        direction === "left" 
          ? currentScroll - scrollAmount 
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  };

  const handleClearSelectedTag = () => {
    onTagClick("");
    setActiveCategory("All");
  };

  return (
    <section id="works" className="py-20 bg-brand-green-deep text-white rounded-[3rem] my-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CAROUSEL HEADER ACTIONS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
              Creative Portfolio
            </span>
            <h2 className="font-display font-medium text-4xl sm:text-5xl tracking-tight mt-2 text-white">
              Our recent works
            </h2>
          </div>

          <div className="flex items-center space-x-3 self-end" id="recent-works-controls">
            
            {/* CAROUSEL CONTROL SLIDE BUTTONS */}
            <button
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white hover:text-brand-dark flex items-center justify-center transition-all duration-300"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full bg-brand-orange text-white hover:scale-105 hover:bg-[#FF5A25]/90 flex items-center justify-center transition-all duration-300 shadow-md"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* CATEGORY SELECTOR CHIPS */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-10 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-1 sm:space-x-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat && !selectedTag;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    onTagClick(""); // Reset deeper tag text
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "bg-white text-brand-dark font-semibold shadow-sm"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {selectedTag && (
            <div className="flex items-center space-x-2 bg-brand-orange/20 text-brand-orange border border-brand-orange/30 px-3 py-1.5 rounded-full text-xs shrink-0 max-w-full">
              <Filter className="w-3.5 h-3.5" />
              <span>Tag Filter: <strong>{selectedTag}</strong></span>
              <button 
                onClick={handleClearSelectedTag}
                className="w-4 h-4 rounded-full bg-brand-orange text-white text-[9px] font-bold hover:scale-110 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          )}
        </div>

        {/* CAROUSEL FLOW AREA */}
        <div className="relative">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center text-white/40 border border-dashed border-white/15 rounded-3xl">
              <p className="text-sm">No items match the chosen tagline.</p>
              <button
                onClick={handleClearSelectedTag}
                className="mt-4 text-xs font-semibold text-brand-orange underline hover:text-white"
              >
                Reset tags to see all
              </button>
            </div>
          ) : (
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-1"
              style={{ scrollSnapType: "x mandatory" }}
              id="projects-carousel-container"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p, index) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="w-[290px] sm:w-[350px] md:w-[390px] shrink-0 scroll-snap-align-start group bg-white/5 rounded-3xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Project Image Container */}
                      <div className="relative rounded-2xl overflow-hidden aspect-[1.3/1] mb-5 bg-[#070B0A]">
                        <img 
                          src={p.imageUrl} 
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                        
                        {/* Static dynamic micro tags overlay */}
                        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                          <span className="bg-brand-orange/95 backdrop-blur-md text-white font-mono text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm">
                            {p.category}
                          </span>
                        </div>
                        
                        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-brand-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mb-2">
                        <span>Client: {p.client}</span>
                        <span>{p.year}</span>
                      </div>

                      <h3 className="font-display font-medium text-xl mb-2 text-white group-hover:text-brand-orange transition-colors">
                        {p.title}
                      </h3>

                      <p className="text-white/60 text-xs sm:text-xs leading-relaxed mb-4">
                        {p.description}
                      </p>
                    </div>

                    {/* Sub-tags list */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {p.tags.slice(0, 3).map((item) => (
                        <span 
                          key={item}
                          className="text-[10px] bg-white/5 hover:bg-white/15 text-white/80 px-2 py-0.5 rounded-md cursor-pointer transition-colors"
                          onClick={() => onTagClick(item)}
                        >
                          #{item}
                        </span>
                      ))}
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
