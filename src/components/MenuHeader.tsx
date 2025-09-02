import React from 'react';

export function MenuHeader() {
  return (
    <div className="text-center py-16 px-4">
      <h1 className="text-6xl font-serif text-amber-400 mb-6">
        Nuestra Carta
      </h1>
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
      <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
        Una cuidadosa selección de cócteles de autor y gastronomía contemporánea,
        donde cada plato cuenta una historia y cada bebida es una experiencia única.
      </p>
    </div>
  );
}