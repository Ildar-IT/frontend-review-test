const dataService = {
  getProductsList() {
    let products = [
      {
        id: 'potato',
        title: 'Картошка',
        price: 49.99,
        image: '/products/potato.jpg',
      },
      {
        id: 'carrot',
        title: 'Морковка',
        price: 55.00,
        image: '/products/carrot.jpg',
      },
      {
        id: 'cabbage',
        title: 'Капуста',
        price: 28.50,
        image: '/products/cabbage.jpg',
      }
    ];
    return new Promise(resolve => {
      resolve(products);
    });
  },
};

export default dataService;
