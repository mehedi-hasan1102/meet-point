"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Layout } from '@/components/layout/Layout';
import { useAuthStore } from '@/store/auth-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const RegisterPage = () => {
  const router = useRouter();
  const register = useAuthStore((s) => s.register);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) return;
    const success = await register(form.name, form.email, form.password);
    if (success) router.push('/dashboard');
  };

  return (
    <Layout>
      <div className="container flex items-center justify-center py-16 md:py-24">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground">Create Account</h1>
            <p className="mt-2 text-muted-foreground">Join Meet POINT today</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-6 space-y-4">
            <div><Label htmlFor="name">Full Name</Label><Input id="name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} required /></div>
            <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} required /></div>
            <div><Label htmlFor="password">Password</Label><Input id="password" type="password" value={form.password} onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))} required /></div>
            <div><Label htmlFor="confirm">Confirm Password</Label><Input id="confirm" type="password" value={form.confirm} onChange={(e) => setForm((p) => ({ ...p, confirm: e.target.value }))} required /></div>
            <Button type="submit" className="w-full" size="lg">Create Account</Button>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account? <Link href="/login" className="text-primary hover:underline font-medium">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
