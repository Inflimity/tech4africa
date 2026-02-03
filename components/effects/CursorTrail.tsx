"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
    const trailRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const trailPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const animateCursor = () => {
            trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.15;
            trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.15;

            if (trailRef.current) {
                trailRef.current.style.left = `${trailPos.current.x}px`;
                trailRef.current.style.top = `${trailPos.current.y}px`;
            }

            requestAnimationFrame(animateCursor);
        };

        document.addEventListener("mousemove", handleMouseMove);
        const animationId = requestAnimationFrame(animateCursor);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <div ref={trailRef} className="cursor-trail hidden md:block" id="cursor-trail" />;
}
