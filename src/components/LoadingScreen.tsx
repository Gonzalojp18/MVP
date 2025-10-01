import React, { useEffect, useState, useCallback } from 'react';

// Definición de tipos para las props
interface LoadingScreenProps {
  onComplete?: () => void; // Hacemos la prop opcional con '?'
}

// Clases personalizadas de Tailwind para los colores originales (bronce y fondo oscuro)
// Simulamos el fondo negro elegante y el color dorado/bronce.
const customStyles = `
  .bg-dark-noir {
    background-color: #000000;
  }
  .text-bronze-gold {
    color: #b8860b; /* Color similar al Goldenrod o bronce oscuro */
  }
  .font-display-serif {
    font-family: 'Times New Roman', Times, serif; /* Fuente serif clásica para elegancia */
    letter-spacing: 0.5em; /* Espaciado entre letras para el estilo de marca */
  }
  .animate-slow-pulse {
    animation: slow-pulse 3s infinite ease-in-out;
  }
  @keyframes slow-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
`;

// Componente principal de la pantalla de carga
// Establecemos un valor predeterminado (noop) para onComplete
export function LoadingScreen({ onComplete = () => {} }: LoadingScreenProps) {
  const [loadingText, setLoadingText] = useState('Preparando tu experiencia...');

  // Manejo del tiempo de carga
  useEffect(() => {
    // Simula la duración de la carga y llama a onComplete
    const timer = setTimeout(() => {
      // Ahora podemos llamar a onComplete directamente porque sabemos que siempre será una función (la que se pasó o la predeterminada {})
      onComplete();
    }, 3000); // Mantiene el tiempo original de 3 segundos

    // Cambia el texto de carga de forma sutil
    const interval = setInterval(() => {
      setLoadingText(prev => {
        if (prev.endsWith('...')) return 'Preparando tu experiencia.';
        if (prev.endsWith('.')) return 'Preparando tu experiencia..';
        return 'Preparando tu experiencia...';
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      
      {/* Estilos CSS incluidos dentro del componente React para el Single File Mandate */}
      <style>{customStyles}</style>

      {/* Contenedor principal para centrar y estructurar el diseño del "marco" */}
      <div className="relative w-full max-w-5xl h-64 flex flex-col items-center justify-center">

        {/* 1. Texto Superior: "Desde 2020" */}
        <p className="absolute top-0 text-xs text-bronze-gold uppercase tracking-widest animate-fade-in animate-slow-pulse">
          Desde 2020
        </p>

        {/* 2. Texto Izquierdo: "Drink" */}
        <p className="absolute left-0 top-1/2 transform -translate-y-1/2 text-lg text-white font-serif tracking-widest opacity-0 animate-fade-in [animation-delay:0.3s]">
          Drink
        </p>

        {/* 3. Texto Derecho: "Food" */}
        <p className="absolute right-0 top-1/2 transform -translate-y-1/2 text-lg text-white font-serif tracking-widest opacity-0 animate-fade-in [animation-delay:0.3s]">
          Food
        </p>

        {/* 4. Título Principal: "BACKROOM" */}
        <h1 
          className="text-6xl md:text-8xl font-display-serif text-white uppercase text-center 
                     opacity-0 animate-fade-in [animation-delay:0.5s] animate-slow-pulse"
          style={{ letterSpacing: '0.4em', textShadow: '0 0 10px rgba(255, 255, 255, 0.1)' }}
        >
          BACKROOM
        </h1>
        
        {/* 5. Texto Inferior: "Bar de Autores & Tragos" */}
        <p className="absolute bottom-0 text-base text-bronze-gold font-serif tracking-widest mt-4 opacity-0 animate-fade-in [animation-delay:0.8s] animate-slow-pulse">
          Bar de Autores & Tragos
        </p>
      </div>

      {/* Indicador de Carga y Mensaje Fijo en la parte inferior de la pantalla */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center">
        {/* Puntos de Carga Simples */}
        <div className="flex space-x-3 mb-2">
          <div className="w-2 h-2 bg-bronze-gold rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-bronze-gold rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
          <div className="w-2 h-2 bg-bronze-gold rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        {/* Mensaje de Carga Dinámico */}
        <p className="text-bronze-gold text-sm tracking-wider font-serif">
          {loadingText}
        </p>
      </div>
    </div>
  );
}

// Exportación por defecto para uso en el entorno React
export default LoadingScreen;