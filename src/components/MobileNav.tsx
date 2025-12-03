// fileName: MobileNav.tsx
import { Home, Briefcase, FolderOpen, FileText } from "lucide-react";
import { useLocation } from "react-router-dom"; // Import useLocation

// The component's props are simplified as external state is no longer driving navigation
interface MobileNavProps {
  // Props are now empty
}

const navItems = [
  { id: "home", label: "Home", icon: Home, path: "/" },
  { id: "experience", label: "Experience", icon: Briefcase, path: "/experience" },
  { id: "projects", label: "Projects", icon: FolderOpen, path: "/projects" },
];

const MobileNav = () => { // Removed props from function signature
  // Use useLocation to get the current URL path for determining the active state
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to determine active state
  const isActive = (path: string) => {
    // If path is '/', it only matches exactly '/'. Otherwise, it checks for startsWith.
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };
  
  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md border border-border/50 p-2 flex justify-between rounded-2xl shadow-lg lg:hidden z-50 max-w-md mx-auto">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.path);
        
        return (
          <a // Use <a> tag for navigation
            key={item.id}
            href={item.path} // Direct path for navigation
            // Removed onClick call
            className={`flex flex-col items-center justify-center w-full py-2 rounded-xl transition-all duration-200 ${
              active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted/50"
            }`}
          >
            <Icon className={`w-5 h-5 mb-0.5 ${active ? "fill-primary/20" : ""}`} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default MobileNav;