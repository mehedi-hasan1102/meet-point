"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { FoodCard } from '@/components/menu/FoodCard';
import { menuItems } from '@/data/mock-data';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarCheck2, ChevronLeft, ChevronRight, PhoneCall, Star } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

const featured = menuItems.filter((i) => i.featured).slice(0, 4);
const signaturePicks = menuItems.slice(0, 3);
const showcaseItems = ['4', '20', '22', '14', '7', '12']
  .map((id) => menuItems.find((item) => item.id === id))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

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
  const showcaseRailRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const rail = showcaseRailRef.current;
    if (!rail) return;

    const updateScrollButtons = () => {
      const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
      setCanScrollLeft(rail.scrollLeft > 8);
      setCanScrollRight(maxScrollLeft - rail.scrollLeft > 8);
    };

    updateScrollButtons();
    rail.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      rail.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const scrollShowcase = (direction: 'left' | 'right') => {
    const rail = showcaseRailRef.current;
    if (!rail) return;
    const step = Math.max(260, Math.floor(rail.clientWidth * 0.52));
    rail.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <Layout>
      <section className="alk-hero relative -mt-20 overflow-hidden">
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
        <div className="container relative grid min-h-screen gap-12 pb-16 pt-28 md:pb-24 md:pt-32 lg:grid-cols-[1fr_420px] lg:items-center">
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
              <Button asChild size="lg" className="gold-gradient border-0 px-7 text-charcoal hover:opacity-90">
                <Link href="/menu">
                  Explore Menu <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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

      <section className="border-b border-border bg-[#efe8dc] py-14 md:py-16">
        <div className="container">
          <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b47b31]">Signature Selection</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-[#1f1a17] md:text-4xl">
                Popular Dishes, Presented Cleanly
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5d5146] md:text-base">
                A curated showcase inspired by the plated menu strip on Alkaderia, adapted into a cleaner and more consistent presentation for Meet Point.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollShowcase('left')}
                className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#ef2f2f] text-white shadow-[0_12px_24px_rgba(239,47,47,0.22)] transition-all duration-200 hover:bg-[#db2323] ${
                  canScrollLeft ? 'opacity-100' : 'pointer-events-none opacity-40'
                }`}
                aria-label="Scroll showcase left"
                aria-hidden={!canScrollLeft}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollShowcase('right')}
                className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#ef2f2f] text-white shadow-[0_12px_24px_rgba(239,47,47,0.22)] transition-all duration-200 hover:bg-[#db2323] ${
                  canScrollRight ? 'opacity-100' : 'pointer-events-none opacity-40'
                }`}
                aria-label="Scroll showcase right"
                aria-hidden={!canScrollRight}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            ref={showcaseRailRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {showcaseItems.map((item) => (
              <Link
                key={item.id}
                href={`/menu/${item.id}`}
                className="group min-w-[170px] shrink-0 snap-start text-center sm:min-w-[185px] lg:min-w-[205px]"
              >
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#eef6ff,transparent_42%),linear-gradient(180deg,#dce8f3_0%,#c6d9e7_100%)] p-3 shadow-[0_18px_32px_rgba(79,63,45,0.12)] transition-transform duration-300 group-hover:-translate-y-1 sm:h-44 sm:w-44 lg:h-48 lg:w-48">
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-[6px] border-[#f7fbff] bg-[#d7e6f1] shadow-[inset_0_10px_20px_rgba(255,255,255,0.55),inset_0_-10px_18px_rgba(90,112,129,0.1)]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#9a8671]">
                    {item.category.replace('-', ' ')}
                  </p>
                  <p className="mx-auto mt-2 max-w-[14rem] text-sm font-semibold leading-6 text-[#1f1a17] sm:text-[15px]">
                    {item.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Favorite Menu</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">Most Loved Dishes</h2>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/menu">
                See All Items
              </Link>
            </Button>
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
                  <Link href="/menu" className="mt-4 inline-flex text-sm font-semibold text-primary">
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
