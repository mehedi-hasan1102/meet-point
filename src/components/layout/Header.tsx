"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X, User, Phone, Clock3 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useCartStore } from '@/store/cart-store';
import { useAuthStore } from '@/store/auth-store';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Cart', to: '/cart' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideTopStrip, setHideTopStrip] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const pathname = usePathname();
  const itemCount = useCartStore((s) => (s.hasHydrated ? s.getItemCount() : 0));
  const { isAuthenticated, logout, hasHydrated } = useAuthStore();

  useEffect(() => {
    const updateTopStripVisibility = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastScrollYRef.current;

      setHideTopStrip((previous) => {
        if (currentY <= 24) return false;
        if (Math.abs(deltaY) < 4) return previous;
        return deltaY > 0;
      });

      lastScrollYRef.current = currentY;
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(updateTopStripVisibility);
    };

    lastScrollYRef.current = window.scrollY;
    updateTopStripVisibility();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div
        className={`hidden overflow-hidden bg-charcoal text-warm-cream/85 transition-[max-height,opacity,transform,border-color] duration-500 ease-out md:block ${
          hideTopStrip
            ? '-translate-y-2 max-h-0 border-transparent opacity-0'
            : 'translate-y-0 max-h-10 border-b border-border/60 opacity-100'
        }`}
        aria-hidden={hideTopStrip}
      >
        <div className="container flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-gold" />
              +880 1712-345678
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-3.5 w-3.5 text-gold" />
              Open Daily: 10:00 AM - 11:30 PM
            </span>
          </div>
          <p className="text-warm-cream/70">Premium Family Restaurant</p>
        </div>
      </div>

      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Meet Point Cafe & Restaurant"
            width={108}
            height={108}
            priority
            className="h-16 w-auto sm:h-[4.5rem]"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl font-bold uppercase text-primary sm:text-3xl">Meet Point</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Cafe & Restaurant
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-[0.95rem] font-semibold tracking-wide transition-colors hover:text-primary ${
                pathname === link.to ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/cart" className="relative p-2.5 text-foreground transition-colors hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {itemCount}
              </span>
            )}
          </Link>

          {hasHydrated && isAuthenticated ? (
            <div className="hidden items-center gap-2 md:flex">
              <Button asChild variant="ghost" size="sm">
                <Link href="/dashboard">
                  <User className="mr-1 h-4 w-4" /> Account
                </Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : hasHydrated ? (
            <Button asChild className="hidden md:inline-flex" variant="ghost" size="sm">
              <Link href="/login">Sign In</Link>
            </Button>
          ) : null}

          <Button asChild className="hidden lg:inline-flex gold-gradient border-0 px-5 text-charcoal hover:opacity-90">
            <Link href="/menu">Order Now</Link>
          </Button>

          <button
            className="p-2 text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background p-4 lg:hidden animate-fade-in">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-sm font-semibold ${
                  pathname === link.to ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {hasHydrated && isAuthenticated ? (
              <>
                <Link href="/dashboard" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium text-muted-foreground">Account</Link>
                <button onClick={() => { logout(); setMobileOpen(false); }} className="py-2 text-left text-sm font-medium text-muted-foreground">Logout</button>
              </>
            ) : hasHydrated ? (
              <Link href="/login" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-semibold text-foreground/80">Sign In</Link>
            ) : null}
            <div className="mt-2 border-t border-border pt-3 text-xs text-muted-foreground">
              <p className="inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                +880 1712-345678
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
