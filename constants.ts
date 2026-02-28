import { ExperienceItem, ProjectItem, SkillCategory, CertificateItem, AwardItem } from './types';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

/** Use for all public assets so paths work on Vercel (respects base URL). */
export const ASSETS = (path: string) => {
  const base = (import.meta as unknown as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/';
  return `${base}${path.replace(/^\//, '')}`;
};

export const PERSONAL_INFO = {
  name: "Bhuvin Singla",
  role: "Full Stack Developer",
  email: "bhuvinsingla@gmail.com",
  phone: "+91 7355635544",
  location: "Mohali, India · Remote",
  github: "https://github.com/bhuvinsingla",
  linkedin: "https://www.linkedin.com/in/bhuvin-singla/",
  summary: "Full Stack Developer who builds and ships real products. Proven stack: Next.js, Supabase, Vercel, TailwindCSS, OpenAI & Anthropic APIs. AI-first—Cursor, Claude, and LLMs are part of my daily workflow. High-agency, ownership mindset, and I deliver end-to-end. Strong product design taste and security-conscious.",
  availability: "Remote · Flexible for EST overlap · Open to full-time"
};

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: PERSONAL_INFO.github, icon: Github },
  { label: 'LinkedIn', href: PERSONAL_INFO.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
  { label: 'Phone', href: `tel:${PERSONAL_INFO.phone}`, icon: Phone },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: "Associate Trainee",
    company: "SmartData Enterprises Inc.",
    period: "09/2024 – Present",
    location: "Mohali",
    description: [
      "Built a video conferencing application using Socket.IO and browser Media Devices APIs for seamless real-time communication.",
      "Developed custom AI assistants using Vapi and LangChain, integrating sophisticated natural language workflows into web applications.",
      "Worked across modern frontend frameworks like Angular and Next.js to deliver highly responsive and scalable UI solutions."
    ]
  },
  {
    id: 'exp-2',
    role: "Industry Integrated On Job Training",
    company: "Antier Solutions",
    period: "07/2023 – 12/2023",
    description: [
      "Developed and deployed a custom NFT marketplace featuring wallet integration, token minting, and dynamic listings.",
      "Built and tested Solidity smart contracts (ERC-20 & ERC-721) ensuring secure on-chain logic and efficient token creation.",
      "Integrated Web3.js, Ethers.js, and smart contracts into React/Next.js applications with MetaMask and IPFS support."
    ]
  },
  {
    id: 'exp-3',
    role: "Trainee",
    company: "Salesforce",
    period: "04/2023 – 06/2023",
    description: [
      "Built and customized applications on the Salesforce platform, optimizing for specific business requirements.",
      "Worked on real-time solutions to improve user workflows and overall system efficiency.",
      "Achieved 65 badges and 48,725 points on Trailhead (Expeditioner), demonstrating deep expertise in Salesforce tools."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-0a',
    title: "PropCall AI",
    status: "ongoing",
    description: "Property Management & Lead Generation. AI voice agent converts cold calls into quality leads—handles inbound/outbound calls, queries property DB by location/budget/size, collects customer info, auto-generates leads. Deployed on Vercel.",
    techStack: ["Vapi", "Next.js", "Voice AI", "Lead Gen", "Vercel"],
    features: [
      "Property dealer dashboard—add properties, voice agent has full context.",
      "Inbound/outbound calls, lead collection, export to Google Sheets."
    ],
    link: "https://prop-call-ai.vercel.app/"
  },
  {
    id: 'proj-0b',
    title: "Voice Assistant Portfolio",
    status: "ongoing",
    description: "Voice assistant showcase across Healthcare, Hotels, Restaurants, Property, Business. Live demo—24/7, natural conversational AI, cost-effective. Tailored solutions for appointment scheduling, bookings, orders, support.",
    techStack: ["Vapi", "Next.js", "Voice AI", "Conversational AI", "Vercel"],
    features: [
      "Multi-industry demos: healthcare, hotels, restaurants, property, customer support.",
      "Live voice agent—click to start conversation. 24/7, human-like."
    ],
    link: "https://vapi-bhuvin.vercel.app/"
  },
  {
    id: 'proj-1',
    title: "AI Voice Assistant",
    description: "Shipped a real-time AI assistant integrating voice and conversational AI. Built with Vapi, LangChain, and OpenAI/Anthropic-style APIs.",
    techStack: ["Vapi", "LangChain", "OpenAI", "Next.js", "TailwindCSS"],
    features: [
      "Voice interface with tool invocation and personalized flows.",
      "End-to-end ownership—built, deployed, and iterated in production."
    ]
  },
  {
    id: 'proj-2',
    title: "Video Conferencing Platform",
    description: "Shipped a Google Meet-style app with real-time video. Full-stack ownership from design to deployment.",
    techStack: ["Socket.IO", "Media Devices API", "Node.js", "React"],
    features: [
      "Peer-to-peer connections, room-based interactions, scalable backend.",
      "Shipped to production with full ownership."
    ]
  },
  {
    id: 'proj-3',
    title: "NFT Marketplace",
    description: "Shipped a decentralized NFT platform with minting, buying, and selling. Deployed smart contracts and integrated Web3.",
    techStack: ["Solidity", "Web3.js", "Next.js", "IPFS", "MetaMask"],
    features: [
      "ERC-20, ERC-721 smart contracts; secure, deployed on-chain.",
      "Full product—from contracts to UI to user flows."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Core Stack",
    skills: ["Next.js", "Supabase", "Vercel", "TailwindCSS", "Shadcn/ui", "React", "TypeScript"]
  },
  {
    category: "AI & APIs",
    skills: ["OpenAI", "Anthropic", "LangChain", "Vapi", "RAG", "Cursor", "Claude"]
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "Supabase", "REST APIs", "Socket.IO", "PostgreSQL"]
  },
  {
    category: "Blockchain",
    skills: ["Solidity", "Web3.js", "Ethers.js", "Smart Contracts"]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    title: "Adv. Web Development",
    issuer: "Coding Ninjas"
  },
  {
    title: "Blockchain Developer",
    issuer: "Antier Solutions"
  },
  {
    title: "5 Star Coder",
    issuer: "HackerRank"
  }
];

export const AWARDS: AwardItem[] = [
  {
    title: "The Great Indian Hackathon",
    description: "Won prize worth 10k amazon vouchers",
    detail: "Launched a project to connect surplus medications with those in need, enabling free distribution and supporting the community."
  }
];

export const EDUCATION = [
  {
    degree: "BE CSE",
    institution: "Chitkara University, Baddi",
    score: "8.88 CGPA",
    year: "2020-2024"
  },
  {
    degree: "Higher Secondary",
    institution: "DAV, Malerkotla",
    score: "78.8%",
    year: "2019-2020"
  }
];
