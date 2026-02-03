"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroCarouselProps {
    images: { src: string; alt: string }[];
    interval?: number;
}

export default function HeroCarousel({ images, interval = 5000 }: HeroCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="hero-carousel">
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
        </div>
    );
}
