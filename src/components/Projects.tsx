// fileName: Projects.tsx
import { ExternalLink, Github, Folder } from "lucide-react";

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
    ],
    tags: ["TypeScript", "Next.js", "Node.js", "Redis", "WebSockets"],
    github: "https://github.com/Deeku-01",
    image: "📈",
  },
  {
    id: 2,
    title: "UpBartr",
    description: [
      "Built a collaborative platform where users can exchange skills and services without monetary transactions.",
      "Implemented skill listing, search, and user-to-user matching features.",
    ],
    tags: ["React", "Express", "Prisma", "Socket.io", "TypeScript"],
    github: "https://github.com/Deeku-01",
    image: "🔄",
  },
  {
    id: 3,
    title: "Metaverse Game",
    description: [
      "Built a real-time 2D virtual world with multiplayer avatar movement and state sync over WebSockets.",
      "Built a modular monorepo architecture using Turborepo.",
    ],
    tags: ["React", "Express", "Socket.io", "TypeScript", "Turborepo"],
    github: "https://github.com/Deeku-01",
    image: "🎮",
  },
];

const Projects = () => {
  return (
    <div className="mb-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <h2 className="section-title mb-6 flex items-center gap-2">
        <Folder className="w-5 h-5" /> Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col bg-card border border-border/60 rounded-xl p-5 hover:border-primary/50 transition-colors duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
                {project.image}
              </div>
              <div className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            {/* START: Updated Description Rendering */}
            <ul className="space-y-1 text-muted-foreground text-sm leading-relaxed mb-6 flex-1 list-disc ml-4">
               {project.description.map((item, index) => (
                 <li key={index} className="pl-1">{item}</li>
               ))}
            </ul>
            {/* END: Updated Description Rendering */}

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-md border border-transparent hover:border-border transition-colors"
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