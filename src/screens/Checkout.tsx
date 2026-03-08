"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Layout } from '@/components/layout/Layout';
import { useCartStore } from '@/store/cart-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { formatCurrency } from '@/lib/utils';

const CheckoutPage = () => {
  const router = useRouter();
  const { items, getSubtotal, getTax, getTotal, clearCart, hasHydrated } = useCartStore();
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    street: '', city: '', state: '', zip: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = `ORD-${Date.now().toString(36).toUpperCase()}`;
    clearCart();
    router.push(`/order-confirmation?order=${orderNumber}`);
  };

  useEffect(() => {
    if (hasHydrated && items.length === 0) {
      router.replace('/cart');
    }
  }, [hasHydrated, items.length, router]);

  if (!hasHydrated || items.length === 0) return null;

  return (
    <Layout>
      <div className="container py-10 md:py-16">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* Customer info */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-display text-xl font-semibold mb-4">Customer Information</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label htmlFor="firstName">First Name</Label><Input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required /></div>
                <div><Label htmlFor="lastName">Last Name</Label><Input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required /></div>
                <div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required /></div>
                <div><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required /></div>
              </div>
            </div>

            {/* Delivery address */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-display text-xl font-semibold mb-4">Delivery Address</h2>
              <div className="grid gap-4">
                <div><Label htmlFor="street">Street Address</Label><Input id="street" name="street" value={form.street} onChange={handleChange} required /></div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div><Label htmlFor="city">City</Label><Input id="city" name="city" value={form.city} onChange={handleChange} required /></div>
                  <div><Label htmlFor="state">State</Label><Input id="state" name="state" value={form.state} onChange={handleChange} required /></div>
                  <div><Label htmlFor="zip">ZIP Code</Label><Input id="zip" name="zip" value={form.zip} onChange={handleChange} required /></div>
                </div>
              </div>
            </div>

            {/* Payment placeholder */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-display text-xl font-semibold mb-4">Payment</h2>
              <div className="rounded-md bg-muted p-6 text-center text-muted-foreground">
                <p className="font-medium">Stripe Payment Integration</p>
                <p className="text-sm mt-1">Payment processing will be connected here</p>
              </div>
            </div>
          </div>

          {/* Order summary sidebar */}
          <div>
            <div className="rounded-lg border border-border bg-card p-6 sticky top-20">
              <h3 className="font-display text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.menuItem.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.quantity}× {item.menuItem.name}</span>
                    <span className="text-foreground">{formatCurrency(item.menuItem.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 border-t border-border pt-3 text-sm">
                <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>{formatCurrency(getSubtotal())}</span></div>
                <div className="flex justify-between text-muted-foreground"><span>Tax</span><span>{formatCurrency(getTax())}</span></div>
                <div className="border-t border-border pt-3 flex justify-between font-display text-lg font-bold text-foreground">
                  <span>Total</span><span>{formatCurrency(getTotal())}</span>
                </div>
              </div>
              <Button type="submit" className="w-full mt-6" size="lg">Place Order</Button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
