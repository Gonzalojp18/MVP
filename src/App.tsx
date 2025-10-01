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

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-gray-900 text-bronze-800 dark:text-gray-100 menu-texture">
      {/* Header con logo */}
      <header className="text-center py-12 border-b border-bronze-200 dark:border-gray-800 bg-gray-900 paper-texture">
        <div className="flex items-center justify-center relative">
          <div className="text-center">
            <h1 className="text-5xl font-display font-bold bronze-gradient tracking-wider mb-2">
              BACKROOM
            </h1>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-bronze-400 dark:via-amber-400 to-transparent mx-auto mb-2"></div>
            <p className="text-gray-300 text-sm font-serif tracking-widest uppercase">
              Experiencia Gastronómica
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