"use client";

export default function Marquee() {
    const items = [
        "🚀 Innovation",
        "💻 Technology",
        "🎓 Education",
        "🌍 Africa Rising",
        "⚡ Startups",
        "🔥 Digital Skills",
        "🎯 Future Ready",
        "💡 Ideas",
        "🏆 Excellence",
        "🌐 Global Impact",
    ];

    return (
        <div className="fixed top-0 w-full z-[60] py-2 bg-yellow-400 overflow-hidden">
            <div className="marquee-container">
                <div className="marquee-content gap-12 text-black font-bold text-xs uppercase tracking-widest">
                    {/* First set */}
                    {items.map((item, index) => (
                        <span key={`first-${index}`} className="mx-6">
                            {item}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {items.map((item, index) => (
                        <span key={`second-${index}`} className="mx-6">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
