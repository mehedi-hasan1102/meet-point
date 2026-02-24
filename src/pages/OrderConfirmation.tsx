import { Link, useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get('order') || 'ORD-UNKNOWN';

  return (
    <Layout>
      <div className="container py-20 text-center max-w-lg mx-auto">
        <div className="animate-fade-in">
          <CheckCircle className="mx-auto h-20 w-20 text-success" />
          <h1 className="mt-6 font-display text-3xl font-bold text-foreground">Order Confirmed!</h1>
          <p className="mt-3 text-muted-foreground">
            Thank you for your order. We're preparing your food now.
          </p>

          <div className="mt-8 rounded-lg border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">Order Number</p>
            <p className="font-display text-2xl font-bold text-primary mt-1">{orderNumber}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Estimated delivery: 30–45 minutes
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/menu"><Button>Order More</Button></Link>
            <Link to="/"><Button variant="outline">Back to Home</Button></Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderConfirmation;
