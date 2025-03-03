
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LofiCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const LofiCard = ({ children, className, delay = 0 }: LofiCardProps) => {
  return (
    <div 
      className={cn(
        "lofi-card blur-load animate-blur-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default LofiCard;
