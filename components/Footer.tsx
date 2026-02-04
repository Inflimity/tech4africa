import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white pt-24 pb-12 px-6 border-t border-africa-border">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-20">
                    <div className="col-span-2">
                        <div className="text-xl font-black mb-6 uppercase tracking-tighter flex items-center gap-1.5">
                            <Image src="/images/favicon.jpeg" alt="Tech4Africa Logo" width={28} height={28} className="rounded-md" />
                            <span>Tech<span className="text-africa-red">4</span>Afrika</span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                            An integrated ecosystem driving Africa&apos;s digital future through education, innovation, and community.
                        </p>
                    </div>

                    <div>
                        <h6 className="font-bold text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6">
                            Ecosystem
                        </h6>
                        <ul className="space-y-4 text-xs font-bold uppercase">
                            <li>
                                <Link href="/academy" className="hover:text-africa-red transition">
                                    Academy
                                </Link>
                            </li>
                            <li>
                                <Link href="/agency" className="hover:text-africa-red transition">
                                    Agency
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="hover:text-africa-red transition">
                                    Tech4Lagos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-bold text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6">
                            Resources
                        </h6>
                        <ul className="space-y-4 text-xs font-bold uppercase">
                            <li>
                                <Link href="/blog" className="hover:text-africa-red transition">
                                    Tech4Nigeria
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-africa-red transition">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-africa-red transition">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2">
                        <h6 className="font-bold text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6">
                            Stay Connected
                        </h6>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="bg-africa-soft border border-africa-border px-4 py-3 rounded-xl text-xs focus:outline-none focus:border-africa-red"
                            />
                            <button className="bg-africa-midnight text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-africa-red transition shadow-lg shadow-africa-midnight/10">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-africa-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        © 2026 Tech4Africa Universe. All Rights Reserved.
                    </span>
                    <div className="flex gap-8">
                        <Link
                            href="#"
                            className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-africa-midnight"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="#"
                            className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-africa-midnight"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
