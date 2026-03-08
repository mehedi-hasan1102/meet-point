import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-charcoal text-warm-cream">
      <div className="container py-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Meet Point Cafe & Restaurant"
                width={160}
                height={160}
                className="h-24 w-auto sm:h-28"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-3xl font-bold uppercase text-gold">Meet Point</span>
                <span className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-warm-cream/70">
                  Cafe & Restaurant
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-warm-cream/70">
              A premium food destination with dine-in, takeaway, and home delivery service.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[['Home', '/'], ['Menu', '/menu'], ['Cart', '/cart'], ['Login', '/login']].map(([label, to]) => (
                <Link key={to} href={to} className="text-sm text-warm-cream/70 transition-colors hover:text-gold">{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">Opening Hours</h4>
            <div className="space-y-1 text-sm text-warm-cream/70">
              <p>Saturday - Thursday: 10:00 AM - 11:30 PM</p>
              <p>Friday: 3:00 PM - 11:30 PM</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contact</h4>
            <div className="space-y-1 text-sm text-warm-cream/70">
              <p>House 22, Dhanmondi, Dhaka</p>
              <p>+880 1712-345678</p>
              <p>hello@meetpoint.com</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-warm-cream/10 pt-6 text-center text-xs text-warm-cream/45">
          © {new Date().getFullYear()} Meet POINT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
