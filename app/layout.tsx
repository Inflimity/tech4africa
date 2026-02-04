import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientPage from "@/components/ClientPage";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Tech4Africa | Innovation Ecosystem",
  description: "A central hub for tech education, events, news and startup enablement reimagining what's possible from Africa, for the world.",
  keywords: ["tech education", "Africa", "startups", "innovation", "digital skills", "Tech4Lagos", "Tech4Academy"],
  authors: [{ name: "Tech4Africa" }],
  icons: {
    icon: "/images/favicon.jpeg",
    shortcut: "/images/favicon.jpeg",
    apple: "/images/favicon.jpeg",
  },

  openGraph: {
    title: "Tech4Africa | Innovation Ecosystem",
    description: "A central hub for tech education, events, news and startup enablement reimagining what's possible from Africa, for the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} font-sans bg-africa-soft text-africa-midnight antialiased`}
      >
        <ClientPage>{children}</ClientPage>
      </body>
    </html>
  );
}

