
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Main background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-lofi-dark via-lofi-dark/95 to-lofi-purple/30" />
      
      {/* Animated cosmic elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-[5%] left-[15%] w-80 h-80 rounded-full bg-lofi-purple/10 blur-3xl animate-float" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-[30%] right-[10%] w-96 h-96 rounded-full bg-lofi-blue/10 blur-3xl animate-float" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[15%] left-[20%] w-72 h-72 rounded-full bg-lofi-pink/10 blur-3xl animate-float" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-[60%] right-[25%] w-64 h-64 rounded-full bg-lofi-purple/10 blur-3xl animate-float" 
             style={{ animationDelay: '1.5s' }} />
        
        {/* Pixel art stars */}
        <div className="absolute top-[10%] right-[25%] w-2 h-2 bg-lofi-purple/60 animate-pulse-slow" />
        <div className="absolute top-[15%] left-[40%] w-2 h-2 bg-lofi-blue/60 animate-pulse-slow" 
             style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[25%] right-[35%] w-2 h-2 bg-lofi-pink/60 animate-pulse-slow" 
             style={{ animationDelay: '0.7s' }} />
        <div className="absolute top-[30%] left-[30%] w-2 h-2 bg-lofi-purple/60 animate-pulse-slow" 
             style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-[40%] right-[20%] w-2 h-2 bg-lofi-blue/60 animate-pulse-slow" 
             style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[50%] left-[15%] w-2 h-2 bg-lofi-pink/60 animate-pulse-slow" 
             style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[60%] right-[40%] w-2 h-2 bg-lofi-purple/60 animate-pulse-slow" 
             style={{ animationDelay: '1.3s' }} />
        <div className="absolute top-[70%] left-[50%] w-2 h-2 bg-lofi-blue/60 animate-pulse-slow" 
             style={{ animationDelay: '0.9s' }} />
        <div className="absolute top-[80%] right-[30%] w-2 h-2 bg-lofi-pink/60 animate-pulse-slow" 
             style={{ animationDelay: '1.1s' }} />
        
        {/* Pixel art constellations */}
        <div className="absolute top-[20%] left-[20%] flex">
          <div className="w-2 h-2 bg-lofi-blue/50"></div>
          <div className="w-[8px] h-[1px] bg-lofi-blue/20 transform rotate-45 origin-left"></div>
          <div className="w-2 h-2 bg-lofi-blue/50"></div>
          <div className="w-[10px] h-[1px] bg-lofi-blue/20 transform -rotate-15 origin-left"></div>
          <div className="w-2 h-2 bg-lofi-blue/50"></div>
        </div>
        
        <div className="absolute bottom-[30%] right-[25%] flex">
          <div className="w-2 h-2 bg-lofi-purple/50"></div>
          <div className="w-[12px] h-[1px] bg-lofi-purple/20 transform rotate-30 origin-left"></div>
          <div className="w-2 h-2 bg-lofi-purple/50"></div>
          <div className="w-[8px] h-[1px] bg-lofi-purple/20 transform -rotate-20 origin-left"></div>
          <div className="w-2 h-2 bg-lofi-purple/50"></div>
        </div>
        
        {/* Horizontal gradient bands */}
        <div className="absolute bottom-[10%] left-0 w-full h-[15vh] bg-gradient-to-t from-lofi-purple/20 to-transparent"></div>
        <div className="absolute bottom-[20%] left-0 w-full h-[2px] bg-lofi-purple/10"></div>
        <div className="absolute bottom-[25%] left-0 w-full h-[1px] bg-lofi-blue/10"></div>
        <div className="absolute bottom-[30%] left-0 w-full h-[2px] bg-lofi-pink/10"></div>
      </div>
      
      {/* Retro horizon effect */}
      <div className="absolute bottom-0 left-0 w-full h-[20vh]">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-lofi-dark to-transparent"></div>
        
        {/* Grid horizon effect */}
        <div className="absolute bottom-0 left-0 w-full h-[15vh] perspective-[1000px]">
          <div className="absolute bottom-0 left-0 w-full h-[15vh] transform-style-3d rotate-x-60 origin-bottom">
            <div className="w-full h-full grid grid-cols-12 gap-8">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-full w-[1px] bg-gradient-to-t from-lofi-purple/40 to-transparent"></div>
              ))}
            </div>
            <div className="w-full h-full grid grid-rows-8 gap-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-full h-[1px] bg-gradient-to-r from-lofi-purple/40 via-lofi-blue/40 to-lofi-purple/40"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
