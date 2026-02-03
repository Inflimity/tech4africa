"use client";

import { useEffect, useRef, useState } from "react";

interface ScatterTextProps {
    text: string;
    className?: string;
    isGradient?: boolean;
}

export default function ScatterText({ text, className = "", isGradient = false }: ScatterTextProps) {
    const containerRef = useRef<HTMLSpanElement>(null);
    const [letters, setLetters] = useState<{ char: string; isSpace: boolean }[]>([]);
    const [isScattered, setIsScattered] = useState(false);

    useEffect(() => {
        // Split text into individual characters
        const chars = text.split("").map(char => ({
            char,
            isSpace: char === " "
        }));
        setLetters(chars);
    }, [text]);

    useEffect(() => {
        // Animation cycle: scatter for 1s, reassemble for 3s
        const runCycle = () => {
            setIsScattered(true);
            setTimeout(() => {
                setIsScattered(false);
            }, 1000);
        };

        // Start after initial page load
        const initialTimeout = setTimeout(() => {
            runCycle();
            const interval = setInterval(runCycle, 4000);
            return () => clearInterval(interval);
        }, 2000);

        return () => clearTimeout(initialTimeout);
    }, []);

    const getRandomTransform = (index: number) => {
        if (!isScattered) return "translate(0, 0) rotate(0deg) scale(1)";

        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 150;
        const randomRotate = (Math.random() - 0.5) * 60;
        const randomScale = 0.5 + Math.random() * 0.5;

        return `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(${randomScale})`;
    };

    return (
        <span ref={containerRef} className={`scatter-text inline-block ${className}`} style={{ perspective: "1000px" }}>
            {letters.map((letter, index) => (
                <span
                    key={index}
                    className={`inline-block transition-all duration-800 ease-out ${isScattered ? "opacity-40" : "opacity-100"
                        } ${letter.isSpace ? "w-[0.3em]" : ""} ${isGradient ? "bg-gradient-to-r from-africa-red via-orange-500 to-yellow-500 bg-clip-text text-transparent" : ""
                        }`}
                    style={{
                        transform: letter.isSpace ? undefined : getRandomTransform(index),
                        transitionDelay: `${index * 25}ms`,
                        transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                        willChange: "transform, opacity"
                    }}
                >
                    {letter.isSpace ? "\u00A0" : letter.char}
                </span>
            ))}
        </span>
    );
}
