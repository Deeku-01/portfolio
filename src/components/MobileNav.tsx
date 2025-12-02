import { Home, Briefcase, FolderOpen, FileText } from "lucide-react";

interface MobileNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "experience", label: "Exp", icon: Briefcase },
  { id: "projects", label: "Work", icon: FolderOpen },
  { id: "articles", label: "Blog", icon: FileText },
];

const MobileNav = ({ activeSection, onSectionChange }: MobileNavProps) => {
  return (
    <nav className="fixed bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md border border-border/50 p-2 flex justify-between rounded-2xl shadow-lg lg:hidden z-50 max-w-md mx-auto">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`flex flex-col items-center justify-center w-full py-2 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted/50"
            }`}
          >
            <Icon className={`w-5 h-5 mb-0.5 ${isActive ? "fill-primary/20" : ""}`} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default MobileNav;