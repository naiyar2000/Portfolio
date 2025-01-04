import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-0 md:px-6">
            <div className="w-full max-w-5xl custom-transparent-background text-gray-300 rounded-lg  p-8 md:p-12">
                {/* Header Section */}
                <h1 className="text-3xl font-bold text-white mb-6 text-center">
                    Get in Touch
                </h1>
                <p className="text-center text-gray-400 mb-8">
                    I’d love to hear from you! Whether you have a question, a project in
                    mind, or just want to say hi, feel free to reach out.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-green-400" />
                            <p>work.naiyar.imam@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-blue-400" />
                            <p>+91 6268322272</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-red-400" />
                            <p>Bengaluru, India</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-400"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-400"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-400"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Enter your message..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
