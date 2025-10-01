import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hook/useDarkMode';

export function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-bronze-100 dark:bg-gray-800 text-bronze-600 dark:text-amber-400 hover:bg-bronze-200 dark:hover:bg-gray-700 transition-colors duration-200"
      title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}