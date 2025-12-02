import { ExternalLink, Github, Star } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  stars: number;
  github: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Chat Platform",
    description: "A real-time AI-powered chat platform with multiple language model integrations, streaming responses, and conversation history.",
    tags: ["React", "TypeScript", "OpenAI", "WebSocket"],
    stars: 234,
    github: "#",
    demo: "#",
    image: "🤖",
  },
  {
    id: 2,
    title: "Developer Portfolio Builder",
    description: "An open-source tool to create beautiful developer portfolios with customizable themes and easy deployment options.",
    tags: ["Next.js", "Tailwind", "MDX"],
    stars: 189,
    github: "#",
    demo: "#",
    image: "📁",
  },
  {
    id: 3,
    title: "Task Management API",
    description: "A robust REST API for task management with authentication, real-time updates, and team collaboration features.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis"],
    stars: 156,
    github: "#",
    image: "📋",
  },
];

const Projects = () => {
  return (
    <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title mb-0">Featured Projects</h2>
        <a href="#" className="text-primary text-sm hover:underline">
          See All
        </a>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
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
                <h3 className="font-semibold text-foreground mb-1">{project.title}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {project.stars}
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href={project.github}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
