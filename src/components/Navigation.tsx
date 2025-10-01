import React from 'react';
import { DarkModeToggle } from './DarkModeToggle';

interface NavigationProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Navigation({ categories, activeCategory, onCategoryChange }: NavigationProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="sticky top-0 bg-cream-50/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-bronze-200 dark:border-gray-800 z-40 paper-texture">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div
            ref={scrollContainerRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide flex-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`
                  whitespace-nowrap px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300
                  ${activeCategory === category
                    ? 'text-bronze-600 dark:text-amber-400 border-b-2 border-bronze-400 dark:border-amber-400 font-semibold'
                    : 'text-bronze-500 dark:text-gray-300 hover:text-bronze-700 dark:hover:text-amber-400'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="ml-4">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}