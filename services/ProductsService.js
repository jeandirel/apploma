const PRODUCTS = [
    {
        id: 100,
        name: 'chaise en plastique',
        price: 750,
        image: require('../assets/products/chaisea.jpg'),
        description: 'pied en fer'
    },
    {
        id: 101,
        name: 'chaise VIP',
        price: 2000,
        image: require('../assets/products/chaiseboi.jpg'),
        description: 'en bois'
    },
    {
        id: 102,
        name: 'chaise plastique',
        price: 250,
        image: require('../assets/products/chaisefleur.png'),
        description: 'pastique pure'
    },
    {
        id: 103,
        name: 'chaise plastique',
        price: 750,
        image: require('../assets/products/chaisepiein.jpg'),
        description: 'pastique'
    },
    {
        id: 104,
        name: 'chaise VIP',
        price: 1000,
        image: require('../assets/products/chaisevip.jpg'),
        description: 'bonne qualité'
    },
    {
        id: 105,
        name: 'chaises + table',
        price: 3000,
        image: require('../assets/products/tableetchaise.jpeg'),
        description: 'pastique'
    },
    {
        id: 106,
        name: 'tente 9m x 8m',
        price: 45000,
        image: require('../assets/products/tente.jpg'),
        description: '9 mètre de longueur et 8 mètre de largeur'
    },
    {
        id: 107,
        name: 'tente 8m X 7m',
        price: 35000,
        image: require('../assets/products/tente12m6.jpg'),
        description: '8 mètre de longueur et 7 mètre de largeur, 70 places'
    },
    {
        id: 108,
        name: 'tente 7m X 6m',
        price: 25000,
        image: require('../assets/products/tente9m5.jpg'),
        description: '7 mètre de longueur et 6 mètre de largeur, 50 places'
    },
    {
        id: 109,
        name: 'tente 6m X 5m',
        price: 20000,
        image: require('../assets/products/tente6m4.jpg'),
        description: '6 mètre de longueur et 5 mètre de largeur, 40 places'
    },
    {
        id: 110,
        name: 'tente 5m X 4m',
        price: 15000,
        image: require('../assets/products/tente3m5.jpg'),
        description: '6 mètre de longueur et 5 mètre de largeur, 20 places'
    },
    {
        id: 111,
        name: 'tente vip',
        price: 300000,
        image: require('../assets/products/tentepc.jpg'),
        description: '12 mètre de longueur et 10 mètre de largeur, 100 places, climatisé, tapis rouge, design et confort'
    },
    {
        id: 111,
        name: 'tente + tapis',
        price: 150000,
        image: require('../assets/products/tentetapirouge.jpg'),
        description: '12 mètre de longueur et 10 mètre de largeur, 100 places  '
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

