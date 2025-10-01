import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { LoadingScreen } from './components/LoadingScreen';
import { MenuHeader } from './components/MenuHeader';
import { Navigation } from './components/Navigation';
import { MenuSection } from './components/MenuSection';
import { Footer } from './components/Footer';
import { AdminApp } from './components/AdminApp';
import { menuData } from './data/menuData';

function App() {
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
    <div className="min-h-screen bg-black text-white">
      {/* Header con logo */}
      <header className="text-center py-8 border-b border-gray-800">
        <div className="flex items-center justify-center relative">
          <h1 className="text-3xl font-serif text-amber-400 tracking-wider">
            Tu Restaurant
          </h1>
          
          {/* Admin Access Button */}
          <button
            onClick={() => setShowAdmin(true)}
            className="absolute right-4 p-2 text-gray-600 hover:text-amber-400 transition-colors"
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