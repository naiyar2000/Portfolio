import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-gradient-to-br text-gray-300 py-12"
        >
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    {/* Updated Left Section */}
                    <div className="max-w-md">
                        <h2 className="text-2xl font-semibold text-white mb-4">{"Let's Collaborate"}</h2>
                        <div className="text-sm text-gray-400 flex flex-col md:flex-row gap-0 md:gap-2">
                            <div className="block md:flex flex-col gap-2">
                                <div>🚀 Frontend Developer</div>
                                <div>💡 React.js | Node.js | AWS</div>
                            </div>
                            <div className="block md:flex flex-col gap-2">
                                <div>📦 Scalable & Efficient Solutions</div>
                                <div>🌍 Open to Freelance & Full-time</div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-lg font-medium text-white">Connect with Me</h3>
                        <div className="flex items-center mt-4 space-x-4">
                            <a
                                href="https://github.com/naiyar2000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/naiyar-imam-370025182/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="mailto:work.naiyar.imam@gmail.com"
                                className="hover:text-white transition"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
                    <p>&copy; {currentYear} Naiyar Imam. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
