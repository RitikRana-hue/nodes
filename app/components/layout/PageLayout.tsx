"use client";

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SoraChatbot from '../SoraChatbot';
import ScrollProgress from '../ui/ScrollProgress';
import PageTransition from '../ui/PageTransition';

interface PageLayoutProps {
    children: ReactNode;
    showChatbot?: boolean;
    chatbotEnvironment?: 'landing' | 'dashboard';
    className?: string;
    fullViewport?: boolean;
}

export default function PageLayout({
    children,
    showChatbot = true,
    chatbotEnvironment = 'landing',
    className = '',
    fullViewport = false
}: PageLayoutProps) {
    return (
        <div className={`flex flex-col min-h-screen ${className}`}>
            <ScrollProgress />
            <Header />
            <PageTransition>
                <main className={`flex-grow ${fullViewport ? '' : 'pt-20'}`}>
                    {children}
                </main>
            </PageTransition>
            <Footer />

            {showChatbot && (
                <SoraChatbot environment={chatbotEnvironment} />
            )}
        </div>
    );
}