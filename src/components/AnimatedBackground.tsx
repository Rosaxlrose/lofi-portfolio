
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lofi-dark via-lofi-dark/95 to-lofi-purple/20" />
      
      {/* City skyline */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-lofi-dark">
        <div className="absolute bottom-0 left-0 w-full h-[25vh] bg-gradient-to-t from-lofi-dark to-transparent" />
        
        {/* Buildings */}
        <div className="absolute bottom-0 left-[10%] w-16 h-[18vh] bg-lofi-purple/20 backdrop-blur-sm" />
        <div className="absolute bottom-0 left-[15%] w-20 h-[22vh] bg-lofi-blue/20 backdrop-blur-sm" />
        <div className="absolute bottom-0 left-[25%] w-14 h-[15vh] bg-lofi-purple/20 backdrop-blur-sm" />
        <div className="absolute bottom-0 left-[35%] w-24 h-[20vh] bg-lofi-blue/20 backdrop-blur-sm" />
        <div className="absolute bottom-0 left-[50%] w-16 h-[25vh] bg-lofi-purple/20 backdrop-blur-sm" />
        <div className="absolute bottom-0 left-[60%] w-20 h-[15vh] bg-lofi-blue/20 backdrop-blur-sm" />
        <div className="absolute bottom-0 left-[75%] w-14 h-[18vh] bg-lofi-purple/20 backdrop-blur-sm" />
        <div className="absolute bottom-0 left-[85%] w-24 h-[22vh] bg-lofi-blue/20 backdrop-blur-sm" />
      </div>
      
      {/* Animated shapes */}
      <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-lofi-purple/10 blur-3xl animate-float" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute top-[40%] right-[10%] w-80 h-80 rounded-full bg-lofi-blue/10 blur-3xl animate-float" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[35%] left-[20%] w-72 h-72 rounded-full bg-lofi-pink/10 blur-3xl animate-float" 
           style={{ animationDelay: '2s' }} />
      
      {/* Pixelated stars */}
      <div className="absolute top-[15%] right-[15%] w-2 h-2 bg-lofi-purple/40 animate-pulse-slow" />
      <div className="absolute top-[25%] left-[45%] w-2 h-2 bg-lofi-blue/40 animate-pulse-slow" 
           style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[30%] right-[30%] w-2 h-2 bg-lofi-pink/40 animate-pulse-slow" 
           style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-[40%] left-[25%] w-2 h-2 bg-lofi-purple/40 animate-pulse-slow" 
           style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-[20%] right-[50%] w-2 h-2 bg-lofi-blue/40 animate-pulse-slow" 
           style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default AnimatedBackground;
