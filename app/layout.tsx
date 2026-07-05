import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description:
    "The world's most advanced AI-powered marketing platform. Generate high-converting campaigns, target perfect audiences, and optimize performance automatically.",
  keywords:
    "AI marketing, marketing automation, content generation, audience targeting, campaign optimization",
  authors: [{ name: "ADmyBRAND AI Suite" }],
  openGraph: {
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description:
      "Join 10,000+ marketers who've increased their ROI by 300% with our AI-powered marketing suite.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description:
      "Join 10,000+ marketers who've increased their ROI by 300% with our AI-powered marketing suite.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="FHGUeV3sbQZ3h5rtd9GecIKHM8TOSW8_6npON3idvP8"
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
