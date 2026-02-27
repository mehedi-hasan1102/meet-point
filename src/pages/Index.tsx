import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { FoodCard } from '@/components/menu/FoodCard';
import { menuItems, categories } from '@/data/mock-data';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarCheck2, ChevronLeft, ChevronRight, PhoneCall, Star } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const featured = menuItems.filter((i) => i.featured).slice(0, 4);
const signaturePicks = menuItems.slice(0, 3);

const comboOffers = [
  {
    name: 'Family Combo',
    details: '2 Burgers, 1 Wings Platter, 2 Drinks',
    price: 34.99,
    image: menuItems[6].image,
  },
  {
    name: 'Couple Delight',
    details: '1 Ribeye, 1 Salmon, 2 Fresh Juices',
    price: 49.99,
    image: menuItems[4].image,
  },
  {
    name: 'Snack Time Box',
    details: 'Calamari, Bruschetta, Lemonade',
    price: 21.99,
    image: menuItems[0].image,
  },
];

const testimonials = [
  {
    name: 'Nadia Akter',
    comment: 'Great food quality and service. The family platter was exactly what we needed for a weekend dinner.',
  },
  {
    name: 'Masud Rana',
    comment: 'Delivery was fast and the burger combo arrived warm. Definitely ordering again.',
  },
  {
    name: 'Jerin Sultana',
    comment: 'Clean environment, tasty dishes, and friendly staff. One of my favorite places now.',
  },
];

const Index = () => {
  const categoryRailRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: 'left' | 'right') => {
    const rail = categoryRailRef.current;
    if (!rail) return;
    const step = Math.max(260, Math.floor(rail.clientWidth * 0.45));
    rail.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <Layout>
      <section className="alk-hero relative overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="container relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_420px] lg:items-center">
          <div className="animate-fade-in">
            <span className="mb-6 inline-block rounded-full border border-gold/35 bg-black/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Welcome to Meet Point
            </span>
            <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-warm-cream sm:text-5xl md:text-6xl">
              Authentic Taste,
              <br />
              Crafted With Care
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-warm-cream/80 md:text-lg">
              Enjoy restaurant-style meals, combo offers, and home delivery from one place. Fresh ingredients and rich flavors in every bite.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/menu">
                <Button size="lg" className="gold-gradient border-0 px-7 text-charcoal hover:opacity-90">
                  Explore Menu <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-warm-cream/40 bg-transparent px-7 text-warm-cream hover:bg-warm-cream/10 hover:text-warm-cream"
              >
                Book a Table
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-warm-cream backdrop-blur-sm">
            <h2 className="font-display text-2xl font-semibold">Today&apos;s Signature Picks</h2>
            <p className="mt-1 text-sm text-warm-cream/70">Chef recommended dishes</p>
            <div className="mt-6 space-y-4">
              {signaturePicks.map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg object-cover" loading="lazy" />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                    <p className="text-xs text-warm-cream/65">{item.category.toUpperCase()}</p>
                  </div>
                  <span className="text-sm font-bold text-gold">{formatCurrency(item.price)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-[#ece7de] py-10">
        <div className="container relative">
          <button
            type="button"
            onClick={() => scrollCategories('left')}
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-opacity hover:opacity-90 md:flex"
            aria-label="Scroll categories left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={categoryRailRef}
            className="mx-auto flex snap-x snap-mandatory gap-8 overflow-x-auto px-2 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-16"
          >
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/menu?category=${cat.slug}`}
                className="group min-w-[170px] shrink-0 snap-center text-center"
              >
                <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">{cat.name}</p>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollCategories('right')}
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-opacity hover:opacity-90 md:flex"
            aria-label="Scroll categories right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Favorite Menu</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Most Loved Dishes</h2>
            </div>
            <Link to="/menu">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                See All Items
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Special Deals</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Combo Offer</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {comboOffers.map((combo) => (
              <div key={combo.name} className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img src={combo.image} alt={combo.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                    {formatCurrency(combo.price)}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-semibold text-foreground">{combo.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{combo.details}</p>
                  <Link to="/menu" className="mt-4 inline-flex text-sm font-semibold text-primary">
                    Order This Combo <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground">What Guests Say</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-3 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={`${item.name}-${idx}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.comment}</p>
                <p className="mt-4 font-semibold text-foreground">{item.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-gradient py-16 md:py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Book Your Table Today</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
            Reserve your seat for family dining, birthday events, or casual meetings. Call us or place an online order anytime.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="gold-gradient border-0 px-7 text-charcoal hover:opacity-90">
              <CalendarCheck2 className="mr-2 h-4 w-4" />
              Reserve Table
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              +880 1712-345678
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
