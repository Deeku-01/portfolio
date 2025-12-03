// fileName: MobileNav.tsx
import { NavLink } from "react-router-dom"; 
import { Home, Briefcase, FolderOpen, FileText } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home, path: "/" },
  { id: "experience", label: "Experience", icon: Briefcase, path: "/experience" },
  { id: "projects", label: "Projects", icon: FolderOpen, path: "/projects" },
];

const MobileNav = () => {
  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md border border-border/50 p-2 flex justify-between rounded-2xl shadow-lg md:hidden z-50 max-w-md mx-auto">
      {navItems.map((item) => {
        const Icon = item.icon;
        
        return (
          <NavLink 
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full py-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/50"
              }`
            }
          >
            {({ isActive }) => (
                <>
                    <Icon className={`w-5 h-5 mb-0.5 ${isActive ? "fill-primary/20" : ""}`} />
                    <span className="text-[10px] font-medium">{item.label}</span>
                </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default MobileNav;