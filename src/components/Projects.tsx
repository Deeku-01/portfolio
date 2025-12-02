import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string[];
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Crypto Exchange Platform",
    description: [
      "Built a crypto exchange platform with live tickers, depth charts, and real-time order books.",
      "Created a WebSocket pub/sub system to send live market data to clients.",
      "Used Redis for in-memory order books and fast order matching.",
      "Implemented limit orders, market orders, bid-ask spread, and market maker simulation.",
    ],
    tags: ["TypeScript", "Next.js", "Node.js", "Redis", "WebSockets", "PostgreSQL"],
    github: "https://github.com/DeekshithV",
    image: "📈",
  },
  {
    id: 2,
    title: "UpBartr",
    description: [
      "Built a collaborative platform where users can exchange skills and services without monetary transactions.",
      "Implemented skill listing, search, and user-to-user matching features.",
      "Integrated real-time chat using Socket.io for seamless negotiation between users.",
      "Designed responsive UI with Tailwind CSS and Radix UI components.",
    ],
    tags: ["React", "Express", "Prisma", "Socket.io", "TypeScript", "Zod"],
    github: "https://github.com/DeekshithV",
    image: "🔄",
  },
  {
    id: 3,
    title: "Metaverse Game",
    description: [
      "Built a real-time 2D virtual world with multiplayer avatar movement and state sync over WebSockets.",
      "Built a modular monorepo architecture using Turborepo for scalable code management.",
      "Implemented rooms/sessions and server-authoritative updates via Express + Socket.io.",
      "Followed Test-Driven Development (TDD) using Jest to ensure code reliability.",
    ],
    tags: ["React", "Express", "Prisma", "Socket.io", "TypeScript", "Jest", "Turborepo"],
    github: "https://github.com/DeekshithV",
    image: "🎮",
  },
];

const Projects = () => {
  return (
    <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title mb-0">Projects</h2>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all hover:border-primary/20"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                {project.image}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground">{project.title}</h3>
              </div>
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <ul className="text-muted-foreground text-sm leading-relaxed mb-4 space-y-1">
              {project.description.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
