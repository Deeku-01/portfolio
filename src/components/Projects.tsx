// fileName: Projects.tsx
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    // Project 1: Crypto Exchange Platform
    image: "/images/proj/crypto.png",
    title: "Crypto Exchange Platform",
    date: "2025", // Assuming year of development
    level: "Advanced" as const,
    categories: ["FULL-STACK", "FINANCE", "WEB SOCKETS"],
    description:
      "A high-performance crypto exchange platform featuring live tickers, depth charts, and real-time order books. The system uses a WebSocket pub/sub model for sending live market data and Redis for managing in-memory order books and fast order matching. Implemented limit orders, market orders, bid-ask spread, and market maker simulation.",
    isConfidential: false,
    techStack: ["TypeScript", "Next.js", "Node.js", "Redis", "WebSockets", "PostgreSQL"],
    detailUrl: "#", 
  },
  {
    // Project 2: UpBartr
    image: "/images/proj/Upbartr.png",
    title: "UpBartr (Skill Exchange Platform)",
    date: "2025", // Assuming year of development
    level: "Intermediate" as const,
    categories: ["COMMUNITY", "FULL-STACK", "REAL-TIME"],
    description:
      "A collaborative platform built to facilitate the exchange of skills and services without monetary transactions. Features include comprehensive skill listing, search capabilities, user-to-user matching, and real-time chat integration using Socket.io for seamless negotiation. The backend is scalable and type-safe using Prisma ORM and PostgreSQL.",
    isConfidential: false,
    techStack: ["React", "Express", "Prisma", "TypeScript", "Socket.io", "Tailwind CSS", "PostgreSQL", "Radix UI", "Zod"],
    detailUrl: "https://github.com/Deeku-01/UpBartr", 
  },
  {
    // Project 3: Metaverse Game
    image: "/images/proj/MetaVGame.png",
    title: "Real-time 2D Metaverse Game",
    date: "2025", // Assuming year of development
    level: "Advanced" as const,
    categories: ["WEB SOCKETS", "GAMING", "ARCHITECTURE"],
    description:
      "Engineered a real-time 2D virtual world featuring multiplayer avatar movement and state synchronization via WebSockets. The project uses a modular monorepo architecture (Turborepo) for managing scalable frontend and Express/Socket.io backend code. Followed Test-Driven Development (TDD) using Jest for reliable codebase maintenance.",
    isConfidential: false,
    techStack: ["React", "Express", "Prisma", "WebSockets (Socket.io)", "TypeScript", "Turborepo", "Jest", "PostgreSQL"],
    detailUrl: "https://github.com/Deeku-01/MetaV_GAME", 
  },
  // The original fourth project is removed to focus on the three core resume projects.
];

const Projects = () => {
  return (
    <section>
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-5">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;