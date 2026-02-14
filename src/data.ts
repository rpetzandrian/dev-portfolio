// ── Prompt Parts (for colorful rendering) ──
export const PROMPT_PARTS = {
  user: "rpetz",
  separator: "@",
  host: "software-engineer-backend",
  path: ":~",
  symbol: "$",
};

// ── Welcome Banner ──
export const WELCOME_BANNER = `
  ██████╗ ██╗ ██████╗ ██████╗      █████╗ ███╗   ██╗██████╗ ██████╗ ██╗ █████╗ ███╗   ██╗
  ██╔══██╗██║██╔════╝██╔═══██╗    ██╔══██╗████╗  ██║██╔══██╗██╔══██╗██║██╔══██╗████╗  ██║
  ██████╔╝██║██║     ██║   ██║    ███████║██╔██╗ ██║██║  ██║██████╔╝██║███████║██╔██╗ ██║
  ██╔══██╗██║██║     ██║   ██║    ██╔══██║██║╚██╗██║██║  ██║██╔══██╗██║██╔══██║██║╚██╗██║
  ██║  ██║██║╚██████╗╚██████╔╝    ██║  ██║██║ ╚████║██████╔╝██║  ██║██║██║  ██║██║ ╚████║
  ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═════╝     ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝

  Welcome to my interactive terminal portfolio.
  Type 'help' to see available commands.

`;

// ── About / whoami ──
export const ABOUT_TEXT = [
  "╔══════════════════════════════════════════════════════════════╗",
  "║                        whoami                                ║",
  "╠══════════════════════════════════════════════════════════════╣",
  "║                                                              ║",
  "║  Name      : Rico Andrian Firmansyah                         ║",
  "║  Role      : Backend Software Engineer                       ║",
  "║                                                              ║",
  "║  I`m Software Engineer with 5+ years of expertise in Backend ║",
  "║  Development. I specialize in building secure, scalable, and ║",
  "║  efficient server-side applications. From intricate API      ║",
  "║  integrations to complex data management, I transform        ║",
  "║  business requirements into resilient technical solutions.   ║",
  "║                                                              ║",
  "╚══════════════════════════════════════════════════════════════╝",
];

// ── Work Experience ──
export interface WorkEntry {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export const WORK_EXPERIENCE: WorkEntry[] = [
  {
    role: "Backend Software Engineer",
    company: "Rey ID",
    period: "12/2021 — Present",
    highlights: [
      "Independently developed a comprehensive subscription management process, including recurring payments, product addition and removal, member management, and payment method adjustments (monthly to yearly and vice versa) for ~5000 active members",
      "Independently developed an automated system for recurring payments, enhancing retention rates by approximately 10% through seamless integration with third-party services such as Xendit and BCA",
      "Pioneered the Rey card feature for cashless claim payments, decreasing overall claim processing time for members by approximately 15%. This innovative feature is the first of its kind in Indonesia for integrated health insurance",
      "Engineered end to end e-sign process on website and mobile app platform, empowering ~500 member to sign documents digitally",
      "Crafted the foundational KYC and OCR features for use in a mobile app platform, utilized by ~1000 members for identity verification processes",
      "Collaborated with 2 Quality Assurances, 3 Project Managers, 3 Engineers, and 1 Team Lead within the SDLC using the Scrum methodology",
    ],
  },
  {
    role: "Backend Engineer ( Freelance )",
    company: "Digitalize",
    period: "03/2023 — 10/2023",
    highlights: [
      "Developed end to end interactive quiz app. Utilized Golang and PostgreSQL to create a reliable API",
      "Implemented student feature such as answer question, listing questions, and viewing reports",
      "Applied base practice programming on Golang, enhancing code reliability and maintainability"
    ],
  },
  {
    role: "Fullstack Developer ( Internship )",
    company: "Rey ID",
    period: "09/2021 — 12/2021",
    highlights: [
      "Created internal dashboard management for 500 active members",
      "Collaborated with 1 Project Manager and 1 Team Lead within the SDLC using the Scrum methodology",
      "Gained a deep understanding of Object-Oriented Programming (OOP) and microservices architecture. Proficiently utilized NoSQL databases, such as Redis, and implemented Event-Driven Development, thereby building a robust foundation in software engineering"
    ],
  },
];

// ── Tech Stack ──
export interface StackCategory {
  category: string;
  items: string[];
}

export const TECH_STACK: StackCategory[] = [
  {
    category: "Languages",
    items: ["Go", "TypeScript", "Python"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Redis", "MongoDB"],
  },
  {
    category: "Frameworks",
    items: ["Express", "Gin", "Echo", "React", "Next.js"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Kubernetes", "AWS", "GCP"],
  },
  {
    category: "Messaging",
    items: ["Kafka", "RabbitMQ", "PubSubs"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub Actions", "New Relic", "Grafana"],
  },
];

// ── Commands List ──
export interface CommandInfo {
  name: string;
  description: string;
}

export const COMMANDS: CommandInfo[] = [
  { name: "whoami", description: "Display info about me" },
  { name: "work", description: "Show work experience" },
  { name: "stack", description: "List my tech stack" },
  // { name: "projects", description: "View featured projects" },
  { name: "contact", description: "How to reach me" },
  { name: "clear", description: "Clear the terminal" },
  { name: "help", description: "Show available commands" },
];

// ── Projects ──
export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "payment-gateway",
    description: "High-throughput payment processing system handling 50K+ TPS",
    tech: ["Go", "PostgreSQL", "Kafka", "Redis"],
  },
  {
    name: "event-bus",
    description: "Distributed event streaming platform for microservices",
    tech: ["Go", "NATS", "Protobuf", "Docker"],
  },
  {
    name: "api-gateway",
    description: "Rate-limited API gateway with authentication & circuit breaking",
    tech: ["Go", "Redis", "JWT", "Prometheus"],
  },
];

// ── Contact ──
export const CONTACT = {
  email: "rpetzandrian@gmail.com",
  github: "github.com/rpetzandrian",
  linkedin: "linkedin.com/in/ricoandrian",
};
