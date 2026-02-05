import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Counter from "@/components/ui/Counter";
import Marquee from "@/components/Marquee";
import PageAnimations from "@/components/effects/PageAnimations";
import Particles from "@/components/effects/Particles";
import FloatingIcons from "@/components/effects/FloatingIcons";

export const metadata: Metadata = {
    title: "Tech4Lagos | Community Tech Events",
    description: "Join the premier tech community event in Lagos. Networking, workshops, and innovation sessions for tech enthusiasts and professionals.",
};

const pastEventImages = [
    { src: "/images/event1.jpeg", title: "Hackathon '25", span: "row-span-2 col-span-2" },
    { src: "/images/event2.jpeg" },
    { src: "/images/event3.jpeg" },
    { src: "/images/event4.jpeg", span: "col-span-2" },
];

const whatToExpect = [
    {
        title: "Keynote Sessions",
        description: "Hear from industry leaders, successful founders, and innovators shaping Africa's tech future.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
        ),
        color: "bg-africa-red",
    },
    {
        title: "Hands-On Workshops",
        description: "Build real projects with expert mentors in AI, mobile development, product design, and more.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
        ),
        color: "bg-africa-midnight",
    },
    {
        title: "Networking Lounges",
        description: "Connect with investors, potential co-founders, and talent. Your next big opportunity awaits.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        color: "bg-africa-red",
    },
];

const speakers = [
    { name: "TBA", role: "Tech Founder", img: "/images/event6.jpeg" },
    { name: "TBA", role: "Investor", img: "/images/home1.jpeg" },
    { name: "TBA", role: "AI Expert", img: "/images/home2.jpeg" },
    { name: "TBA", role: "Product Designer", img: "/images/home5.jpeg" },
];

export default function EventsPage() {
    return (
        <div className="bg-slate-50 text-africa-midnight">
            <PageAnimations />
            <Particles />
            <FloatingIcons />
            <Marquee />
            <Navbar />

            {/* Hero */}
            <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
                {/* Background Image */}
                <div data-hero className="absolute inset-0 z-0">
                    <Image src="/images/event5.jpeg" alt="Tech4Lagos Event" fill className="object-cover blur-sm opacity-20" />
                    <div className="absolute inset-0 bg-slate-50/70" />
                </div>

                <div className="relative z-10" data-reveal="scale-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-600 text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                        Tech4Lagos 2026
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 text-africa-midnight leading-tight">
                        Network Event For Founders, Startups <br />
                        <span className="text-purple-600">And Tech Enablement</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-4 leading-relaxed font-medium">
                        Welcome to Tech4Lagos, Africa&apos;s biggest gathering of founders, startups, investors, and innovators.
                    </p>
                    <p className="text-md text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Connect, learn, and grow with the best minds in African tech. Join thousands for an unforgettable experience.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-sm hover:scale-105 transition shadow-xl shadow-purple-600/20">
                            Get Early Access
                        </button>
                        <button className="bg-africa-midnight text-white border border-africa-midnight px-8 py-4 rounded-xl font-bold text-sm hover:bg-purple-600 hover:border-purple-600 transition">
                            Sponsor Event
                        </button>
                    </div>
                </div>
            </header>

            {/* Past Events Gallery */}
            <section className="py-24 px-6 bg-white border-y border-africa-border">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-extrabold mb-12 text-center" data-section-header>Past Highlights</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                        {pastEventImages.map((event, index) => (
                            <div key={index} className={`group relative overflow-hidden rounded-3xl ${event.span || ''}`} data-reveal="pop-in" data-stagger={index + 1}>
                                <Image
                                    src={event.src}
                                    alt={event.title || "Event"}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                />
                                {event.title && (
                                    <div className="absolute inset-0 bg-black/30 p-8 flex items-end opacity-0 group-hover:opacity-100 transition duration-300">
                                        <span className="text-white font-bold text-xl">{event.title}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-24 bg-africa-midnight text-white px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <div>
                        <div className="text-5xl font-black text-purple-600 mb-2" data-counter>
                            5000+
                        </div>
                        <div className="text-xs font-bold uppercase tracking-widest">Attendees</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black text-purple-600 mb-2" data-counter>
                            50+
                        </div>
                        <div className="text-xs font-bold uppercase tracking-widest">Speakers</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black text-purple-600 mb-2" data-counter>
                            20+
                        </div>
                        <div className="text-xs font-bold uppercase tracking-widest">Workshops</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black text-purple-600 mb-2" data-counter>
                            100%
                        </div>
                        <div className="text-xs font-bold uppercase tracking-widest">Energy</div>
                    </div>
                </div>
            </section>

            {/* What to Expect */}
            <section className="py-24 px-6 bg-purple-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16" data-reveal>
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-600 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                            Event Highlights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-africa-midnight" data-section-header>What to Expect</h2>
                        <p className="text-slate-500 max-w-xl mx-auto">Three days of inspiration, learning, and networking.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {whatToExpect.map((item, index) => (
                            <div key={item.title} className="bg-white p-8 rounded-3xl border border-africa-border shadow-lg hover:shadow-xl transition-shadow" data-reveal="slide-up-bounce" data-stagger={index + 1}>
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-africa-midnight">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Speakers */}
            <section className="py-24 px-6 bg-white border-y border-africa-border">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-africa-midnight text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                            Speakers
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-africa-midnight" data-section-header>Featured Speakers</h2>
                        <p className="text-slate-500 max-w-xl mx-auto">Learn from the best minds in African tech.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {speakers.map((speaker, index) => (
                            <div key={speaker.role} className="text-center group" data-reveal="flip-in" data-stagger={index + 1}>
                                <div className="relative mb-4 rounded-3xl overflow-hidden">
                                    <Image
                                        src={speaker.img}
                                        alt={speaker.name}
                                        width={300}
                                        height={300}
                                        className="w-full aspect-square object-cover group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition" />
                                </div>
                                <h4 className="font-bold text-africa-midnight">{speaker.name}</h4>
                                <p className="text-xs text-slate-400">{speaker.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
