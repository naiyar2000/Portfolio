import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LayoutComponents from "@/components/Layout/LayoutComponents";

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
    <body>
      <LayoutComponents />
      <div className="px-6 md:px-16">
        {children}
      </div>
      <Footer />
    </body>
  );
}
