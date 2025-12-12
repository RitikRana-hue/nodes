/**
 * Error Message Component
 * Displays error states with retry option
 */

import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

export default function ErrorMessage({ 
  message, 
  onRetry,
  className = '' 
}: ErrorMessageProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-6 ${className}`}>
      <div className="flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full mb-4">
        <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Something went wrong
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
