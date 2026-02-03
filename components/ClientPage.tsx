"use client";

import { useEffect, ReactNode } from "react";

interface ClientPageProps {
    children: ReactNode;
}

export default function ClientPage({ children }: ClientPageProps) {
    useEffect(() => {
        // Scroll reveal observer
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                } else {
                    entry.target.classList.remove("is-visible");
                }
            });
        }, observerOptions);

        // Apply reveal animation to key elements
        const elementsToAnimate = document.querySelectorAll(
            "section > div:not(.nocascade), section h2, section h1, .pillar-card, .bento-card, .group"
        );

        elementsToAnimate.forEach((el) => {
            if (!el.classList.contains("reveal-element")) {
                el.classList.add("reveal-element");
            }
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return <>{children}</>;
}
