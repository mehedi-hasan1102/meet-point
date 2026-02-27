import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { useCartStore } from '@/store/cart-store';
import { CartItemRow } from '@/components/cart/CartItemRow';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const CartPage = () => {
  const { items, getSubtotal, getTax, getTotal, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground/40" />
          <h1 className="mt-4 font-display text-2xl font-bold text-foreground">Your cart is empty</h1>
          <p className="mt-2 text-muted-foreground">Add some delicious items to get started!</p>
          <Link to="/menu" className="mt-6 inline-block">
            <Button>Browse Menu</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-10 md:py-16">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">Your Cart</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-4 md:p-6">
              {items.map((item) => (
                <CartItemRow key={item.menuItem.id} item={item} />
              ))}
              <div className="mt-4 flex justify-end">
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg border border-border bg-card p-6 sticky top-20">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatCurrency(getSubtotal())}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Estimated Tax</span>
                  <span>{formatCurrency(getTax())}</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between font-display text-lg font-bold text-foreground">
                  <span>Total</span>
                  <span>{formatCurrency(getTotal())}</span>
                </div>
              </div>
              <Link to="/checkout" className="mt-6 block">
                <Button className="w-full" size="lg">
                  Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
