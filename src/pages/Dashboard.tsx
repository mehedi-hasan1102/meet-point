import { Layout } from '@/components/layout/Layout';
import { useAuthStore } from '@/store/auth-store';
import { mockOrders } from '@/data/mock-data';
import { Button } from '@/components/ui/button';
import { Link, Navigate } from 'react-router-dom';
import { Package, User, MapPin } from 'lucide-react';
import { useState } from 'react';
import { formatCurrency } from '@/lib/utils';

type Tab = 'orders' | 'profile' | 'addresses';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [activeTab, setActiveTab] = useState<Tab>('orders');

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const tabs: { key: Tab; label: string; icon: React.ElementType }[] = [
    { key: 'orders', label: 'Orders', icon: Package },
    { key: 'profile', label: 'Profile', icon: User },
    { key: 'addresses', label: 'Addresses', icon: MapPin },
  ];

  return (
    <Layout>
      <div className="container py-10 md:py-16">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">My Account</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(({ key, label, icon: Icon }) => (
            <Button key={key} variant={activeTab === key ? 'default' : 'outline'} size="sm" onClick={() => setActiveTab(key)}>
              <Icon className="mr-2 h-4 w-4" /> {label}
            </Button>
          ))}
        </div>

        {activeTab === 'orders' && (
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <div key={order.id} className="rounded-lg border border-border bg-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div>
                    <span className="font-display font-semibold text-foreground">{order.orderNumber}</span>
                    <span className="ml-3 text-sm text-muted-foreground">{new Date(order.createdAt).toLocaleDateString()}</span>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                    order.status === 'delivered' ? 'bg-success/10 text-success' :
                    order.status === 'preparing' ? 'bg-accent text-accent-foreground' :
                    'bg-muted text-muted-foreground'
                  }`}>{order.status}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {order.items.map((i) => `${i.quantity}× ${i.menuItem.name}`).join(', ')}
                </div>
                <p className="mt-2 font-semibold text-foreground">{formatCurrency(order.total)}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'profile' && user && (
          <div className="rounded-lg border border-border bg-card p-6 max-w-lg space-y-3">
            <div><span className="text-sm text-muted-foreground">Name</span><p className="font-medium text-foreground">{user.name}</p></div>
            <div><span className="text-sm text-muted-foreground">Email</span><p className="font-medium text-foreground">{user.email}</p></div>
            <div><span className="text-sm text-muted-foreground">Phone</span><p className="font-medium text-foreground">{user.phone}</p></div>
          </div>
        )}

        {activeTab === 'addresses' && user && (
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
            {user.addresses.map((addr) => (
              <div key={addr.id} className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-semibold text-foreground">{addr.label}</span>
                  {addr.isDefault && <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Default</span>}
                </div>
                <p className="text-sm text-muted-foreground">{addr.street}</p>
                <p className="text-sm text-muted-foreground">{addr.city}, {addr.state} {addr.zip}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
