"use client";

import { forwardRef } from 'react';
import { clsx } from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    padding?: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ children, size = 'xl', padding = true, className, ...props }, ref) => {
        const sizeClasses = {
            sm: 'max-w-2xl',
            md: 'max-w-4xl',
            lg: 'max-w-6xl',
            xl: 'max-w-7xl',
            full: 'max-w-full'
        };

        const classes = clsx(
            'mx-auto',
            sizeClasses[size],
            padding && 'px-4 sm:px-6 lg:px-8',
            className
        );

        return (
            <div ref={ref} className={classes} {...props}>
                {children}
            </div>
        );
    }
);

Container.displayName = 'Container';

export default Container;