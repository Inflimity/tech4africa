"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate signup
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <>
            <Marquee />
            <Navbar />

            <div className="min-h-screen flex items-center justify-center px-6 py-28 md:py-32 bg-africa-soft relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
                    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-africa-midnight/5 rounded-full blur-3xl animate-pulse [animation-delay:0.5s]" />

                    {/* Floating Shapes */}
                    <div className="absolute top-32 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-africa-midnight rounded-full animate-bounce [animation-delay:0.5s]" />
                    <div className="absolute top-1/2 right-20 w-5 h-5 bg-yellow-400/50 rounded-full animate-bounce [animation-delay:0.8s]" />
                </div>

                <div className="w-full max-w-md relative z-10">
                    {/* Logo */}
                    <div className="text-center mb-6 md:mb-8">
                        <Link href="/" className="inline-flex items-center gap-2 text-2xl font-black uppercase tracking-tight group">
                            <Image
                                src="/images/favicon.jpeg"
                                alt="Tech4Africa Logo"
                                width={40}
                                height={40}
                                className="rounded-lg group-hover:scale-110 transition-transform"
                            />
                            <span className="text-africa-midnight">
                                Tech<span className="text-yellow-400">4</span>Africa
                            </span>
                        </Link>
                    </div>

                    {/* Signup Card */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-africa-midnight/10 border border-white/50 p-6 md:p-8 relative overflow-hidden">
                        {/* Card Accent */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />

                        <div className="text-center mb-6">
                            <h1 className="text-2xl md:text-3xl font-black text-africa-midnight mb-2">
                                Join The Future
                            </h1>
                            <p className="text-slate-500 text-sm">
                                Create your account and start building
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-africa-midnight uppercase tracking-wider mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 md:py-4 rounded-xl bg-white border-2 border-slate-200 text-africa-midnight font-medium focus:outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all placeholder:text-slate-400"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-africa-midnight uppercase tracking-wider mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 md:py-4 rounded-xl bg-white border-2 border-slate-200 text-africa-midnight font-medium focus:outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all placeholder:text-slate-400"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-africa-midnight uppercase tracking-wider mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 md:py-4 rounded-xl bg-white border-2 border-slate-200 text-africa-midnight font-medium focus:outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all placeholder:text-slate-400"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-africa-midnight uppercase tracking-wider mb-2">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 md:py-4 rounded-xl bg-white border-2 border-slate-200 text-africa-midnight font-medium focus:outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all placeholder:text-slate-400"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <div className="flex items-start gap-3 pt-1">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="w-4 h-4 mt-0.5 rounded border-slate-300 text-yellow-400 focus:ring-yellow-400"
                                    required
                                />
                                <label htmlFor="terms" className="text-xs text-slate-600 cursor-pointer">
                                    I agree to the{" "}
                                    <Link href="#" className="text-yellow-500 font-bold hover:text-yellow-600 transition-colors">
                                        Terms of Service
                                    </Link>
                                    {" "}and{" "}
                                    <Link href="#" className="text-yellow-500 font-bold hover:text-yellow-600 transition-colors">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 md:py-4 rounded-xl bg-africa-midnight text-white font-black uppercase tracking-widest text-sm hover:bg-black transition-all active:scale-[0.98] shadow-xl shadow-africa-midnight/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group mt-4"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        <span>Creating Account...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Create Account</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-5">
                            <div className="flex-1 h-px bg-slate-200" />
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">or</span>
                            <div className="flex-1 h-px bg-slate-200" />
                        </div>

                        {/* Social Signup */}
                        <button className="w-full py-3 md:py-4 rounded-xl bg-white border-2 border-slate-200 text-africa-midnight font-bold text-sm hover:border-yellow-400 hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span>Continue with Google</span>
                        </button>

                        {/* Login Link */}
                        <p className="text-center mt-6 text-sm text-slate-600">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="text-yellow-500 font-bold hover:text-yellow-600 transition-colors"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>

                    {/* Footer Text */}
                    <p className="text-center mt-4 text-xs text-slate-400">
                        By signing up, you agree to our{" "}
                        <Link href="#" className="underline hover:text-africa-midnight transition-colors">Terms</Link>
                        {" "}and{" "}
                        <Link href="#" className="underline hover:text-africa-midnight transition-colors">Privacy Policy</Link>
                    </p>
                </div>
            </div>
        </>
    );
}
