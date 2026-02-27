import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const itemCount = useCartStore((s) => s.getItemCount());
  const { isAuthenticated, logout } = useAuthStore();

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
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-3xl font-bold uppercase leading-none text-primary">Meet</span>
          <span className="font-display text-xs tracking-[0.35em] text-muted-foreground">POINT</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[0.95rem] font-semibold tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.to ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/cart" className="relative p-2.5 text-foreground transition-colors hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {itemCount}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className="hidden items-center gap-2 md:flex">
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  <User className="mr-1 h-4 w-4" /> Account
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login" className="hidden md:block">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
          )}

          <Link to="/menu" className="hidden lg:block">
            <Button className="gold-gradient border-0 px-5 text-charcoal hover:opacity-90">Order Now</Button>
          </Link>

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
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-sm font-semibold ${
                  location.pathname === link.to ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium text-muted-foreground">Account</Link>
                <button onClick={() => { logout(); setMobileOpen(false); }} className="py-2 text-left text-sm font-medium text-muted-foreground">Logout</button>
              </>
            ) : (
              <Link to="/login" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-semibold text-foreground/80">Sign In</Link>
            )}
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
