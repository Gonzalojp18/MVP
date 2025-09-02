import React from 'react';

interface NavigationProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Navigation({ categories, activeCategory, onCategoryChange }: NavigationProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="sticky top-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div 
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`
                whitespace-nowrap px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300
                ${activeCategory === category
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-gray-400 hover:text-white'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}