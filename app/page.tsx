import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Particles from "@/components/effects/Particles";
import CursorTrail from "@/components/effects/CursorTrail";
import FloatingIcons from "@/components/effects/FloatingIcons";
import PillarCard from "@/components/ui/PillarCard";
import Counter from "@/components/ui/Counter";
import HeroCarousel from "@/components/ui/HeroCarousel";

// Icons for pillar cards
const AcademyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </svg>
);

const AgencyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const EventsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>
);

const BlogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
  </svg>
);

const SkillIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
  </svg>
);



export default function Home() {
  return (
    <>
      {/* Effects */}
      <Particles />
      <CursorTrail />
      <FloatingIcons />
      <Marquee />
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-start pt-32 md:pt-40 px-6 relative overflow-hidden">

        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">

          <div className="absolute inset-0 bg-gradient-to-b from-africa-soft/90 via-africa-soft/60 to-africa-soft" />
        </div>





        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">



          <span className="text-africa-red font-extrabold tracking-widest uppercase mb-4 block text-sm">
            AFRICA SILICON VALLEY
          </span>

          <h1 className="hero-title text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-tight">
            From Africa, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-africa-red via-africa-orange to-africa-yellow hero-title-gradient bg-300% animate-gradient-shift decoration-clone [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">To The Future.</span>
          </h1>

          <div className="hero-actions flex flex-wrap justify-center gap-4 mb-12" data-reveal="scale-up" data-stagger="3">
            <Link
              href="/login"
              className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest border border-africa-red/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all active:scale-95 shadow-lg shadow-black/5 animate-bounce-subtle flex items-center gap-2 group"
            >
              <span>Login</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14" />
              </svg>
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest bg-gradient-to-r from-africa-red to-africa-orange text-white hover:scale-105 transition-all active:scale-95 shadow-xl shadow-africa-red/30 animate-bounce-subtle [animation-delay:0.2s] pulse-btn"
            >
              Sign Up
            </Link>
          </div>

          <p className="hero-description text-lg md:text-xl text-slate-700 font-semibold max-w-2xl mx-auto mb-8 leading-relaxed">
            A central hub for tech education, events, news and startup enablement.
          </p>


          {/* Gallery Slideshow Card */}
          <div className="max-w-5xl mx-auto mb-16 relative z-20">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="relative h-[300px] md:h-[450px] overflow-hidden">
                <HeroCarousel
                  images={[
                    { src: "/images/event1.jpeg", alt: "Tech Event 1" },
                    { src: "/images/home1.jpeg", alt: "Academy Session" },
                    { src: "/images/event2.jpeg", alt: "Tech Event 2" },
                    { src: "/images/home4.jpeg", alt: "Workshop" },
                    { src: "/images/cert1.jpeg", alt: "Certification" },
                    { src: "/images/home5.jpeg", alt: "Community" },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Stats Counter Section */}
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16 relative z-20 bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-xl tilt-card">
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-black mb-1 text-africa-red">
                <Counter target={500} suffix="+" />
              </div>
              <div className="text-xs font-bold opacity-80 uppercase tracking-wider text-africa-midnight">
                Students
              </div>
            </div>
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-black mb-1 text-africa-red">
                <Counter target={50} suffix="+" />
              </div>
              <div className="text-xs font-bold opacity-80 uppercase tracking-wider text-africa-midnight">
                Events
              </div>
            </div>
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-black mb-1 text-africa-red">
                <Counter target={15} suffix="+" />
              </div>
              <div className="text-xs font-bold opacity-80 uppercase tracking-wider text-africa-midnight">
                Countries
              </div>
            </div>
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-black mb-1 text-africa-red">
                <Counter target={100} suffix="%" />
              </div>
              <div className="text-xs font-bold opacity-80 uppercase tracking-wider text-africa-midnight">
                Impact
              </div>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PillarCard
              href="/academy"
              title="Tech4Academy"
              description="World-class training for the next generation of tech leaders."
              ctaText="Start Now"
              imageSrc="/images/cert1.jpeg"
              imageAlt="Academy"
              icon={<AcademyIcon />}
              variant="default"
              className="lg:col-span-2"
            />

            <PillarCard
              href="/agency"
              title="Tech4Agency"
              description="Building digital products for ambitious brands worldwide."
              ctaText="Let's Build"
              imageSrc="/images/agency1.jpeg"
              imageAlt="Agency"
              icon={<AgencyIcon />}
              variant="yellow"
            />

            <PillarCard
              href="/events"
              title="Tech4Lagos"
              description="The premier annual tech gathering in Lagos."
              ctaText="Get Access"
              imageSrc="/images/event1.jpeg"
              imageAlt="Events"
              icon={<EventsIcon />}
              variant="purple"
            />

            <PillarCard
              href="/blog"
              title="Tech4Nigeria"
              description="Insights and stories from the Nigerian tech space."
              ctaText="Explore"
              imageSrc="/images/home4.jpeg"
              imageAlt="Blog"
              icon={<BlogIcon />}
              variant="green"
              className="lg:col-span-2"
            />

            <PillarCard
              href="#"
              title="Skill4Africa"
              description="Connecting students with internship opportunities across Africa."
              ctaText="Apply Now"
              imageSrc="/images/skill4africa.jpeg"
              imageAlt="Skill4Afrika"
              icon={<SkillIcon />}
              variant="blue"
              isComingSoon
              className="lg:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10 order-2 md:order-1">
            <span className="inline-block py-1.5 px-4 rounded-full bg-africa-red/10 text-africa-red text-[10px] font-bold uppercase tracking-widest mb-6 border border-africa-red/20 backdrop-blur-sm animate-pulse">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Driving Innovation <br /> Across The Continent.
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              We are building the infrastructure for Africa&apos;s digital economy. From training the next generation of engineers to launching scalable startups, our impact resonates across borders.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-extrabold text-africa-midnight mb-1">500+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Talents Trained</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-africa-midnight mb-1">10+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Startups Incubated</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-africa-midnight mb-1">15+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Corporate Partners</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-africa-midnight mb-1">1</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Pan-African Ecosystem</div>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-africa-red/20 via-africa-orange/20 to-africa-cyan/20 rounded-[40px] rotate-6 transform scale-105 blur-2xl group-hover:scale-110 transition-transform duration-700" />
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/images/home7.jpeg"
                alt="Tech4Africa Impact"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-africa-midnight/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
