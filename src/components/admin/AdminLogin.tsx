import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - in production, use proper auth
    if (credentials.username === 'admin' && credentials.password === 'backroom2025') {
      onLogin();
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-2xl font-serif text-amber-400 mb-2">Panel de Administración</h1>
          <p className="text-gray-400 text-sm">Acceso restringido para administradores</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Usuario
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors"
                placeholder="Ingresa tu usuario"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none transition-colors"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded-lg p-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-amber-400 text-black font-semibold py-3 rounded-lg hover:bg-amber-500 transition-colors duration-200"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Usuario: admin | Contraseña: backroom2025</p>
        </div>
      </div>
    </div>
  );
}