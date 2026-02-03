"use client";

export default function FloatingIcons() {
    const icons = [
        { content: "</>", style: { top: "15%", left: "10%", animationDelay: "0s" } },
        { content: "{ }", style: { top: "25%", right: "15%", animationDelay: "1s" } },
        { content: "01", style: { top: "60%", left: "5%", animationDelay: "2s" } },
        { content: "⚡", style: { top: "70%", right: "10%", animationDelay: "0.5s" } },
        { content: "⚙️", style: { top: "20%", right: "25%", animationDelay: "3s" } },
        { content: "∞", style: { top: "50%", right: "5%", animationDelay: "0.8s" } },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {icons.map((icon, index) => (
                <span
                    key={index}
                    className="floating-icon"
                    style={icon.style as React.CSSProperties}
                >
                    {icon.content}
                </span>
            ))}
        </div>
    );
}
