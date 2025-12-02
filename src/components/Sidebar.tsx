import { Home, Briefcase, FolderOpen, FileText } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "articles", label: "Articles", icon: FileText },
];

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-52 p-6 hidden lg:block">
      <div className="mb-10">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-blue-500" />
      </div>
      
      <nav className="space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full text-left nav-item ${
              activeSection === item.id ? "nav-item-active" : "nav-item-inactive"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
