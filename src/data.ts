import { Project, Achievement, Testimonial, Service } from "./types";

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ac-1",
    label: "We helped",
    value: "120m+",
    subtext: "Combined VC investment in products we've helped our partners develop.",
  },
  {
    id: "ac-2",
    label: "Awards",
    value: "20+",
    subtext: "Design awards from Webby, Awwwards, Adobe, Behance.",
  },
  {
    id: "ac-3",
    label: "Clients back",
    value: "90%",
    subtext: "of clients are coming back to us for a second and third project.",
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p-1",
    title: "Aura FinTech Wallet",
    category: "Fintech",
    description: "An elegant banking dashboard & consumer cryptowallet reimagined for digital nomads.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    tags: ["Product Strategy", "UX Design", "iOS App"],
    year: "2025",
    client: "Aura Labs"
  },
  {
    id: "p-2",
    title: "Krypton Web3 Exchange",
    category: "Crypto",
    description: "Next-generation secure digital assets broker platform with high throughput charting.",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80",
    tags: ["Robotics Tech", "Crypto Web", "Tailwind Development"],
    year: "2025",
    client: "Krypton Inc."
  },
  {
    id: "p-3",
    title: "Veloce SaaS Dashboard",
    category: "Saas",
    description: "Cloud infrastructure monitoring console optimizing deployment metrics dynamically.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    tags: ["E-Commerce", "SaaS Scale", "Tailwind Systems"],
    year: "2024",
    client: "Veloce Cloud"
  },
  {
    id: "p-4",
    title: "Nova E-Commerce Engine",
    category: "E-Commerce",
    description: "A lightning-fast, headless commerce engine complete with immersive web experience.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    tags: ["React Setup", "GraphQL", "Cart Experience"],
    year: "2025",
    client: "Nova Corp"
  },
  {
    id: "p-5",
    title: "Mako Autonomous Systems",
    category: "Robotics",
    description: "A control interface and visualization cockpit for smart delivery drone fleets.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
    tags: ["Hardware API", "Robotics Interface", "NextGen Design"],
    year: "2024",
    client: "Mako Aero"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Esther Howard",
    handle: "@esther007",
    text: "We fell in love with our place straight away, just had that feeling when we saw it. We moved into a freshly painted home that felt new and clean. When our door got jammed, someone was sent over straight away to sort it out.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    role: "Founder, Bloomly",
    verified: true,
  },
  {
    id: "t-2",
    name: "Leslie Alexander",
    handle: "@leslie.alexander",
    text: "Qanci's speed of execution blew us away. They converted our design system into highly polished production React apps in less than two weeks. Their codebase is so clean and easy to maintain, our internal engineering team was thrilled.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    role: "CTO, NextVibe",
    verified: true,
  },
  {
    id: "t-3",
    name: "Kristin Watson",
    handle: "@kristin_watson",
    text: "The experience was amazing. I've been renting my property for almost a year, and feel very settled. I love living here, it's relatively new build, and is in great condition. Renting with Qanci is the best experience I've had as a tenant.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    role: "Director, Sphere",
    verified: true,
  }
];

export const SERVICES: Service[] = [
  {
    id: "s-1",
    title: "Product Design",
    description: "Interactive visual interfaces, scalable motion designs, and seamless clickable prototypes optimized for conversion.",
    icon: "Layers",
    popularTags: ["UI/UX Mobile", "Design Systems", "Interactive Wireframes"]
  },
  {
    id: "s-2",
    title: "Engineering & Dev",
    description: "Solid, scalable desktop & mobile applications crafted in React, TypeScript, and Tailwind CSS with fast APIs.",
    icon: "CodeXml",
    popularTags: ["Tailwind v4", "Vite Engines", "Highly Performant Web"]
  },
  {
    id: "s-3",
    title: "AI & Innovation Integration",
    description: "We orchestrate Gemini configurations, vector search logic, and cognitive loops into your operational pipelines.",
    icon: "Cpu",
    popularTags: ["GenAI Modules", "Smart Prompts", "Cognitive Workflows"]
  }
];

export const HERO_TAGS = [
  "E-commerce",
  "Fintech",
  "Crypto",
  "Robotics",
  "Saas",
  "VCs",
  "Product Design",
  "AI Agents",
  "Modern UI"
];
