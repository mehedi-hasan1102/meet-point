"use client";

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Layout } from '@/components/layout/Layout';
import { FoodCard } from '@/components/menu/FoodCard';
import { menuItems, categories } from '@/data/mock-data';
import { Button } from '@/components/ui/button';

const MenuPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return menuItems;
    return menuItems.filter((i) => i.category === activeCategory);
  }, [activeCategory]);

  const handleCategory = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (slug === 'all') params.delete('category');
    else params.set('category', slug);

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return (
    <Layout>
      <section className="container py-10 md:py-16">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">Our Menu</h1>
          <p className="mt-2 text-muted-foreground">Explore our full selection of handcrafted dishes</p>
        </div>

        {/* Category filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Button
            variant={activeCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleCategory('all')}
          >
            All
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.slug ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategory(cat.slug)}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            <p className="text-lg">No items found in this category.</p>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default MenuPage;
