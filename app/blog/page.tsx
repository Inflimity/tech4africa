import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import PageAnimations from "@/components/effects/PageAnimations";
import Particles from "@/components/effects/Particles";
import FloatingIcons from "@/components/effects/FloatingIcons";

export const metadata: Metadata = {
    title: "Tech4Nigeria | Insights & News",
    description: "Insights and stories from the Nigerian tech space. Stay updated with the latest trends, startup stories, and tech ecosystem developments.",
};

export default function BlogPage() {
    return (
        <div className="bg-africa-soft text-africa-midnight selection:bg-emerald-500 selection:text-white">
            <PageAnimations />
            <Particles />
            <FloatingIcons />
            <Marquee />
            <Navbar />

            {/* Hero */}
            <header className="pt-32 pb-12 px-6 max-w-7xl mx-auto text-center border-b border-africa-border">
                <div data-reveal className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-widest mb-6">
                    Tech4Nigeria
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 text-africa-midnight" data-reveal data-stagger="1">
                    The Pulse of <br /> Nigerian Tech.
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed" data-reveal data-stagger="2">
                    Deep dives, ecosystem reports, and stories from the fastest growing tech hub in Africa.
                </p>
            </header>

            {/* Blog Grid */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Featured Post */}
                    <article className="md:col-span-2 group cursor-pointer" data-reveal="scale-up">
                        <div className="rounded-3xl overflow-hidden mb-6 h-[400px] border border-africa-border shadow-sm group-hover:shadow-xl transition-all duration-300 relative">
                            <Image
                                src="/images/home1.jpeg"
                                alt="Featured Post"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-700"
                            />
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="text-emerald-600">Startups</span>
                            <span className="text-slate-400">Feb 3, 2026</span>
                        </div>
                        <h3 className="text-3xl font-extrabold mb-4 group-hover:text-emerald-600 transition-colors">
                            The Rise of EdTech in Lagos: A 2026 Report
                        </h3>
                        <p className="text-slate-500 leading-relaxed mb-6">
                            How local startups are redefining education through mobile-first learning platforms and community-driven initiatives.
                        </p>
                        <div className="font-bold text-sm underline decoration-emerald-600 underline-offset-4">Read Article</div>
                    </article>

                    {/* Sidebar Posts */}
                    <div className="space-y-12">
                        <article className="group cursor-pointer" data-reveal="fade-left" data-stagger="1">
                            <div className="rounded-2xl overflow-hidden mb-4 h-48 border border-africa-border relative">
                                <Image
                                    src="/images/home2.jpeg"
                                    alt="Blog Post"
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest mb-2 text-emerald-600">Policy</div>
                            <h4 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                                New Tech Visas for Nigerian Talent
                            </h4>
                        </article>

                        <article className="group cursor-pointer" data-reveal="fade-left" data-stagger="2">
                            <div className="rounded-2xl overflow-hidden mb-4 h-48 border border-africa-border relative">
                                <Image
                                    src="/images/home4.jpeg"
                                    alt="Blog Post"
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest mb-2 text-emerald-600">Design</div>
                            <h4 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                                Afro-Futurism in UI/UX Design
                            </h4>
                        </article>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section id="newsletter" className="py-24 px-6 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="text-white" data-reveal>
                            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                Stay Updated
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                                Get the Latest <br />
                                <span className="text-emerald-900">Tech Insights</span>
                            </h2>
                            <p className="text-emerald-100 text-lg leading-relaxed mb-8 max-w-md">
                                Join 5,000+ tech enthusiasts receiving weekly updates on Nigerian startups, ecosystem news, and exclusive content.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium">Weekly ecosystem insights</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium">Exclusive startup stories</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium">No spam, unsubscribe anytime</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl" data-reveal>
                            <h3 className="text-2xl font-extrabold text-africa-midnight mb-2 uppercase tracking-tight">Subscribe Now</h3>
                            <p className="text-slate-500 text-sm mb-8">Get curated tech news delivered to your inbox every week.</p>

                            <form className="space-y-5">
                                <div>
                                    <label htmlFor="fullName" className="block text-[10px] font-black uppercase tracking-widest text-slate-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter your name"
                                        className="w-full px-5 py-4 bg-slate-100 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition placeholder:text-slate-400"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full px-5 py-4 bg-slate-100 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition placeholder:text-slate-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-700 mb-3">Interests (Optional)</label>
                                    <div className="flex flex-wrap gap-2">
                                        <label className="cursor-pointer">
                                            <input type="checkbox" name="interests" value="startups" className="peer sr-only" />
                                            <span className="inline-block px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 peer-checked:bg-emerald-500 peer-checked:text-white peer-checked:border-emerald-500 transition-all hover:border-emerald-400">
                                                Startups
                                            </span>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input type="checkbox" name="interests" value="ai" className="peer sr-only" />
                                            <span className="inline-block px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 peer-checked:bg-emerald-500 peer-checked:text-white peer-checked:border-emerald-500 transition-all hover:border-emerald-400">
                                                AI & ML
                                            </span>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input type="checkbox" name="interests" value="fintech" className="peer sr-only" />
                                            <span className="inline-block px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 peer-checked:bg-emerald-500 peer-checked:text-white peer-checked:border-emerald-500 transition-all hover:border-emerald-400">
                                                Fintech
                                            </span>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input type="checkbox" name="interests" value="policy" className="peer sr-only" />
                                            <span className="inline-block px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 peer-checked:bg-emerald-500 peer-checked:text-white peer-checked:border-emerald-500 transition-all hover:border-emerald-400">
                                                Policy
                                            </span>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input type="checkbox" name="interests" value="design" className="peer sr-only" />
                                            <span className="inline-block px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 peer-checked:bg-emerald-500 peer-checked:text-white peer-checked:border-emerald-500 transition-all hover:border-emerald-400">
                                                Design
                                            </span>
                                        </label>
                                        <label className="cursor-pointer">
                                            <input type="checkbox" name="interests" value="careers" className="peer sr-only" />
                                            <span className="inline-block px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 peer-checked:bg-emerald-500 peer-checked:text-white peer-checked:border-emerald-500 transition-all hover:border-emerald-400">
                                                Careers
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:from-africa-midnight hover:to-slate-800 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-slate-900/30 active:scale-[0.98]"
                                >
                                    Subscribe to Newsletter
                                </button>
                            </form>

                            <p className="text-center text-[10px] text-slate-400 mt-6">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
