import React from 'react';

export function MenuHeader() {
  return (
    <div className="text-center py-16 px-4 bg-cream-50 dark:bg-gray-900 paper-texture">
      <h1 className="text-3xl font-display font-bold gold-gradient mb-6">
        Nuestra Carta
      </h1>
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 dark:via-amber-400 to-transparent mx-auto mb-8"></div>
      <p className="text-bronze-700 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed font-serif">
        Luces cálidas, conversaciones íntimas, jazz que susurra entre mesas y una barra que crea más que cócteles: crea relatos líquidos. Backroom es un homenaje a los placeres lentos, a las palabras no dichas y a los brindis inolvidables
      </p>

              {/* Award Tag */}
        <div className="absolute top-[10%] italic sm:top-4 right-2 sm:right-4 md:right-8 lg:right-12 xl:right-16 opacity-0 animate-fade-in [animation-delay:1s] animate-slow-pulse">
          <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-serif font-medium shadow-lg border border-yellow-300">
            🏆 Bar&Drinks Mejor Carta de Cócteles 2023
          </div>
        </div>
    </div>

    
  );
}