"use client";

import { forwardRef } from 'react';
import { clsx } from 'clsx';

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'neutral';
  centered?: boolean;
  text?: string;
}

const LoadingSpinner = forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({
    size = 'md',
    variant = 'primary',
    centered = true,
    text,
    className,
    ...props
  }, ref) => {
    const sizeClasses = {
      xs: 'w-3 h-3 border',
      sm: 'w-4 h-4 border-2',
      md: 'w-8 h-8 border-2',
      lg: 'w-12 h-12 border-4',
      xl: 'w-16 h-16 border-4'
    };

    const variantClasses = {
      primary: 'border-gray-300 border-t-blue-600',
      secondary: 'border-gray-300 border-t-green-600',
      neutral: 'border-gray-300 border-t-gray-600'
    };

    const spinnerClasses = clsx(
      'animate-spin rounded-full',
      sizeClasses[size],
      variantClasses[variant]
    );

    const containerClasses = clsx(
      'flex flex-col items-center',
      centered && 'justify-center',
      className
    );

    return (
      <div ref={ref} className={containerClasses} {...props}>
        <div className={spinnerClasses} />
        {text && (
          <p className="mt-3 text-sm text-gray-600">{text}</p>
        )}
      </div>
    );
  }
);

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
