import { useState, useRef, useEffect } from "react";
import { Disc3 } from "lucide-react";

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
  // Create and preload audio
  audioRef.current = new Audio("/Music/music.mp3");
  audioRef.current.loop = true;
  audioRef.current.preload = "auto";
  
  return () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };
}, []);

const toggleMusic = () => {
  if (!audioRef.current) return;
  
  if (isPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play().catch((error) => {
      console.log("Audio autoplay prevented:", error);
    });
  }
  setIsPlaying(!isPlaying);
};

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 p-3 bg-card border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      <Disc3
        className={`w-5 h-5 text-foreground transition-transform ${
          isPlaying ? "animate-spin" : ""
        }`}
        style={{ animationDuration: isPlaying ? "3s" : "0s" }}
      />
    </button>
  );
};

export default MusicButton;
