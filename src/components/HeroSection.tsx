// fileName: HeroSection.tsx
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="mb-20 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      {/* Improvised Section: Name separated from main heading */}
      <p className="text-2xl font-semibold text-primary mb-2 animate-fade-in font-instrument-serif " style={{ animationDelay: "0s" }}>
        Deekshith V
      </p>
      
      <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
        Building digital experiences with <span className="text-primary font-instrument-serif">purpose.</span>
      </h1>
      
      <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mb-8">
        <span className="text-primary text-2xl font-semibold font-instrument-serif">I don't just write code; I design systems.</span> Blending full-stack development with a strong foundation in cybersecurity, I specialize in delivering accessible and performant web applications. 
        My next challenge involves diving deep into DevOps and the architecture of complex, distributed systems.<br></br>
        {/* Currently preparing to join <a className="text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:opacity-80">Oracle</a> as an Associate Software Developer. */}
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a 
          href="mailto:deekudeekshithv@gmail.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Contact Me <ArrowRight className="w-4 h-4" />
        </a>
        <a 
          href="https://x.com/DeekshithV18" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full text-sm font-medium border border-border hover:bg-secondary transition-colors"
        >
          Follow on X
        </a>
      </div>
    </div>
  );
};

export default HeroSection;