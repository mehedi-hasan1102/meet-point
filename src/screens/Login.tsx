"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Layout } from '@/components/layout/Layout';
import { useAuthStore } from '@/store/auth-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginPage = () => {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) router.push('/dashboard');
  };

  return (
    <Layout>
      <div className="container flex items-center justify-center py-16 md:py-24">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground">Welcome Back</h1>
            <p className="mt-2 text-muted-foreground">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
            <div><Label htmlFor="password">Password</Label><Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></div>
            <div className="text-right"><Link href="/forgot-password" className="text-sm text-primary hover:underline">Forgot password?</Link></div>
            <Button type="submit" className="w-full" size="lg">Sign In</Button>
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account? <Link href="/register" className="text-primary hover:underline font-medium">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
