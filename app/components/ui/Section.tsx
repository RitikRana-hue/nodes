"use client";

import { forwardRef } from 'react';
import { clsx } from 'clsx';
import Container from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    background?: 'white' | 'gray' | 'gradient' | 'transparent';
    containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    fullWidth?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({
        children,
        padding = 'lg',
        background = 'white',
        containerSize = 'xl',
        fullWidth = false,
        className,
        ...props
    }, ref) => {
        const paddingClasses = {
            none: '',
            sm: 'py-8 md:py-12',
            md: 'py-12 md:py-16',
            lg: 'py-16 md:py-20',
            xl: 'py-20 md:py-24'
        };

        const backgroundClasses = {
            white: 'bg-white',
            gray: 'bg-gray-50',
            gradient: 'bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-50',
            transparent: 'bg-transparent'
        };

        const classes = clsx(
            'relative overflow-hidden',
            paddingClasses[padding],
            backgroundClasses[background],
            className
        );

        return (
            <section ref={ref} className={classes} {...props}>
                {fullWidth ? (
                    children
                ) : (
                    <Container size={containerSize}>
                        {children}
                    </Container>
                )}
            </section>
        );
    }
);

Section.displayName = 'Section';

export default Section;