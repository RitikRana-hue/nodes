"use client";

import { forwardRef, useId } from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({
        label,
        error,
        helperText,
        leftIcon,
        rightIcon,
        fullWidth = false,
        className,
        id,
        ...props
    }, ref) => {
        const generatedId = useId();
        const inputId = id || generatedId;

        const inputClasses = clsx(
            'form-input',
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            fullWidth && 'w-full',
            className
        );

        return (
            <div className={clsx('relative', fullWidth && 'w-full')}>
                {label && (
                    <label htmlFor={inputId} className="form-label">
                        {label}
                    </label>
                )}

                <div className="relative">
                    {leftIcon && (
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-400">{leftIcon}</span>
                        </div>
                    )}

                    <input
                        ref={ref}
                        id={inputId}
                        className={inputClasses}
                        {...props}
                    />

                    {rightIcon && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="text-gray-400">{rightIcon}</span>
                        </div>
                    )}
                </div>

                {error && <p className="form-error">{error}</p>}
                {helperText && !error && <p className="form-help">{helperText}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;