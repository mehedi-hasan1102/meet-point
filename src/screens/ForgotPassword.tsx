"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <div className="container flex items-center justify-center py-16 md:py-24">
        <div className="w-full max-w-md text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Reset Password</h1>
          <p className="mt-2 text-muted-foreground">Enter your email and we'll send a reset link</p>

          {sent ? (
            <div className="mt-8 rounded-lg border border-border bg-card p-6">
              <p className="text-success font-medium">Reset link sent!</p>
              <p className="mt-2 text-sm text-muted-foreground">Check your inbox for instructions.</p>
              <Button asChild className="mt-4" variant="outline">
                <Link href="/login">Back to Login</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 rounded-lg border border-border bg-card p-6 space-y-4 text-left">
              <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
              <Button type="submit" className="w-full" size="lg">Send Reset Link</Button>
              <p className="text-center text-sm text-muted-foreground">
                <Link href="/login" className="text-primary hover:underline">Back to Login</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
