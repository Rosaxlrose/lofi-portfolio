
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lofi-dark via-lofi-dark/95 to-lofi-purple/20" />
      
      {/* Animated shapes */}
      <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-lofi-purple/10 blur-3xl animate-float" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute top-[40%] right-[10%] w-80 h-80 rounded-full bg-lofi-blue/10 blur-3xl animate-float" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-[15%] left-[20%] w-72 h-72 rounded-full bg-lofi-pink/10 blur-3xl animate-float" 
           style={{ animationDelay: '2s' }} />
      
      {/* Small decorative elements */}
      <div className="absolute top-[25%] right-[25%] w-4 h-4 rounded-full bg-lofi-purple/40 animate-pulse-slow" />
      <div className="absolute top-[65%] left-[35%] w-3 h-3 rounded-full bg-lofi-blue/40 animate-pulse-slow" 
           style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-[30%] right-[40%] w-5 h-5 rounded-full bg-lofi-pink/40 animate-pulse-slow" 
           style={{ animationDelay: '0.7s' }} />
    </div>
  );
};

export default AnimatedBackground;
