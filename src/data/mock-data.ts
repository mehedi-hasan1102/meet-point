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
  { id: '1', name: 'স্টার্টার', slug: 'appetizers', image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&h=300&fit=crop', description: 'খাবারের শুরুটা আরও মজাদার করুন' },
  { id: '2', name: 'মেইন কোর্স', slug: 'entrees', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop', description: 'পেট ভরে খাওয়ার সেরা আয়োজন' },
  { id: '3', name: 'বার্গার', slug: 'burgers', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', description: 'রসালো প্যাটি আর নরম বান' },
  { id: '4', name: 'সালাদ', slug: 'salads', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', description: 'ফ্রেশ ও হালকা পছন্দের জন্য' },
  { id: '5', name: 'ডেজার্ট', slug: 'desserts', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop', description: 'মিষ্টি দিয়ে শেষ হোক প্রতিটি খাবার' },
  { id: '6', name: 'ড্রিংকস', slug: 'drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop', description: 'শীতল ও সতেজ পানীয়' },
  { id: '7', name: 'পিজ্জা', slug: 'pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop', description: 'চিজে ভরা ওভেন-ফ্রেশ পিজ্জা' },
  { id: '8', name: 'পাস্তা', slug: 'pasta', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop', description: 'ক্রিমি আর সস-ভরা আরামদায়ক স্বাদ' },
  { id: '9', name: 'বিরিয়ানি', slug: 'biryani', image: '/biryani-demo.svg', description: 'দেশি মসলার ঘ্রাণে ভরপুর বিরিয়ানি' },
  { id: '10', name: 'সিফুড', slug: 'seafood', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop', description: 'সমুদ্রের স্বাদে বিশেষ আয়োজন' },
];

export const menuItems: MenuItem[] = [
  { id: '1', name: 'ক্রিসপি ক্যালামারি', description: 'হালকা মশলায় মেরিনেট করা ক্যালামারি রিংস, সাথে মেরিনারা সস ও লেমন আইওলি।', price: 13.99, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=400&fit=crop', category: 'appetizers', available: true, featured: true, tags: ['popular'] },
  { id: '2', name: 'ব্রুশকেটা ট্রিও', description: 'টমেটো-বেসিল, মাশরুম-ট্রাফল এবং রিকোটা-হানি টপিং দেওয়া তিন ধরনের টোস্ট।', price: 11.99, image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&h=400&fit=crop', category: 'appetizers', available: true, featured: false, tags: ['vegetarian'] },
  { id: '3', name: 'চিকেন উইংস প্ল্যাটার', description: 'ক্রিসপি চিকেন উইংস, বাফেলো, বারবিকিউ বা গার্লিক পারমেজান ফ্লেভারে পরিবেশিত।', price: 14.99, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&h=400&fit=crop', category: 'appetizers', available: true, featured: false, tags: ['popular', 'spicy'] },
  { id: '4', name: 'গ্রিলড রিবআই স্টেক', description: 'রসালো রিবআই স্টেক, সাথে রোস্টেড সবজি ও গার্লিক ম্যাশড পটেটো।', price: 34.99, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=400&fit=crop', category: 'entrees', available: true, featured: true, tags: ['premium', 'popular'] },
  { id: '5', name: 'প্যান-সিয়ার্ড সালমন', description: 'লেমন বাটার সসে রান্না করা সালমন, সাথে অ্যাসপারাগাস ও হার্ব রাইস।', price: 28.99, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=400&fit=crop', category: 'entrees', available: true, featured: true, tags: ['healthy'] },
  { id: '6', name: 'চিকেন মারসালা', description: 'নরম চিকেন ব্রেস্ট, মাশরুম মারসালা সস ও অ্যাঞ্জেল হেয়ার পাস্তার সাথে পরিবেশিত।', price: 22.99, image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500&h=400&fit=crop', category: 'entrees', available: true, featured: false, tags: [] },
  { id: '7', name: 'ক্লাসিক স্ম্যাশ বার্গার', description: 'ডাবল প্যাটি, চিজ, পিকলস, অনিয়ন ও স্পেশাল সসসহ নরম ব্রিওশ বান।', price: 16.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop', category: 'burgers', available: true, featured: true, tags: ['popular', 'bestseller'] },
  { id: '8', name: 'বিবিকিউ বেকন বার্গার', description: 'স্মোকড বেকন, চেডার, অনিয়ন রিং ও ট্যাংগি বারবিকিউ সসসহ জুসি বিফ প্যাটি।', price: 18.99, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&h=400&fit=crop', category: 'burgers', available: true, featured: false, tags: [] },
  { id: '9', name: 'মাশরুম সুইস বার্গার', description: 'সটে করা মাশরুম ও গলানো সুইস চিজ দেওয়া রসালো বার্গার।', price: 17.99, image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=400&fit=crop', category: 'burgers', available: false, featured: false, tags: ['vegetarian option'] },
  { id: '10', name: 'সিজার সালাদ', description: 'ক্রিস্পি রোমেইন, ঘরে বানানো ক্রুটন, পারমেজান ও ক্লাসিক সিজার ড্রেসিং।', price: 12.99, image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&h=400&fit=crop', category: 'salads', available: true, featured: false, tags: [] },
  { id: '11', name: 'হারভেস্ট বোল', description: 'কুইনোয়া, রোস্টেড মিষ্টি আলু, কেল, ক্র্যানবেরি, পেকান ও ম্যাপল ভিনেগ্রেট।', price: 14.99, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop', category: 'salads', available: true, featured: false, tags: ['vegan', 'healthy'] },
  { id: '12', name: 'নিউ ইয়র্ক চিজকেক', description: 'ঘন ক্রিমি চিজকেক, গ্রাহাম ক্রাস্ট ও বেরি কম্পোটের সাথে পরিবেশিত।', price: 10.99, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&h=400&fit=crop', category: 'desserts', available: true, featured: true, tags: ['popular'] },
  { id: '13', name: 'চকলেট লাভা কেক', description: 'গরম চকলেট কেক, ভেতরে গলানো লাভা ফিলিং এবং সাথে ভ্যানিলা আইসক্রিম।', price: 11.99, image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&h=400&fit=crop', category: 'desserts', available: true, featured: false, tags: [] },
  { id: '14', name: 'ফ্রেশ লেমনেড', description: 'তাজা লেবু, পুদিনা ও হালকা মধুর স্বাদে তৈরি ঠান্ডা লেমনেড।', price: 5.99, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&h=400&fit=crop', category: 'drinks', available: true, featured: false, tags: [] },
  { id: '15', name: 'আইসড কফি', description: 'ঠান্ডা ব্রু কফি, আইস ও পছন্দমতো দুধ দিয়ে পরিবেশিত।', price: 4.99, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=400&fit=crop', category: 'drinks', available: true, featured: false, tags: [] },
  { id: '16', name: 'স্মোকড বিফ পিজ্জা', description: 'থিন ক্রাস্ট পিজ্জা, স্মোকড বিফ, মোজারেলা, ক্যারামেলাইজড অনিয়ন ও রোস্টেড পেপারসহ।', price: 18.99, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=400&fit=crop', category: 'pizza', available: true, featured: true, tags: ['bestseller'] },
  { id: '17', name: 'পেপারোনি ফিস্ট পিজ্জা', description: 'পেপারোনি, মোজারেলা, অলিভ ও স্পাইসি টমেটো সসে ভরা পিজ্জা।', price: 19.49, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=400&fit=crop', category: 'pizza', available: true, featured: false, tags: ['spicy'] },
  { id: '18', name: 'চিকেন আলফ্রেডো পাস্তা', description: 'গ্রিলড চিকেন, পারমেজান ও ব্ল্যাক পেপারসহ ক্রিমি আলফ্রেডো পাস্তা।', price: 17.99, image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023882c?w=500&h=400&fit=crop', category: 'pasta', available: true, featured: false, tags: ['creamy'] },
  { id: '19', name: 'প্রন আরাবিয়াতা', description: 'ঝাল আরাবিয়াতা সসে রান্না করা পেনে পাস্তা, সাথে জুসি প্রন ও হার্বস।', price: 18.49, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&h=400&fit=crop', category: 'pasta', available: true, featured: false, tags: ['spicy'] },
  { id: '20', name: 'কাচ্চি বিরিয়ানি', description: 'নরম মাটন, আলু ও দেশি মসলার ঘ্রাণে ধীরে রান্না করা কাচ্চি বিরিয়ানি।', price: 16.99, image: '/biryani-demo.svg', category: 'biryani', available: true, featured: true, tags: ['popular'] },
  { id: '21', name: 'চিকেন ডাম বিরিয়ানি', description: 'বাসমতি চাল, নরম চিকেন ও জাফরানি মসলায় লেয়ার করে রান্না করা বিরিয়ানি।', price: 14.99, image: '/biryani-demo.svg', category: 'biryani', available: true, featured: false, tags: ['local favorite'] },
  { id: '22', name: 'গ্রিলড বাটার ফিশ', description: 'বাটার-গার্লিক সসে গ্রিল করা নরম মাছ, সাথে সতে করা সবজি।', price: 22.49, image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&h=400&fit=crop', category: 'seafood', available: true, featured: false, tags: ['premium'] },
  { id: '23', name: 'গার্লিক ক্র্যাব বোল', description: 'গার্লিক বাটারে টস করা ক্র্যাব মিট, হার্বস, লেমন ও স্টিমড রাইসের সাথে।', price: 24.99, image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=500&h=400&fit=crop', category: 'seafood', available: true, featured: true, tags: ['chef special'] },
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
    customerName: 'মেহেদী হাসান', deliveryAddress: 'বাড়ি ২২, ধানমন্ডি, ঢাকা ১২০৯',
  },
  {
    id: '2', orderNumber: 'ORD-2024-002',
    items: [
      { menuItem: menuItems[3], quantity: 1 },
      { menuItem: menuItems[11], quantity: 1 },
    ],
    subtotal: 45.98, tax: 3.68, total: 49.66,
    status: 'preparing', createdAt: '2024-12-20T19:15:00Z',
    customerName: 'নাবিলা ইসলাম', deliveryAddress: 'রোড ৭, ধানমন্ডি, ঢাকা ১২০৫',
  },
];

export const mockUser: User = {
  id: '1', name: 'মেহেদী হাসান', email: 'mehedi@meetpoint.com', phone: '+880 1712-345678',
  addresses: [
    { id: '1', label: 'বাসা', street: 'বাড়ি ২২, রোড ৭', city: 'ঢাকা', state: 'ধানমন্ডি', zip: '১২০৫', isDefault: true },
    { id: '2', label: 'অফিস', street: 'বাড়ি ১১, কাওরান বাজার', city: 'ঢাকা', state: 'তেজগাঁও', zip: '১২১৫', isDefault: false },
  ],
};
