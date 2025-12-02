import { Github, Linkedin, Twitter, FileText, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const ProfileHeader = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("hello@yourname.dev");
    toast.success("Email copied to clipboard!");
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+1 234 567 8900");
    toast.success("Phone number copied to clipboard!");
  };

  return (
    <div className="flex flex-wrap items-center gap-6 mb-8 animate-fade-in">
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Twitter className="w-4 h-4" />
          X/Twitter
        </a>
        <a
          href="/resume.pdf"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <FileText className="w-4 h-4" />
          Resume
        </a>
        <button
          onClick={copyEmail}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="w-4 h-4" />
          Copy Email
        </button>
        <button
          onClick={copyPhone}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Phone className="w-4 h-4" />
          Copy Phone
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
