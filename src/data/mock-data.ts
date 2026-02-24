export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
  featured: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  createdAt: string;
  customerName: string;
  deliveryAddress: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
}

export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  isDefault: boolean;
}

export const categories: Category[] = [
  { id: '1', name: 'Appetizers', slug: 'appetizers', image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&h=300&fit=crop', description: 'Start your meal right' },
  { id: '2', name: 'Entrées', slug: 'entrees', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop', description: 'Hearty main courses' },
  { id: '3', name: 'Burgers', slug: 'burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', description: 'Handcrafted burgers' },
  { id: '4', name: 'Salads', slug: 'salads', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', description: 'Fresh & crisp' },
  { id: '5', name: 'Desserts', slug: 'desserts', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop', description: 'Sweet endings' },
  { id: '6', name: 'Drinks', slug: 'drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop', description: 'Refreshing beverages' },
];

export const menuItems: MenuItem[] = [
  { id: '1', name: 'Crispy Calamari', description: 'Lightly breaded calamari rings served with marinara sauce and lemon aioli.', price: 13.99, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=400&fit=crop', category: 'appetizers', available: true, featured: true, tags: ['popular'] },
  { id: '2', name: 'Bruschetta Trio', description: 'Three artisan toasts topped with tomato basil, mushroom truffle, and ricotta honey.', price: 11.99, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&h=400&fit=crop', category: 'appetizers', available: true, featured: false, tags: ['vegetarian'] },
  { id: '3', name: 'Wings Platter', description: 'Crispy chicken wings tossed in your choice of buffalo, BBQ, or garlic parmesan.', price: 14.99, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&h=400&fit=crop', category: 'appetizers', available: true, featured: false, tags: ['popular', 'spicy'] },
  { id: '4', name: 'Grilled Ribeye Steak', description: '12oz USDA prime ribeye, grilled to perfection. Served with roasted vegetables and garlic mashed potatoes.', price: 34.99, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=400&fit=crop', category: 'entrees', available: true, featured: true, tags: ['premium', 'popular'] },
  { id: '5', name: 'Pan-Seared Salmon', description: 'Atlantic salmon with lemon butter sauce, asparagus, and wild rice pilaf.', price: 28.99, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=400&fit=crop', category: 'entrees', available: true, featured: true, tags: ['healthy'] },
  { id: '6', name: 'Chicken Marsala', description: 'Tender chicken breast in marsala wine mushroom sauce with angel hair pasta.', price: 22.99, image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500&h=400&fit=crop', category: 'entrees', available: true, featured: false, tags: [] },
  { id: '7', name: 'Classic Smash Burger', description: 'Double smashed patties, American cheese, pickles, onion, and special sauce on a brioche bun.', price: 16.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop', category: 'burgers', available: true, featured: true, tags: ['popular', 'bestseller'] },
  { id: '8', name: 'BBQ Bacon Burger', description: 'Angus beef patty, smoked bacon, cheddar, crispy onion rings, and tangy BBQ sauce.', price: 18.99, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&h=400&fit=crop', category: 'burgers', available: true, featured: false, tags: [] },
  { id: '9', name: 'Mushroom Swiss Burger', description: 'Juicy patty topped with sautéed mushrooms and melted Swiss cheese.', price: 17.99, image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=400&fit=crop', category: 'burgers', available: false, featured: false, tags: ['vegetarian option'] },
  { id: '10', name: 'Caesar Salad', description: 'Crisp romaine, house-made croutons, shaved parmesan, and classic Caesar dressing.', price: 12.99, image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&h=400&fit=crop', category: 'salads', available: true, featured: false, tags: [] },
  { id: '11', name: 'Harvest Bowl', description: 'Quinoa, roasted sweet potato, kale, cranberries, pecans, and maple vinaigrette.', price: 14.99, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop', category: 'salads', available: true, featured: false, tags: ['vegan', 'healthy'] },
  { id: '12', name: 'New York Cheesecake', description: 'Classic creamy cheesecake with graham cracker crust and berry compote.', price: 10.99, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&h=400&fit=crop', category: 'desserts', available: true, featured: true, tags: ['popular'] },
  { id: '13', name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream.', price: 11.99, image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&h=400&fit=crop', category: 'desserts', available: true, featured: false, tags: [] },
  { id: '14', name: 'Craft Lemonade', description: 'Fresh-squeezed lemonade with a hint of mint and honey.', price: 5.99, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&h=400&fit=crop', category: 'drinks', available: true, featured: false, tags: [] },
  { id: '15', name: 'Iced Coffee', description: 'Cold-brewed coffee served over ice with your choice of milk.', price: 4.99, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=400&fit=crop', category: 'drinks', available: true, featured: false, tags: [] },
];

export const mockOrders: Order[] = [
  {
    id: '1', orderNumber: 'ORD-2024-001',
    items: [
      { menuItem: menuItems[6], quantity: 2 },
      { menuItem: menuItems[14], quantity: 2 },
    ],
    subtotal: 43.96, tax: 3.52, total: 47.48,
    status: 'delivered', createdAt: '2024-12-15T18:30:00Z',
    customerName: 'John Doe', deliveryAddress: '123 Main St, New York, NY 10001',
  },
  {
    id: '2', orderNumber: 'ORD-2024-002',
    items: [
      { menuItem: menuItems[3], quantity: 1 },
      { menuItem: menuItems[11], quantity: 1 },
    ],
    subtotal: 45.98, tax: 3.68, total: 49.66,
    status: 'preparing', createdAt: '2024-12-20T19:15:00Z',
    customerName: 'John Doe', deliveryAddress: '123 Main St, New York, NY 10001',
  },
];

export const mockUser: User = {
  id: '1', name: 'John Doe', email: 'john@example.com', phone: '(555) 123-4567',
  addresses: [
    { id: '1', label: 'Home', street: '123 Main St', city: 'New York', state: 'NY', zip: '10001', isDefault: true },
    { id: '2', label: 'Work', street: '456 Office Blvd', city: 'New York', state: 'NY', zip: '10016', isDefault: false },
  ],
};
