import type { Metadata } from "next";

import "@/index.css";
import { AppProviders } from "@/components/providers/AppProviders";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Meet POINT",
  description: "Premium family restaurant ordering experience built with Next.js.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
