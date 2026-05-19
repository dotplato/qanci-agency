import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface LeadingIndustryProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function LeadingIndustry({ onScrollToSection }: LeadingIndustryProps) {
  const values = [
    { title: "VC-Backed Integrity", desc: "Our products pass rigorous audits by major tech groups." },
    { title: "SLA Commitments", desc: "99.9% uptime and zero-latency front-end assurance." },
    { title: "Full IP Ownership", desc: "Clean intellectual property handoff with zero lock-in." }
  ];

  return (
    <section className="py-20 bg-[#F7F9F8] border-y border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B251E] bg-[#EBF1EF] px-4 py-1.5 rounded-full border border-brand-dark/5">
            Industry Benchmark
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-dark mt-4 tracking-tight">
            Leading Global Industry
          </h2>
        </div>

        {/* CONTAINER WORKER SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTAINER: CREATIVE IMAGE WORKPLACE */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange/10 to-brand-green-deep/5 rounded-[2rem] blur-xl opacity-75"></div>
            <div className="relative rounded-[2rem] overflow-hidden bg-white shadow-xl border-4 border-white">
              <img 
                src="/src/assets/images/creative_dev_1779219646269.png" 
                alt="Qanci Creative Work Leading Software Developer"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-md text-white font-mono text-xs px-3.5 py-1.5 rounded-full flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Sprint Room</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTAINER: CONTENT AND ACTIONS */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-brand-dark/5 shadow-sm space-y-6">
              
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-brand-dark leading-snug">
                We work with leading global investors.
              </h3>
              
              <p className="text-[#070B0A]/70 text-sm leading-relaxed">
                Combined VC investment in products we've helped our partners develop. We specialize in building fast-to-market software, turning complex technical concepts into robust, delightful interfaces that secure consecutive funding series.
              </p>

              {/* THREE BENEFIT SUB-ITEMS */}
              <div className="space-y-4 pt-2">
                {values.map((v, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-green-light flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-green-deep" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-dark">{v.title}</h4>
                      <p className="text-xs text-brand-dark/65">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA BUTTON */}
              <div className="pt-4">
                <button
                  onClick={() => onScrollToSection("proposal")}
                  className="group flex items-center justify-between w-full sm:w-auto bg-brand-dark hover:bg-brand-orange text-white px-8 py-4 rounded-xl font-medium text-sm transition-all duration-300 shadow-md transform active:scale-95"
                  id="leading-section-cta"
                >
                  <span>Build your product</span>
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
