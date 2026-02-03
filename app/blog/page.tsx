import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Tech4Nigeria | Tech News & Insights",
    description: "Insights and stories from the Nigerian tech space. Stay updated with the latest trends, startup stories, and tech ecosystem developments.",
};

const blogPosts = [
    {
        title: "The Rise of Nigerian Fintech: A 2026 Perspective",
        excerpt: "Exploring how Nigerian fintech companies are reshaping the African financial landscape and attracting global investments.",
        category: "Fintech",
        date: "February 15, 2026",
        image: "/images/home1.jpeg",
        readTime: "5 min read",
    },
    {
        title: "Building Scalable Applications for African Markets",
        excerpt: "Technical insights on building applications that work well in low-bandwidth environments and diverse user contexts.",
        category: "Development",
        date: "February 10, 2026",
        image: "/images/home2.jpeg",
        readTime: "8 min read",
    },
    {
        title: "Women Breaking Barriers in Nigerian Tech",
        excerpt: "Celebrating the achievements of women leaders who are transforming Nigeria's technology ecosystem.",
        category: "Community",
        date: "February 5, 2026",
        image: "/images/home3.jpeg",
        readTime: "6 min read",
    },
    {
        title: "AI Adoption in Nigerian Enterprises",
        excerpt: "How Nigerian businesses are leveraging artificial intelligence to improve operations and customer experiences.",
        category: "AI",
        date: "January 28, 2026",
        image: "/images/home4.jpeg",
        readTime: "7 min read",
    },
    {
        title: "The Future of EdTech in Africa",
        excerpt: "Exploring innovative education technology solutions bridging the learning gap across the continent.",
        category: "EdTech",
        date: "January 20, 2026",
        image: "/images/home5.jpeg",
        readTime: "5 min read",
    },
    {
        title: "Startup Funding Landscape in 2026",
        excerpt: "An analysis of venture capital trends and funding opportunities for African startups in the current year.",
        category: "Startups",
        date: "January 15, 2026",
        image: "/images/home6.jpeg",
        readTime: "9 min read",
    },
];

export default function BlogPage() {
    return (
        <>
            <Navbar />

            {/* Hero */}
            <header className="pt-32 pb-12 px-6 max-w-7xl mx-auto text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-green-600/10 text-green-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                    Tech4Nigeria
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
                    Insights from the <br />
                    <span className="text-green-600">Nigerian Tech Space.</span>
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Stories, trends, and perspectives from Africa&apos;s most vibrant technology ecosystem.
                </p>
            </header>

            {/* Blog Grid */}
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.title}
                            className="group bg-white border border-africa-border rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="py-1 px-3 rounded-full bg-white text-africa-midnight text-[10px] font-bold uppercase tracking-widest">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className="text-lg font-bold mb-3 group-hover:text-green-600 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-green-600">
                                    <span>Read More</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 px-6 bg-green-600 text-white">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold mb-4">Stay Updated</h2>
                    <p className="text-green-100 mb-8">
                        Subscribe to our newsletter and never miss an update on the Nigerian tech ecosystem.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-xl text-africa-midnight focus:outline-none"
                        />
                        <button className="bg-africa-midnight text-white px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-africa-midnight transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
