import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-africa-midnight pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-africa-red rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-20">
                    <div className="col-span-2">
                        <div className="text-xl font-black mb-6 uppercase tracking-tighter flex items-center gap-1.5 text-white">
                            <Image src="/images/favicon.jpeg" alt="Tech4Africa Logo" width={28} height={28} className="rounded-md" />
                            <span>Tech<span className="text-yellow-400">4</span>Africa</span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                            An integrated ecosystem driving Africa&apos;s digital future through education, innovation, and community. Reimagining what&apos;s possible from Africa, for the world.
                        </p>
                    </div>

                    <div>
                        <h6 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6">
                            Ecosystem
                        </h6>
                        <ul className="space-y-4 text-xs font-bold uppercase text-slate-300">
                            <li>
                                <Link href="/academy" className="hover:text-africa-red transition flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-africa-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Academy
                                </Link>
                            </li>
                            <li>
                                <Link href="/agency" className="hover:text-africa-red transition flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-africa-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Agency
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="hover:text-africa-red transition flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-africa-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Tech4Lagos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6">
                            Resources
                        </h6>
                        <ul className="space-y-4 text-xs font-bold uppercase text-slate-300">
                            <li>
                                <Link href="/blog" className="hover:text-africa-red transition flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-africa-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Tech4Nigeria
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-africa-red transition flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-africa-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-africa-email transition flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-africa-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2">
                        <h6 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6">
                            Stay Connected
                        </h6>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-xs text-white focus:outline-none focus:border-africa-red transition-all"
                            />
                            <button className="bg-yellow-400 text-africa-midnight py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-400/20 active:scale-95">
                                Join Ecosystem
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        © 2026 Tech4Africa Universe. All Rights Reserved.
                    </span>
                    <div className="flex gap-8">
                        <Link
                            href="#"
                            className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-white transition"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-white transition"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
