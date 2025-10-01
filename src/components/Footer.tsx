import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock, Star } from 'lucide-react';

export function Footer() {
  const featuredDishes = [
    {
      name: 'Tartar de Atún Rojo',
      image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
      price: 24
    },
    {
      name: 'Cordero Patagónico',
      image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg',
      price: 45
    },
    {
      name: 'Negroni Barrel Aged',
      image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg',
      price: 22
    },
    {
      name: 'Chocolate Valrhona',
      image: 'https://images.pexels.com/photos/2531188/pexels-photo-2531188.jpeg',
      price: 16
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-900 border-t border-bronze-200 dark:border-gray-800">
      {/* Featured Dishes Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif text-bronze-600 dark:text-amber-400 mb-4">Platos Destacados</h3>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-bronze-400 dark:via-amber-400 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            Una selección de nuestras creaciones más aclamadas, donde la técnica se encuentra con la pasión
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {featuredDishes.map((dish, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-900 dark:bg-gray-900 border border-bronze-200 dark:border-gray-800 hover:border-bronze-400 dark:hover:border-amber-400/30 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-bronze-900/80 dark:from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <Star className="w-4 h-4 text-bronze-400 dark:text-amber-400 fill-current" />
                  <span className="text-bronze-400 dark:text-amber-400 font-bold">${dish.price}</span>
                </div>
                <h4 className="text-cream-50 dark:text-white font-medium text-sm mt-1 leading-tight">
                  {dish.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Restaurant Info & Social */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-bronze-200 dark:border-gray-800 pt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif text-bronze-600 dark:text-amber-400 mb-4">Contacto</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-bronze-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed">
                    Jorge Luis Borges 1975<br />
                    Palermo, Buenos Aires<br />
                    Argentina
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-bronze-500 dark:text-amber-400 flex-shrink-0" />
                <p className="text-gray-300 dark:text-gray-300 text-sm">+54 11 4567-8900</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-bronze-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed">
                    Lun - Jue: 19:00 - 01:00<br />
                    Vie - Sáb: 19:00 - 02:00<br />
                    Dom: 19:00 - 00:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif text-bronze-600 dark:text-amber-400 mb-4">Nuestra Historia</h4>
            <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed">
              En el corazón de Palermo, redefine la experiencia gastronómica
              combinando técnicas culinarias contemporáneas con ingredientes de primera calidad.
              Cada plato es una obra de arte, cada cóctel una experiencia sensorial única.
            </p>
            <p className="text-gray-400 dark:text-gray-400 text-xs">
              Reservas recomendadas • Ambiente exclusivo • Experiencia premium
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif text-bronze-600 dark:text-amber-400 mb-4">Síguenos</h4>
            
            <div className="space-y-4">
              <a 
                href="#" 
                className="flex items-center space-x-3 text-gray-300 dark:text-gray-300 hover:text-amber-400 dark:hover:text-amber-400 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-bronze-600 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-bronze-300 dark:group-hover:bg-amber-400/10 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">@RESTO.bsas</p>
                  <p className="text-xs text-bronze-500 dark:text-gray-500">Síguenos en Instagram</p>
                </div>
              </a>
              
              <a 
                href="https://www.instagram.com/backroom.bar/?hl=es" 
                className="flex items-center space-x-3 text-gray-300 dark:text-gray-300 hover:text-amber-400 dark:hover:text-amber-400 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-bronze-600 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-bronze-300 dark:group-hover:bg-amber-400/10 transition-colors">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">RESTO Buenos Aires</p>
                  <p className="text-xs text-bronze-500 dark:text-gray-500">Síguenos en Facebook</p>
                </div>
              </a>
              
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-300 dark:text-gray-300 hover:text-amber-400 dark:hover:text-amber-400 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-bronze-600 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-bronze-300 dark:group-hover:bg-amber-400/10 transition-colors">
                  <Twitter className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">@RESTO</p>
                  <p className="text-xs text-bronze-500 dark:text-gray-500">Síguenos en Twitter</p>
                </div>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bronze-200 dark:border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 dark:text-gray-400 text-sm">
                © 2025 RESTO. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
                Desarrollado por CLICKANDTHINKAI • Automatizamos. Optimizamos. Transformamos.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-xs text-gray-500 dark:text-gray-500">
              <a href="#" className="hover:text-bronze-600 dark:hover:text-amber-400 transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-bronze-600 dark:hover:text-amber-400 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-bronze-600 dark:hover:text-amber-400 transition-colors">Reservas</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}