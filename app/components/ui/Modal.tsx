"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    closeOnOverlayClick?: boolean;
    showCloseButton?: boolean;
    className?: string;
}

const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
};

export default function Modal({
    isOpen,
    onClose,
    children,
    title,
    size = 'md',
    closeOnOverlayClick = true,
    showCloseButton = true,
    className = ''
}: ModalProps) {
    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (typeof window === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={closeOnOverlayClick ? onClose : undefined}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.3 }}
                        className={`
                            relative bg-white rounded-2xl shadow-2xl w-full ${sizeClasses[size]}
                            max-h-[90vh] overflow-hidden ${className}
                        `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        {(title || showCloseButton) && (
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                {title && (
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {title}
                                    </h2>
                                )}
                                {showCloseButton && (
                                    <button
                                        onClick={onClose}
                                        className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        )}

                        {/* Content */}
                        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}