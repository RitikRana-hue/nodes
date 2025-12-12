import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'react-hot-toast';
import ConditionalLayout from '@/components/layout/ConditionalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'NodesIO - Smart IoT Solutions',
    template: '%s | NodesIO',
  },
  description: 'Transform your operations with NodesIO smart IoT solutions. Real-time monitoring, AI-powered analytics, and sustainable practices for smarter cities.',
  keywords: ['IoT', 'waste management', 'smart cities', 'sustainability', 'sensors', 'AI analytics'],
  authors: [{ name: 'NodesIO' }],
  creator: 'NodesIO',
  publisher: 'NodesIO',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'NodesIO',
    title: 'NodesIO - Smart IoT Solutions',
    description: 'Transform your operations with smart IoT solutions.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NodesIO - Smart Waste Management Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NodesIO - Smart IoT Solutions',
    description: 'Transform your operations with smart IoT solutions.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.svg',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon-32x32.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-16x16.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#1e293b" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fff',
                color: '#374151',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e5e7eb',
                borderRadius: '0.75rem',
                padding: '16px',
              },
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
