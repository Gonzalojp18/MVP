import React, { useState } from 'react';
import { Eye, Leaf, Star, Coffee, Wine, Utensils } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags?: string[];
  image?: string;
}

interface MenuItemCardProps {
  item: MenuItem;
}

const getItemIcon = (name: string, tags?: string[]) => {
  const itemName = name.toLowerCase();
  const itemTags = tags?.join(' ').toLowerCase() || '';
  
  if (itemName.includes('ensalada') || itemTags.includes('vegetariano') || itemTags.includes('vegano')) {
    return <Leaf className="w-4 h-4 text-bronze-500" />;
  }
  if (itemName.includes('café') || itemTags.includes('café')) {
    return <Coffee className="w-4 h-4 text-bronze-500" />;
  }
  if (itemTags.includes('premium') || itemTags.includes('ultra premium')) {
    return <Star className="w-4 h-4 text-gold-500" />;
  }
  if (itemName.includes('vino') || itemName.includes('whisky') || itemName.includes('gin')) {
    return <Wine className="w-4 h-4 text-bronze-500" />;
  }
  return <Utensils className="w-4 h-4 text-bronze-500" />;
};

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <>
      <div className="group bg-cream-50/80 backdrop-blur-sm border border-bronze-200 rounded-lg p-6 hover:border-bronze-300 transition-all duration-300 hover:shadow-lg hover:shadow-bronze-400/20 paper-texture">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start space-x-3 flex-1">
            <div className="mt-1">
              {getItemIcon(item.name, item.tags)}
            </div>
            <h3 className="text-xl font-semibold text-bronze-800 group-hover:text-bronze-900 transition-colors duration-300 font-serif">
              {item.name}
            </h3>
          </div>
          <div className="flex items-center space-x-3">
            {item.image && (
              <button
                onClick={() => setShowImageModal(true)}
                className="p-2 text-bronze-400 hover:text-bronze-600 hover:bg-bronze-100 rounded-full transition-all duration-200"
                title="Ver imagen"
              >
                <Eye size={18} />
              </button>
            )}
            <span className="text-2xl font-bold text-bronze-600 font-display">
              ${item.price}
            </span>
          </div>
        </div>
        
        <p className="text-bronze-600 text-sm leading-relaxed mb-4 font-serif ml-7">
          {item.description}
        </p>
        
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 ml-7">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs text-bronze-600 border border-bronze-300 rounded-full bg-bronze-50 font-serif"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Modal para mostrar imagen */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-bronze-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div 
            className="bg-cream-50 rounded-lg p-4 max-w-lg w-full border border-bronze-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-bronze-800 font-semibold font-serif">{item.name}</h4>
              <button
                onClick={() => setShowImageModal(false)}
                className="text-bronze-400 hover:text-bronze-800 transition-colors"
              >
                ✕
              </button>
            </div>
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}