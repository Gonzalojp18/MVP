export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags?: string[];
  image?: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    name: 'Principales',
    items: [
      {
        id: 'principal-1',
        name: 'ENSALADA MANGO NO. 5',
        description: 'ensalada de cubos de mango tropical, tomate cherry de la huerta, queso roquefort, nueces tostadas, boniato, colchón de verdes',
        price: 3200,
        tags: ['Fresco', 'Vegetariano'],
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
      },
      {
        id: 'principal-2',
        name: 'COLIFLOR ASADO',
        description: 'bechamel de arvejas con crema de almendras a la naranja, ajo frito, queso rallado vegano, castañas asadas',
        price: 3500,
        tags: ['Vegano', 'Asado'],
        image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg'
      },
      {
        id: 'principal-3',
        name: 'PANCETA BRASEADA',
        description: 'arroz pilaf, pepinos encurtidos, echalote fritos, jugo de cocción de cerdo braseado',
        price: 4800,
        tags: ['Braseado', 'Cerdo'],
        image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg'
      },
      {
        id: 'principal-4',
        name: 'PESCA DEL DÍA',
        description: 'pesca del día a la plancha, salsa de maní, pepinos quemados, frutilla, alcaparras fritas',
        price: 5200,
        tags: ['Pescado', 'Del Día'],
        image: 'https://images.pexels.com/photos/3622643/pexels-photo-3622643.jpeg'
      },
      {
        id: 'principal-5',
        name: 'HAMBURGUESA NORTEAMERICANA',
        description: 'medallón de 210gr, blend de cortes argentinos premium, pan de papa, salsa barbacoa, cebolla caramelizada, queso cheddar madurado',
        price: 4500,
        tags: ['Premium', 'Hamburguesa'],
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg'
      },
      {
        id: 'principal-6',
        name: 'SANDWICH DE POLLO DESMECHADO',
        description: 'pollo desmechado, salsa muhammara de pimientos rojos, lechuga morada, pan de papa, queso dambo, cebollas encurtidas',
        price: 3800,
        tags: ['Pollo', 'Sandwich'],
        image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg'
      },
      {
        id: 'principal-7',
        name: 'SANDWICH DE BONDIOLA BRASEADA',
        description: 'bondiola braseada 6 horas, pickled red onion, spicy mustard, rúcula, fontina cheese',
        price: 4200,
        tags: ['Braseado', 'Sandwich'],
        image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg'
      }
    ]
  },
  {
    name: 'Tapeos',
    items: [
      {
        id: 'tapeo-1',
        name: 'SOPA DE NANA',
        description: 'borscht, sopa tradicional a base de remolacha, repollo, papas y morrón',
        price: 2200,
        tags: ['Tradicional', 'Sopa'],
        image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg'
      },
      {
        id: 'tapeo-2',
        name: 'TOSTÓN DE HUMMUS',
        description: 'hummus de garbanzo, cebolla roja curada, maní crocante, pan de masa madre',
        price: 2800,
        tags: ['Vegetariano', 'Tostón'],
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
      },
      {
        id: 'tapeo-3',
        name: 'LANGOSTINOS THAI',
        description: 'langostinos marinados en ajo, jengibre, hondashi y sriracha, con papines aseteados en salsa curry verde',
        price: 5000,
        tags: ['Thai', 'Mariscos'],
        image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg'
      },
      {
        id: 'tapeo-4',
        name: 'TOSTADAS DE GÍRGOLAS',
        description: 'gírgolas marinadas en limón y jengibre, con pickles de cebolla morada, poro y crema de castañas de cajú con miso',
        price: 3000,
        tags: ['Vegetariano', 'Hongos'],
        image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg'
      },
      {
        id: 'tapeo-5',
        name: 'POLLO CRISPY BBQ',
        description: 'patitas de muslo de pollo crocante, adobadas y fritas, con salsa casera BBQ',
        price: 3600,
        tags: ['Crispy', 'BBQ'],
        image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg'
      },
      {
        id: 'tapeo-6',
        name: 'POPPERS DE KIMCHI & MAC \'N CHEESE',
        description: 'bombitas de mac \'n cheese con kimchi y bechamel, y buñuelos de fideos con cheddar y mozzarella',
        price: 3400,
        tags: ['Fusión', 'Queso'],
        image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg'
      },
      {
        id: 'tapeo-7',
        name: 'PORTOBELLOS FRITOS',
        description: 'portobellos apanados en pan de masa madre, con alioli cítrico y limón',
        price: 3200,
        tags: ['Vegetariano', 'Fritos'],
        image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg'
      },
      {
        id: 'tapeo-8',
        name: 'ROTI RÚSTICAS',
        description: 'papas rústicas doble cocción, salsas tres quesos, panceta crocante y ciboulette',
        price: 2200,
        tags: ['Papas', 'Quesos'],
        image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'
      },
      {
        id: 'tapeo-9',
        name: 'PAPAS BRAVAS',
        description: 'papas rústicas doble cocción con salsa de tomate gochujang',
        price: 2200,
        tags: ['Papas', 'Picante'],
        image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg'
      }
    ]
  },
  {
    name: 'Whiskies',
    items: [
      // Escocia
      {
        id: 'whisky-1',
        name: 'Chivas Regal 12 años',
        description: 'Whisky escocés premium con 12 años de maduración',
        price: 9000,
        tags: ['Escocia', '12 años'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-2',
        name: 'Chivas Regal Extra | 13 años',
        description: 'Whisky escocés con 13 años de maduración',
        price: 11000,
        tags: ['Escocia', '13 años'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-3',
        name: 'Chivas Regal Gold XV | 15 años',
        description: 'Whisky escocés premium con 15 años de maduración',
        price: 14000,
        tags: ['Escocia', '15 años'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-4',
        name: 'Johnnie Walker Black Label',
        description: 'Whisky escocés blended premium',
        price: 7000,
        tags: ['Escocia', 'Blended'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-5',
        name: 'Johnnie Walker Blue Label',
        description: 'Whisky escocés ultra premium',
        price: 60000,
        tags: ['Escocia', 'Ultra Premium'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-6',
        name: 'The Glenlivet 12 años',
        description: 'Single malt escocés con 12 años de maduración',
        price: 12000,
        tags: ['Escocia', 'Single Malt'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-7',
        name: 'The Glenlivet 18 años',
        description: 'Single malt escocés premium con 18 años',
        price: 28000,
        tags: ['Escocia', 'Single Malt', '18 años'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-8',
        name: 'Glenfiddich 12 años',
        description: 'Single malt escocés clásico',
        price: 10000,
        tags: ['Escocia', 'Single Malt'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-9',
        name: 'Lagavulin 16 años',
        description: 'Single malt escocés ahumado de Islay',
        price: 26000,
        tags: ['Escocia', 'Islay', 'Ahumado'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      // Estados Unidos
      {
        id: 'whisky-10',
        name: 'Jack Daniel\'s',
        description: 'Tennessee whiskey clásico americano',
        price: 5000,
        tags: ['Estados Unidos', 'Tennessee'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-11',
        name: 'Jack Daniel\'s Single Barrel',
        description: 'Tennessee whiskey single barrel premium',
        price: 12000,
        tags: ['Estados Unidos', 'Single Barrel'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-12',
        name: 'Buffalo Trace',
        description: 'Bourbon americano premium',
        price: 6000,
        tags: ['Estados Unidos', 'Bourbon'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-13',
        name: 'Maker\'s Mark',
        description: 'Bourbon americano artesanal',
        price: 6500,
        tags: ['Estados Unidos', 'Bourbon'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-14',
        name: 'Woodford Reserve',
        description: 'Bourbon americano premium',
        price: 7500,
        tags: ['Estados Unidos', 'Bourbon'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      // Irlanda
      {
        id: 'whisky-15',
        name: 'Jameson',
        description: 'Irish whiskey clásico',
        price: 4500,
        tags: ['Irlanda', 'Clásico'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      },
      {
        id: 'whisky-16',
        name: 'Jameson Black Barrel',
        description: 'Irish whiskey premium',
        price: 6500,
        tags: ['Irlanda', 'Premium'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      }
    ]
  },
  {
    name: 'Bebidas',
    items: [
      // Vodka
      {
        id: 'bebida-1',
        name: 'Absolut',
        description: 'Vodka sueco premium',
        price: 4000,
        tags: ['Vodka', 'Suecia'],
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'
      },
      {
        id: 'bebida-2',
        name: 'Grey Goose',
        description: 'Vodka francés ultra premium',
        price: 8000,
        tags: ['Vodka', 'Francia', 'Premium'],
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'
      },
      {
        id: 'bebida-3',
        name: 'Belvedere',
        description: 'Vodka polaco ultra premium',
        price: 9000,
        tags: ['Vodka', 'Polonia', 'Premium'],
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'
      },
      // Gin
      {
        id: 'bebida-4',
        name: 'Amazonian Gin',
        description: 'Gin argentino con botánicos amazónicos',
        price: 6200,
        tags: ['Gin', 'Argentina'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'bebida-5',
        name: 'Hendrick\'s',
        description: 'Gin escocés premium con pepino y rosa',
        price: 9500,
        tags: ['Gin', 'Escocia', 'Premium'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'bebida-6',
        name: 'Monkey 47',
        description: 'Gin alemán con 47 botánicos',
        price: 16000,
        tags: ['Gin', 'Alemania', 'Premium'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      // Ron
      {
        id: 'bebida-7',
        name: 'Havana Club 7 Años',
        description: 'Ron cubano añejado 7 años',
        price: 6500,
        tags: ['Ron', 'Cuba', '7 años'],
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'
      },
      {
        id: 'bebida-8',
        name: 'Santa Teresa 1796',
        description: 'Ron venezolano premium',
        price: 12000,
        tags: ['Ron', 'Venezuela', 'Premium'],
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'
      },
      {
        id: 'bebida-9',
        name: 'Diplomatico Reserva',
        description: 'Ron venezolano ultra premium',
        price: 15000,
        tags: ['Ron', 'Venezuela', 'Ultra Premium'],
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'
      },
      // Tequila
      {
        id: 'bebida-10',
        name: 'Don Julio Blanco',
        description: 'Tequila mexicano 100% agave',
        price: 12000,
        tags: ['Tequila', 'México', '100% Agave'],
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'
      },
      {
        id: 'bebida-11',
        name: 'Don Julio 1942 Extra Añejo',
        description: 'Tequila mexicano ultra premium extra añejo',
        price: 120000,
        tags: ['Tequila', 'México', 'Extra Añejo'],
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'
      },
      {
        id: 'bebida-12',
        name: 'Clase Azul Reposado',
        description: 'Tequila mexicano artesanal reposado',
        price: 180000,
        tags: ['Tequila', 'México', 'Artesanal'],
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'
      }
    ]
  },
  {
    name: 'Cervezas',
    items: [
      {
        id: 'cerveza-1',
        name: 'German Pils',
        description: 'Cerveza estilo pilsner alemana',
        price: 800,
        tags: ['Pilsner', 'Alemana'],
        image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg'
      },
      {
        id: 'cerveza-2',
        name: 'Amber Lager',
        description: 'Cerveza lager ámbar',
        price: 900,
        tags: ['Lager', 'Ámbar'],
        image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg'
      },
      {
        id: 'cerveza-3',
        name: '#Nonstop IPA',
        description: 'India Pale Ale con lúpulos aromáticos',
        price: 1200,
        tags: ['IPA', 'Aromática'],
        image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg'
      },
      {
        id: 'cerveza-4',
        name: '2Bondis APA',
        description: 'American Pale Ale',
        price: 1200,
        tags: ['APA', 'Americana'],
        image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg'
      },
      {
        id: 'cerveza-5',
        name: 'Tornado American Stout',
        description: 'Stout americana intensa',
        price: 1300,
        tags: ['Stout', 'Intensa'],
        image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg'
      },
      {
        id: 'cerveza-6',
        name: 'Juicy IPA',
        description: 'IPA jugosa con sabores frutales',
        price: 1300,
        tags: ['IPA', 'Frutal'],
        image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg'
      },
      {
        id: 'cerveza-7',
        name: 'El Malo Golden Barleywine',
        description: 'Barleywine dorada de alta graduación',
        price: 1800,
        tags: ['Barleywine', 'Fuerte'],
        image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg'
      },
      {
        id: 'cerveza-8',
        name: 'La Muerte Fase 3 Cacao',
        description: 'Cerveza imperial con cacao',
        price: 2500,
        tags: ['Imperial', 'Cacao'],
        image: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg'
      }
    ]
  },
  {
    name: 'Vinos',
    items: [
      // Padrillos
      {
        id: 'vino-1',
        name: 'Padrillos Malbec',
        description: 'Malbec argentino de Padrillos',
        price: 3500,
        tags: ['Malbec', 'Padrillos'],
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg'
      },
      {
        id: 'vino-2',
        name: 'Padrillos Trifecta',
        description: 'Blend premium de Padrillos',
        price: 4000,
        tags: ['Blend', 'Padrillos'],
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg'
      },
      {
        id: 'vino-3',
        name: 'Padrillos Chardonnay',
        description: 'Chardonnay blanco de Padrillos',
        price: 3800,
        tags: ['Chardonnay', 'Padrillos'],
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg'
      },
      // Callejón del Crimen
      {
        id: 'vino-4',
        name: 'Callejón del Crimen Malbec Reserva',
        description: 'Malbec reserva de Callejón del Crimen',
        price: 4500,
        tags: ['Malbec', 'Reserva'],
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg'
      },
      {
        id: 'vino-5',
        name: 'Callejón del Crimen Blend de Altura',
        description: 'Blend de altura premium',
        price: 4800,
        tags: ['Blend', 'Altura'],
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg'
      },
      // Colomé
      {
        id: 'vino-6',
        name: 'Colomé Malbec Estate',
        description: 'Malbec estate de Colomé',
        price: 8000,
        tags: ['Malbec', 'Estate'],
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg'
      },
      {
        id: 'vino-7',
        name: 'Colomé Torrontés',
        description: 'Torrontés de terroir de altura',
        price: 6000,
        tags: ['Torrontés', 'Altura'],
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg'
      },
      // Saurus
      {
        id: 'vino-8',
        name: 'Saurus Espumante Extra Brut',
        description: 'Espumante extra brut de Saurus',
        price: 6000,
        tags: ['Espumante', 'Extra Brut'],
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg'
      }
    ]
  },
  {
    name: 'Cócteles de Autor',
    items: [
      // Liviano & Fresco
      {
        id: 'coctel-1',
        name: 'Gaucho Spritz',
        description: 'Cóctel refrescante estilo spritz con toque argentino',
        price: 5200,
        tags: ['Liviano', 'Fresco', 'Spritz'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'coctel-2',
        name: 'Cheesecake D\'Amore',
        description: 'Cóctel cremoso inspirado en cheesecake',
        price: 5200,
        tags: ['Liviano', 'Fresco', 'Cremoso'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'coctel-3',
        name: 'Caminito',
        description: 'Cóctel inspirado en el famoso barrio porteño',
        price: 5200,
        tags: ['Liviano', 'Fresco', 'Porteño'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'coctel-4',
        name: 'La Cubana',
        description: 'Cóctel tropical con influencias cubanas',
        price: 5200,
        tags: ['Liviano', 'Fresco', 'Tropical'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'coctel-5',
        name: 'Gin O\'Clock',
        description: 'Cóctel de gin perfecto para cualquier hora',
        price: 5200,
        tags: ['Liviano', 'Fresco', 'Gin'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      // Alegre & Confiado
      {
        id: 'coctel-6',
        name: 'De la Huerta',
        description: 'Cóctel con ingredientes frescos de la huerta',
        price: 5200,
        tags: ['Alegre', 'Confiado', 'Fresco'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'coctel-7',
        name: 'Palermo Derby',
        description: 'Cóctel elegante inspirado en Palermo',
        price: 5200,
        tags: ['Alegre', 'Confiado', 'Elegante'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'coctel-8',
        name: 'Green Spell',
        description: 'Cóctel verde con hierbas aromáticas',
        price: 5200,
        tags: ['Alegre', 'Confiado', 'Herbal'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'coctel-9',
        name: 'Margarita Salteña',
        description: 'Margarita con toque salteño',
        price: 5200,
        tags: ['Alegre', 'Confiado', 'Margarita'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      // Vibrante & Excéntrico
      {
        id: 'coctel-10',
        name: 'Criolla Punch',
        description: 'Punch criollo con sabores autóctonos',
        price: 5200,
        tags: ['Vibrante', 'Excéntrico', 'Punch'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'coctel-11',
        name: 'Southwind',
        description: 'Cóctel inspirado en los vientos del sur',
        price: 5200,
        tags: ['Vibrante', 'Excéntrico', 'Refrescante'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'coctel-12',
        name: 'Hay Café Café!',
        description: 'Cóctel con café y notas aromáticas',
        price: 5200,
        tags: ['Vibrante', 'Excéntrico', 'Café'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      // Intenso & Eterno
      {
        id: 'coctel-13',
        name: 'Mística Pura',
        description: 'Cóctel intenso con sabores profundos',
        price: 5200,
        tags: ['Intenso', 'Eterno', 'Profundo'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'coctel-14',
        name: 'Roger Rabbit',
        description: 'Cóctel divertido con personalidad única',
        price: 5200,
        tags: ['Intenso', 'Eterno', 'Único'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'coctel-15',
        name: 'Pasillo Porteño',
        description: 'Cóctel que evoca los pasillos de Buenos Aires',
        price: 5200,
        tags: ['Intenso', 'Eterno', 'Porteño'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'coctel-16',
        name: 'Pampero Sur',
        description: 'Cóctel inspirado en los vientos pamperos',
        price: 5200,
        tags: ['Intenso', 'Eterno', 'Argentino'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      }
    ]
  },
  {
    name: 'Postres',
    items: [
      {
        id: 'postre-1',
        name: 'El Profiterol',
        description: 'profiterol casero, helado de americana, frutos rojos',
        price: 2800,
        tags: ['Casero', 'Helado'],
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
      },
      {
        id: 'postre-2',
        name: 'Don Jameson',
        description: 'helado de crema americana, Jameson whisky macerado en especias aromáticas, bombones Ferrero Rocher chips',
        price: 3200,
        tags: ['Whisky', 'Premium'],
        image: 'https://images.pexels.com/photos/2531188/pexels-photo-2531188.jpeg'
      },
      {
        id: 'postre-3',
        name: 'Torta Backroom',
        description: 'pastel tradicional ruso, capas de crepes de miel, relleno con crema estilo crème fraîche',
        price: 3500,
        tags: ['Tradicional', 'Ruso'],
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg'
      }
    ]
  }
];