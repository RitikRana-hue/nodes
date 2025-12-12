"use client";

import { forwardRef, useId } from 'react';
import { clsx } from 'clsx';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({
        label,
        error,
        helperText,
        fullWidth = false,
        className,
        id,
        ...props
    }, ref) => {
        const generatedId = useId();
        const textareaId = id || generatedId;

        const textareaClasses = clsx(
            'form-textarea',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            fullWidth && 'w-full',
            className
        );

        return (
            <div className={clsx('relative', fullWidth && 'w-full')}>
                {label && (
                    <label htmlFor={textareaId} className="form-label">
                        {label}
                    </label>
                )}

                <textarea
                    ref={ref}
                    id={textareaId}
                    className={textareaClasses}
                    {...props}
                />

                {error && <p className="form-error">{error}</p>}
                {helperText && !error && <p className="form-help">{helperText}</p>}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export default Textarea;