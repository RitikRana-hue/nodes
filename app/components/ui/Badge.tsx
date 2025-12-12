"use client";

import { forwardRef } from 'react';
import { clsx } from 'clsx';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
    rounded?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({
        children,
        variant = 'primary',
        size = 'md',
        rounded = true,
        className,
        ...props
    }, ref) => {
        const baseClasses = 'inline-flex items-center font-medium';

        const variantClasses = {
            primary: 'bg-blue-100 text-blue-800',
            secondary: 'bg-green-100 text-green-800',
            success: 'bg-emerald-100 text-emerald-800',
            warning: 'bg-amber-100 text-amber-800',
            error: 'bg-red-100 text-red-800',
            info: 'bg-cyan-100 text-cyan-800',
            neutral: 'bg-gray-100 text-gray-800'
        };

        const sizeClasses = {
            sm: 'px-2 py-0.5 text-xs',
            md: 'px-3 py-1 text-sm',
            lg: 'px-4 py-1.5 text-base'
        };

        const roundedClasses = rounded ? 'rounded-full' : 'rounded-md';

        const classes = clsx(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
            roundedClasses,
            className
        );

        return (
            <span ref={ref} className={classes} {...props}>
                {children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';

export default Badge;