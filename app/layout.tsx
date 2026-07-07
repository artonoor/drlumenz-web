import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr Lumenz — Illuminating Hearts",
  description:
    "Dr Lumenz Publishing — author hub and full catalog across all imprints: Art Noor, Dr Aslam Shems, iSeekIslam, ZennyBean, SARY, and Paipo's Fun Fables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#faf8f3] text-[#1e3d56]">{children}</body>
    </html>
  );
}
