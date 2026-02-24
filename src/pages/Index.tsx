import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { FoodCard } from '@/components/menu/FoodCard';
import { menuItems, categories } from '@/data/mock-data';
import { Button } from '@/components/ui/button';
import { ArrowRight, UtensilsCrossed, Clock, MapPin } from 'lucide-react';

const featured = menuItems.filter((i) => i.featured);

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="container relative py-24 md:py-36">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-block rounded-full border border-gold/30 px-4 py-1.5 text-sm font-medium text-gold mb-6">
              Now accepting online orders
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
              Flavors That Tell<br />a Story
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/70 max-w-lg font-body leading-relaxed">
              From our restaurant to your table — handcrafted dishes made with locally sourced ingredients and a passion for bold flavors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/menu">
                <Button size="lg" className="gold-gradient text-charcoal font-semibold hover:opacity-90 transition-opacity border-0">
                  View Menu <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/menu">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="border-b border-border bg-card">
        <div className="container grid gap-6 py-8 md:grid-cols-3">
          {[
            { icon: UtensilsCrossed, title: 'Fresh Ingredients', desc: 'Locally sourced, daily prepared' },
            { icon: Clock, title: 'Fast Delivery', desc: '30-45 min to your door' },
            { icon: MapPin, title: 'Dine In or Takeout', desc: 'Flexible ordering options' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container py-16 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Featured Dishes</h2>
          <p className="mt-3 text-muted-foreground">Chef's picks you don't want to miss</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Explore Our Menu</h2>
            <p className="mt-3 text-muted-foreground">Something for every craving</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/menu?category=${cat.slug}`}
                className="group relative overflow-hidden rounded-lg aspect-[16/9] card-hover"
              >
                <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="font-display text-xl font-bold text-primary-foreground">{cat.name}</h3>
                  <p className="text-sm text-primary-foreground/70">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Ready to Order?</h2>
          <p className="mx-auto mt-4 max-w-md text-primary-foreground/70">
            Browse our full menu and place your order for pickup or delivery.
          </p>
          <Link to="/menu" className="mt-8 inline-block">
            <Button size="lg" className="gold-gradient text-charcoal font-semibold hover:opacity-90 border-0">
              Browse Full Menu <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
