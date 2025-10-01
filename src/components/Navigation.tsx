import React from 'react';

interface NavigationProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Navigation({ categories, activeCategory, onCategoryChange }: NavigationProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="sticky top-0 bg-cream-50/95 backdrop-blur-sm border-b border-bronze-200 z-40 paper-texture">
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
                  ? 'text-bronze-600 border-b-2 border-bronze-400 font-semibold'
                  : 'text-bronze-500 hover:text-bronze-700'
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