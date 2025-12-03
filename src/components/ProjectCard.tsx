import { Calendar, Lock, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  date: string;
  level: "Advanced" | "Intermediate" | "Beginner";
  categories: string[];
  description: string;
  isConfidential?: boolean;
  techStack: string[];
  detailUrl?: string;
  demoUrl?: string;
}

const ProjectCard = ({
  image,
  title,
  date,
  level,
  categories,
  description,
  isConfidential = false,
  techStack,
  detailUrl,
  demoUrl,
}: ProjectCardProps) => {
  const displayedTech = techStack.slice(0, 5);
  const remainingCount = techStack.length - 5;

  return (
    <div className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground hover:bg-background transition-colors"
          >
            Demo
            <ArrowUpRight className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Date and Level */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </div>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
              level === "Advanced"
                ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                : level === "Intermediate"
                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            }`}
          >
            {level}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((category) => (
            <span
              key={category}
              className="px-2 py-0.5 bg-accent/50 text-accent-foreground text-xs font-medium uppercase rounded"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Confidential Notice */}
        {isConfidential && (
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Codebase is confidential</span>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {displayedTech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {remainingCount > 0 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{remainingCount}
            </span>
          )}
        </div>

        {/* View Detail Link */}
        {detailUrl && (
          <a
            href={detailUrl}
            className="inline-flex items-center gap-1 text-foreground font-medium text-sm hover:text-accent-link transition-colors mt-auto"
          >
            View full detail
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
