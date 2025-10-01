import React from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-cream-100 menu-texture flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-display font-bold bronze-gradient mb-4 animate-fade-in">
            BACKROOM
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-bronze-400 to-transparent mx-auto animate-pulse"></div>
        </div>
        
        <div className="flex space-x-2 justify-center">
          <div className="w-3 h-3 bg-bronze-400 rounded-full animate-bounce delay-0"></div>
          <div className="w-3 h-3 bg-bronze-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-bronze-400 rounded-full animate-bounce delay-200"></div>
        </div>
        
        <p className="text-bronze-600 mt-6 animate-fade-in-delay text-sm tracking-wider font-serif">
          Preparando tu experiencia gastronómica...
        </p>
      </div>
    </div>
  );
}