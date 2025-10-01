import React, { useState } from 'react';
import { Plus, Settings, LogOut, Menu as MenuIcon } from 'lucide-react';
import { CategoryManager } from './CategoryManager';
import { ItemManager } from './ItemManager';
import { menuData } from '../../data/menuData';

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeView, setActiveView] = useState<'categories' | 'items'>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <div className="min-h-screen bg-cream-100 dark:bg-black text-bronze-800 dark:text-white">
      {/* Header */}
      <header className="bg-cream-200/50 dark:bg-gray-900/50 backdrop-blur-sm border-b border-bronze-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-bronze-400/10 dark:bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-bronze-600 dark:text-amber-400" />
              </div>
              <div>
                <h1 className="text-xl font-serif text-bronze-600 dark:text-amber-400">Panel de Administración</h1>
                <p className="text-bronze-600 dark:text-gray-400 text-sm">Gestión del menú digital</p>
              </div>
            </div>
            
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 text-bronze-600 dark:text-gray-400 hover:text-bronze-800 dark:hover:text-white hover:bg-bronze-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-cream-200/50 dark:bg-gray-900/30 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveView('categories')}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
              activeView === 'categories'
                ? 'bg-bronze-500 dark:bg-amber-400 text-cream-50 dark:text-black'
                : 'text-bronze-600 dark:text-gray-400 hover:text-bronze-800 dark:hover:text-white hover:bg-bronze-200 dark:hover:bg-gray-800'
            }`}
          >
            Gestionar Categorías
          </button>
          <button
            onClick={() => setActiveView('items')}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
              activeView === 'items'
                ? 'bg-bronze-500 dark:bg-amber-400 text-cream-50 dark:text-black'
                : 'text-bronze-600 dark:text-gray-400 hover:text-bronze-800 dark:hover:text-white hover:bg-bronze-200 dark:hover:bg-gray-800'
            }`}
          >
            Gestionar Elementos
          </button>
        </div>

        {/* Content */}
        {activeView === 'categories' ? (
          <CategoryManager />
        ) : (
          <ItemManager 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        )}
      </div>
    </div>
  );
}