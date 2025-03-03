
import React from 'react';
import { Music, Github } from 'lucide-react';

const LofiHeader = () => {
  return (
    <header className="w-full py-6 px-4 md:px-8 flex justify-between items-center z-10 relative">
      <div className="flex items-center gap-2">
        <Music className="text-lofi-purple animate-pulse-slow" size={24} />
        <h1 className="text-xl md:text-2xl font-heading text-lofi-beige tracking-wide opacity-90">
          lo-fi <span className="text-lofi-purple">dreamscape</span>
        </h1>
      </div>
      
      <a 
        href="https://github.com/username" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
      >
        <span className="hidden sm:inline text-sm">GitHub</span>
        <Github size={20} className="text-lofi-beige" />
      </a>
    </header>
  );
};

export default LofiHeader;
