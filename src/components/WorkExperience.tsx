// fileName: WorkExperience.tsx
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface Experience {
  id: number;
  logo: string;
  title: string;
  company?: string;
  companyUrl?: string;
  dateRange: string;
  location: string;
  locationType: "Remote" | "Onsite" | "Hybrid";
  description: string;
  technologies: string[];
  highlights?: string[];
}

// *** UPDATED EXPERIENCE DATA ***
const experiences: Experience[] = [
  {
    id: 1,
    // Placeholder logo for a Software Developer role at Oracle
    logo: "/images/exp/oracle.png", 
    title: "Associate Software Developer (Incoming)",
    company: "Oracle",
    companyUrl: "https://www.oracle.com/",
    dateRange: "Expected 2026",
    location: "Bengaluru",
    locationType: "Onsite",
    description: "Preparing to join Oracle as an Associate Software Developer. Focusing on core software engineering principles, system design, and deepening knowledge in Java and cloud technologies (AWS/OCI) to contribute to enterprise-level solutions.",
    technologies: ["Java", "System Design", "Algorithms", "AWS", "OCI", "Git"],
  },
  {
    id: 2,
    // Placeholder logo for a cybersecurity/ransomware project
    logo: "/images/exp/dell.jpg", 
    title: "Moser - Ransomware Research",
    company: "Dell Technologies",
    companyUrl: "https://www.dell.com/",
    dateRange: "June 2024 - Feb 2025",
    location: "Remote",
    locationType: "Remote",
    description: "Spearheaded the development of 'moSeR'—an open-source ransomware simulation tool. My role involved in-depth research into encryption techniques used by top ransomware families and developing a multi-threaded system to emulate real-world attack scenarios for cybersecurity training and research.",
    technologies: ["TypeScript", "Node.js", "C++", "Security Research", "Cryptocurrency", "WebSockets", "Multi-threading", "Redis"],
    highlights: [
      "Developed 'moSeR', an open-source ransomware simulation tool.",
      "Conducted in-depth study of 20+ ransomware families (REvil, LockBit, Conti).",
      "Implemented support for AES, RSA, ChaCha20, and hybrid encryption strategies.",
      "Designed a multithreaded system to efficiently simulate file encryption and key exfiltration.",
    ],
  },
  // {
  //   id: 3,
  //   // Placeholder for general Full Stack/Web Project
  //   logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=96&h=96&fit=crop",
  //   title: "Full-Stack Developer (Personal/Freelance)",
  //   dateRange: "Mar 2023 - Present",
  //   location: "Remote",
  //   locationType: "Remote",
  //   description: "Built and deployed several modern web applications, focusing on scalable architecture, robust backend APIs using Next.js/FastAPI, and delivering pixel-perfect, accessible user interfaces.",
  //   technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Express", "Prisma", "PostgreSQL", "MongoDB"],
  // },
];

// *** UPDATED STATS DATA ***
const stats = [
  { label: "Ransomware Research Projects", value: "2" },
  { label: "Software Dev Experience", value: "1+ Year" },
  { label: "Personal Projects", value: "5+" },
  { label: "Total Code Contribution", value: "8000+ Lines" }, // Adjusted from Hours to a different metric
];

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <article className="group relative">
      <div className="flex gap-4 md:gap-6">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden bg-muted shadow-sm ring-1 ring-border/50">
            <img 
              src={experience.logo} 
              alt={`${experience.company || 'Company'} logo`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title & Company */}
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="text-lg md:text-xl font-semibold text-foreground font-display">
              {experience.title}
            </h3>
            {experience.company && (
              <span className="text-muted-foreground">
                at{" "}
                {experience.companyUrl ? (
                  <a 
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-link hover:text-accent-link-hover transition-colors inline-flex items-center gap-1"
                  >
                    {experience.company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  experience.company
                )}
              </span>
            )}
          </div>

          {/* Date & Location */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {experience.dateRange}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {experience.locationType}
            </span>
          </div>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap items-center gap-x-1 text-sm text-foreground/80">
            {experience.technologies.map((tech, index) => (
              <span key={tech} className="inline-flex items-center">
                <span className="hover:text-accent-link transition-colors cursor-default">
                  {tech}
                </span>
                {index < experience.technologies.length - 1 && (
                  <span className="mx-1.5 text-muted-foreground/50">•</span>
                )}
              </span>
            ))}
          </div>
          {/* Description */}
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {experience.description}
          </p>


          {/* Highlights */}
          {experience.highlights && experience.highlights.length > 0 && (
            <ul className="mt-4 space-y-2">
              {experience.highlights.map((highlight, index) => (
                <li 
                  key={index}
                  className="text-muted-foreground text-sm flex items-start gap-2"
                >
                  <span className="text-accent-link mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};

const WorkExperience = () => {
  return (
    <section className="w-full">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground font-display">
          Work Experience
        </h1>
        
        {/* Stats */}
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          {stats.map((stat, index) => (
            <span key={stat.label} className="inline-flex items-center">
              <span className="text-foreground/80 font-medium">{stat.value}</span>
              <span className="ml-1">{stat.label}</span>
              {index < stats.length - 1 && (
                <span className="mx-2 text-muted-foreground/50">•</span>
              )}
            </span>
          ))}
        </div>
      </header>

      {/* Experience List */}
      <div className="space-y-10">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;