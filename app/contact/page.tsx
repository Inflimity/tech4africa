import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import PageAnimations from "@/components/effects/PageAnimations";

export const metadata: Metadata = {
    title: "Contact Us | Tech4Afrika",
    description: "Get in touch with Tech4Afrika. We're here to help with your tech education, development projects, and event inquiries.",
};

const heroSlides = [
    { img: "/images/home1.jpeg", title: "We are Listening", sub: "Our team is ready to help you map out your tech career." },
    { img: "/images/home4.jpeg", title: "Visit Us", sub: "Experience our world-class campus in Lagos." },
    { img: "/images/home5.jpeg", title: "Start Today", sub: "Your journey to a global tech career begins here." },
];

export default function ContactPage() {
    return (
        <>
            <PageAnimations />
            <Marquee />
            <Navbar />

            {/* Hero Carousel */}
            <section className="w-full overflow-hidden">
                <div data-hero className="relative h-[40vh] w-full overflow-hidden bg-africa-midnight border-b border-africa-border shadow-2xl">
                    {/* Static hero - first slide */}
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={heroSlides[0].img}
                            alt={heroSlides[0].title}
                            fill
                            className="object-cover blur-[2px]"
                            priority
                        />
                        <div className="absolute inset-0 bg-africa-midnight/50" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                            <div className="max-w-3xl" data-reveal="scale-up">
                                <h1 className="text-2xl md:text-6xl font-extrabold text-white uppercase leading-none mb-4 md:mb-6 tracking-tighter drop-shadow-lg">
                                    {heroSlides[0].title}
                                </h1>
                                <p className="text-slate-100 text-sm md:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                                    {heroSlides[0].sub}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 w-full">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center" data-reveal="fade-right">
                        <span className="text-africa-red font-bold text-xs uppercase tracking-widest mb-4 block">Get in Touch</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
                            Start your <br /> <span className="text-africa-red">Transformation</span>.
                        </h1>
                        <p className="text-slate-600 text-lg mb-12 max-w-md leading-relaxed">
                            Have questions about our curriculum or pricing? Our team is ready to help you map out your tech career.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4" data-reveal data-stagger="1">
                                <div className="w-12 h-12 bg-white border border-africa-border rounded-xl flex items-center justify-center text-africa-red shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Email Us</h4>
                                    <p className="text-slate-500">admissions@tech4africa.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4" data-reveal data-stagger="2">
                                <div className="w-12 h-12 bg-white border border-africa-border rounded-xl flex items-center justify-center text-africa-red shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Call Us</h4>
                                    <p className="text-slate-500">+234 (0) 800 TECH AFRICA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-10 rounded-[2.5rem] border border-africa-border shadow-xl shadow-africa-midnight/5" data-reveal="fade-left">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-africa-soft border border-africa-border rounded-xl px-4 py-3 outline-none input-field font-semibold focus:border-africa-red transition"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-africa-soft border border-africa-border rounded-xl px-4 py-3 outline-none input-field font-semibold focus:border-africa-red transition"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-africa-soft border border-africa-border rounded-xl px-4 py-3 outline-none input-field font-semibold focus:border-africa-red transition"
                                    placeholder="jane@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Interest</label>
                                <select className="w-full bg-africa-soft border border-africa-border rounded-xl px-4 py-3 outline-none input-field font-semibold text-slate-600 focus:border-africa-red transition">
                                    <option>General Inquiry</option>
                                    <option>Admissions</option>
                                    <option>Partnership</option>
                                    <option>Support</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                                <textarea
                                    className="w-full bg-africa-soft border border-africa-border rounded-xl px-4 py-3 outline-none input-field font-semibold h-32 resize-none focus:border-africa-red transition"
                                    placeholder="Tell us about yourself..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-africa-red text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-red-700 transition shadow-lg shadow-africa-red/25"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
