import { motion } from "motion/react";
import { Code, ArrowUpRight, Users, Sparkles, HelpCircle } from "lucide-react";
import { HERO_TAGS } from "../data";

interface HeroProps {
  onTagClick: (tagName: string) => void;
  selectedTag: string;
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onTagClick, selectedTag, onScrollToSection }: HeroProps) {
  // Static placeholder for avatars
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
  ];

  return (
    <section id="home" className="pt-8 pb-16 bg-[#F9FBFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO TITLE HEADINGS HERO */}
        <div className="text-center py-6 sm:py-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand-dark/5 border border-brand-dark/5 px-4 py-1.5 rounded-full mb-6 cursor-pointer hover:bg-brand-dark/10 transition-colors"
            onClick={() => onScrollToSection("proposal")}
          >
            <Sparkles className="w-4 h-4 text-[#FF5A25]" />
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-brand-dark/80">
              Transforming Ideas into Pixels & Code
            </span>
          </motion.div>

          <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-brand-dark leading-[0.9] tracking-tight mb-2">
            Development
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 font-display font-medium text-4xl sm:text-7xl lg:text-8xl tracking-tight text-brand-dark">
            <span className="inline-flex items-center gap-2 bg-[#E1E8E5] text-[#0B251E] px-4 sm:px-6 py-1 sm:py-2 rounded-2xl sm:rounded-3xl shadow-inner border border-brand-dark/5 my-1 transform hover:rotate-2 transition-transform select-none">
              <Code className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 text-brand-orange" />
              <span className="text-3xl sm:text-6xl md:text-7xl font-mono leading-none font-bold">/</span>
            </span>
            <span className="font-extrabold tracking-tight relative pr-1">
              Agency
              {/* Retro checker pattern logo box */}
              <span className="inline-grid grid-cols-2 gap-0.5 w-6 h-6 sm:w-10 sm:h-10 ml-2 align-middle">
                <span className="bg-brand-orange rounded-xs"></span>
                <span className="bg-brand-dark/10 rounded-xs"></span>
                <span className="bg-brand-dark/10 rounded-xs"></span>
                <span className="bg-brand-dark rounded-xs"></span>
              </span>
            </span>
          </div>
        </div>

        {/* HERO IMAGE BANNER CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-brand-dark/10 shadow-2xl group border-[6px] border-white/80 my-8 sm:my-10"
        >
          <img 
            src="/src/assets/images/hero_manager_1779219626956.png" 
            alt="Qanci Creative Studio Tech Professional in Orange Lead chair"
            className="w-full h-[320px] sm:h-[480px] lg:h-[580px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent pointer-events-none"></div>
        </motion.div>

        {/* TRIPLE SUB-CARD INFOBAR BELOW HERO */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
          
          {/* Box 1: We bring light... */}
          <div className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-brand-dark/5 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <div className="w-2.5 h-2.5 bg-brand-orange rounded-full mb-6"></div>
              <h3 className="font-display font-medium text-lg text-brand-dark/95 leading-snug mb-4">
                We bring light, joy to the old, mundane or otherwise overlooked products.
              </h3>
            </div>
            <button
              onClick={() => onScrollToSection("proposal")}
              className="flex items-center text-sm font-semibold text-brand-orange group cursor-pointer inline-flex self-start mt-4"
              id="hero-contact-trigger-btn"
            >
              <span>Contact us</span>
              <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Box 2: TAG CAPSULES */}
          <div className="md:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-brand-dark/5 shadow-xs hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-dark/50">
                Core Disciplines
              </span>
              <span className="text-[10px] text-brand-dark/40 italic">Click tag to filter portfolio</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {HERO_TAGS.map((tag) => {
                const isSelected = selectedTag.toLowerCase() === tag.toLowerCase();
                return (
                  <button
                    key={tag}
                    onClick={() => onTagClick(tag)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "bg-brand-orange text-white ring-2 ring-brand-orange/40"
                        : "bg-[#F3F6F5] text-brand-dark/80 hover:bg-brand-dark hover:text-white"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Box 3: TEAM / STACKED AVATARS */}
          <div className="md:col-span-3 bg-white rounded-3xl p-6 border border-brand-dark/5 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex -space-x-3.5">
                {avatars.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Qanci Teammate ${index}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="bg-[#EBF1EF] text-brand-dark font-mono font-bold px-3 py-1 rounded-full text-xs">
                +30 Members
              </div>
            </div>
            <div>
              <p className="text-xs text-brand-dark/60 leading-relaxed mb-4">
                Our cross-functional teams build high-velocity solutions for tech champions.
              </p>
              <button 
                onClick={() => onScrollToSection("about")}
                className="w-full flex items-center justify-center space-x-2 bg-brand-dark text-white hover:bg-brand-orange py-2.5 rounded-xl text-xs font-medium transition-colors"
                id="hero-about-trigger-btn"
              >
                <Users className="w-3.5 h-3.5" />
                <span>Meet the Squad</span>
              </button>
            </div>
          </div>

        </div>

        {/* BRANDS SPONSOR FOOTER */}
        <div className="mt-16 pt-8 border-t border-brand-dark/5">
          <p className="text-center text-xs font-mono uppercase tracking-wider text-brand-dark/40 mb-8">
            Trusted by your favorite brands and startups
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-65 grayscale hover:grayscale-0 transition-all duration-500">
            <BrandLogo name="hotjar" dotColor="text-[#FF5A25]" />
            <BrandLogo name="pendo" dotColor="text-[#FF5A25]" />
            <BrandLogo name="pingdom" dotColor="text-[#FF5A25]" />
            <BrandLogo name="LiveChat" dotColor="text-[#FF5A25]" />
            <BrandLogo name="mailchimp" dotColor="text-[#FF5A25]" />
            <BrandLogo name="Clearbit" dotColor="text-[#FF5A25]" />
          </div>
        </div>

      </div>
    </section>
  );
}

// Minimal Brand Logo styling for clean, highly modern svg-like layouts
function BrandLogo({ name, dotColor }: { name: string; dotColor: string }) {
  return (
    <div className="flex items-center space-x-1 font-display font-extrabold text-xl text-brand-dark tracking-tighter cursor-default">
      <span>{name}</span>
      <span className={dotColor}>•</span>
    </div>
  );
}
