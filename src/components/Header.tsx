import { useState } from "react";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onScrollToSection, activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", id: "home" },
    { label: "Works", id: "works" },
    { label: "About us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Reviews", id: "reviews" }
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F9FBFA]/85 backdrop-blur-md border-b border-brand-dark/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-2 cursor-pointer group"
            id="brand-logo-container"
          >
            <div className="w-9 h-9 bg-brand-dark rounded-xl flex items-center justify-center text-white font-display font-black text-lg transition-transform duration-300 group-hover:scale-105">
              Q
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-brand-dark transition-colors duration-300">
              Qanci<span className="text-brand-orange">.</span>
            </span>
          </div>

          {/* DESKTOP NAV PILL */}
          <nav className="hidden md:flex items-center bg-brand-dark/5 hover:bg-brand-dark/10 p-1.5 rounded-full transition-colors duration-300">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-brand-dark text-white shadow-sm"
                      : "text-brand-dark/70 hover:text-brand-dark"
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick("proposal")}
              className="group flex items-center bg-brand-dark text-white hover:bg-brand-orange px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-brand-orange/20 active:scale-95"
              id="header-cta-btn"
            >
              Let's chat
              <span className="ml-2 w-5 h-5 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* MOBILE TRIGGER */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-brand-dark/5 text-brand-dark hover:bg-brand-dark/10 transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE NAV PANEL */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-dark/5 py-4 px-6 animate-fadeIn absolute left-0 right-0 top-20 shadow-lg">
          <div className="space-y-2 flex flex-col">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#EBF1EF] text-[#0B251E] font-bold"
                      : "text-brand-dark/70 hover:bg-brand-dark/5"
                  }`}
                  id={`mobile-nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-brand-dark/5">
              <button
                onClick={() => handleNavClick("proposal")}
                className="w-full flex items-center justify-center space-x-2 bg-[#FF5A25] text-white px-5 py-3.5 rounded-xl font-medium text-base shadow-md"
                id="mobile-cta-btn"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Let's talk project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
