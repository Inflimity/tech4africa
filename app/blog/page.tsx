import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
    title: "Tech4Nigeria | Insights & News",
    description: "Insights and stories from the Nigerian tech space. Stay updated with the latest trends, startup stories, and tech ecosystem developments.",
};

export default function BlogPage() {
    return (
        <div className="bg-africa-soft text-africa-midnight selection:bg-africa-green selection:text-white">
            <Marquee />
            <Navbar />

            {/* Hero */}
            <header className="pt-32 pb-12 px-6 max-w-7xl mx-auto text-center border-b border-africa-border">
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-widest mb-6">
                    Tech4Nigeria
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 text-africa-midnight">
                    The Pulse of <br /> Nigerian Tech.
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Deep dives, ecosystem reports, and stories from the fastest growing tech hub in Africa.
                </p>
            </header>

            {/* Blog Grid */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Featured Post */}
                    <article className="md:col-span-2 group cursor-pointer">
                        <div className="rounded-3xl overflow-hidden mb-6 h-[400px] border border-africa-border shadow-sm group-hover:shadow-xl transition-all duration-300 relative">
                            <Image
                                src="/images/home1.jpeg"
                                alt="Featured Post"
                                fill
                                className="object-cover group-hover:scale-105 transition duration-700"
                            />
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="text-green-600">Startups</span>
                            <span className="text-slate-400">Feb 3, 2026</span>
                        </div>
                        <h3 className="text-3xl font-extrabold mb-4 group-hover:text-green-600 transition-colors">
                            The Rise of EdTech in Lagos: A 2026 Report
                        </h3>
                        <p className="text-slate-500 leading-relaxed mb-6">
                            How local startups are redefining education through mobile-first learning platforms and community-driven initiatives.
                        </p>
                        <div className="font-bold text-sm underline decoration-green-600 underline-offset-4">Read Article</div>
                    </article>

                    {/* Sidebar Posts */}
                    <div className="space-y-12">
                        <article className="group cursor-pointer">
                            <div className="rounded-2xl overflow-hidden mb-4 h-48 border border-africa-border relative">
                                <Image
                                    src="/images/home2.jpeg"
                                    alt="Blog Post"
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest mb-2 text-green-600">Policy</div>
                            <h4 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                                New Tech Visas for Nigerian Talent
                            </h4>
                        </article>

                        <article className="group cursor-pointer">
                            <div className="rounded-2xl overflow-hidden mb-4 h-48 border border-africa-border relative">
                                <Image
                                    src="/images/home4.jpeg"
                                    alt="Blog Post"
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest mb-2 text-green-600">Design</div>
                            <h4 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                                Afro-Futurism in UI/UX Design
                            </h4>
                        </article>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
