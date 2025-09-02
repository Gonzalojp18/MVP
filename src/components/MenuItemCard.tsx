import React, { useState } from 'react';
import { Eye } from 'lucide-react';

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

export function MenuItemCard({ item }: MenuItemCardProps) {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <>
      <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">
            {item.name}
          </h3>
          <div className="flex items-center space-x-3">
            {item.image && (
              <button
                onClick={() => setShowImageModal(true)}
                className="p-2 text-gray-400 hover:text-amber-400 hover:bg-amber-400/10 rounded-full transition-all duration-200"
                title="Ver imagen"
              >
                <Eye size={18} />
              </button>
            )}
            <span className="text-2xl font-bold text-amber-400">
              ${item.price}
            </span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs text-amber-400 border border-amber-400/30 rounded-full bg-amber-400/5"
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div 
            className="bg-gray-900 rounded-lg p-4 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-white font-semibold">{item.name}</h4>
              <button
                onClick={() => setShowImageModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
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