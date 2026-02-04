"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
    img: string;
    title: string;
    sub: string;
}

interface AcademyHeroProps {
    slides: Slide[];
}

export default function AcademyHero({ slides }: AcademyHeroProps) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative h-full w-full">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0"
                        }`}
                >
                    <Image
                        src={slide.img}
                        alt={slide.title}
                        fill
                        className="object-cover transition-transform duration-[6000ms] ease-linear overflow-hidden"
                        style={{ transform: index === current ? "scale(1.1)" : "scale(1.0)" }}
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-africa-midnight/60 backdrop-blur-[2px]" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <div className={`max-w-3xl transition-all duration-1000 delay-300 ${index === current ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}>
                            <span className="inline-block bg-africa-red text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-8 shadow-lg shadow-africa-red/20">
                                Tech4Africa Academy
                            </span>
                            <h1 className="text-4xl md:text-7xl font-extrabold text-white uppercase leading-tight mb-8 tracking-tighter drop-shadow-2xl">
                                {slide.title}
                            </h1>
                            <p className="text-slate-200 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
                                {slide.sub}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="#courses"
                                    className="bg-africa-red text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:scale-105 transition active:scale-95 shadow-2xl shadow-africa-red/30"
                                >
                                    View Courses
                                </Link>
                                <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition active:scale-95">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-12 bg-africa-red" : "w-2 bg-white/30 hover:bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
