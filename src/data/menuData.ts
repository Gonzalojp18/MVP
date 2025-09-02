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
    name: 'Entradas',
    items: [
      {
        id: 'entrada-1',
        name: 'Tartar de Atún Rojo',
        description: 'Atún rojo de primera calidad, aguacate, ponzu, sésamo negro y microgreens',
        price: 24,
        tags: ['Fresco', 'Premium'],
        image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg'
      },
      {
        id: 'entrada-2',
        name: 'Burrata Ahumada',
        description: 'Burrata artesanal ahumada en frío, tomates confitados, albahaca y reducción balsámica',
        price: 18,
        tags: ['Vegetariano', 'Ahumado'],
        image: 'https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg'
      },
      {
        id: 'entrada-3',
        name: 'Ceviche Nikkei',
        description: 'Pescado del día, leche de tigre, ají amarillo, batata morada y maíz cancha',
        price: 20,
        tags: ['Cítrico', 'Fusión'],
        image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg'
      }
    ]
  },
  {
    name: 'Principales',
    items: [
      {
        id: 'principal-1',
        name: 'Cordero Patagónico',
        description: 'Rack de cordero, puré de berenjenas ahumadas, verduras asadas y jus de romero',
        price: 45,
        tags: ['Premium', 'Ahumado'],
        image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg'
      },
      {
        id: 'principal-2',
        name: 'Salmón Glazeado',
        description: 'Salmón fresco, glaseado miso-miel, arroz negro y vegetales orientales',
        price: 38,
        tags: ['Saludable', 'Oriental'],
        image: 'https://images.pexels.com/photos/3622643/pexels-photo-3622643.jpeg'
      },
      {
        id: 'principal-3',
        name: 'Risotto de Hongos',
        description: 'Risotto cremoso, mix de hongos salvajes, trufa negra y parmesano aged',
        price: 32,
        tags: ['Vegetariano', 'Trufa'],
        image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg'
      }
    ]
  },
  {
    name: 'Bebidas',
    items: [
      {
        id: 'bebida-1',
        name: 'Vence el Calor',
        description: 'Gin Amazonian, vino blanco, remolacha, cacao amargo, orgeat, jugo de lima y dash absentha',
        price: 18,
        tags: ['Clásico', 'Ahumado'],
        image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg'
      },
      {
        id: 'bebida-2',
        name: 'Coco de Remate',
        description: 'Gin, Campari y Vermouth rojo añejado en barrica',
        price: 16,
        tags: ['Añejado', 'Amargo'],
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg'
      },
      {
        id: 'bebida-3',
        name: 'Negroni Barrel Aged',
        description: 'Negroni clásico añejado 6 meses en barrica de roble, naranja flambeada',
        price: 22,
        tags: ['Añejado', 'Premium'],
        image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg'
      }
    ]
  },
  {
    name: 'Postres',
    items: [
      {
        id: 'postre-1',
        name: 'Tiramisú Deconstructo',
        description: 'Mascarpone aireado, café colombiano, cacao venezolano y galleta amaretti',
        price: 14,
        tags: ['Clásico', 'Café'],
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
      },
      {
        id: 'postre-2',
        name: 'Chocolate Valrhona',
        description: 'Esfera de chocolate 70%, mousse de vainilla, frutos rojos y oro comestible',
        price: 16,
        tags: ['Premium', 'Chocolate'],
        image: 'https://images.pexels.com/photos/2531188/pexels-photo-2531188.jpeg'
      },
      {
        id: 'postre-3',
        name: 'Cheesecake de Maracuyá',
        description: 'Cheesecake cremoso, compota de maracuyá, crumble de galleta y flores comestibles',
        price: 12,
        tags: ['Cítrico', 'Cremoso'],
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg'
      }
    ]
  }
];