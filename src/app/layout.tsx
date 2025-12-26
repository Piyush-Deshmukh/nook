import type { Metadata } from "next";
import "./globals.css";
import { Geist_Mono, Caveat } from "next/font/google";
import SITE from "@/config/site";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  icons: {
    icon: "/brand-logo.png",
    apple: "/brand-logo.png",
  },
  openGraph: {
    title: SITE.name,
    images: [
      {
        url: "/brand-logo.png",
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE.name,
    images: ["/brand-logo.png"],
  },
};

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${geistMono.className} antialiased tracking-tighter`}>
        {children}
      </body>
    </html>
  );
}
