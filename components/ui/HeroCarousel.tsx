"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroCarouselProps {
    images: { src: string; alt: string }[];
    interval?: number;
}

export default function HeroCarousel({ images, interval = 5000 }: HeroCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (images.length <= 1 || isPaused) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval, isPaused]);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
        setIsPaused(true);
        // Resume auto-play after a delay
        setTimeout(() => setIsPaused(false), 5000);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 5000);
    };

    return (
        <div className="hero-carousel group relative">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? "active" : ""}`}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Navigation Buttons - Always visible for better UX */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 active:scale-95 z-10 border border-white/10 shadow-lg"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 active:scale-95 z-10 border border-white/10 shadow-lg"
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`}
                    />
                ))}
            </div>
        </div>
    );
}
