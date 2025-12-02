const HeroSection = () => {
  return (
    <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
        Welcome to my portfolio{" "}
        <span className="inline-block">🌅</span> I am John Developer and here I document my latest information and explorations.
      </h1>
      
      <p className="text-muted-foreground text-lg leading-relaxed">
        Passionate Developer who lives and breathes code 12 to 18 hours a day, 3000+ GitHub commits in 2025, and zero excuses. Currently Full Stack Engineer at{" "}
        <a href="#" className="text-primary hover:underline">@TechStartup</a>, and I do freelance too, plus heavily active on{" "}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          Twitter/X
        </a>{" "}
        sharing my progress and story.
      </p>
    </div>
  );
};

export default HeroSection;
