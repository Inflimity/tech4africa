import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Tech4Agency | Digital Solutions",
    description: "Building websites, mobile applications for startups and fixing all tech related issues. Software development, data, design, AI solutions built for Africans by African experts.",
};

const services = [
    { title: "Mobile Development", description: "Native iOS and Android applications built with Flutter and React Native. High performance, smooth animations." },
    { title: "Web Development", description: "Responsive, SEO-optimized websites and web apps using React, Next.js, and modern CSS frameworks." },
    { title: "Cloud Solutions", description: "Scalable backend architecture, API development, and secure hosting on AWS and Azure." },
    { title: "AI Solutions", description: "Machine learning models, chatbots, and intelligent automation to transform your business operations." },
    { title: "Data Analytics", description: "Unlock insights from your data with dashboards, reporting tools, and predictive analytics." },
    { title: "Design & Branding", description: "UI/UX design, brand identity, and visual systems that make your product stand out." },
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
            <Navbar />

            {/* Hero */}
            <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <Image src="/images/agency1.jpeg" alt="Agency Background" fill className="object-cover" />
                </div>

                <div className="relative z-10 text-center">
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
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-africa-red/20 text-africa-red text-[10px] font-bold uppercase tracking-widest mb-4">
                            What We Do
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Services</h2>
                        <p className="text-slate-400 max-w-xl mx-auto">Solutions built for African businesses by African experts.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.title} className="p-8 rounded-3xl bg-africa-midnight border border-white/10 hover:border-africa-red transition-colors group">
                                <div className="mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6 bg-africa-midnight">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-africa-red/20 rounded-[40px] rotate-3 transform scale-95 blur-xl" />
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                            <Image src="/images/home4.jpeg" alt="Tech4Agency Team" width={600} height={400} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-africa-midnight/50 to-transparent" />
                        </div>
                    </div>

                    <div>
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
                            {whyUs.map((item) => (
                                <div key={item.title} className="flex items-start gap-4">
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
                    <h2 className="text-3xl font-extrabold mb-4">How We Work</h2>
                    <div className="w-12 h-1 bg-africa-red mx-auto" />
                </div>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {process.map((item) => (
                        <div key={item.step}>
                            <div className={`w-16 h-16 ${item.highlight ? 'bg-africa-red' : 'bg-white/10'} rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6`}>
                                {item.step}
                            </div>
                            <h4 className="font-bold mb-2">{item.title}</h4>
                            <p className="text-xs text-slate-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-africa-midnight pt-24 pb-12 px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-20">
                        <div className="col-span-2">
                            <div className="text-xl font-black mb-6 uppercase tracking-tighter text-white">
                                Tech<span className="text-africa-red">4</span>Afrika
                            </div>
                            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                                An integrated ecosystem driving Africa&apos;s digital future through education, innovation, and community.
                            </p>
                        </div>
                        <div>
                            <h6 className="font-bold text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-6">Ecosystem</h6>
                            <ul className="space-y-4 text-xs font-bold uppercase text-slate-300">
                                <li><Link href="/academy" className="hover:text-africa-red transition">Academy</Link></li>
                                <li><Link href="/agency" className="hover:text-africa-red transition">Agency</Link></li>
                                <li><Link href="/events" className="hover:text-africa-red transition">Tech4Lagos</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-bold text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-6">Resources</h6>
                            <ul className="space-y-4 text-xs font-bold uppercase text-slate-300">
                                <li><Link href="/blog" className="hover:text-africa-red transition">Tech4Nigeria</Link></li>
                                <li><Link href="/contact" className="hover:text-africa-red transition">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            © 2026 Tech4Agency. Part of Tech4Afrika.
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
