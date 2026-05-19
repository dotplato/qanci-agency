import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";
import ServicesSection from "./components/ServicesSection";
import LeadingIndustry from "./components/LeadingIndustry";
import RecentWorks from "./components/RecentWorks";
import WhatCustomersSay from "./components/WhatCustomersSay";
import InstantProposalBuilder from "./components/InstantProposalBuilder";
import Footer from "./components/Footer";

export default function App() {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [activeSection, setActiveSection] = useState<string>("home");

  // Smooth scroll handler to target IDs
  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Track scroll position to update active navbar chips
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "works", "about", "services", "reviews", "proposal"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTagClick = (tag: string) => {
    // If clicking same active tagline filter, toggle it off to show all
    if (selectedTag.toLowerCase() === tag.toLowerCase()) {
      setSelectedTag("");
    } else {
      setSelectedTag(tag);
      // Automatically scroll down to the portfolio grid to showcase matches!
      handleScrollToSection("works");
    }
  };

  return (
    <div className="bg-[#F9FBFA] min-h-screen text-brand-dark overflow-x-hidden selection:bg-brand-orange selection:text-white" id="root-agency-layout">
      
      {/* HEADER NAV CAPSULE */}
      <Header 
        onScrollToSection={handleScrollToSection} 
        activeSection={activeSection} 
      />

      <main>
        
        {/* HERO HEADER AREA */}
        <Hero 
          onTagClick={handleTagClick} 
          selectedTag={selectedTag}
          onScrollToSection={handleScrollToSection}
        />

        {/* ACHIEVEMENTS STATS PANEL */}
        <Achievements />

        {/* SERVICES OFFERED CARDS */}
        <ServicesSection onScrollToSection={handleScrollToSection} />

        {/* SPLIT SCREEN "LEADING GLOBAL INDUSTRY" PORTION */}
        <LeadingIndustry onScrollToSection={handleScrollToSection} />

        {/* DYNAMIC PORTFOLIO CAROUSEL FILTER */}
        <RecentWorks 
          selectedTag={selectedTag} 
          onTagClick={handleTagClick} 
        />

        {/* REVIEWS DISPATCH ELEMENT */}
        <WhatCustomersSay />

        {/* INTERACTIVE PROPOSAL BUILDER TOOL */}
        <InstantProposalBuilder />

      </main>

      {/* FOOTER */}
      <Footer onScrollToSection={handleScrollToSection} />

    </div>
  );
}
