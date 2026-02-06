"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface PillarCardProps {
    href: string;
    title: string;
    description: string;
    ctaText: string;
    imageSrc: string;
    imageAlt: string;
    icon: ReactNode;
    variant?: "default" | "dark" | "yellow" | "green" | "blue" | "purple" | "red" | "black";
    isComingSoon?: boolean;
    className?: string;
}

const variantStyles = {
    default: {
        card: "bg-white border-africa-border hover:border-africa-red hover:shadow-africa-red/20",
        iconBg: "bg-africa-red text-white shadow-africa-red/20 border-white",
        title: "group-hover:text-africa-red",
        description: "text-slate-500",
        cta: "bg-africa-red text-white hover:bg-orange-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,51,102,0.4)] border border-white/10",
        headerDecor: "bg-africa-red/10",
    },
    dark: {
        card: "bg-africa-midnight text-white border-slate-800 hover:border-africa-red hover:shadow-africa-red/10",
        iconBg: "bg-white/20 text-white backdrop-blur-sm border-africa-midnight",
        title: "group-hover:text-africa-red",
        description: "text-slate-400",
        cta: "bg-africa-red text-white hover:bg-purple-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,51,102,0.4)] backdrop-blur-sm border border-white/20",
        headerDecor: "bg-white/10",
    },
    yellow: {
        card: "bg-africa-yellow border-africa-yellow/50 hover:shadow-africa-yellow/40",
        iconBg: "bg-africa-midnight text-white border-africa-yellow",
        title: "text-africa-midnight",
        description: "text-africa-midnight/80",
        cta: "bg-orange-600 text-white hover:bg-red-600 hover:scale-105 hover:shadow-xl border border-white/10",
        headerDecor: "bg-white/30",
    },
    green: {
        card: "bg-emerald-500 border-africa-green/50 hover:shadow-africa-green/40",
        iconBg: "bg-white/30 text-white border-africa-green",
        title: "text-white",
        description: "text-white/90",
        cta: "bg-emerald-600 text-white hover:bg-teal-800 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] border border-white/20",
        headerDecor: "bg-white/20",
    },
    blue: {
        card: "bg-blue-600 border-blue-600/50 hover:shadow-africa-cyan/40",
        iconBg: "bg-white/30 text-white border-blue-600",
        title: "text-white",
        description: "text-white/90",
        cta: "bg-blue-600 text-white hover:bg-indigo-800 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] border border-white/20",
        headerDecor: "bg-white/20",
    },
    purple: {
        card: "bg-purple-600 border-africa-purple/50 hover:shadow-africa-purple/40",
        iconBg: "bg-white/30 text-white border-africa-purple",
        title: "text-white",
        description: "text-white/90",
        cta: "bg-purple-600 text-white hover:bg-indigo-900 hover:scale-105 hover:shadow-[0_0_20px_rgba(153,0,255,0.3)] border border-white/20",
        headerDecor: "bg-white/20",
    },
    red: {
        card: "bg-africa-red border-africa-red/50 hover:shadow-africa-red/40",
        iconBg: "bg-white/30 text-white border-africa-red",
        title: "text-white",
        description: "text-white/90",
        cta: "bg-white text-africa-red hover:bg-white/90 hover:scale-105 hover:shadow-lg border border-white/20",
        headerDecor: "bg-white/20",
    },
    black: {
        card: "bg-africa-midnight border-slate-700 hover:shadow-slate-900/40",
        iconBg: "bg-white/20 text-white border-slate-600",
        title: "text-white",
        description: "text-white/80",
        cta: "bg-yellow-400 text-africa-midnight hover:bg-yellow-500 hover:scale-105 hover:shadow-lg border border-white/10",
        headerDecor: "bg-white/10",
    },
};

export default function PillarCard({
    href,
    title,
    description,
    ctaText,
    imageSrc,
    imageAlt,
    icon,
    variant = "default",
    isComingSoon = false,
    className = "",
}: PillarCardProps) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const styles = variantStyles[variant];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.setProperty("--rotateX", `${rotateX}deg`);
        card.style.setProperty("--rotateY", `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.setProperty("--rotateX", "0deg");
        card.style.setProperty("--rotateY", "0deg");
    };

    return (
        <Link
            ref={cardRef}
            href={href}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`pillar-card tilt-card glow-border group border rounded-3xl hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl text-left overflow-hidden flex flex-col stagger-reveal ${isVisible ? "revealed" : ""
                } ${styles.card} ${className}`}
        >
            {/* Card Header Image */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                    className={`absolute top-0 right-0 w-24 h-24 ${styles.headerDecor} rounded-bl-[60px] transition-all group-hover:scale-110`}
                />
                {isComingSoon && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className="bg-white/20 text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-full backdrop-blur-sm">
                            Coming Soon
                        </span>
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col">
                <div
                    className={`pillar-icon w-14 h-14 ${styles.iconBg} flex items-center justify-center rounded-2xl mb-4 text-2xl shadow-lg transition-transform duration-500 border-4 -mt-12 relative z-10`}
                >
                    {icon}
                </div>
                <h3 className={`text-2xl font-bold mb-2 transition-colors ${styles.title}`}>
                    {title}
                </h3>
                <p className={`text-sm font-medium mb-4 flex-1 ${styles.description}`}>
                    {description}
                </p>
                <div
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all self-start ${styles.cta}`}
                >
                    <span>{ctaText}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </div>
            </div>
        </Link>
    );
}
