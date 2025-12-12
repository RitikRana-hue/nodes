"use client";

import { forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    animated?: boolean;
    as?: React.ElementType;
    href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps & MotionProps>(
    ({
        children,
        variant = 'primary',
        size = 'md',
        loading = false,
        leftIcon,
        rightIcon,
        fullWidth = false,
        animated = true,
        as: Component = 'button',
        className,
        disabled,
        ...props
    }, ref) => {
        const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

        const variantClasses = {
            primary: 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500',
            secondary: 'bg-white border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 shadow-md hover:shadow-lg focus:ring-blue-500',
            outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
            ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500',
            danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl focus:ring-red-500'
        };

        const sizeClasses = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg',
            xl: 'px-8 py-4 text-xl'
        };

        const classes = clsx(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
            fullWidth && 'w-full',
            'btn-professional focus-professional',
            className
        );

        const buttonContent = (
            <>
                {loading && (
                    <div className="mr-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    </div>
                )}
                {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </>
        );

        if (animated) {
            const MotionComponent = motion(Component);
            return (
                <MotionComponent
                    ref={ref}
                    className={classes}
                    disabled={disabled || loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    {...props}
                >
                    {buttonContent}
                </MotionComponent>
            );
        }

        return (
            <Component
                ref={ref}
                className={classes}
                disabled={disabled || loading}
                {...props}
            >
                {buttonContent}
            </Component>
        );
    }
);

Button.displayName = 'Button';

export default Button;