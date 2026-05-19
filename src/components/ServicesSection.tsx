import { CodeXml, Layers, Cpu, ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data";

interface ServicesSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ServicesSection({ onScrollToSection }: ServicesSectionProps) {
  
  const getIconComponent = (icon: string) => {
    switch (icon) {
      case "Layers":
        return <Layers className="w-6 h-6 text-[#FF5A25]" />;
      case "CodeXml":
        return <CodeXml className="w-6 h-6 text-[#FF5A25]" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-[#FF5A25]" />;
      default:
        return <CodeXml className="w-6 h-6 text-[#FF5A25]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TEXT TITLE */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5A25] bg-[#FF5A25]/5 px-4 py-1.5 rounded-full inline-block">
            Our Disciplines
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-dark mt-4 tracking-tight">
            High-Grade Capabilities
          </h2>
          <p className="text-brand-dark/60 text-sm max-w-lg mx-auto mt-3">
            We operate at the convergence of beautiful interfaces, high-throughput backend infrastructure, and modular AI engines.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, index) => {
            return (
              <div
                key={s.id}
                className="bg-[#F7F9F8] rounded-[2rem] p-8 border border-brand-dark/5 shadow-xs flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:border-[#FF5A25]/10 duration-300 transition-all group"
                id={`services-item-${s.id}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#FF5A25]/10 group-hover:scale-110 duration-300 transition-all">
                    {getIconComponent(s.icon)}
                  </div>

                  <h3 className="font-display font-medium text-2xl text-brand-dark mb-4 tracking-tight group-hover:text-brand-orange transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-[#070B0A]/70 text-sm leading-relaxed mb-6">
                    {s.description}
                  </p>
                </div>

                <div>
                  {/* Service special sub tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {s.popularTags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono font-medium bg-[#EBF1EF] text-brand-dark/80 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onScrollToSection("proposal")}
                    className="w-full flex items-center justify-between text-xs font-semibold text-brand-dark hover:text-brand-orange border-t border-brand-dark/5 pt-4 group/btn"
                    id={`btn-rfp-${s.id}`}
                  >
                    <span>Configure in proposal builder</span>
                    <span className="w-8 h-8 rounded-full bg-white group-hover:bg-[#FF5A25] group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 duration-200 transition-transform" />
                    </span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
