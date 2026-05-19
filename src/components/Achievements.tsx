import { motion } from "motion/react";
import { ACHIEVEMENTS } from "../data";
import { Award, TrendingUp, Users } from "lucide-react";

export default function Achievements() {
  // Map icons dynamically to each achievement
  const getIcon = (id: string) => {
    switch (id) {
      case "ac-1":
        return <TrendingUp className="w-5 h-5 text-brand-orange" />;
      case "ac-2":
        return <Award className="w-5 h-5 text-brand-orange" />;
      case "ac-3":
        return <Users className="w-5 h-5 text-brand-orange" />;
      default:
        return <Award className="w-5 h-5 text-brand-orange" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TEXT HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-4 py-1.5 rounded-full">
            Proven Success
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-dark mt-4 tracking-tight">
            Our Achievements
          </h2>
        </div>

        {/* ACHIEVEMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((ach, idx) => {
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative bg-[#F7F9F8] rounded-3xl p-8 border border-brand-dark/5 shadow-xs overflow-hidden hover:bg-white hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300"
                id={`achievement-card-${ach.id}`}
              >
                {/* Visual Accent bubble */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange bg-[#FF5A25]/10 px-3 py-1 rounded-full">
                    {ach.label}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-[#FF5A25]/10 group-hover:scale-110 transition-all duration-300 shadow-sm">
                    {getIcon(ach.id)}
                  </div>
                </div>

                <div className="relative mb-4">
                  <span className="font-display font-bold text-5xl sm:text-6xl text-brand-dark tracking-tighter block group-hover:translate-x-1 duration-300">
                    {ach.value}
                  </span>
                </div>

                <p className="text-brand-dark/70 text-sm leading-relaxed max-w-xs">
                  {ach.subtext}
                </p>
                
                {/* Bottom line accent */}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
