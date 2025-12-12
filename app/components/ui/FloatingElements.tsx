"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface FloatingElementsProps {
    variant?: 'blue' | 'green' | 'purple' | 'mixed';
    density?: 'low' | 'medium' | 'high';
}

export default function FloatingElements({
    variant = 'mixed',
    density = 'medium'
}: FloatingElementsProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

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

    // Predefined configurations to avoid hydration issues
    const getElementConfig = (index: number) => {
        const configs = [
            { size: 150, delay: 0, duration: 20, colorIndex: 0 },
            { size: 200, delay: 1, duration: 18, colorIndex: 1 },
            { size: 120, delay: 2, duration: 22, colorIndex: 2 },
            { size: 180, delay: 0.5, duration: 19, colorIndex: 3 },
            { size: 160, delay: 1.5, duration: 21, colorIndex: 4 },
            { size: 140, delay: 2.5, duration: 17, colorIndex: 5 },
            { size: 190, delay: 3, duration: 23, colorIndex: 6 },
            { size: 170, delay: 3.5, duration: 18, colorIndex: 7 }
        ];
        return configs[index % configs.length];
    };

    const generateElements = () => {
        if (!isClient) return null;

        const elements = [];
        for (let i = 0; i < elementCount; i++) {
            const config = getElementConfig(i);
            const color = colors[config.colorIndex % colors.length];

            // Predefined positions
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
                        width: `${config.size}px`,
                        height: `${config.size}px`,
                        ...position
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: config.duration,
                        delay: config.delay,
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