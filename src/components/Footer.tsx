import { Sparkles, ArrowUp, Send, Mail, Building, Globe, Flame } from "lucide-react";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070B0A] text-white pt-20 pb-8 rounded-t-[3rem] mt-12 relative overflow-hidden">
      
      {/* Visual background noise elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* UPPER SPARK ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              onClick={() => onScrollToSection("home")}
              className="flex items-center space-x-2 cursor-pointer group inline-flex"
            >
              <div className="w-9 h-9 bg-[#FF5A25] rounded-xl flex items-center justify-center text-white font-display font-black text-lg">
                Q
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Qanci<span className="text-[#FF5A25]">.</span>
              </span>
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              An elite design & front-end engineering software house crafting hyper-performant consumer platforms, and AI integrations for global clients.
            </p>

            {/* Quick Badges in Footer */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[10px] bg-white/5 border border-white/10 text-white/80 px-2.5 py-1 rounded-full font-mono flex items-center gap-1">
                <Building className="w-3 h-3 text-[#FF5A25]" /> London, UK
              </span>
              <span className="text-[10px] bg-white/5 border border-white/10 text-white/80 px-2.5 py-1 rounded-full font-mono flex items-center gap-1">
                <Globe className="w-3 h-3 text-[#FF5A25]" /> Fully Remote
              </span>
              <span className="text-[10px] bg-[#FF5A25]/10 border border-[#FF5A25]/20 text-[#FF5A25] px-2.5 py-1 rounded-full font-mono flex items-center gap-1">
                <Flame className="w-3 h-3 animate-pulse" /> Active hiring
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/45">
              Navigate
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => onScrollToSection("home")}
                  className="text-white/70 hover:text-brand-orange transition-colors cursor-pointer text-xs font-medium"
                >
                  Return Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection("works")}
                  className="text-white/70 hover:text-brand-orange transition-colors cursor-pointer text-xs font-medium"
                >
                  Recent Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection("about")}
                  className="text-white/70 hover:text-brand-orange transition-colors cursor-pointer text-xs font-medium"
                >
                  Our Achievements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection("reviews")}
                  className="text-white/70 hover:text-brand-orange transition-colors cursor-pointer text-xs font-medium"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection("proposal")}
                  className="text-white/70 hover:text-brand-orange transition-colors cursor-pointer text-xs font-medium"
                >
                  Proposal System
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact Subscription */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/45">
              Secure priority slots
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              We take on exactly 3 partners per quarter to focus intensely on product excellence.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-white/5 rounded-xl border border-white/10 p-1">
              <input 
                type="email" 
                placeholder="Inquiry email" 
                className="bg-transparent text-sm text-white px-3 py-2 w-full focus:outline-none placeholder-white/30"
                required
              />
              <button 
                type="submit" 
                className="bg-[#FF5A25] hover:bg-[#FF5A25]/90 text-white rounded-lg p-2.5 transition-colors"
                title="Get priority slots info"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* LOWER FOOTER ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-white/40 font-mono gap-4">
          <div>
            <span>© {new Date().getFullYear()} Qanci Creative. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#home" className="hover:text-white transition-colors">Privacy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms of service</a>
            <button 
              onClick={handleScrollTop}
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-[14px]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
