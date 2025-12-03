// fileName: Sidebar.tsx

import { Home, Briefcase, FolderOpen, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";
// Assuming you will use a wrapper around this to inject the routing link functionality

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home, path: "/" }, // Added path
  { id: "experience", label: "Experience", icon: Briefcase, path: "/experience" }, // Added path
  { id: "projects", label: "Projects", icon: FolderOpen, path: "/projects" }, // Added path
  // Articles removed
];

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 p-6 hidden lg:flex flex-col border-r border-border bg-background/50 backdrop-blur-sm z-40">
     {/* Abstract geometric mark */}
      <div className="mb-10 group cursor-pointer">
        <div className="relative w-10 h-10">
          {/* Rotating outer ring */}
          <div className="absolute inset-0 border-2 border-accent-link/30 rounded-lg rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
          {/* Inner square */}
          <div className="absolute inset-2 bg-gradient-to-br from-accent-link/20 to-transparent rounded-sm group-hover:scale-110 transition-transform duration-300" />
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-accent-link group-hover:scale-150 transition-transform duration-300" />
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          // Note: isActive logic remains based on ID, but the path should be used for actual navigation
          const isActive = activeSection === item.id; 
          
          return (
            <NavLink // Changed button to <a> for routing clarity
              key={item.id}
              to={item.path} // Use href for direct path navigation
              onClick={() => onSectionChange(item.id)} // Keep state change for mobile/internal logic
              className={`flex items-center gap-3 text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? "bg-primary/10 text-primary translate-x-1" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer / Socials placeholder could go here */}
      <div className="mt-auto pt-6 border-t border-border">
         <p className="text-xs text-muted-foreground">
           © 2025 Deekshith V.
         </p>
      </div>
    </aside>
  );
};

export default Sidebar;