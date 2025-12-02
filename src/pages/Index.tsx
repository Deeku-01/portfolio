import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import ProfileHeader from "@/components/ProfileHeader";
import HeroSection from "@/components/HeroSection";
import GitHubContributions from "@/components/GitHubContributions";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Articles from "@/components/Articles";
import ImageWithModal from "@/components/Image";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      <MobileNav activeSection={activeSection} onSectionChange={setActiveSection} />
      
      {/* Centered container for both sidebar and content */}
      <div className="max-w-7xl mx-auto flex">
        {/* Use the imported Sidebar component here */}
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} /> 
        
        {/* The current inline sidebar in Index.tsx is redundant and should be removed. */}
        {/* <aside className="hidden lg:block w-64 min-h-screen p-8 border-r border-border/40">
          ... (Remove the entire inline aside block) ...
        </aside> */}
        
        {/* Main content */}
        <main className="flex-1 min-h-screen px-8 py-12 lg:py-16">

          <div className="flex items-end gap-6 mb-8"> 
              <ImageWithModal /> 
              <ProfileHeader />
          </div>
          
          {activeSection === "home" && (
            <div className="space-y-16">
              <HeroSection />
              <GitHubContributions />
              <WorkExperience />
              <Skills />
            </div>
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
    </div>
  );
};


export default Index;