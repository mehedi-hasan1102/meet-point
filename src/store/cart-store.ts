import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { MenuItem } from '@/data/mock-data';

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: MenuItem, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTax: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}

const TAX_RATE = 0.08;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (menuItem, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((i) => i.menuItem.id === menuItem.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.menuItem.id === menuItem.id ? { ...i, quantity: i.quantity + quantity } : i
              ),
            };
          }
          return { items: [...state.items, { menuItem, quantity }] };
        });
      },
      removeItem: (itemId) => {
        set((state) => ({ items: state.items.filter((i) => i.menuItem.id !== itemId) }));
      },
      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.menuItem.id === itemId ? { ...i, quantity } : i
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      getSubtotal: () => get().items.reduce((sum, i) => sum + i.menuItem.price * i.quantity, 0),
      getTax: () => get().getSubtotal() * TAX_RATE,
      getTotal: () => get().getSubtotal() + get().getTax(),
      getItemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: 'restaurant-cart' }
  )
);
