/**
 * Empty State Component
 * Displays when no data is available
 */

import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
  className?: string;
}

export default function EmptyState({
  title = 'No data found',
  message = 'There is no data to display at the moment.',
  action,
  icon,
  className = '',
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-12 ${className}`}>
      <div className="flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
        {icon || <Inbox className="w-10 h-10 text-gray-400" />}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6 max-w-sm">
        {message}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
