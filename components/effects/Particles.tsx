"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#E11D48", "#f97316", "#3b82f6", "#8b5cf6", "#10b981"];

export default function Particles() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Create particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";

            const size = Math.random() * 8 + 4;
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];

            particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 15 + 10}s;
        animation-delay: ${Math.random() * 10}s;
      `;

            container.appendChild(particle);
        }

        // Cleanup
        return () => {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        };
    }, []);

    return <div ref={containerRef} className="particles-container" id="particles" />;
}
