import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { LoadingScreen } from './components/LoadingScreen';
import { MenuHeader } from './components/MenuHeader';
import { Navigation } from './components/Navigation';
import { MenuSection } from './components/MenuSection';
import { Footer } from './components/Footer';
import { AdminApp } from './components/AdminApp';
import { menuData } from './data/menuData';
import { useDarkMode } from './hook/useDarkMode';

function App() {
  useDarkMode(); // Initialize dark mode
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Principales');
  const [showAdmin, setShowAdmin] = useState(false);

  const categories = menuData.map(category => category.name);
  const currentSection = menuData.find(section => section.name === activeCategory);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (showAdmin) {
    return <AdminApp />;
  }

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
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

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-gray-900 text-bronze-800 dark:text-gray-100 menu-texture">
      {/* Header con logo */}
      <header className="text-center py-4 sm:py-6 md:py-8 border-b border-bronze-200 dark:border-gray-800 bg-gray-900 paper-texture">
        <div className="flex items-center justify-center relative">
      
      {/* Estilos CSS incluidos dentro del componente React para el Single File Mandate */}
      <style>{customStyles}</style>

      {/* Contenedor principal para centrar y estructurar el diseño del "marco" */}
      <div className="relative w-full max-w-5xl h-24 sm:h-32 md:h-40 lg:h-48 flex flex-col items-center justify-center px-4">

        {/* 1. Texto Superior: "Desde 2020" */}
        <p className="absolute top-0 text-xs sm:text-sm text-bronze-gold uppercase tracking-widest animate-fade-in animate-slow-pulse">
          Desde 2020
        </p>

        {/* 2. Texto Izquierdo: "Drink" */}
        <p className="absolute left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 top-1/2 transform -translate-y-1/2 text-sm sm:text-base md:text-lg text-white font-serif tracking-widest opacity-0 animate-fade-in [animation-delay:0.3s]">
          Drink
        </p>

        {/* 3. Texto Derecho: "Food" */}
        <p className="absolute right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 top-1/2 transform -translate-y-1/2 text-sm sm:text-base md:text-lg text-white font-serif tracking-widest opacity-0 animate-fade-in [animation-delay:0.3s]">
          Food
        </p>

        {/* 4. Título Principal: "BACKROOM" */}
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display-serif text-white uppercase text-center
                     opacity-0 animate-fade-in [animation-delay:0.5s] animate-slow-pulse"
          style={{ letterSpacing: '0.2em', textShadow: '0 0 10px rgba(255, 255, 255, 0.1)' }}
        >
          BACKROOM
        </h1>

        <p className="absolute bottom-0 text-sm sm:text-base text-bronze-gold font-serif tracking-widest opacity-0 animate-fade-in [animation-delay:0.8s] animate-slow-pulse">
          Bar de Autores & Tragos
        </p>
        
    </div>
          
          {/* Admin Access Button */}
          <button
            onClick={() => setShowAdmin(true)}
            className="absolute right-4 p-2 text-bronze-400 hover:text-bronze-600 transition-colors"
            title="Acceso de administrador"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Descripción principal */}
      <MenuHeader />

      {/* Navegación por categorías */}
      <Navigation
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Contenido del menú */}
      <main className="pb-16">
        {currentSection && (
          <MenuSection
            title={currentSection.name}
            items={currentSection.items}
            isActive={true}
          />
        )}
      </main>

      {/* Footer elegante */}
      <Footer />
    </div>
  );
}

export default App;