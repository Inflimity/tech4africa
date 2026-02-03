"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
    target: number;
    suffix?: string;
    className?: string;
}

export default function Counter({ target, suffix = "", className = "" }: CounterProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;
                        animateCounter();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [target]);

    const animateCounter = () => {
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                setCount(Math.floor(current));
                requestAnimationFrame(updateCounter);
            } else {
                setCount(target);
            }
        };

        updateCounter();
    };

    // Re-animate periodically
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(0);
            hasAnimated.current = false;
            setTimeout(() => {
                hasAnimated.current = true;
                animateCounter();
            }, 100);
        }, 5000);

        return () => clearInterval(interval);
    }, [target]);

    return (
        <span ref={countRef} className={`counter-number ${className}`}>
            {count}{suffix}
        </span>
    );
}
