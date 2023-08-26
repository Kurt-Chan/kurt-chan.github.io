export interface Menu {
  path: string;
  name: string;
  icon: string;
}

export const menuList: Menu[] = [
  {
    path: '/home',
    name: 'Home',
    icon: 'home'
  },
  {
    path: '/products',
    name: 'All Products',
    icon: 'shop_two'
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   icon: 'person'
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   icon: 'contact_mail'
  // },
  {
    path: '/dashboard',
    name: 'My Cart',
    icon: 'shopping_cart'
  }
  // {
  //   path: '/doc',
  //   name: 'Doc'
  // }
];
