
import React, { useEffect, useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import GrainOverlay from '@/components/GrainOverlay';
import LofiHeader from '@/components/LofiHeader';
import LofiCard from '@/components/LofiCard';
import { Code, ExternalLink, Gamepad, Monitor, Palette } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen relative transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <AnimatedBackground />
      <GrainOverlay />
      
      <div className="container mx-auto px-4 min-h-screen flex flex-col">
        <LofiHeader />
        
        <main className="flex-1 flex flex-col items-center justify-center py-12 mt-8">
          <div className="text-center max-w-3xl mx-auto mb-12 px-4">
            <div className="inline-block bg-lofi-purple/20 text-lofi-purple px-3 py-1 rounded-full text-xs mb-6 backdrop-blur-sm animate-blur-in font-pixel">
              レトロな世界 • RETRO WORLD
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight tracking-wide animate-blur-in" style={{ animationDelay: '200ms' }}>
              <span className="text-lofi-purple">Pixel</span> Perfect Portfolio
            </h2>
            <p className="text-lofi-beige/80 text-lg mb-8 leading-relaxed max-w-2xl mx-auto animate-blur-in" style={{ animationDelay: '400ms' }}>
              A retro-inspired showcase with lo-fi aesthetics, citypop vibes, and pixel art style.
              Browse through my projects and creative works.
            </p>
            <button className="lofi-button animate-blur-in animate-slide-up font-pixel text-xs" style={{ animationDelay: '600ms' }}>
              EXPLORE PROJECTS
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
            <LofiCard className="md:col-span-2 flex flex-col pixel-border" delay={700}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-pixel text-lofi-beige">ABOUT ME</h3>
                <Monitor className="text-lofi-purple" size={20} />
              </div>
              <p className="text-lofi-beige/70 mb-4 flex-1">
                Creative developer with a passion for retro aesthetics and modern technologies.
                I specialize in creating unique digital experiences that combine nostalgia with
                cutting-edge functionality.
              </p>
              <div className="h-40 bg-gradient-to-br from-lofi-purple/20 to-lofi-blue/20 rounded-sm flex items-center justify-center mt-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute bottom-0 left-0 w-full h-[14vh]">
                    <div className="absolute bottom-0 left-[10%] w-4 h-[8vh] bg-lofi-purple/40" />
                    <div className="absolute bottom-0 left-[15%] w-3 h-[10vh] bg-lofi-blue/40" />
                    <div className="absolute bottom-0 left-[25%] w-5 h-[6vh] bg-lofi-purple/40" />
                    <div className="absolute bottom-0 left-[35%] w-4 h-[9vh] bg-lofi-blue/40" />
                    <div className="absolute bottom-0 left-[50%] w-3 h-[11vh] bg-lofi-purple/40" />
                    <div className="absolute bottom-0 left-[60%] w-4 h-[7vh] bg-lofi-blue/40" />
                    <div className="absolute bottom-0 left-[75%] w-5 h-[9vh] bg-lofi-purple/40" />
                    <div className="absolute bottom-0 left-[85%] w-3 h-[10vh] bg-lofi-blue/40" />
                  </div>
                </div>
                <span className="font-pixel text-xs text-lofi-beige/60 relative z-10">DEVELOPER / DESIGNER</span>
              </div>
            </LofiCard>
            
            <LofiCard className="pixel-border" delay={900}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-pixel text-lofi-beige">SKILLS</h3>
                <Code className="text-lofi-pink" size={20} />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-pixel">FRONTEND</span>
                    <span className="font-pixel">90%</span>
                  </div>
                  <div className="w-full h-2 bg-lofi-purple/20 rounded-none overflow-hidden">
                    <div className="h-full w-[90%] bg-lofi-purple rounded-none"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-pixel">DESIGN</span>
                    <span className="font-pixel">85%</span>
                  </div>
                  <div className="w-full h-2 bg-lofi-blue/20 rounded-none overflow-hidden">
                    <div className="h-full w-[85%] bg-lofi-blue rounded-none"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-pixel">BACKEND</span>
                    <span className="font-pixel">75%</span>
                  </div>
                  <div className="w-full h-2 bg-lofi-pink/20 rounded-none overflow-hidden">
                    <div className="h-full w-[75%] bg-lofi-pink rounded-none"></div>
                  </div>
                </div>
              </div>
            </LofiCard>
            
            <LofiCard className="pixel-border" delay={1100}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-pixel text-lofi-beige">GAME DEV</h3>
                <Gamepad className="text-lofi-blue" size={20} />
              </div>
              <p className="text-lofi-beige/70 mb-4">
                Creating retro-inspired pixel art games with modern gameplay mechanics.
                Specialized in Unity and Godot engines.
              </p>
              <div className="bg-lofi-dark/40 rounded-none p-3 mt-4 font-pixel text-xs text-lofi-purple/70 border border-lofi-purple/30">
                <code>function playRetroGame() &#123; ... &#125;</code>
              </div>
            </LofiCard>
            
            <LofiCard className="md:col-span-2 pixel-border" delay={1300}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-pixel text-lofi-beige">PROJECTS</h3>
                <ExternalLink className="text-lofi-blue" size={20} />
              </div>
              <p className="text-lofi-beige/70 mb-6">
                Check out some of my featured projects below. Each one represents a unique
                blend of retro aesthetics and modern functionality.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="project-card group cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-pixel text-xs group-hover:text-lofi-purple transition-colors">RETRO GAME</h4>
                    <Gamepad size={16} className="text-lofi-purple/70" />
                  </div>
                  <p className="text-lofi-beige/60 text-xs mb-3">A pixel art platformer game with synthwave aesthetics</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] px-2 py-0.5 bg-lofi-purple/20 text-lofi-purple/70 font-pixel">UNITY</span>
                    <span className="text-[10px] px-2 py-0.5 bg-lofi-blue/20 text-lofi-blue/70 font-pixel">C#</span>
                    <span className="text-[10px] px-2 py-0.5 bg-lofi-pink/20 text-lofi-pink/70 font-pixel">PIXEL ART</span>
                  </div>
                </div>
                
                <div className="project-card group cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-pixel text-xs group-hover:text-lofi-blue transition-colors">CITY APP</h4>
                    <Monitor size={16} className="text-lofi-blue/70" />
                  </div>
                  <p className="text-lofi-beige/60 text-xs mb-3">A citypop-inspired weather application with retro UI</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] px-2 py-0.5 bg-lofi-purple/20 text-lofi-purple/70 font-pixel">REACT</span>
                    <span className="text-[10px] px-2 py-0.5 bg-lofi-blue/20 text-lofi-blue/70 font-pixel">TAILWIND</span>
                    <span className="text-[10px] px-2 py-0.5 bg-lofi-pink/20 text-lofi-pink/70 font-pixel">API</span>
                  </div>
                </div>
                
                <div className="project-card group cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-pixel text-xs group-hover:text-lofi-pink transition-colors">RETRO UI KIT</h4>
                    <Palette size={16} className="text-lofi-pink/70" />
                  </div>
                  <p className="text-lofi-beige/60 text-xs mb-3">A collection of pixel-perfect UI components for web</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] px-2 py-0.5 bg-lofi-purple/20 text-lofi-purple/70 font-pixel">CSS</span>
                    <span className="text-[10px] px-2 py-0.5 bg-lofi-blue/20 text-lofi-blue/70 font-pixel">FIGMA</span>
                    <span className="text-[10px] px-2 py-0.5 bg-lofi-pink/20 text-lofi-pink/70 font-pixel">UI/UX</span>
                  </div>
                </div>
                
                <div className="project-card group cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-pixel text-xs group-hover:text-lofi-purple transition-colors">CYBERPUNK BLOG</h4>
                    <Code size={16} className="text-lofi-purple/70" />
                  </div>
                  <p className="text-lofi-beige/60 text-xs mb-3">A retro-futuristic blog template with unique animations</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] px-2 py-0.5 bg-lofi-purple/20 text-lofi-purple/70 font-pixel">HTML</span>
                    <span className="text-[10px] px-2 py-0.5 bg-lofi-blue/20 text-lofi-blue/70 font-pixel">JS</span>
                    <span className="text-[10px] px-2 py-0.5 bg-lofi-pink/20 text-lofi-pink/70 font-pixel">GSAP</span>
                  </div>
                </div>
              </div>
            </LofiCard>
          </div>
        </main>
        
        <footer className="py-8 text-center opacity-60 text-xs font-pixel">
          <p>PIXEL PERFECT PORTFOLIO • {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
