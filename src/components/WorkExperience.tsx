import { Calendar, MapPin } from "lucide-react";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  logo: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Dell Technologies",
    role: "Moser - Ransomware Research",
    period: "June 2024 - Feb 2025",
    location: "Remote",
    description: [
      "Conducted in-depth study of 20+ ransomware families (e.g., REvil, LockBit, Conti) covering encryption techniques.",
      "Developed moSeR — an open-source ransomware simulation tool for cybersecurity awareness and research.",
      "Implemented realistic attack scenarios with file encryption, ransom note generation, and key exfiltration.",
      "Support for AES, RSA, ChaCha20, and hybrid encryption strategies with multi-threaded encryption.",
    ],
    logo: "🔐",
  },
];

const WorkExperience = () => {
  return (
    <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title mb-0">Work Experience</h2>
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
                
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-1">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
