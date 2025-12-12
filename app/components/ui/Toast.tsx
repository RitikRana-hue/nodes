"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface Toast {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message?: string;
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
}

interface ToastContextType {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, 'id'>) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = { ...toast, id };

        setToasts(prev => [...prev, newToast]);

        // Auto remove after duration
        const duration = toast.duration || 5000;
        setTimeout(() => {
            removeToast(id);
        }, duration);
    }, [removeToast]);

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

function ToastContainer() {
    const { toasts, removeToast } = useToast();

    return (
        <div className="fixed top-4 right-4 z-50 space-y-2">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <ToastItem
                        key={toast.id}
                        toast={toast}
                        onRemove={() => removeToast(toast.id)}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: () => void }) {
    const icons = {
        success: <CheckCircle className="w-5 h-5 text-green-500" />,
        error: <XCircle className="w-5 h-5 text-red-500" />,
        warning: <AlertCircle className="w-5 h-5 text-yellow-500" />,
        info: <Info className="w-5 h-5 text-blue-500" />
    };

    const borderColors = {
        success: 'border-l-green-500',
        error: 'border-l-red-500',
        warning: 'border-l-yellow-500',
        info: 'border-l-blue-500'
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.5, transition: { duration: 0.2 } }}
            className={`
                bg-white rounded-lg shadow-lg border-l-4 ${borderColors[toast.type]}
                p-4 max-w-sm w-full relative overflow-hidden
            `}
        >
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                    {icons[toast.type]}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900">
                        {toast.title}
                    </p>
                    {toast.message && (
                        <p className="text-sm text-gray-600 mt-1">
                            {toast.message}
                        </p>
                    )}
                    {toast.action && (
                        <button
                            onClick={toast.action.onClick}
                            className="text-sm font-medium text-blue-600 hover:text-blue-700 mt-2"
                        >
                            {toast.action.label}
                        </button>
                    )}
                </div>
                <button
                    onClick={onRemove}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </motion.div>
    );
}