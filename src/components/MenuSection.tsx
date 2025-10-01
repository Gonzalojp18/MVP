import React from 'react';
import { MenuItemCard } from './MenuItemCard';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags?: string[];
  image?: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  isActive: boolean;
}

export function MenuSection({ title, items, isActive }: MenuSectionProps) {
  if (!isActive) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-cream-100">
      <div className="mb-12">
        <h2 className="text-4xl font-display font-bold bronze-gradient mb-4 text-center tracking-wide">
          {title}
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-bronze-400 to-transparent mx-auto"></div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 max-w-4xl mx-auto">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}