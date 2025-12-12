"use client";

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollProgress from '../ui/ScrollProgress';

interface ConditionalLayoutProps {
    children: ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
    const pathname = usePathname();

    // Routes that should NOT have Header/Footer (dashboard, auth, admin routes)
    const noLayoutRoutes = [
        '/dashboard',
        '/hq',
        '/user'
    ];

    // Check if current path starts with any of the no-layout routes
    const shouldHideLayout = noLayoutRoutes.some(route => pathname.startsWith(route));

    // If it's a dashboard/auth route, just return children without Header/Footer
    if (shouldHideLayout) {
        return <>{children}</>;
    }

    // For website pages, show Header and Footer
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollProgress />
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}