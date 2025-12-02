import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import ProfileHeader from "@/components/ProfileHeader";
import HeroSection from "@/components/HeroSection";
import GitHubContributions from "@/components/GitHubContributions";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <MobileNav activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="lg:ml-52 px-6 py-8 pb-24 lg:pb-8 max-w-4xl">
        <ProfileHeader />
        
        {activeSection === "home" && (
          <>
            <HeroSection />
            <GitHubContributions />
            <WorkExperience />
          </>
        )}
        
        {activeSection === "experience" && (
          <WorkExperience />
        )}
        
        {activeSection === "projects" && (
          <Projects />
        )}
        
        {activeSection === "articles" && (
          <Articles />
        )}
      </main>
    </div>
  );
};

export default Index;
