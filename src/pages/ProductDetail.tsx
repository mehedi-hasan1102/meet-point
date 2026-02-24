import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { menuItems } from '@/data/mock-data';
import { useCartStore } from '@/store/cart-store';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = menuItems.find((i) => i.id === id);
  const addItem = useCartStore((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-2xl font-bold">Item not found</h1>
          <Link to="/menu" className="mt-4 inline-block text-primary hover:underline">Back to Menu</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8 md:py-16">
        <Link to="/menu" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Menu
        </Link>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-lg">
            <img src={item.image} alt={item.name} className="h-full w-full object-cover aspect-square md:aspect-[4/3]" />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-3">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground capitalize">{tag}</span>
              ))}
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">{item.name}</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">{item.description}</p>
            <p className="mt-6 font-display text-3xl font-bold text-primary">${item.price.toFixed(2)}</p>

            {!item.available ? (
              <div className="mt-6 rounded-md bg-destructive/10 p-4 text-center text-destructive font-medium">
                Currently unavailable
              </div>
            ) : (
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground">Quantity:</span>
                  <div className="flex items-center border border-border rounded-md">
                    <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center font-medium">{quantity}</span>
                    <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => setQuantity(quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button size="lg" className="w-full md:w-auto" onClick={() => { addItem(item, quantity); setQuantity(1); }}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart — ${(item.price * quantity).toFixed(2)}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
