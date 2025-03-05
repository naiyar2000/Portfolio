import type { Metadata } from "next";
import "../globals.css"

export const metadata: Metadata = {
    title: "Naiyar Imam | Components",
    description: "Welcome to Naiyar Imam's portfolio. Web developer & designer with a passion for creating innovative solutions. Explore my projects, skills, and work experience.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="pt-20">
            {children}
        </div>
    );
}
