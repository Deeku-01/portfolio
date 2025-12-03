// fileName: MainLayout.tsx
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import TopBar from "@/components/TopBar";
import ProfileHeader from "@/components/ProfileHeader";

import MusicButton from "@/components/MusicButton";
import { Outlet } from "react-router-dom";
import ImageWithModal from "./Image";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar - Desktop */}
      <TopBar />
      
      {/* Mobile Nav - only visible on mobile */}
      <MobileNav />
      
      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto flex relative pt-16 md:pt-20">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 min-h-screen px-4 sm:px-8 py-6 md:py-12">
          {/* Profile Header Section - FIX 1: Changed items-start to items-end for base alignment */}
          <div className="flex items-end gap-6 mb-12"> 
            <ImageWithModal />
            <ProfileHeader />
          </div>
          
          {/* Page Content - renders child routes */}
          <Outlet />
        </main>
      </div>
      
      <MusicButton />
    </div>
  );
};

export default MainLayout;