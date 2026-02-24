import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems, mockOrders } from '@/data/mock-data';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard, UtensilsCrossed, Package, BarChart3, Menu, X,
} from 'lucide-react';

type AdminTab = 'overview' | 'menu' | 'orders';

const adminNav: { key: AdminTab; label: string; icon: React.ElementType }[] = [
  { key: 'overview', label: 'Overview', icon: LayoutDashboard },
  { key: 'menu', label: 'Menu Items', icon: UtensilsCrossed },
  { key: 'orders', label: 'Orders', icon: Package },
];

const stats = [
  { label: 'Total Revenue', value: '$12,450', change: '+12%', icon: BarChart3 },
  { label: 'Orders Today', value: '34', change: '+5', icon: Package },
  { label: 'Menu Items', value: '15', change: '', icon: UtensilsCrossed },
  { label: 'Avg Order', value: '$38.50', change: '+3%', icon: LayoutDashboard },
];

const AdminPage = () => {
  const [tab, setTab] = useState<AdminTab>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-charcoal text-warm-cream transform transition-transform lg:relative lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-5 border-b border-warm-cream/10">
          <Link to="/" className="font-display text-xl font-bold text-gold">Meet Admin</Link>
          <button className="lg:hidden text-warm-cream" onClick={() => setSidebarOpen(false)}><X className="h-5 w-5" /></button>
        </div>
        <nav className="p-4 space-y-1">
          {adminNav.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => { setTab(key); setSidebarOpen(false); }}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                tab === key ? 'bg-warm-cream/10 text-gold' : 'text-warm-cream/60 hover:bg-warm-cream/5 hover:text-warm-cream'
              }`}
            >
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </nav>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 z-40 bg-foreground/50 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-background px-4 py-3 lg:px-8">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}><Menu className="h-5 w-5" /></button>
          <h2 className="font-display text-lg font-semibold capitalize">{tab === 'overview' ? 'Dashboard' : tab}</h2>
        </header>

        <div className="p-4 lg:p-8">
          {tab === 'overview' && (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{s.label}</span>
                    <s.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
                  {s.change && <p className="text-xs text-success mt-1">{s.change}</p>}
                </div>
              ))}
            </div>
          )}

          {tab === 'menu' && (
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="font-display font-semibold">Menu Items</h3>
                <Button size="sm">+ Add Item</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-border bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Item</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Category</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Price</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                  </tr></thead>
                  <tbody>
                    {menuItems.map((item) => (
                      <tr key={item.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                        <td className="px-4 py-3 font-medium text-foreground">{item.name}</td>
                        <td className="px-4 py-3 capitalize text-muted-foreground">{item.category}</td>
                        <td className="px-4 py-3 text-foreground">${item.price.toFixed(2)}</td>
                        <td className="px-4 py-3">
                          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${item.available ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                            {item.available ? 'Available' : 'Sold Out'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'orders' && (
            <div className="space-y-4">
              {mockOrders.map((order) => (
                <div key={order.id} className="rounded-lg border border-border bg-card p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="font-display font-semibold text-foreground">{order.orderNumber}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                      order.status === 'delivered' ? 'bg-success/10 text-success' :
                      order.status === 'preparing' ? 'bg-accent text-accent-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>{order.status}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{order.customerName} — {order.deliveryAddress}</p>
                  <p className="text-sm text-muted-foreground mt-1">{order.items.map((i) => `${i.quantity}× ${i.menuItem.name}`).join(', ')}</p>
                  <p className="mt-2 font-semibold text-foreground">${order.total.toFixed(2)}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
