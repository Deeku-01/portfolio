// fileName: Image.tsx
import { useState } from 'react';
import { X } from "lucide-react"; // Z-index of 1000 for button
import { createPortal } from 'react-dom';

export default function ImageWithModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Clickable Image Thumbnail */}
      <div 
        className="w-30 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/20 to-blue-500/40 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setIsOpen(true)}
      >
        {/* Replace with your image */}
        <img 
          src="/images/profile.jpg" 
          alt="Profile Picture"
          className="w-full h-full object-cover"
        />
        {/* Or keep your initials fallback */}
        {/* <span className="text-3xl font-bold text-blue-500">DV</span> */}
      </div>

      {/* Modal Overlay - Z-index set to z-[999] for highest priority */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          {/* Enlarged Image Container 
            The parent flex centers it, but using 'm-auto' is a foolproof way to center 
            the image block absolutely on the page.
          */}
          <div 
            className="relative m-auto max-w-4xl max-h-[90vh] animate-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Z-index set to z-[1000] */}
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-[1000] md:-top-12"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            <img 
              src="/images/profile.jpg" 
              alt="Profile enlarged"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

// export default ImageWithModal;