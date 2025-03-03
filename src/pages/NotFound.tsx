
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedBackground from '@/components/AnimatedBackground';
import GrainOverlay from '@/components/GrainOverlay';
import LofiCard from '@/components/LofiCard';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <AnimatedBackground />
      <GrainOverlay />
      
      <div className="container mx-auto px-4 z-10">
        <LofiCard className="max-w-md mx-auto">
          <div className="text-center">
            <h1 className="text-6xl font-heading mb-6 text-lofi-purple">404</h1>
            <p className="text-xl text-lofi-beige/80 mb-6">This page seems to have drifted away...</p>
            <a 
              href="/" 
              className="inline-flex items-center gap-2 lofi-button"
            >
              <Home size={18} />
              <span>Return Home</span>
            </a>
          </div>
        </LofiCard>
      </div>
    </div>
  );
};

export default NotFound;
