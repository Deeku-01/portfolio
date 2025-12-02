import { Github, Linkedin, FileText, Mail, Phone, Code } from "lucide-react";
import { toast } from "sonner";

const ProfileHeader = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("deekudeekshithv@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+91-6362210224");
    toast.success("Phone number copied to clipboard!");
  };

  return (
    <div className="flex flex-wrap items-center gap-6 mb-8 animate-fade-in">
      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
        <span className="text-3xl font-bold text-primary">DV</span>
      </div>
      
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <a
          href="https://github.com/DeekshithV"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/deekshithv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href="https://leetcode.com/DeekshithV"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Code className="w-4 h-4" />
          LeetCode
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
