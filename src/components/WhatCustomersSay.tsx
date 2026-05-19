import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, MessageSquare, Star, Sparkles, UserCheck2 } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { Testimonial } from "../types";

export default function WhatCustomersSay() {
  const [list, setList] = useState<Testimonial[]>(TESTIMONIALS);
  const [writeOpen, setWriteOpen] = useState(false);
  
  // New Review Form state
  const [newName, setNewName] = useState("");
  const [newHandle, setNewHandle] = useState("");
  const [newQuote, setNewQuote] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newAvatar, setNewAvatar] = useState("avatar-neutral");

  const avatarsList = [
    { key: "avatar-neutral", url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" },
    { key: "avatar-woman", url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" },
    { key: "avatar-man", url: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80" },
    { key: "avatar-creative", url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" }
  ];

  // Carousel slider state indices
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % Math.ceil(list.length / 3));
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + Math.ceil(list.length / 3)) % Math.ceil(list.length / 3));
  };

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newQuote) return;

    const chosenPic = avatarsList.find(a => a.key === newAvatar)?.url || avatarsList[0].url;

    const brandNew: Testimonial = {
      id: `custom-t-${Date.now()}`,
      name: newName,
      handle: newHandle.startsWith("@") ? newHandle : `@${newHandle.toLowerCase().replace(/\s+/g, "") || "client"}`,
      text: newQuote,
      avatarUrl: chosenPic,
      role: newRole || "Client Partner",
      verified: true
    };

    setList([brandNew, ...list]);
    setNewName("");
    setNewHandle("");
    setNewQuote("");
    setNewRole("");
    setWriteOpen(false);
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UPPER TEXT AND SLIDE CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/5 px-4 py-1.5 rounded-full">
              Client Love
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-dark mt-4 tracking-tight">
              What customers say's
            </h2>
          </div>

          <div className="flex items-center space-x-3 self-end">
            <button
              onClick={() => setWriteOpen(!writeOpen)}
              className="bg-brand-dark/5 hover:bg-brand-orange hover:text-white px-5 py-3 rounded-full text-xs font-semibold text-brand-dark transition-all duration-300"
              id="write-testimonial-trigger"
            >
              {writeOpen ? "Back to testimonials" : "Write a testimonial"}
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-[#EBF1EF] text-[#0B251E] hover:bg-brand-orange hover:text-white flex items-center justify-center transition-colors"
                aria-label="Previous page"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-brand-orange text-white hover:scale-105 flex items-center justify-center transition-transform"
                aria-label="Next page"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ACCORDION/PANEL SUBMIT A TESTIMONIAL FORM */}
        <AnimatePresence>
          {writeOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden bg-[#F7F9F8] rounded-[2rem] p-6 sm:p-10 border border-brand-dark/10 mb-12 shadow-inner"
            >
              <form onSubmit={handleAddTestimonial} className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-5 h-5 text-brand-orange" />
                  <span className="font-display font-medium text-lg text-brand-dark">Share your project feedback with Qanci</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-dark/75 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      value={newName} 
                      onChange={(e) => setNewName(e.target.value)} 
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-brand-dark/15 rounded-xl px-4 py-3 text-sm focus:outline-brand-orange text-brand-dark"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-dark/75 mb-2">Twitter / Social Handle</label>
                    <input 
                      type="text" 
                      value={newHandle} 
                      onChange={(e) => setNewHandle(e.target.value)} 
                      placeholder="@jane_dev"
                      className="w-full bg-white border border-brand-dark/15 rounded-xl px-4 py-3 text-sm focus:outline-brand-orange text-brand-dark"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-dark/75 mb-2">Role / Company</label>
                    <input 
                      type="text" 
                      value={newRole} 
                      onChange={(e) => setNewRole(e.target.value)} 
                      placeholder="Product Lead at Apple"
                      className="w-full bg-white border border-brand-dark/15 rounded-xl px-4 py-3 text-sm focus:outline-brand-orange text-brand-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-dark/75 mb-2">Choose Avatar</label>
                    <div className="flex space-x-3 items-center pt-1">
                      {avatarsList.map((avatar) => (
                        <button
                          key={avatar.key}
                          type="button"
                          onClick={() => setNewAvatar(avatar.key)}
                          className={`relative w-10 h-10 rounded-full overflow-hidden border-2 transition-transform ${
                            newAvatar === avatar.key ? "border-brand-orange scale-110" : "border-transparent"
                          }`}
                        >
                          <img src={avatar.url} alt="Profile option" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-brand-dark/75 mb-2">Your feedback quote</label>
                  <textarea 
                    value={newQuote} 
                    onChange={(e) => setNewQuote(e.target.value)} 
                    placeholder="Describe how Qanci redesigned and launched your system..."
                    rows={3}
                    className="w-full bg-white border border-brand-dark/15 rounded-xl px-4 py-3 text-sm focus:outline-brand-orange text-brand-dark"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-brand-dark hover:bg-brand-orange text-white font-medium text-xs px-6 py-3.5 rounded-full transition-colors flex items-center space-x-2"
                  >
                    <span>Send Review on blockchain</span>
                    <Star className="w-4 h-4 fill-white" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TESTIMONIALS DISPLAY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.slice(slideIndex * 3, slideIndex * 3 + 3).map((test) => {
            return (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#F7F9F8] rounded-[2rem] p-8 border border-brand-dark/5 shadow-xs hover:shadow-lg hover:bg-white duration-300 transition-all flex flex-col justify-between group"
                id={`customer-quote-${test.id}`}
              >
                <div>
                  {/* Decorative bullet block */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-brand-orange bg-[#FF5A25]/5 px-3 py-1 rounded-full">
                      {test.handle}
                    </span>
                    {/* Visual dot badge matching design */}
                    <div className="w-2 h-2 rounded-full bg-brand-dark"></div>
                  </div>

                  <p className="text-brand-dark/80 text-sm leading-relaxed mb-8 italic">
                    "{test.text}"
                  </p>
                </div>

                {/* Profile detail */}
                <div className="flex items-center gap-4 pt-4 border-t border-brand-dark/5">
                  <div className="relative">
                    <img 
                      src={test.avatarUrl} 
                      alt={test.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    {test.verified && (
                      <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5" title="Verified client">
                        <UserCheck2 className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">{test.name}</h4>
                    <p className="text-[11px] text-brand-dark/50 font-medium font-mono">
                      {test.role}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
