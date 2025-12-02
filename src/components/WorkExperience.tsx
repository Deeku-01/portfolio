// fileName: WorkExperience.tsx
import { Calendar, MapPin, Building2, Briefcase } from "lucide-react"; // Added Briefcase

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  logo: string; // Emoji or URL
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Dell Technologies",
    role: "Moser - Ransomware Research",
    period: "June 2024 - Feb 2025",
    location: "Remote",
    description: [
      "Developed moSeR — an open-source ransomware simulation tool for cybersecurity awareness and research.",
      "Conducted in-depth study of 20+ ransomware families (e.g., REvil, LockBit, Conti) covering encryption techniques.",
      "Implemented realistic attack scenarios with file encryption, ransom note generation, and key exfiltration.",
      "Support for AES, RSA, ChaCha20, and hybrid encryption strategies with multi-threaded encryption.",
    ],
    logo: "💻", 
  },
];

const WorkExperience = () => {
  return (
    <div className="mb-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <h2 className="section-title mb-8 flex items-center gap-2">
        <Briefcase className="w-5 h-5" /> Experience {/* Updated icon usage */}
      </h2>
      
      <div className="relative border-l border-border ml-3 space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 sm:pl-10">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
              <div>
                <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground font-medium mt-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{exp.company}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full w-fit sm:self-start">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </span>
              </div>
            </div>
            
            <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
              {exp.description.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="block w-1.5 h-1.5 rounded-full bg-border mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// Removed custom BriefcaseIcon component

export default WorkExperience;