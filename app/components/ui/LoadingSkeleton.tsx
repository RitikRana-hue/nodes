"use client";

import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
    variant?: 'card' | 'text' | 'avatar' | 'button' | 'image';
    className?: string;
    count?: number;
}

const skeletonVariants = {
    pulse: {
        opacity: [0.4, 0.8, 0.4]
    }
};

export default function LoadingSkeleton({
    variant = 'card',
    className = '',
    count = 1
}: LoadingSkeletonProps) {
    const renderSkeleton = () => {
        switch (variant) {
            case 'card':
                return (
                    <motion.div
                        className={`bg-gray-200 rounded-lg p-6 space-y-4 ${className}`}
                        variants={skeletonVariants}
                        animate="pulse"
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="bg-gray-300 h-4 rounded w-3/4"></div>
                        <div className="bg-gray-300 h-4 rounded w-1/2"></div>
                        <div className="bg-gray-300 h-32 rounded"></div>
                        <div className="bg-gray-300 h-4 rounded w-2/3"></div>
                    </motion.div>
                );
            case 'text':
                return (
                    <motion.div
                        className={`space-y-2 ${className}`}
                        variants={skeletonVariants}
                        animate="pulse"
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="bg-gray-200 h-4 rounded w-full"></div>
                        <div className="bg-gray-200 h-4 rounded w-5/6"></div>
                        <div className="bg-gray-200 h-4 rounded w-4/6"></div>
                    </motion.div>
                );
            case 'avatar':
                return (
                    <motion.div
                        className={`bg-gray-200 rounded-full w-12 h-12 ${className}`}
                        variants={skeletonVariants}
                        animate="pulse"
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                );
            case 'button':
                return (
                    <motion.div
                        className={`bg-gray-200 rounded-lg h-10 w-24 ${className}`}
                        variants={skeletonVariants}
                        animate="pulse"
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                );
            case 'image':
                return (
                    <motion.div
                        className={`bg-gray-200 rounded-lg aspect-video ${className}`}
                        variants={skeletonVariants}
                        animate="pulse"
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <>
            {Array.from({ length: count }, (_, index) => (
                <div key={index}>
                    {renderSkeleton()}
                </div>
            ))}
        </>
    );
}