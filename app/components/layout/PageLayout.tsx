"use client";

import { ReactNode } from 'react';
import SoraChatbot from '../SoraChatbot';
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
        <div className={className}>
            <PageTransition>
                <div className={fullViewport ? '' : 'pt-20'}>
                    {children}
                </div>
            </PageTransition>

            {showChatbot && (
                <SoraChatbot environment={chatbotEnvironment} />
            )}
        </div>
    );
}