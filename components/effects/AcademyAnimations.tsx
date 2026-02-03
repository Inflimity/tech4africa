"use client";

import { useEffect, useRef } from "react";

export default function AcademyAnimations() {
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        // ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
        const observerOptions = {
            root: null,
            rootMargin: "-50px 0px -50px 0px",
            threshold: [0, 0.1, 0.25, 0.5]
        };

        // Main reveal observer
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    entry.target.classList.remove("is-leaving");
                } else {
                    // Add leaving class for fade-out effect
                    const boundingRect = entry.target.getBoundingClientRect();
                    if (boundingRect.top < 0) {
                        entry.target.classList.add("is-leaving");
                    }
                    entry.target.classList.remove("is-visible");
                }
            });
        }, observerOptions);

        // ===== ANIMATED COUNTERS =====
        const animateCounter = (element: Element, target: number, suffix: string = "") => {
            let current = 0;
            const increment = target / 60;
            const duration = 2000;
            const stepTime = duration / 60;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    element.textContent = Math.floor(current) + suffix;
                    requestAnimationFrame(() => setTimeout(updateCounter, stepTime));
                } else {
                    element.textContent = target + suffix;
                }
            };
            updateCounter();
        };

        // Counter observer
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target as HTMLElement;
                if (entry.isIntersecting && !el.dataset.animated) {
                    el.dataset.animated = "true";
                    const text = el.textContent || "";
                    const match = text.match(/(\d+)/);
                    if (match) {
                        const number = parseInt(match[1]);
                        const suffix = text.replace(match[1], "");
                        animateCounter(el, number, suffix);
                    }
                }
            });
        }, { threshold: 0.5 });

        // Small delay to ensure DOM is ready
        setTimeout(() => {
            // ===== APPLY ANIMATIONS TO ELEMENTS =====

            // Stats section counters
            document.querySelectorAll("[data-counter]").forEach(el => {
                counterObserver.observe(el);
            });

            // Hero section with zoom-blur
            const heroSection = document.querySelector("[data-hero]");
            if (heroSection) {
                heroSection.classList.add("zoom-blur", "is-visible");
            }

            // Stats items with staggered fade-in
            document.querySelectorAll("[data-stat]").forEach((el, index) => {
                el.classList.add("fade-in-out", `stagger-${index + 1}`);
                revealObserver.observe(el);
            });

            // Mission section with scale-up
            const missionSection = document.querySelector("[data-mission]");
            if (missionSection) {
                missionSection.classList.add("scale-up");
                revealObserver.observe(missionSection);
            }

            // Section headers with fade-left animation
            document.querySelectorAll("[data-section-header]").forEach((el, index) => {
                el.classList.add("fade-left", `stagger-${(index % 3) + 1}`);
                revealObserver.observe(el);
            });

            // Course track cards with alternating slide animations
            document.querySelectorAll("[data-track-card]").forEach((el, index) => {
                el.classList.add(index % 2 === 0 ? "fade-left" : "fade-right");
                el.classList.add(`stagger-${(index % 4) + 1}`);
                revealObserver.observe(el);
            });

            // Catalog cards with staggered pop-in
            document.querySelectorAll("[data-course-card]").forEach((el, index) => {
                el.classList.add("pop-in");
                (el as HTMLElement).style.transitionDelay = `${(index % 8) * 0.05}s`;
                revealObserver.observe(el);
            });

            // Curriculum steps with slide-up-bounce
            document.querySelectorAll("[data-step]").forEach((el, index) => {
                el.classList.add("slide-up-bounce", `stagger-${index + 1}`);
                revealObserver.observe(el);
            });

            // Mentors section with flip-in
            document.querySelectorAll("[data-mentor]").forEach((el, index) => {
                el.classList.add("flip-in", `stagger-${index + 1}`);
                revealObserver.observe(el);
            });

            // Divider bars animation
            document.querySelectorAll("[data-divider]").forEach(el => {
                el.classList.add("divider-grow");
                revealObserver.observe(el);
            });

            // General reveal elements
            document.querySelectorAll("[data-reveal]").forEach((el, index) => {
                const animationType = (el as HTMLElement).dataset.reveal || "reveal-element";
                el.classList.add(animationType);
                if ((el as HTMLElement).dataset.stagger) {
                    el.classList.add(`stagger-${(el as HTMLElement).dataset.stagger}`);
                }
                revealObserver.observe(el);
            });

            // ===== SCROLL PROGRESS INDICATOR =====
            const createScrollProgress = () => {
                // Check if already exists
                if (document.querySelector("[data-scroll-progress]")) return;

                const progressBar = document.createElement("div");
                progressBar.setAttribute("data-scroll-progress", "true");
                progressBar.className = "fixed top-0 left-0 h-1 bg-gradient-to-r from-[#E11D48] to-rose-400 z-[100] transition-all duration-100";
                progressBar.style.width = "0%";
                document.body.appendChild(progressBar);

                const updateProgress = () => {
                    const scrollTop = window.pageYOffset;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollPercent = (scrollTop / docHeight) * 100;
                    progressBar.style.width = `${scrollPercent}%`;
                };

                window.addEventListener("scroll", updateProgress, { passive: true });
            };
            createScrollProgress();

            // ===== NAVBAR SCROLL EFFECT =====
            const navbar = document.querySelector("nav");
            if (navbar) {
                const updateNavbar = () => {
                    const currentScroll = window.pageYOffset;

                    if (currentScroll > 100) {
                        (navbar as HTMLElement).style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
                        (navbar as HTMLElement).style.backdropFilter = "blur(20px)";
                    } else {
                        (navbar as HTMLElement).style.boxShadow = "";
                        (navbar as HTMLElement).style.backdropFilter = "blur(12px)";
                    }
                };

                window.addEventListener("scroll", updateNavbar, { passive: true });
            }

            console.log("✨ Academy scroll animations initialized!");
        }, 100);

        // Cleanup
        return () => {
            revealObserver.disconnect();
            counterObserver.disconnect();
        };
    }, []);

    return null;
}
