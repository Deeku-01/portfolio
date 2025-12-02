import { Calendar, MapPin } from "lucide-react";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  logo: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Stealth Startup",
    role: "AI Full Stack Engineer",
    period: "Oct 2024 - Present",
    location: "Remote",
    description: "AI Full Stack Engineer, building innovative AI-powered solutions from the ground up. Responsible for end-to-end development of AI applications, including model integration, API development, and user interface design.",
    logo: "🚀",
  },
  {
    id: 2,
    company: "TechCorp",
    role: "Senior Frontend Developer",
    period: "Jan 2023 - Sep 2024",
    location: "San Francisco, CA",
    description: "Led the frontend development team in building a scalable SaaS platform. Implemented modern React patterns, optimized performance, and mentored junior developers.",
    logo: "💻",
  },
  {
    id: 3,
    company: "Startup Inc",
    role: "Full Stack Developer",
    period: "Jun 2021 - Dec 2022",
    location: "New York, NY",
    description: "Built and maintained multiple web applications using React, Node.js, and PostgreSQL. Collaborated with design team to implement pixel-perfect UI components.",
    logo: "⚡",
  },
];

const WorkExperience = () => {
  return (
    <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title mb-0">Work Experience</h2>
        <a href="#" className="text-primary text-sm hover:underline">
          See All
        </a>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-2xl">
                {exp.logo}
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
