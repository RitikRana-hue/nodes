"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
    children: ReactNode;
    className?: string;
    variant?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn' | 'typewriter';
    delay?: number;
    duration?: number;
}

const textVariants = {
    fadeInUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    },
    slideInLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    },
    slideInRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    },
    typewriter: {
        hidden: { width: 0 },
        visible: { width: "auto" }
    }
};

export default function AnimatedText({
    children,
    className = '',
    variant = 'fadeInUp',
    delay = 0,
    duration = 0.6
}: AnimatedTextProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants[variant]}
            transition={{
                duration,
                delay,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    );
}