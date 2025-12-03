// fileName: MainLayout.tsx
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import ProfileHeader from "@/components/ProfileHeader";
import ImageWithModal from "@/components/Image";
import MusicButton from "@/components/MusicButton";
import { useState } from "react";
import { Outlet } from "react-router-dom"; // Hook to render child routes

const MainLayout = () => {
    // State is maintained here to manage sidebar/mobile navigation state visually
    const [activeSection, setActiveSection] = useState("home"); 

    return (
        <div className="min-h-screen bg-background">
            {/* <MobileNav activeSection={activeSection} onSectionChange={setActiveSection} /> */}
            <MobileNav />
            
            {/* Centered container for the layout */}
            <div className="max-w-7xl mx-auto flex">
                
                {/* 1. Persistent Sidebar */}
                <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} /> 
                
                {/* 2. Main Content Wrapper */}
                <main className="flex-1 min-h-screen px-8 py-12 lg:py-16">

                    {/* 3. Persistent Profile Header Block */}
                    <div className="flex items-end gap-6 mb-8"> 
                        <ImageWithModal /> 
                        <ProfileHeader />
                    </div>
                    
                    {/* 4. The content of the specific route (Index, Projects, Experience) renders here */}
                    <Outlet />
                    
                </main>
                <MusicButton />
            </div>
        </div>
    );
};

export default MainLayout;