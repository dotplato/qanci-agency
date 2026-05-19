import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, Sparkles, CheckCircle, FileText, Send, Trash2, ShieldCheck, DollarSign } from "lucide-react";

interface SavedProposal {
  id: string;
  clientName: string;
  email: string;
  services: string[];
  scale: number;
  timeline: string;
  budget: number;
  calculatedCost: number;
  squad: string[];
  date: string;
}

export default function InstantProposalBuilder() {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["Product Design"]);
  const [projectScale, setProjectScale] = useState<number>(5); // number of modules/pages
  const [speed, setSpeed] = useState<string>("Fast (3-4 weeks)");
  const [customBrief, setCustomBrief] = useState("");

  const [savedProposals, setSavedProposals] = useState<SavedProposal[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Available interactive services
  const SERVICES_LIST = [
    { name: "Product Design", rate: 3000 },
    { name: "Responsive React Dev", rate: 4500 },
    { name: "API & Backend Integration", rate: 5000 },
    { name: "AI Agent & Gemini Setup", rate: 6000 },
    { name: "E-Commerce Infrastructure", rate: 5500 }
  ];

  // Load initially compiled list from localStorage
  useEffect(() => {
    const data = localStorage.getItem("qanci_local_rfps");
    if (data) {
      try {
        setSavedProposals(JSON.parse(data));
      } catch (err) {
        console.error("Error reading storage", err);
      }
    }
  }, []);

  // Compute live project metrics
  const findServiceRate = (svc: string) => {
    return SERVICES_LIST.find((s) => s.name === svc)?.rate || 4000;
  };

  const calculateTotal = () => {
    let serviceBase = selectedServices.reduce((sum, s) => sum + findServiceRate(s), 0);
    let scaleMultiplier = 1 + (projectScale - 1) * 0.15; // 15% extra for additional views
    
    let speedFact = 1.0;
    if (speed.startsWith("Hyper")) speedFact = 1.35; // 35% premium for expedited delivery
    if (speed.startsWith("Eco")) speedFact = 0.85; // 15% discount for long term timelines

    return Math.round(serviceBase * scaleMultiplier * speedFact);
  };

  const currentTotal = calculateTotal();

  // Dynamic developer squad recommendations
  const getRecommendSquad = () => {
    let list = ["1 Product Manager"];
    if (selectedServices.includes("Product Design")) list.push("1 Principal UI/UX Designer");
    if (selectedServices.includes("Responsive React Dev") || selectedServices.includes("E-Commerce Infrastructure")) {
      list.push("2 Full Stack Engineers");
    }
    if (selectedServices.includes("AI Agent & Gemini Setup")) list.push("1 AI Cognitive Specialist");
    if (projectScale > 8) list.push("1 Quality Assurance Engineer");
    return list;
  };

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  const handleSubmitProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !email) return;

    setIsSubmitting(true);

    // Simulate contract calculation
    setTimeout(() => {
      const newProposal: SavedProposal = {
        id: `proposal-${Date.now()}`,
        clientName,
        email,
        services: selectedServices,
        scale: projectScale,
        timeline: speed,
        budget: currentTotal,
        calculatedCost: currentTotal,
        squad: getRecommendSquad(),
        date: new Date().toLocaleDateString()
      };

      const updated = [newProposal, ...savedProposals];
      setSavedProposals(updated);
      localStorage.setItem("qanci_local_rfps", JSON.stringify(updated));

      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Clean up fields but preserve listing view
      setClientName("");
      setEmail("");
      setCustomBrief("");
    }, 1500);
  };

  const handleDeleteSaved = (id: string) => {
    const filtered = savedProposals.filter((p) => p.id !== id);
    setSavedProposals(filtered);
    localStorage.setItem("qanci_local_rfps", JSON.stringify(filtered));
  };

  return (
    <section id="proposal" className="py-20 bg-[#F9FBFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BANNER HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5A25] bg-[#FF5A25]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Quote System
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-brand-dark mt-4 tracking-tight">
            Design your project proposal instanly
          </h2>
          <p className="text-brand-dark/70 text-sm mt-3">
            Select features, tune sizes and timelines to inspect expected development squad allocations and costs. Code the custom agreement with our team in real-time.
          </p>
        </div>

        {/* PROPOSAL CALCULATOR SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* CALCULATOR CONTROLLER FORM */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-6 sm:p-10 border border-brand-dark/5 shadow-xl">
            <form onSubmit={handleSubmitProposal} className="space-y-8">
              
              {/* SELECT REQ DELIVERABLES */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-dark/50 mb-3">
                  Step 1: Choose Deliverables
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="proposal-deliverables">
                  {SERVICES_LIST.map((svc) => {
                    const active = selectedServices.includes(svc.name);
                    return (
                      <button
                        key={svc.name}
                        type="button"
                        onClick={() => toggleService(svc.name)}
                        className={`text-left p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between ${
                          active
                            ? "border-brand-orange bg-brand-orange/5 text-brand-dark font-semibold"
                            : "border-brand-dark/5 hover:border-brand-dark/15 text-brand-dark/80 bg-stone-50"
                        }`}
                      >
                        <span className="text-xs">{svc.name}</span>
                        <span className="text-[10px] bg-brand-dark/5 px-2 py-1 rounded font-mono text-brand-dark/70">
                          +${svc.rate.toLocaleString()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ESTIMATE PROJECT PAGES / MODULES SCALE */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-dark/50">
                    Step 2: Project Complexity Size (modules/views)
                  </label>
                  <span className="text-sm font-bold text-brand-orange bg-brand-orange/5 px-3 py-1 rounded-full font-mono">
                    {projectScale} {projectScale === 1 ? "Major View" : "Major Views"}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  value={projectScale}
                  onChange={(e) => setProjectScale(parseInt(e.target.value))}
                  className="w-full accent-brand-orange cursor-pointer"
                  id="proposal-scale-slider"
                />
                <div className="flex justify-between text-[10px] font-mono text-brand-dark/40 pt-1.5ClassName">
                  <span>MVP (1 view)</span>
                  <span>Standard Hub (5-8)</span>
                  <span>Enterprise Engine (15 views)</span>
                </div>
              </div>

              {/* TIMELINE SPEEDS SELECTOR */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-dark/50 mb-3 block">
                  Step 3: Choose Speed Priority
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Eco-Savings", span: "6-8 weeks", factor: "-15% discount" },
                    { label: "Fast (3-4 weeks)", span: "3-4 weeks", factor: "Normal standard" },
                    { label: "Hyper Fast", span: "10-15 days", factor: "+35% rush fee" }
                  ].map((option) => {
                    const active = speed === option.label;
                    return (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => setSpeed(option.label)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          active
                            ? "border-brand-orange bg-brand-orange/5 text-brand-dark font-semibold"
                            : "border-brand-dark/5 text-brand-dark/70 hover:bg-neutral-50"
                        }`}
                      >
                        <span className="text-xs block font-bold">{option.label}</span>
                        <span className="text-[9px] font-mono block text-brand-dark/50">{option.span}</span>
                        <span className="text-[9px] font-mono text-brand-orange block font-bold mt-1 uppercase">{option.factor}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CONTACT DETAILS */}
              <div className="space-y-4 pt-4 border-t border-brand-dark/5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-dark/50 mb-1 block">
                  Step 4: Who are we sending this layout to?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    value={clientName} 
                    onChange={(e) => setClientName(e.target.value)} 
                    placeholder="Your Company / Name"
                    className="w-full bg-[#F3F6F5] border-0 rounded-xl px-4 py-3.5 text-sm focus:outline-brand-orange text-brand-dark"
                    required
                  />
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Inquiry email Address"
                    className="w-full bg-[#F3F6F5] border-0 rounded-xl px-4 py-3.5 text-sm focus:outline-brand-orange text-brand-dark"
                    required
                  />
                </div>
                <input 
                  type="text" 
                  value={customBrief} 
                  onChange={(e) => setCustomBrief(e.target.value)} 
                  placeholder="Optional: Brief description of special requirements..."
                  className="w-full bg-[#F3F6F5] border-0 rounded-xl px-4 py-3.5 text-sm focus:outline-brand-orange text-brand-dark"
                />
              </div>

              {/* ACTION SUBMIT RFPs */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-dark hover:bg-brand-orange text-white py-4 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center space-x-2 disabled:bg-brand-dark/50"
                id="proposal-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin"></span>
                    <span>Assembling Dynamic Squad Ledger...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Generate Proposal Agreement</span>
                  </>
                )}
              </button>

            </form>
          </div>

          {/* DYNAMIC SQUAD ALLOCATION & LIVE PRICE PANEL */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* CALCULATED ESTIMATE BOX */}
            <div className="bg-brand-dark text-white rounded-[2.5rem] p-8 sm:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
              {/* Pattern detail background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5A25]/5 rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center gap-2 mb-6 text-brand-orange font-mono text-xs tracking-wider uppercase">
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span>Computed live quote ledger</span>
              </div>

              <div className="mb-8">
                <span className="text-white/50 text-[10px] font-mono uppercase tracking-widest block">Investment Estimate</span>
                <span className="font-display font-medium text-4xl sm:text-6xl text-white tracking-tighter flex items-center gap-1">
                  <span className="text-brand-orange text-xl sm:text-3xl font-bold font-mono">$</span>
                  {currentTotal.toLocaleString()}
                  <span className="text-white/40 text-xs font-mono font-normal tracking-normal self-end mb-2">/project cost</span>
                </span>
                <p className="text-white/40 text-[10px] italic mt-1.5">No recurring fees. Comprehensive source code hand-off included.</p>
              </div>

              {/* RECOMMENDED SQUAD */}
              <div className="space-y-4 pt-4 border-t border-white/10 mb-6">
                <span className="text-white/40 text-[11px] font-mono uppercase tracking-wider block">Allocated Developer Squad:</span>
                <div className="space-y-2.5">
                  {getRecommendSquad().map((member, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                      <span>{member}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white/5 p-4 rounded-xl border border-white/10 text-[11px] text-white/65 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-[#FF5A25] shrink-0 mt-0.5" />
                <span>Fixed-cost promise. Any scope alignment or delay does not impact the contracted price ledger.</span>
              </div>

            </div>

            {/* PERSISTENT CLIENT RFP LOGS SUB-DASHBOARD */}
            <div className="bg-brand-green-light rounded-[2rem] p-6 sm:p-8 border border-brand-dark/5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-[#0B251E]" />
                  <span className="font-display font-medium text-sm text-[#0B251E]">Your Saved Proposals Ledger</span>
                </div>
                <span className="text-[10px] font-mono bg-[#0B251E] text-white px-2 py-0.5 rounded-full">
                  {savedProposals.length} Saved
                </span>
              </div>

              {savedProposals.length === 0 ? (
                <div className="text-center py-8 text-brand-dark/40 text-xs rounded-xl bg-white/40 border border-dashed border-brand-dark/10">
                  <p>No compiled rfps generated yet.</p>
                  <p className="text-[10px] text-brand-dark/30 mt-1">Submit the builder to secure your locally saved contract!</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[190px] overflow-y-auto no-scrollbar">
                  {savedProposals.map((prop) => (
                    <div key={prop.id} className="bg-white p-3.5 rounded-xl border border-brand-dark/5 relative group">
                      <button
                        onClick={() => handleDeleteSaved(prop.id)}
                        className="absolute right-3 top-3.5 w-6 h-6 rounded-full bg-stone-50 text-stone-400 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-colors"
                        title="Delete record locallly"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="pr-6">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-brand-dark block truncate max-w-[140px]">{prop.clientName}</span>
                          <span className="text-[9px] font-mono text-brand-dark/40">({prop.date})</span>
                        </div>
                        <p className="text-[9px] font-mono text-brand-dark/50 truncate mb-1.5">{prop.email}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-2">
                          {prop.services.map((s) => (
                            <span key={s} className="bg-brand-green-light text-[#0B251E] text-[8px] font-bold px-1.5 py-0.5 rounded">
                              {s}
                            </span>
                          ))}
                        </div>

                        <span className="text-xs font-mono font-semibold text-brand-orange block">
                          Value: ${prop.calculatedCost.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* DISPATCH PROGRESS DIALOG OVERLAY */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 bg-brand-dark/70 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center border border-brand-dark/10 shadow-2xl relative"
            >
              <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="font-display font-bold text-2xl text-brand-dark mb-2">
                Proposal Generated!
              </h3>
              
              <p className="text-brand-dark/70 text-xs sm:text-xs leading-relaxed mb-6">
                Your proposal has been calculated and submitted to the local ledger. Our executive partner will reach out to you within the working hour at the registered email address.
              </p>

              <div className="bg-brand-green-light p-4 rounded-xl border border-brand-dark/5 text-left text-xs mb-6">
                <span className="text-[9px] font-mono uppercase text-brand-dark/40 block mb-1">Squad Secured:</span>
                <span className="font-mono text-[10px] font-bold text-brand-dark">
                  {selectedServices.join(" + ")} ({projectScale} views) - {speed} priority
                </span>
              </div>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-brand-dark hover:bg-brand-orange text-white py-3.5 rounded-xl text-xs font-semibold transition-colors"
              >
                Return to builder
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
