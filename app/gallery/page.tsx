import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
    title: "Gallery | Tech4Afrika",
    description: "Browse through photos from Tech4Afrika events, training sessions, and community gatherings. Capturing moments of innovation and collaboration.",
};

const heroSlides = [
    { img: "/images/home1.jpeg", title: "Tech4Africa Gallery", sub: "Capturing the momentum of the next generation." },
    { img: "/images/home2.jpeg", title: "Community First", sub: "Building connections that last a lifetime." },
    { img: "/images/home4.jpeg", title: "Real Impact", sub: "From classroom theory to industry reality." },
];

const students = [
    { src: "/images/student1.jpeg", alt: "Student 1", featured: true },
    { src: "/images/student2.jpeg", alt: "Student 2" },
    { src: "/images/student3.jpeg", alt: "Student 3" },
    { src: "/images/student4.jpeg", alt: "Student 4" },
    { src: "/images/student5.jpeg", alt: "Student 5" },
];

const certifications = [
    { src: "/images/cert1.jpeg", alt: "Certificate 1" },
    { src: "/images/cert2.jpeg", alt: "Certificate 2" },
    { src: "/images/cert4.jpeg", alt: "Certificate 4" },
    { src: "/images/cert5.jpeg", alt: "Certificate 5" },
    { src: "/images/cert6.jpeg", alt: "Certificate 6" },
];

const events = [
    { src: "/images/event1.jpeg", alt: "Event 1" },
    { src: "/images/event2.jpeg", alt: "Event 2" },
    { src: "/images/event3.jpeg", alt: "Event 3" },
    { src: "/images/event4.jpeg", alt: "Event 4" },
    { src: "/images/event5.jpeg", alt: "Event 5" },
    { src: "/images/event6.jpeg", alt: "Event 6" },
    { src: "/images/event8.jpeg", alt: "Event 8" },
    { src: "/images/agency1.jpeg", alt: "Agency Event" },
];

export default function GalleryPage() {
    return (
        <>
            <Marquee />
            <Navbar />

            {/* Hero Slider */}
            <section className="w-full overflow-hidden">
                <div className="relative h-[40vh] w-full overflow-hidden bg-africa-midnight border-b border-africa-border shadow-2xl">
                    {/* Static hero - first slide */}
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={heroSlides[0].img}
                            alt={heroSlides[0].title}
                            fill
                            className="object-cover blur-[2px] scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-africa-midnight/40" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                            <div className="max-w-3xl">
                                <h1 className="text-2xl md:text-6xl font-extrabold text-white uppercase leading-none mb-4 md:mb-6 tracking-tighter drop-shadow-lg">
                                    {heroSlides[0].title}
                                </h1>
                                <p className="text-slate-100 text-sm md:text-xl font-bold max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                                    {heroSlides[0].sub}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Students Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <span className="text-africa-red font-bold text-xs uppercase tracking-widest mb-4 block">Future Leaders</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                        Meet Our <span className="text-africa-red">Students</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        The faces behind the code. Diverse, driven, and destined for greatness.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {students.map((student, index) => (
                        <div
                            key={index}
                            className={`group relative aspect-[4/3] overflow-hidden rounded-3xl ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                        >
                            <Image
                                src={student.src}
                                alt={student.alt}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-africa-midnight/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg">Future Tech Leader</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certifications Section */}
            <section className="max-w-7xl mx-auto px-6 pt-24 pb-12">
                <div className="text-center mb-16">
                    <span className="text-africa-red font-bold text-xs uppercase tracking-widest mb-4 block">Proven Excellence</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                        Our <span className="text-africa-red">Graduates</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Celebrating the achievements of our alumni who have successfully completed their rigorous training.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image
                                src={cert.src}
                                alt={cert.alt}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Events Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 bg-slate-50/50">
                <div className="text-center mb-16">
                    <span className="text-africa-midnight font-bold text-xs uppercase tracking-widest mb-4 block">Community Life</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                        Campus <span className="text-africa-red">Events</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        From hackathons to networking nights, experience the energy of our vibrant tech community.
                    </p>
                </div>

                <div className="masonry-grid">
                    {events.map((event, index) => (
                        <div key={index} className="masonry-item group relative overflow-hidden rounded-2xl mb-6">
                            <Image
                                src={event.src}
                                alt={event.alt}
                                width={400}
                                height={300}
                                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
