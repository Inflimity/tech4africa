import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import PageAnimations from "@/components/effects/PageAnimations";
import Particles from "@/components/effects/Particles";
import FloatingIcons from "@/components/effects/FloatingIcons";

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
            <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
                <div data-hero className="absolute inset-0 z-0 opacity-10">
                    <Image src="/images/agency1.jpeg" alt="Agency Background" fill className="object-cover" />
                </div>

                <div className="relative z-10 text-center" data-reveal>
                    <span className="inline-block py-1 px-3 rounded-full bg-africa-red text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                        Tech4Agency
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
                        Building Websites, Mobile Application <br />
                        <span className="text-africa-red">For Startups & Fixing Any Tech Related Issues.</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-6 leading-relaxed">
                        Welcome to Tech4Agency, we build websites, mobile applications for startups and we fix all tech related issues.
                    </p>
                    <p className="text-md text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        We provide solutions in software development, data, design, AI, and more — built for Africans by African experts.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-africa-red text-white py-4 px-8 rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition shadow-lg shadow-africa-red/20 text-xs"
                    >
                        Book a Consultation
                    </Link>
                </div>
            </header>

            {/* Services */}
            <section className="py-20 px-6 bg-slate-900 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16" data-reveal>
                        <span className="inline-block py-1 px-3 rounded-full bg-africa-red/20 text-africa-red text-[10px] font-bold uppercase tracking-widest mb-4">
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
                                className="p-8 rounded-3xl bg-africa-midnight border border-white/10 hover:border-africa-red transition-colors group relative overflow-hidden"
                            >
                                {service.bg && (
                                    <div className="absolute inset-0 z-0 opacity-10">
                                        <Image src={service.bg} alt={service.title} fill className="object-cover" />
                                    </div>
                                )}
                                <div className="relative z-10">
                                    <div className="mb-6">{service.icon}</div>
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
                        <div className="absolute inset-0 bg-africa-red/20 rounded-[40px] rotate-3 transform scale-95 blur-xl" />
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                            <Image src="/images/home4.jpeg" alt="Tech4Agency Team" width={600} height={400} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-africa-midnight/50 to-transparent" />
                        </div>
                    </div>

                    <div data-reveal="fade-right">
                        <span className="inline-block py-1 px-3 rounded-full bg-africa-red text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                            Built for Africa. <br /><span className="text-africa-red">By African Experts.</span>
                        </h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            We understand the unique challenges and opportunities of the African market. Our team combines local insights with global standards to deliver solutions that truly work.
                        </p>

                        <div className="space-y-6">
                            {whyUs.map((item, index) => (
                                <div key={item.title} className="flex items-start gap-4" data-reveal data-stagger={index + 1}>
                                    <div className="w-10 h-10 bg-africa-red rounded-xl flex items-center justify-center text-white font-bold shrink-0">
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
                    <div className="w-12 h-1 bg-africa-red mx-auto" data-divider />
                </div>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {process.map((item, index) => (
                        <div key={item.step} data-step>
                            <div className={`w-16 h-16 ${item.highlight ? 'bg-africa-red' : 'bg-white/10'} rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6`}>
                                {item.step}
                            </div>
                            <h4 className="font-bold mb-2">{item.title}</h4>
                            <p className="text-xs text-slate-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
