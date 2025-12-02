const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "Next.js", "Tailwind", "Express", "WebSockets", "WebRTC", "Jest"],
  },
  {
    title: "Databases & ORMs",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git", "Docker", "AWS", "Cloudflare", "Redis Pub/Sub"],
  },
];

const Skills = () => {
  return (
    <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-card border border-border rounded-xl p-5"
          >
            <h3 className="font-medium text-foreground mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
