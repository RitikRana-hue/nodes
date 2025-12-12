"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverEffectProps {
    children: ReactNode;
    className?: string;
    effect?: 'lift' | 'scale' | 'glow' | 'tilt' | 'bounce';
    intensity?: 'subtle' | 'medium' | 'strong';
}

export default function HoverEffect({
    children,
    className = '',
    effect = 'lift',
    intensity = 'medium'
}: HoverEffectProps) {
    const getHoverAnimation = () => {
        const intensityMap = {
            subtle: { scale: 1.02, y: -2, rotateX: 2, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" },
            medium: { scale: 1.05, y: -8, rotateX: 5, boxShadow: "0 10px 40px rgba(0,0,0,0.15)" },
            strong: { scale: 1.08, y: -12, rotateX: 8, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }
        };

        switch (effect) {
            case 'lift':
                return {
                    y: intensity === 'subtle' ? -4 : intensity === 'medium' ? -8 : -12,
                    boxShadow: intensityMap[intensity].boxShadow
                };
            case 'scale':
                return {
                    scale: intensityMap[intensity].scale
                };
            case 'glow':
                return {
                    boxShadow: `0 0 ${intensity === 'subtle' ? '10px' : intensity === 'medium' ? '20px' : '30px'} rgba(59, 130, 246, 0.3)`,
                    scale: intensityMap[intensity].scale
                };
            case 'tilt':
                return {
                    rotateY: intensity === 'subtle' ? 3 : intensity === 'medium' ? 5 : 8,
                    rotateX: intensityMap[intensity].rotateX,
                    scale: intensityMap[intensity].scale
                };
            case 'bounce':
                return {
                    y: [0, -8, 0]
                };
            default:
                return intensityMap[intensity];
        }
    };

    return (
        <motion.div
            className={`cursor-pointer ${className}`}
            whileHover={getHoverAnimation()}
            transition={
                effect === 'bounce'
                    ? { duration: 0.6, ease: "easeInOut" }
                    : {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }
            }
            style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
            }}
        >
            {children}
        </motion.div>
    );
}