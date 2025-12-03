// fileName: Sidebar.tsx
import { NavLink } from "@/components/NavLink";
import { Home, Briefcase, FolderOpen, FileText } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/experience", label: "Experience", icon: Briefcase },
  { to: "/projects", label: "Projects", icon: FolderOpen },
  // { to: "/articles", label: "Articles", icon: FileText },
];

const Sidebar = () => {
  return (
    // FIX 2 & 3: Adjusted top margin (top-20 -> top-24 + mt-4) and horizontal positioning (pl-4 -> -ml-2)
    <aside className="hidden md:flex flex-col w-44 lg:w-48 flex-shrink-0 sticky top-20 self-start -ml-2 mt-20 pl-4 lg:pl-8 "> 
      
      {/* Old Logo Mark Removed (Transferred to TopBar) */}
      
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
              activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;