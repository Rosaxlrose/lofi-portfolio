
import React, { useEffect, useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import GrainOverlay from '@/components/GrainOverlay';
import LofiHeader from '@/components/LofiHeader';
import LofiCard from '@/components/LofiCard';
import { Star, Code, Coffee, ExternalLink } from 'lucide-react';

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
            <div className="inline-block bg-lofi-purple/20 text-lofi-purple px-3 py-1 rounded-full text-xs mb-6 backdrop-blur-sm animate-blur-in">
              静かな瞬間 • PEACEFUL MOMENTS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight tracking-wide animate-blur-in" style={{ animationDelay: '200ms' }}>
              Find your <span className="text-lofi-purple">creative</span> flow state
            </h2>
            <p className="text-lofi-beige/80 text-lg mb-8 leading-relaxed max-w-2xl mx-auto animate-blur-in" style={{ animationDelay: '400ms' }}>
              A minimalist showcase inspired by the calming aesthetics of lo-fi music culture. 
              Blurry vibes, soothing animations, and relaxed typography.
            </p>
            <button className="lofi-button animate-blur-in animate-slide-up" style={{ animationDelay: '600ms' }}>
              Explore
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
            <LofiCard className="md:col-span-2 flex flex-col" delay={700}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-heading text-lofi-beige">Nostalgic Aesthetics</h3>
                <Star className="text-lofi-purple" size={20} />
              </div>
              <p className="text-lofi-beige/70 mb-4 flex-1">
                Embracing the imperfect, the blurry, and the nostalgic. Lo-fi design celebrates 
                the beauty in slight imperfections and creates a space for calm creativity.
              </p>
              <div className="h-40 bg-gradient-to-br from-lofi-purple/20 to-lofi-blue/20 rounded-md flex items-center justify-center mt-4">
                <span className="text-sm text-lofi-beige/40">Aesthetic visualization</span>
              </div>
            </LofiCard>
            
            <LofiCard delay={900}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-heading text-lofi-beige">Smooth Experience</h3>
                <Coffee className="text-lofi-pink" size={20} />
              </div>
              <p className="text-lofi-beige/70">
                Designed with attention to detail, every animation and transition has been 
                carefully crafted to enhance the dreamy, relaxed feeling.
              </p>
              <div className="flex items-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-lofi-purple animate-pulse-slow"></div>
                <div className="w-2 h-2 rounded-full bg-lofi-blue animate-pulse-slow" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 rounded-full bg-lofi-pink animate-pulse-slow" style={{ animationDelay: '0.6s' }}></div>
              </div>
            </LofiCard>
            
            <LofiCard delay={1100}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-heading text-lofi-beige">Clean Code</h3>
                <Code className="text-lofi-blue" size={20} />
              </div>
              <p className="text-lofi-beige/70">
                Built with React and TailwindCSS. Responsive design principles ensure 
                it works beautifully on any device without sacrificing aesthetics.
              </p>
              <div className="bg-lofi-dark/40 rounded p-3 mt-4 font-mono text-xs text-lofi-purple/70">
                <code>npm install lofi-vibes</code>
              </div>
            </LofiCard>
            
            <LofiCard className="md:col-span-2" delay={1300}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-heading text-lofi-beige">Projects & Showcases</h3>
                <ExternalLink className="text-lofi-blue" size={20} />
              </div>
              <p className="text-lofi-beige/70 mb-6">
                Perfect for displaying your GitHub projects or creative portfolio in a calm, 
                focused environment that lets your work take center stage.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-md bg-white/5 hover:bg-white/10 transition-colors border border-white/10 cursor-pointer group">
                  <h4 className="text-sm font-medium mb-2 group-hover:text-lofi-purple transition-colors">Project Alpha</h4>
                  <div className="w-full h-1 bg-lofi-purple/20 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-lofi-purple rounded-full"></div>
                  </div>
                </div>
                <div className="p-4 rounded-md bg-white/5 hover:bg-white/10 transition-colors border border-white/10 cursor-pointer group">
                  <h4 className="text-sm font-medium mb-2 group-hover:text-lofi-blue transition-colors">Project Beta</h4>
                  <div className="w-full h-1 bg-lofi-blue/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-lofi-blue rounded-full"></div>
                  </div>
                </div>
              </div>
            </LofiCard>
          </div>
        </main>
        
        <footer className="py-8 text-center opacity-60 text-sm">
          <p>Crafted with care • {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
