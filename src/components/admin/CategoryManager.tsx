import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { menuData } from '../../data/menuData';

export function CategoryManager() {
  const [categories, setCategories] = useState(menuData.map(cat => cat.name));
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
      setShowAddForm(false);
    }
  };

  const handleEditCategory = (category: string) => {
    setEditingCategory(category);
    setEditValue(category);
  };

  const handleSaveEdit = () => {
    if (editValue.trim() && editingCategory) {
      const updatedCategories = categories.map(cat => 
        cat === editingCategory ? editValue.trim() : cat
      );
      setCategories(updatedCategories);
      setEditingCategory(null);
      setEditValue('');
    }
  };

  const handleDeleteCategory = (category: string) => {
    if (confirm(`¿Estás seguro de eliminar la categoría "${category}"?`)) {
      setCategories(categories.filter(cat => cat !== category));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif text-bronze-600 dark:text-amber-400 mb-2">Gestión de Categorías</h2>
          <p className="text-bronze-600 dark:text-gray-400">Administra las categorías del menú</p>
        </div>
        
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center space-x-2 bg-bronze-500 dark:bg-amber-400 text-cream-50 dark:text-black px-4 py-2 rounded-lg hover:bg-bronze-600 dark:hover:bg-amber-500 transition-colors font-medium"
        >
          <Plus className="w-4 h-4" />
          <span>Nueva Categoría</span>
        </button>
      </div>

      {/* Add Category Form */}
      {showAddForm && (
        <div className="bg-cream-200/50 dark:bg-gray-900/50 border border-bronze-200 dark:border-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-bronze-800 dark:text-white mb-4">Agregar Nueva Categoría</h3>
          <div className="flex space-x-4">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Nombre de la categoría"
              className="flex-1 px-4 py-2 bg-cream-100 dark:bg-gray-800 border border-bronze-300 dark:border-gray-700 rounded-lg text-bronze-800 dark:text-white placeholder-bronze-500 dark:placeholder-gray-400 focus:border-bronze-500 dark:focus:border-amber-400 focus:outline-none"
              onKeyPress={(e) => e.key === 'Enter' && handleAddCategory()}
            />
            <button
              onClick={handleAddCategory}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setShowAddForm(false);
                setNewCategory('');
              }}
              className="bg-bronze-600 dark:bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-bronze-700 dark:hover:bg-gray-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Categories List */}
      <div className="grid gap-4">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-cream-200/50 dark:bg-gray-900/50 border border-bronze-200 dark:border-gray-800 rounded-lg p-6 hover:border-bronze-300 dark:hover:border-gray-700 transition-colors"
          >
            <div className="flex items-center justify-between">
              {editingCategory === category ? (
                <div className="flex-1 flex space-x-4">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="flex-1 px-4 py-2 bg-cream-100 dark:bg-gray-800 border border-bronze-300 dark:border-gray-700 rounded-lg text-bronze-800 dark:text-white focus:border-bronze-500 dark:focus:border-amber-400 focus:outline-none"
                    onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit()}
                  />
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setEditingCategory(null);
                      setEditValue('');
                    }}
                    className="bg-bronze-600 dark:bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-bronze-700 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <h3 className="text-lg font-semibold text-bronze-800 dark:text-white">{category}</h3>
                    <p className="text-bronze-600 dark:text-gray-400 text-sm">
                      {menuData.find(cat => cat.name === category)?.items.length || 0} elementos
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditCategory(category)}
                      className="p-2 text-bronze-600 dark:text-gray-400 hover:text-bronze-700 dark:hover:text-amber-400 hover:bg-bronze-200 dark:hover:bg-amber-400/10 rounded-lg transition-all"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category)}
                      className="p-2 text-bronze-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-100 dark:hover:bg-red-400/10 rounded-lg transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {categories.length === 0 && (
        <div className="text-center py-12">
          <MenuIcon className="w-16 h-16 text-bronze-400 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-bronze-600 dark:text-gray-400">No hay categorías creadas</p>
          <p className="text-bronze-500 dark:text-gray-500 text-sm">Agrega tu primera categoría para comenzar</p>
        </div>
      )}
    </div>
  );
}