"use client";

import { forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'elevated' | 'outlined' | 'ghost';
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    hover?: boolean;
    animated?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps & MotionProps>(
    ({
        children,
        variant = 'default',
        padding = 'md',
        hover = false,
        animated = true,
        className,
        ...props
    }, ref) => {
        const baseClasses = 'bg-white rounded-2xl overflow-hidden transition-all duration-300';

        const variantClasses = {
            default: 'shadow-lg border border-gray-100',
            elevated: 'shadow-2xl border border-gray-100',
            outlined: 'border-2 border-gray-200 shadow-sm',
            ghost: 'shadow-none border-none bg-transparent'
        };

        const paddingClasses = {
            none: '',
            sm: 'p-4',
            md: 'p-6',
            lg: 'p-8',
            xl: 'p-12'
        };

        const hoverClasses = hover ? 'professional-hover cursor-pointer' : '';

        const classes = clsx(
            baseClasses,
            variantClasses[variant],
            paddingClasses[padding],
            hoverClasses,
            className
        );

        if (animated) {
            return (
                <motion.div
                    ref={ref}
                    className={classes}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    {...props}
                >
                    {children}
                </motion.div>
            );
        }

        return (
            <div ref={ref} className={classes} {...props}>
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

// Card sub-components
const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, ref) => (
        <div
            ref={ref}
            className={clsx('px-6 py-4 border-b border-gray-100', className)}
            {...props}
        >
            {children}
        </div>
    )
);

CardHeader.displayName = 'CardHeader';

const CardBody = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, ref) => (
        <div
            ref={ref}
            className={clsx('p-6', className)}
            {...props}
        >
            {children}
        </div>
    )
);

CardBody.displayName = 'CardBody';

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, ref) => (
        <div
            ref={ref}
            className={clsx('px-6 py-4 border-t border-gray-100 bg-gray-50', className)}
            {...props}
        >
            {children}
        </div>
    )
);

CardFooter.displayName = 'CardFooter';

export { Card as default, CardHeader, CardBody, CardFooter };