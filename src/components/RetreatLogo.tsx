
import React from 'react';

interface RetreatLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const RetreatLogo: React.FC<RetreatLogoProps> = ({ 
  className = "", 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-24 h-8',
    md: 'w-32 h-10',
    lg: 'w-40 h-12',
    xl: 'w-48 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <img 
        src="/lovable-uploads/7efdbb40-5a4a-4373-a6a1-1256bc74348e.png" 
        alt="Goto Retreats - Find Your Perfect Retreat" 
        className="w-full h-full object-contain animate-breathe"
      />
    </div>
  );
};

export default RetreatLogo;
