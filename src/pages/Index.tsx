// fileName: Index.tsx
import HeroSection from "@/components/HeroSection";
import GitHubContributions from "@/components/GitHubContributions";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Articles from "@/components/Articles";

// Removed imports for Sidebar, MobileNav, ProfileHeader, ImageWithModal, MusicButton

const Index = () => {
  // Removed all useState and routing logic

  return (
    // This is the content for the "/" route
    <div className="space-y-16">
      <HeroSection />
      <GitHubContributions />
      {/* We keep WorkExperience and Skills here if they are part of the HOME tab content */}
      <WorkExperience /> 
      <Skills />
      {/* Articles component goes here if it is part of the HOME page content
      <Articles />  */}
    </div>
  );
};

export default Index;