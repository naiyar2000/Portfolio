"use client";
import { useEffect, useRef, useState } from "react";
import "./work.css"
import { useClientMediaQuery } from "@/app/hooks/useClientMediaQuery";
import Image from "next/image";
import { prefix } from "@/prefix";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

const skillData: {
    label: string;
    logo: string;
    progress: number;
    description: string;
    githubLink?: string;
    demoRoute?: string;
}[] = [
        {
            label: "React",
            logo: "react",
            progress: 80,
            description: "Building dynamic UIs with reusable components and hooks.",
            githubLink: "https://github.com/naiyar2000?tab=repositories&q=&type=&language=typescript"
        },
        {
            label: "Node.js",
            logo: "nodejs",
            progress: 75,
            description: "Crafting server-side applications with JavaScript, fast and scalable.",
            githubLink: "https://github.com/naiyar2000?tab=repositories&q=&type=&language=javascript"
        },
        {
            label: "MongoDB",
            logo: "mongodb",
            progress: 65,
            description: "NoSQL database for flexible and scalable data storage.",
        },
        {
            label: "Firebase",
            logo: "firebase",
            progress: 60,
            description: "Real-time apps made simple with Firebase’s authentication and cloud services.",
            githubLink: "https://github.com/naiyar2000?tab=repositories&q=&type=&language=dart"
        },
        {
            label: "Kubernetes",
            logo: "kubernetes",
            progress: 70,
            description: "Managing containerized applications with automated deployment and scaling.",
        },
        {
            label: "Tailwind CSS",
            logo: "tailwind",
            progress: 85,
            description: "Utility-first CSS framework for creating custom designs without the hassle.",
        },
        {
            label: "Three.js",
            logo: "threejs",
            progress: 65,
            description: "Creating 3D visualizations and interactive graphics in the browser.",
            demoRoute: "/threejs-character"
        },
    ];


const SkillSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const isMobile = useClientMediaQuery('(max-width: 600px)')

    const [rotationState, setRotationState] = useState<number>(72);

    const angleStep = 360 / skillData.length;
    const getCardRotation = (index: number) => {
        const cardRotation = (rotationState + index * angleStep) % 360;
        return cardRotation;  // This will rotate each card based on its index
    };

    const isCenterCard = (index: number) => {
        const cardRotation = getCardRotation(index);

        // Normalize rotation angle to the range of -180 to 180
        let normalizedRotation = cardRotation % 360;
        if (normalizedRotation > 180) {
            normalizedRotation -= 360;
        }

        // Check if the card's rotation is within a small range around the center (0 degrees)
        return Math.abs(normalizedRotation) < 25; // You can adjust the threshold value (e.g., 15 degrees)
    };

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            const carousel = carouselRef.current;

            if (!section || !carousel) return;

            const { top, height } = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (top <= viewportHeight && top + height >= 0) {
                const progress = Math.max(0, Math.min(1, (viewportHeight - top) / height));
                const rotation = progress * 360; // Full rotation as user scrolls through section
                // carousel.style.transform = `rotateY(${rotation}deg)`;
                setRotationState(-1 * rotation);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <section id="skills" ref={sectionRef} className="relative h-[500vh]">
            <div
                className="sticky top-0 h-screen flex items-center justify-center w-full"
            >
                <div
                    ref={carouselRef}
                    className="relative flex items-center justify-center w-80 h-96 card-carousel"

                >
                    {skillData.map((data, index) => (
                        <div
                            key={index}
                            className={`individual-card absolute w-24 h-64 md:w-48 md:h-64 flex items-center justify-center left-1000 text-white shadow-lg rounded-lg ${isCenterCard(index) ? 'highlighted-card' : ''}`}
                            style={{
                                transform: `rotateY(${getCardRotation(index)}deg) translateZ(${isMobile ? 180 : 400}px) `,
                                backfaceVisibility: "hidden",
                                opacity: 0.1,
                            }}
                        >
                            <div className="relative h-full flex flex-col items-center justify-center">
                                <div className="w-full h-full -z-10 absolute rounded-lg">
                                    <div className="relative h-full w-full rounded-lg">
                                        <div
                                            className="wave-div absolute bottom-0 left-0 rounded-lg"
                                            style={{
                                                height: `${data.progress}%`,
                                                width: "100%",
                                                background: "rgb(91 125 116 / 53%)",
                                                overflow: "hidden",
                                                transition: "width 1s ease-in-out", // Smooth animation for fluid fill
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="p-1 flex flex-col items-center justify-center gap-2">
                                    <Image
                                        src={`${prefix}/images/${data.logo}.png`}
                                        alt={data.logo}
                                        height={500}
                                        width={500}
                                        style={{
                                            height: "35px",
                                            width: "35px"
                                        }}
                                    />
                                    <div className="flex flex-col items-center justify-center gap-5">

                                        <h3
                                            className="font-bold text-xs md:text-sm text-center"
                                        >{data.label}</h3>
                                        <p
                                            className="text-xs text-center"
                                        >
                                            {data.description}
                                        </p>
                                        {
                                            data.demoRoute && <Link href="/threejs-character">
                                                <Button size={"sm"}>View Demo</Button>
                                            </Link>
                                        }
                                        {
                                            data.githubLink && <a href={data.githubLink} target="_blank"><Button size={"sm"} className="project-link p-2 text-xs">
                                                <div className="flex items-center justify-center gap-1">
                                                    <Github />
                                                    <p>View Code</p>
                                                </div>
                                            </Button>
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default SkillSection;
