"use client";

import { motion } from 'framer-motion';

interface FloatingElementsProps {
    variant?: 'blue' | 'green' | 'purple' | 'mixed';
    density?: 'low' | 'medium' | 'high';
}

export default function FloatingElements({
    variant = 'mixed',
    density = 'medium'
}: FloatingElementsProps) {
    const getElementCount = () => {
        switch (density) {
            case 'low': return 3;
            case 'medium': return 5;
            case 'high': return 8;
            default: return 5;
        }
    };

    const getColors = () => {
        switch (variant) {
            case 'blue': return ['bg-blue-200/20', 'bg-blue-300/15', 'bg-blue-400/10'];
            case 'green': return ['bg-green-200/20', 'bg-green-300/15', 'bg-green-400/10'];
            case 'purple': return ['bg-purple-200/20', 'bg-purple-300/15', 'bg-purple-400/10'];
            case 'mixed': return [
                'bg-blue-200/20', 'bg-green-200/20', 'bg-purple-200/20',
                'bg-blue-300/15', 'bg-green-300/15', 'bg-purple-300/15',
                'bg-blue-400/10', 'bg-green-400/10'
            ];
            default: return ['bg-blue-200/20', 'bg-green-200/20'];
        }
    };

    const colors = getColors();
    const elementCount = getElementCount();

    const generateElements = () => {
        const elements = [];
        for (let i = 0; i < elementCount; i++) {
            const size = Math.random() * 200 + 100; // 100-300px
            const delay = Math.random() * 5;
            const duration = Math.random() * 10 + 15; // 15-25s
            const color = colors[Math.floor(Math.random() * colors.length)];

            // Random positions
            const positions = [
                { top: '10%', left: '10%' },
                { top: '20%', right: '15%' },
                { bottom: '30%', left: '20%' },
                { bottom: '15%', right: '10%' },
                { top: '50%', left: '5%' },
                { top: '70%', right: '25%' },
                { bottom: '50%', left: '80%' },
                { top: '30%', left: '70%' }
            ];

            const position = positions[i % positions.length];

            elements.push(
                <motion.div
                    key={i}
                    className={`absolute ${color} rounded-full blur-3xl`}
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        ...position
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration,
                        delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            );
        }
        return elements;
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {generateElements()}
        </div>
    );
}