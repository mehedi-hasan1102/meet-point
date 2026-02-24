import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-warm-cream">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-gold">Meet</span>
              <span className="ml-1 font-display text-sm tracking-widest text-warm-cream/60">POINT</span>
            </Link>
            <p className="mt-3 text-sm text-warm-cream/60 leading-relaxed">
              Crafting unforgettable dining experiences with locally sourced ingredients and bold flavors.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-wide uppercase text-gold mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              {[['Home', '/'], ['Menu', '/menu'], ['Cart', '/cart']].map(([label, to]) => (
                <Link key={to} to={to} className="text-sm text-warm-cream/60 hover:text-gold transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-wide uppercase text-gold mb-4">Hours</h4>
            <div className="space-y-1 text-sm text-warm-cream/60">
              <p>Mon – Fri: 11am – 10pm</p>
              <p>Sat – Sun: 10am – 11pm</p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-wide uppercase text-gold mb-4">Contact</h4>
            <div className="space-y-1 text-sm text-warm-cream/60">
              <p>123 Meet Lane</p>
              <p>New York, NY 10001</p>
              <p>(555) 987-6543</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-warm-cream/10 pt-6 text-center text-xs text-warm-cream/40">
          © {new Date().getFullYear()} Meet POINT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
