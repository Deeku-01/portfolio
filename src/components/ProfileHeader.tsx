// fileName: ProfileHeader.tsx
import { Github, Linkedin, FileText, Mail, Code } from "lucide-react";
import React, { useState } from 'react';
import { toast } from "sonner";
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

// Define the source for the images (ensure these paths exist in your public folder)
const SOCIAL_IMAGES = {
    GitHub: "/images/github.png",
    LinkedIn: "/images/linkd.png",
    LeetCode: "/images/leet.png",
    Resume: "/images/resume.png",
};

// Define the animation variants
const previewVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 }, 
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, type: "spring" } },
};

// --- Portal Component for Hover Image ---
const HoverPreviewPortal = ({ imageKey, clientRect }) => {
    const imageSrc = imageKey ? SOCIAL_IMAGES[imageKey] : null;

    if (!clientRect || !imageSrc) return null;

    // Calculate the position based on the link's coordinates
    const style = {
        position: 'absolute',
        top: clientRect.bottom + 8, // 8px margin below the link
        left: clientRect.left + clientRect.width / 2, // Center of the link
        transform: 'translateX(-50%)', // Center horizontally
        
        // Adaptive Sizing
        maxWidth: '500px', 
        width: 'max-content', 
        height: 'auto', 
        maxHeight: '560px', 
        margin: '0', 
    };
    
    return createPortal(
        <AnimatePresence>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={previewVariants}
                // High Z-index ensures image is always on top
                className="pointer-events-none z-[1000] rounded-xl overflow-hidden p-[2px]" 
                style={{
                    ...style,
                    // FIX: Changed border color to white and increased thickness slightly
                    border: '3px solid white', 
                    backgroundColor: 'var(--card-background, #F8F8FF)', 
                }}
            >
                <img 
                    src={imageSrc} 
                    alt={`${imageKey} preview`} 
                    // Applied shadow/brightness enhancement for perceived quality
                    className="w-full h-auto object-cover rounded-lg shadow-2xl filter brightness-105"
                />
            </motion.div>
        </AnimatePresence>,
        document.body
    );
};
// ------------------------------------------


const ProfileHeader = () => {
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);
    const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

    const copyEmail = () => {
        navigator.clipboard.writeText("deekudeekshithv@gmail.com");
        toast.success("Email copied to clipboard!");
    };

    const socialLinks = [
        { href: "https://github.com/Deeku-01", label: "GitHub", Icon: Github, imageKey: "GitHub" },
        { href: "https://www.linkedin.com/in/deekshith-v-482a39256/", label: "LinkedIn", Icon: Linkedin, imageKey: "LinkedIn" },
        { href: "https://leetcode.com/u/xUCDpKJXZi/", label: "LeetCode", Icon: Code, imageKey: "LeetCode" },
        { href: "/DeekshithV_RVCE.pdf", label: "Resume", Icon: FileText, imageKey: "Resume" },
    ];

    const handleMouseEnter = (linkKey: string, e: React.MouseEvent<HTMLAnchorElement>) => {
        setHoveredImage(linkKey);
        setHoveredRect(e.currentTarget.getBoundingClientRect());
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
        setHoveredRect(null);
    };


    return (
        <>
            {/* 1. RENDER THE PORTAL HERE */}
            <HoverPreviewPortal imageKey={hoveredImage} clientRect={hoveredRect} />
            
            {/* 2. PROFILE HEADER CONTENT */}
            <div className="flex flex-wrap items-center gap-6 mb-0 animate-fade-in">
                <div className="flex flex-wrap items-center gap-4 text-sm">
                    
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            // Use new handlers to capture position
                            onMouseEnter={(e) => handleMouseEnter(link.imageKey, e)}
                            onMouseLeave={handleMouseLeave}
                            
                            // Normal classes
                            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <link.Icon className="w-4 h-4" />
                            {link.label}
                        </a>
                    ))}

                    <button
                        onClick={copyEmail}
                        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        Copy Email
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProfileHeader;