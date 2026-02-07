import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import PageAnimations from "@/components/effects/PageAnimations";
import Particles from "@/components/effects/Particles";
import FloatingIcons from "@/components/effects/FloatingIcons";
import AgencyHero from "@/components/ui/AgencyHero";

export const metadata: Metadata = {
    title: "Tech4Agency | Digital Solutions",
    description: "Building websites, mobile applications for startups and fixing all tech related issues. Software development, data, design, AI solutions built for Africans by African experts.",
};

const services = [
    {
        title: "Mobile Development",
        description: "Native iOS and Android applications built with Flutter and React Native. High performance, smooth animations.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        ),
        bg: "/images/home2.jpeg",
    },
    {
        title: "Web Development",
        description: "Responsive, SEO-optimized websites and web apps using React, Next.js, and modern CSS frameworks.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
        ),
        bg: "/images/home1.jpeg",
    },
    {
        title: "Cloud Solutions",
        description: "Scalable backend architecture, API development, and secure hosting on AWS and Azure.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
        ),
    },
    {
        title: "AI Solutions",
        description: "Machine learning models, chatbots, and intelligent automation to transform your business operations.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
            </svg>
        ),
    },
    {
        title: "Data Analytics",
        description: "Unlock insights from your data with dashboards, reporting tools, and predictive analytics.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        ),
    },
    {
        title: "Design & Branding",
        description: "UI/UX design, brand identity, and visual systems that make your product stand out.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
        bg: "/images/home5.jpeg",
    },
];

const whyUs = [
    { title: "Local Expertise", description: "Deep understanding of African markets and user behavior." },
    { title: "Global Standards", description: "Industry best practices and cutting-edge technologies." },
    { title: "End-to-End Support", description: "From concept to launch and beyond, we've got you covered." },
];

const process = [
    { step: "1", title: "Discovery", description: "We analyze your requirements and define the scope." },
    { step: "2", title: "Design", description: "UI/UX prototyping to visualize the final product." },
    { step: "3", title: "Build", description: "Agile development with regular progress updates." },
    { step: "4", title: "Launch", description: "Deployment, testing, and post-launch support.", highlight: true },
];

export default function AgencyPage() {
    return (
        <div className="bg-africa-midnight text-white">
            <PageAnimations />
            <Particles />
            <FloatingIcons />
            <Marquee />
            <Navbar />

            {/* Hero */}
            <header className="relative w-full h-screen overflow-hidden bg-africa-midnight">
                <AgencyHero slides={[
                    {
                        img: "/images/agency1.jpeg",
                        title: "Building Digital Products For Startups",
                        sub: "Transforming ambitious ideas into elite digital platforms with cutting-edge engineering.",
                        cta: "Get Started",
                        href: "/contact"
                    },
                    {
                        img: "/images/home6.jpeg",
                        title: "Mobile Application Mastery",
                        sub: "High-performance iOS and Android apps that scale with your business vision.",
                        cta: "Discuss Project",
                        href: "/contact"
                    },
                    {
                        img: "/images/home5.jpeg",
                        title: "Technical Support & Problem Solving",
                        sub: "From legacy code fixes to modern infrastructure management, we handle the tech debt so you don't have to.",
                        cta: "Fix My Issue",
                        href: "/contact"
                    }
                ]} />
            </header>

            {/* Services */}
            <section className="py-20 px-6 bg-slate-900 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16" data-reveal>
                        <span className="inline-block py-1 px-3 rounded-full bg-africa-yellow/20 text-africa-yellow text-[10px] font-bold uppercase tracking-widest mb-4">
                            What We Do
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4" data-section-header>Our Services</h2>
                        <p className="text-slate-400 max-w-xl mx-auto">Solutions built for African businesses by African experts.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                data-track-card
                                className="p-8 rounded-3xl bg-africa-midnight border border-white/10 hover:border-africa-yellow transition-colors group relative overflow-hidden"
                            >
                                {service.bg && (
                                    <div className="absolute inset-0 z-0 opacity-10">
                                        <Image src={service.bg} alt={service.title} fill className="object-cover" />
                                    </div>
                                )}
                                <div className="relative z-10">
                                    <div className="mb-6 text-africa-yellow">{service.icon}</div>
                                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6 bg-africa-midnight">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative" data-reveal="fade-left">
                        <div className="absolute inset-0 bg-africa-yellow/20 rounded-[40px] rotate-3 transform scale-95 blur-xl" />
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                            <Image src="/images/home4.jpeg" alt="Tech4Agency Team" width={600} height={400} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-africa-midnight/50 to-transparent" />
                        </div>
                    </div>

                    <div data-reveal="fade-right">
                        <span className="inline-block py-1 px-3 rounded-full bg-africa-yellow text-africa-midnight text-[10px] font-bold uppercase tracking-widest mb-6">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                            Built for Africa. <br /><span className="text-africa-yellow">By African Experts.</span>
                        </h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            We understand the unique challenges and opportunities of the African market. Our team combines local insights with global standards to deliver solutions that truly work.
                        </p>

                        <div className="space-y-6">
                            {whyUs.map((item, index) => (
                                <div key={item.title} className="flex items-start gap-4" data-reveal data-stagger={index + 1}>
                                    <div className="w-10 h-10 bg-africa-yellow rounded-xl flex items-center justify-center text-africa-midnight font-bold shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-400">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold mb-4" data-section-header>How We Work</h2>
                    <div className="w-12 h-1 bg-africa-yellow mx-auto" data-divider />
                </div>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {process.map((item, index) => (
                        <div key={item.step} data-step>
                            <div className={`w-16 h-16 ${item.highlight ? 'bg-africa-yellow text-africa-midnight' : 'bg-white/10'} rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6`}>
                                {item.step}
                            </div>
                            <h4 className="font-bold mb-2">{item.title}</h4>
                            <p className="text-xs text-slate-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="py-24 px-6 bg-slate-900 border-t border-white/5 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-africa-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-africa-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16" data-reveal>
                        <span className="inline-block py-1 px-3 rounded-full bg-africa-yellow/20 text-africa-yellow text-[10px] font-bold uppercase tracking-widest mb-4">
                            Get In Touch
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4" data-section-header>Let&apos;s Build Together</h2>
                        <p className="text-slate-400 max-w-xl mx-auto">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-12">
                        {/* Left - Contact Info */}
                        <div className="md:col-span-2 space-y-8" data-reveal>
                            <div className="bg-africa-midnight border border-white/10 rounded-3xl p-8">
                                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-africa-yellow/20 rounded-2xl flex items-center justify-center text-africa-yellow shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Email</p>
                                            <a href="mailto:hello@tech4agency.com" className="text-white hover:text-africa-yellow transition">hello@tech4agency.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-africa-yellow/20 rounded-2xl flex items-center justify-center text-africa-yellow shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Phone</p>
                                            <a href="tel:+2348012345678" className="text-white hover:text-africa-yellow transition">+234 801 234 5678</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-africa-yellow/20 rounded-2xl flex items-center justify-center text-africa-yellow shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Location</p>
                                            <p className="text-white">Lagos, Nigeria</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 bg-white/5 hover:bg-africa-yellow hover:text-africa-midnight border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/5 hover:bg-africa-yellow hover:text-africa-midnight border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/5 hover:bg-africa-yellow hover:text-africa-midnight border border-white/10 rounded-2xl flex items-center justify-center transition-all duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Right - Form */}
                        <div className="md:col-span-3 bg-africa-midnight border border-white/10 rounded-3xl p-10" data-reveal>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 bg-slate-800/50 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-africa-yellow focus:border-transparent transition placeholder:text-slate-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-4 bg-slate-800/50 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-africa-yellow focus:border-transparent transition placeholder:text-slate-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Company (Optional)</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            placeholder="Your Company"
                                            className="w-full px-5 py-4 bg-slate-800/50 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-africa-yellow focus:border-transparent transition placeholder:text-slate-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="budget" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Estimated Budget</label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            className="w-full px-5 py-4 bg-slate-800/50 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-africa-yellow focus:border-transparent transition appearance-none cursor-pointer"
                                            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                                        >
                                            <option value="">Select budget range...</option>
                                            <option value="under-500k">Under ₦500,000</option>
                                            <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                                            <option value="1m-5m">₦1,000,000 - ₦5,000,000</option>
                                            <option value="5m-10m">₦5,000,000 - ₦10,000,000</option>
                                            <option value="above-10m">Above ₦10,000,000</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Service Needed</label>
                                    <select
                                        id="service"
                                        name="service"
                                        className="w-full px-5 py-4 bg-slate-800/50 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-africa-yellow focus:border-transparent transition appearance-none cursor-pointer"
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                                    >
                                        <option value="">Choose a service...</option>
                                        <option value="web">Web Development</option>
                                        <option value="mobile">Mobile Development</option>
                                        <option value="cloud">Cloud Solutions</option>
                                        <option value="ai">AI Solutions</option>
                                        <option value="data">Data Analytics</option>
                                        <option value="design">Design & Branding</option>
                                        <option value="support">Technical Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Project Details</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Tell us about your project, goals, and timeline..."
                                        className="w-full px-5 py-4 bg-slate-800/50 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-africa-yellow focus:border-transparent transition placeholder:text-slate-500 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-africa-yellow text-africa-midnight py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-lg shadow-africa-yellow/20 active:scale-[0.98]"
                                >
                                    Send Message
                                </button>

                                <p className="text-center text-[10px] text-slate-500">
                                    By submitting, you agree to our <Link href="/terms" className="text-africa-yellow hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-africa-yellow hover:underline">Privacy Policy</Link>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
