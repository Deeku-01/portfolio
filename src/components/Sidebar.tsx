// fileName: Sidebar.tsx
import { Home, Briefcase, FolderOpen, FileText } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  // { id: "articles", label: "Articles", icon: FileText },
];

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 p-6 hidden lg:flex flex-col border-r border-border bg-background/50 backdrop-blur-sm z-40">
      {/* Profile / Brand Section - Option 1: Initials & Role */}
      <div className="mb-12 flex flex-col gap-1"> 
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mb-2">
           DV
        </div>
        <h2 className="font-bold text-xl">Software Developer</h2>
        <p className="text-sm text-muted-foreground">Associate Software Developer</p>
        <p className="text-xs text-muted-foreground mt-1">@Oracle</p>
      </div>
      
      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex items-center gap-3 text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? "bg-primary/10 text-primary translate-x-1" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
              {item.label}
            </button>
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