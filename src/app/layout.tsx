import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import LayoutComponents from "@/components/Layout/LayoutComponents";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Naiyar Imam | Web Developer",
  description: "Welcome to Naiyar Imam's portfolio. Web developer & designer with a passion for creating innovative solutions. Explore my projects, skills, and work experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutComponents />
        <div className="px-6 md:px-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
