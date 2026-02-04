"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/academy", label: "Academy" },
    { href: "/agency", label: "Agency" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <>
            <nav className="fixed top-8 w-full z-50 bg-white/80 backdrop-blur-md border-b border-africa-border px-6 py-4 flex justify-between items-center transition-all duration-300">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-1.5 text-xl font-extrabold uppercase tracking-tight">
                        <Image src="/images/favicon.jpeg" alt="Tech4Africa Logo" width={28} height={28} className="rounded-md" />
                        <span>Tech<span className="text-africa-red">4</span>Afrika</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={isActive(link.href) ? "text-africa-red" : "hover:text-africa-red"}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Link
                    href="/contact"
                    className="hidden md:block bg-africa-midnight text-white px-5 py-2.5 text-xs font-bold rounded-lg hover:bg-africa-red transition"
                >
                    Get Started
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="md:hidden text-africa-midnight focus:outline-none z-[70]"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {!mobileMenu ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Radial Menu */}
            <div className="md:hidden">
                <div className="fixed top-4 right-4 z-[60]">
                    {/* Home */}
                    <Link
                        href="/"
                        onClick={() => setMobileMenu(false)}
                        className={`absolute flex items-center justify-center px-4 py-2 ${isActive("/") ? "bg-africa-red" : "bg-africa-midnight"
                            } text-white rounded-xl shadow-xl font-bold text-xs transition-all duration-500`}
                        style={{
                            transform: mobileMenu ? "translate(-90px, 0px)" : "translate(0, 0) scale(0)",
                            opacity: mobileMenu ? 1 : 0,
                        }}
                    >
                        Home
                    </Link>

                    {/* Academy */}
                    <Link
                        href="/academy"
                        onClick={() => setMobileMenu(false)}
                        className="absolute flex items-center justify-center px-4 py-2 bg-africa-midnight text-white rounded-xl shadow-xl font-bold text-xs transition-all duration-500 delay-75"
                        style={{
                            transform: mobileMenu ? "translate(-120px, 45px)" : "translate(0, 0) scale(0)",
                            opacity: mobileMenu ? 1 : 0,
                        }}
                    >
                        Academy
                    </Link>

                    {/* Agency */}
                    <Link
                        href="/agency"
                        onClick={() => setMobileMenu(false)}
                        className="absolute flex items-center justify-center px-4 py-2 bg-africa-midnight text-white rounded-xl shadow-xl font-bold text-xs transition-all duration-500 delay-100"
                        style={{
                            transform: mobileMenu ? "translate(-135px, 90px)" : "translate(0, 0) scale(0)",
                            opacity: mobileMenu ? 1 : 0,
                        }}
                    >
                        Agency
                    </Link>

                    {/* Events */}
                    <Link
                        href="/events"
                        onClick={() => setMobileMenu(false)}
                        className="absolute flex items-center justify-center px-4 py-2 bg-africa-midnight text-white rounded-xl shadow-xl font-bold text-xs transition-all duration-500 delay-150"
                        style={{
                            transform: mobileMenu ? "translate(-135px, 135px)" : "translate(0, 0) scale(0)",
                            opacity: mobileMenu ? 1 : 0,
                        }}
                    >
                        Events
                    </Link>

                    {/* Blog */}
                    <Link
                        href="/blog"
                        onClick={() => setMobileMenu(false)}
                        className="absolute flex items-center justify-center px-4 py-2 bg-africa-midnight text-white rounded-xl shadow-xl font-bold text-xs transition-all duration-500 delay-200"
                        style={{
                            transform: mobileMenu ? "translate(-120px, 180px)" : "translate(0, 0) scale(0)",
                            opacity: mobileMenu ? 1 : 0,
                        }}
                    >
                        Blog
                    </Link>

                    {/* Gallery */}
                    <Link
                        href="/gallery"
                        onClick={() => setMobileMenu(false)}
                        className="absolute flex items-center justify-center px-4 py-2 bg-africa-midnight text-white rounded-xl shadow-xl font-bold text-xs transition-all duration-500"
                        style={{
                            transform: mobileMenu ? "translate(-90px, 225px)" : "translate(0, 0) scale(0)",
                            opacity: mobileMenu ? 1 : 0,
                            transitionDelay: "250ms",
                        }}
                    >
                        Gallery
                    </Link>

                    {/* Contact */}
                    <Link
                        href="/contact"
                        onClick={() => setMobileMenu(false)}
                        className="absolute flex items-center justify-center px-4 py-2 bg-gradient-to-br from-africa-red to-red-600 text-white rounded-xl shadow-xl font-bold text-xs transition-all duration-500 delay-300"
                        style={{
                            transform: mobileMenu ? "translate(-55px, 265px)" : "translate(0, 0) scale(0)",
                            opacity: mobileMenu ? 1 : 0,
                        }}
                    >
                        Contact
                    </Link>
                </div>

                {/* Backdrop */}
                {mobileMenu && (
                    <div
                        onClick={() => setMobileMenu(false)}
                        className="fixed inset-0 z-[55] bg-africa-midnight/20 backdrop-blur-sm transition-opacity duration-300"
                    />
                )}
            </div>
        </>
    );
}
