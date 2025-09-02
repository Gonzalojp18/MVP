import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X, Upload, Eye } from 'lucide-react';
import { menuData, MenuItem } from '../../data/menuData';

interface ItemManagerProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export function ItemManager({ selectedCategory, onCategorySelect }: ItemManagerProps) {
  const [items, setItems] = useState<MenuItem[]>(
    selectedCategory ? menuData.find(cat => cat.name === selectedCategory)?.items || [] : []
  );
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    tags: '',
    image: ''
  });

  const categories = menuData.map(cat => cat.name);

  React.useEffect(() => {
    if (selectedCategory) {
      const categoryData = menuData.find(cat => cat.name === selectedCategory);
      setItems(categoryData?.items || []);
    }
  }, [selectedCategory]);

  const handleAddItem = () => {
    if (!selectedCategory) {
      alert('Selecciona una categoría primero');
      return;
    }

    if (formData.name.trim() && formData.description.trim() && formData.price) {
      const newItem: MenuItem = {
        id: `item-${Date.now()}`,
        name: formData.name.trim(),
        description: formData.description.trim(),
        price: parseFloat(formData.price),
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : [],
        image: formData.image.trim() || undefined
      };

      setItems([...items, newItem]);
      setFormData({ name: '', description: '', price: '', tags: '', image: '' });
      setShowAddForm(false);
    }
  };

  const handleDeleteItem = (itemId: string) => {
    if (confirm('¿Estás seguro de eliminar este elemento?')) {
      setItems(items.filter(item => item.id !== itemId));
    }
  };

  const handleEditItem = (item: MenuItem) => {
    setEditingItem(item.id);
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price.toString(),
      tags: item.tags?.join(', ') || '',
      image: item.image || ''
    });
  };

  const handleSaveEdit = () => {
    if (editingItem && formData.name.trim() && formData.description.trim() && formData.price) {
      const updatedItems = items.map(item => 
        item.id === editingItem ? {
          ...item,
          name: formData.name.trim(),
          description: formData.description.trim(),
          price: parseFloat(formData.price),
          tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : [],
          image: formData.image.trim() || undefined
        } : item
      );
      setItems(updatedItems);
      setEditingItem(null);
      setFormData({ name: '', description: '', price: '', tags: '', image: '' });
    }
  };

  const cancelEdit = () => {
    setEditingItem(null);
    setShowAddForm(false);
    setFormData({ name: '', description: '', price: '', tags: '', image: '' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif text-amber-400 mb-2">Gestión de Elementos</h2>
          <p className="text-gray-400">Administra los elementos del menú por categoría</p>
        </div>
        
        {selectedCategory && (
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-2 bg-amber-400 text-black px-4 py-2 rounded-lg hover:bg-amber-500 transition-colors font-medium"
          >
            <Plus className="w-4 h-4" />
            <span>Nuevo Elemento</span>
          </button>
        )}
      </div>

      {/* Category Selection */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Seleccionar Categoría</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                selectedCategory === category
                  ? 'border-amber-400 bg-amber-400/10 text-amber-400'
                  : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600 hover:text-white'
              }`}
            >
              <div className="text-sm font-medium">{category}</div>
              <div className="text-xs text-gray-500 mt-1">
                {menuData.find(cat => cat.name === category)?.items.length || 0} elementos
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Add/Edit Form */}
      {(showAddForm || editingItem) && (
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            {editingItem ? 'Editar Elemento' : 'Agregar Nuevo Elemento'}
          </h3>
          
          <div className="grid gap-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                placeholder="Nombre del plato/bebida"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Descripción</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none resize-none"
                placeholder="Descripción detallada del elemento"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Precio ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Tags (separados por coma)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                  placeholder="Premium, Vegetariano, Picante"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">URL de Imagen (opcional)</label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                placeholder="https://ejemplo.com/imagen.jpg"
              />
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                onClick={editingItem ? handleSaveEdit : handleAddItem}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                {editingItem ? 'Guardar Cambios' : 'Agregar Elemento'}
              </button>
              <button
                onClick={cancelEdit}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Items List */}
      {selectedCategory && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            Elementos en "{selectedCategory}" ({items.length})
          </h3>
          
          {items.length === 0 ? (
            <div className="text-center py-12 bg-gray-900/30 rounded-lg border border-gray-800">
              <Plus className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No hay elementos en esta categoría</p>
              <p className="text-gray-500 text-sm">Agrega el primer elemento para comenzar</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                        {item.image && (
                          <Eye className="w-4 h-4 text-amber-400" title="Tiene imagen" />
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                      
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs text-amber-400 border border-amber-400/30 rounded-full bg-amber-400/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 ml-6">
                      <span className="text-xl font-bold text-amber-400">${item.price}</span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditItem(item)}
                          className="p-2 text-gray-400 hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-all"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {!selectedCategory && (
        <div className="text-center py-12">
          <Upload className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">Selecciona una categoría para gestionar sus elementos</p>
        </div>
      )}
    </div>
  );
}