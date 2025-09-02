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
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-serif text-amber-400 mb-4 animate-fade-in">
            Tu Restaurant
          </h1>
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto animate-pulse"></div>
        </div>
        
        <div className="flex space-x-2 justify-center">
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce delay-0"></div>
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce delay-200"></div>
        </div>
        
        <p className="text-gray-400 mt-6 animate-fade-in-delay text-sm tracking-wider">
          Preparando tu experiencia gastronómica...
        </p>
      </div>
    </div>
  );
}