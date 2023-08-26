export interface Menu {
  path: string;
  name: string;
  icon: string;
}

export const menuList: Menu[] = [
  {
    path: '/products',
    name: 'Products',
    icon: 'shop'
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
  //   path: '/dashboard',
  //   name: 'Dashboard'
  // },
  // {
  //   path: '/doc',
  //   name: 'Doc'
  // }
];
