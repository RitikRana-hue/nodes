import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'react-hot-toast';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'NodesIO - Smart IoT Waste Management Solutions',
    template: '%s | NodesIO',
  },
  description: 'Transform your waste management with NodesIO smart IoT solutions. Real-time monitoring, AI-powered analytics, and sustainable practices for cleaner cities.',
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
    title: 'NodesIO - Smart IoT Waste Management',
    description: 'Transform your waste management with smart IoT solutions.',
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
    title: 'NodesIO - Smart IoT Waste Management',
    description: 'Transform your waste management with smart IoT solutions.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
      <body className="antialiased">
        <ThemeProvider>
          {children}
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
