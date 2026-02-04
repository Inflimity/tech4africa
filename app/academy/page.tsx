import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import PageAnimations from "@/components/effects/PageAnimations";
import Particles from "@/components/effects/Particles";
import FloatingIcons from "@/components/effects/FloatingIcons";
import AcademyHero from "@/components/ui/AcademyHero";

export const metadata: Metadata = {
    title: "Tech4Africa Academy | Professional Dev Training",
    description: "Master the code with intensive Full-Stack training for the next generation. Web development, mobile apps, data science, cybersecurity and more.",
};

const slides = [
    { img: "/images/home1.jpeg", title: "Master the Code.", sub: "Intensive Full-Stack training for the next generation." },
    { img: "/images/home2.jpeg", title: "Trade the Global Markets.", sub: "Expert Forex & Crypto strategies from professional traders." },
    { img: "/images/home5.jpeg", title: "Secure the Network.", sub: "Master Cybersecurity and Infrastructure defense." },
    { img: "/images/home4.jpeg", title: "Analyze the Future.", sub: "Harness the power of Data Science and AI logic." },
    { img: "/images/home6.jpeg", title: "Innovate on Mobile.", sub: "Build world-class apps for iOS and Android devices." },
];

const courses = [
    { t: "Web Development", d: "5 Months • ₦350,000", color: "text-orange-500", hover: "hover:border-orange-500" },
    { t: "App Development", d: "5 Months • ₦450,000", color: "text-sky-500", hover: "hover:border-sky-500" },
    { t: "Full Stack Development", d: "5 Months • ₦350,000", color: "text-yellow-500", hover: "hover:border-yellow-500" },
    { t: "Cloud Engineering", d: "3 Months • ₦250,000", color: "text-blue-500", hover: "hover:border-blue-500" },
    { t: "AWS Computing", d: "3 Months • ₦200,000", color: "text-orange-600", hover: "hover:border-orange-600" },
    { t: "DevOps", d: "2 Months • ₦250,000", color: "text-slate-500", hover: "hover:border-slate-500" },
    { t: "Mobile Development", d: "5 Months • ₦450,000", color: "text-sky-600", hover: "hover:border-sky-600" },
    { t: "Software Testing", d: "3 Months • ₦350,000", color: "text-teal-500", hover: "hover:border-teal-500" },
    { t: "Game Development (C++)", d: "4 Months • ₦450,000", color: "text-purple-600", hover: "hover:border-purple-600" },
    { t: "Cybersecurity", d: "5 Months • ₦350,000", color: "text-red-600", hover: "hover:border-red-600" },
    { t: "UI/UX Design", d: "3 Months • ₦250,000", color: "text-pink-500", hover: "hover:border-pink-500" },
    { t: "Data Analysis", d: "3 Months • ₦250,000", color: "text-indigo-500", hover: "hover:border-indigo-500" },
    { t: "Data Science", d: "4 Months • ₦300,000", color: "text-indigo-600", hover: "hover:border-indigo-600" },
    { t: "Digital Marketing", d: "3 Months • ₦250,000", color: "text-blue-400", hover: "hover:border-blue-400" },
    { t: "Forex Trading", d: "3 Months • ₦250,000", color: "text-emerald-500", hover: "hover:border-emerald-500" },
    { t: "Crypto Trading", d: "3 Months • ₦250,000", color: "text-amber-500", hover: "hover:border-amber-500" },
    { t: "Project Management", d: "3 Months • ₦250,000", color: "text-gray-600", hover: "hover:border-gray-600" },
    { t: "Database Management", d: "4 Months • ₦250,000", color: "text-cyan-600", hover: "hover:border-cyan-600" },
    { t: "Product Management", d: "3 Months • ₦250,000", color: "text-rose-500", hover: "hover:border-rose-500" },
    { t: "Business Analytics", d: "3 Months • ₦250,000", color: "text-violet-500", hover: "hover:border-violet-500" },
    { t: "Data Engineering", d: "5 Months • ₦350,000", color: "text-blue-700", hover: "hover:border-blue-700" },
    { t: "Data Governance", d: "4 Months • ₦300,000", color: "text-gray-500", hover: "hover:border-gray-500" },
    { t: "Blockchain Development", d: "5 Months • ₦400,000", color: "text-amber-600", hover: "hover:border-amber-600" },
    { t: "ICT Essentials", d: "2 Months • ₦200,000", color: "text-slate-600", hover: "hover:border-slate-600" },
    { t: "Technical Writing", d: "2 Months • ₦100,000", color: "text-zinc-500", hover: "hover:border-zinc-500" },
    { t: "Tech Sales", d: "2 Months • ₦150,000", color: "text-lime-600", hover: "hover:border-lime-600" },
    { t: "Graphic Design", d: "2 Months • ₦150,000", color: "text-fuchsia-500", hover: "hover:border-fuchsia-500" },
    { t: "Virtual Assistant", d: "2 Months • ₦150,000", color: "text-pink-400", hover: "hover:border-pink-400" },
    { t: "Artificial Intelligence", d: "5 Months • ₦250,000", color: "text-purple-500", hover: "hover:border-purple-500" },
];

const mentors = [
    { name: "Bamidele Samson", role: "Fullstack Lead", img: "https://i.pravatar.cc/300?img=12" },
    { name: "Sarah Chen", role: "Data Scientist", img: "https://i.pravatar.cc/300?img=11" },
    { name: "Ibrahim Musa", role: "Trading Strategist", img: "https://i.pravatar.cc/300?img=33" },
];

export default function AcademyPage() {
    return (
        <>
            <PageAnimations />
            <Particles />
            <FloatingIcons />
            <Marquee />
            <Navbar />

            {/* Hero Slider Section */}
            <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto overflow-hidden">
                <div data-hero className="relative h-[500px] md:h-[650px] w-full rounded-[2.5rem] overflow-hidden border border-africa-border shadow-2xl">
                    <AcademyHero slides={slides} />
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-africa-midnight py-16 px-6 border-y border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center" data-stat>
                        <div className="text-africa-red text-3xl font-extrabold mb-1" data-counter>98%</div>
                        <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Success Rate</div>
                    </div>
                    <div className="text-center border-l border-white/10" data-stat>
                        <div className="text-white text-3xl font-extrabold mb-1" data-counter>24/7</div>
                        <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Mentor Support</div>
                    </div>
                    <div className="text-center border-l border-white/10" data-stat>
                        <div className="text-white text-3xl font-extrabold mb-1" data-counter>50+</div>
                        <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Hiring Partners</div>
                    </div>
                    <div className="text-center border-l border-white/10" data-stat>
                        <div className="text-white text-3xl font-extrabold mb-1" data-counter>12</div>
                        <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest">Expert Tracks</div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section id="about" className="py-20 bg-white border-y border-africa-border">
                <div className="max-w-4xl mx-auto px-6 text-center" data-mission>
                    <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
                    <p className="text-xl text-slate-500 leading-relaxed italic">
                        &quot;We bridge the gap between academic theory and industry reality. Tech4Africa is built to empower African talent with the specific tools needed to compete in the global digital economy.&quot;
                    </p>
                </div>
            </section>

            {/* Learning Tracks Section */}
            <section id="courses" className="py-24 px-6 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl font-extrabold mb-2" data-section-header>Our Learning Tracks</h2>
                    <div className="w-16 h-1 bg-africa-red" data-divider />
                </div>

                <div className="grid md:grid-cols-12 gap-8 mb-12">
                    {/* Web Engineering */}
                    <div data-track-card className="md:col-span-8 bg-africa-midnight text-white rounded-[2.5rem] flex flex-col relative overflow-hidden group transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl cursor-pointer border border-white/5">
                        <div className="h-64 relative overflow-hidden">
                            <Image src="/images/stu1.jpeg" alt="Full stack Engineering" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="relative p-10 z-10">
                            <span className="text-africa-red font-bold text-[10px] uppercase tracking-widest bg-africa-red/10 border border-africa-red/20 px-4 py-1.5 rounded-full">
                                Most Popular
                            </span>
                            <h3 className="text-4xl font-extrabold mt-6 uppercase tracking-tighter">Web Engineering</h3>
                            <p className="text-slate-300 mt-4 max-w-md leading-relaxed">
                                Master HTML5, CSS3, JavaScript, and Node.js. Build the modern web from scratch.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-8">
                                <span className="px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest">HTML/CSS</span>
                                <span className="px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest">JAVASCRIPT</span>
                                <span className="px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest">NODE.JS</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile App */}
                    <div data-track-card className="md:col-span-4 bg-africa-red text-white rounded-[2.5rem] flex flex-col relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group">
                        <div className="h-64 relative overflow-hidden">
                            <Image src="/images/stu6.jpeg" alt="Mobile Development" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-4">Mobile App <br />Development</h3>
                            <p className="text-rose-100 text-sm leading-relaxed mb-8">Build cross-platform Android & iOS apps with C# and modern frameworks.</p>
                            <div className="text-white font-black text-[10px] uppercase tracking-widest bg-white/20 px-6 py-2.5 rounded-xl w-fit backdrop-blur-sm border border-white/30">8 Modules →</div>
                        </div>
                    </div>

                    {/* Data Science */}
                    <div data-track-card className="md:col-span-4 bg-slate-700 text-white rounded-[2.5rem] flex flex-col relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group">
                        <div className="h-64 relative overflow-hidden">
                            <Image src="/images/stu4.jpeg" alt="Data Science" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-4">Data Science <br /> & Analysis</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-6">Learn Python, Data Analysis, and Predictive Modeling.</p>
                            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                                <div className="w-2.5 h-2.5 rounded-full bg-africa-red animate-pulse shadow-[0_0_10px_rgba(255,51,102,0.8)]" />
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Python Integrated</span>
                            </div>
                        </div>
                    </div>

                    {/* Cybersecurity */}
                    <div data-track-card className="md:col-span-8 bg-slate-800 text-white rounded-[2.5rem] flex flex-col relative overflow-hidden group transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl cursor-pointer border border-white/5">
                        <div className="h-64 relative overflow-hidden">
                            <Image src="/images/stu5.jpeg" alt="Cybersecurity" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="p-10 flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                                <h3 className="text-3xl font-extrabold uppercase tracking-tighter">Cybersecurity <br /> & Networking</h3>
                                <p className="text-slate-400 mt-4 max-w-sm">Ethical hacking, defense systems, and network infrastructure.</p>
                            </div>
                            <div className="mt-8 md:mt-0 md:ml-auto">
                                <div className="w-16 h-16 bg-africa-red/20 backdrop-blur-xl border border-africa-red/30 text-africa-red rounded-3xl flex items-center justify-center group-hover:bg-africa-red group-hover:text-white transition-all duration-500 shadow-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Forex */}
                    <div data-track-card className="bg-rose-50 border border-rose-200 rounded-[2.5rem] flex flex-col overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-africa-red cursor-pointer group">
                        <div className="h-64 relative overflow-hidden">
                            <Image src="/images/stu10.jpeg" alt="Trading" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="p-10 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-black uppercase tracking-tighter text-africa-midnight mb-3">Forex & Crypto Trading</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Master the markets. Learn technical analysis and risk management for digital assets.</p>
                            </div>
                            <button className="bg-gradient-to-r from-africa-red to-orange-500 text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest shrink-0 hover:scale-105 transition shadow-lg shadow-africa-red/20 active:scale-95">
                                Trading Floor
                            </button>
                        </div>
                    </div>

                    {/* Quiz */}
                    <div data-track-card className="bg-slate-100 border border-slate-200 p-10 rounded-[2.5rem] flex items-center gap-8 transition-all duration-500 hover:shadow-2xl hover:border-africa-midnight cursor-pointer group">
                        <div className="w-16 h-16 bg-africa-midnight rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:bg-africa-red transition-colors">
                            ?
                        </div>
                        <div>
                            <h4 className="font-black text-[10px] uppercase tracking-widest text-africa-midnight mb-2">Not sure where to start?</h4>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">Take our 2-minute career quiz to find your path.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Catalog Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto" id="all-courses">
                <div className="mb-12">
                    <h2 className="text-3xl font-extrabold uppercase tracking-tight" data-section-header>
                        Explore the <span className="text-africa-red">Full Catalog</span>
                    </h2>
                    <div className="w-12 h-1 bg-africa-red mt-2" data-divider />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.t}
                            data-course-card
                            className={`group p-8 bg-white border border-africa-border rounded-[2rem] hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl ${course.hover}`}
                        >
                            <div className={`mb-4 group-hover:scale-110 transition-transform duration-300 ${course.color}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h4 className="font-extrabold text-sm mb-2 uppercase">{course.t}</h4>
                            <p className="text-slate-400 text-xs font-medium leading-relaxed">{course.d}</p>
                            <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className={`text-[10px] font-black uppercase tracking-widest ${course.color}`}>Learn More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 ${course.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Learning Path Section */}
            <section id="curriculum" className="py-24 bg-slate-100/50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold mb-4" data-section-header>The Learning Path</h2>
                        <p className="text-slate-500" data-reveal>A rigorous 5-month journey to mastery.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-4" data-step>
                            <div className="text-africa-red font-black text-4xl">01</div>
                            <h4 className="font-bold uppercase text-xs tracking-widest">Foundations</h4>
                            <p className="text-sm text-slate-500">HTML5, Semantic CSS, and responsive architecture.</p>
                        </div>
                        <div className="space-y-4" data-step>
                            <div className="text-slate-300 font-black text-4xl">02</div>
                            <h4 className="font-bold uppercase text-xs tracking-widest">Client Logic</h4>
                            <p className="text-sm text-slate-500">Modern JavaScript, DOM, and API integration.</p>
                        </div>
                        <div className="space-y-4" data-step>
                            <div className="text-slate-300 font-black text-4xl">03</div>
                            <h4 className="font-bold uppercase text-xs tracking-widest">Server Side</h4>
                            <p className="text-sm text-slate-500">Node.js, Express, and Database Design.</p>
                        </div>
                        <div className="space-y-4" data-step>
                            <div className="text-slate-300 font-black text-4xl">04</div>
                            <h4 className="font-bold uppercase text-xs tracking-widest">Deployment</h4>
                            <p className="text-sm text-slate-500">CI/CD, Cloud Hosting, and Career Prep.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mentors Section */}
            <section className="py-24 bg-africa-midnight text-white px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-extrabold mb-6 uppercase" data-reveal>
                            Led by <span className="text-africa-red">Seniors</span>, not just teachers.
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed" data-reveal>
                            Our mentors work at top global firms like Google, Paystack, and Binance.
                        </p>
                    </div>
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                        {mentors.map((mentor) => (
                            <div key={mentor.name} className="text-center group" data-mentor>
                                <div className="w-full aspect-square bg-slate-800 rounded-3xl mb-4 overflow-hidden border border-white/10 group-hover:border-africa-red transition">
                                    <Image
                                        src={mentor.img}
                                        alt={mentor.name}
                                        width={300}
                                        height={300}
                                        className="grayscale group-hover:grayscale-0 transition duration-500 w-full h-full object-cover"
                                    />
                                </div>
                                <h5 className="font-bold text-xs uppercase">{mentor.name}</h5>
                                <p className="text-[10px] text-africa-red font-bold">{mentor.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
