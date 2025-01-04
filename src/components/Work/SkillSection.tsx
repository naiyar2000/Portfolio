"use client";
import { useEffect, useRef, useState } from "react";
import "./skills.css"
import { useClientMediaQuery } from "@/app/hooks/useClientMediaQuery";
import Image from "next/image";
import { prefix } from "@/prefix";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import CircularProgressBar from "../ui/circularProgressBar";
import { scrollingSection } from "../About/AboutSection";
import TransitionComponent from "../AnimatedComponents/TransitionComponent";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import useInView from "@/app/hooks/useInView";
import { useAppStore } from "@/store/appStore";

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
    const animationFrameId = useAppStore(state => state.animationFramId);
    const setAnimationFrameId = useAppStore(state => state.setAnimationFrameId);
    const sectionRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [carouselInviewRef, isInView] = useInView();
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
    const lastTouchX = useRef(0); // Store the last touch position to calculate delta

    const handleScroll = () => {
        const section = sectionRef.current;
        const carousel = carouselRef.current;

        if (!section || !carousel) return;

        const { top, height } = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const threshold = 0.8 * viewportHeight; // Start rotation when the section is 20% into the viewport

        // Check if the section is within the viewport and past the threshold
        if (top <= viewportHeight && top + height >= 0 && top <= viewportHeight - threshold) {
            const progress = Math.max(0, Math.min(1, (viewportHeight - top - threshold) / (height - threshold)));
            const rotation = progress * 360; // Full rotation as user scrolls past the threshold
            setRotationState(-1 * rotation);
        }
    };
    const handleHorizontalScroll = (e: WheelEvent) => {
        // Convert the horizontal scroll (deltaX) to vertical scroll (deltaY)
        window.scrollBy(0, e.deltaX); // Scroll vertically using horizontal scroll amount
    };
    const handleTouchMove = (e: TouchEvent) => {
        const currentTouchX = e.touches[0].clientX; // Get the current horizontal touch position
        const touchDelta = currentTouchX - lastTouchX.current; // Calculate the horizontal movement difference

        const scrollAmount = touchDelta * 2; // Slow down the scroll by adjusting the multiplier (0.1)

        window.scrollBy(0, touchDelta < 0 ? 36 : -36); // Scroll vertically based on horizontal touch movement

        lastTouchX.current = currentTouchX; // Update lastTouchX for the next touchmove
    };
    useEffect(() => {



        window.addEventListener("scroll", handleScroll);
        window.addEventListener("wheel",
            handleHorizontalScroll
        );
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("wheel", handleHorizontalScroll);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    useEffect(() => {
        if (!isInView) {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("wheel", handleHorizontalScroll);
            window.removeEventListener("touchmove", handleTouchMove);

        }
    }, [isInView])

    useEffect(() => {

        let tempanimationFrameId: number;

        const scrollHandler = () => {
            const section = sectionRef.current;
            if (!section) return;

            const { bottom } = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Stop scrolling when the bottom of the section is within or above the viewport
            if (bottom <= viewportHeight) {
                return; // Stop the animation
            }

            // Scroll by a fixed amount
            window.scrollBy(0, 2); // Adjust for smoother or faster scrolling
            let tempanimationFrameId = requestAnimationFrame(scrollHandler);
            setAnimationFrameId(tempanimationFrameId);
        };

        if (isInView) {
            tempanimationFrameId = requestAnimationFrame(scrollHandler);
            setAnimationFrameId(tempanimationFrameId);
        } else {
            cancelAnimationFrame(animationFrameId);
        }



        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isInView]);


    return (
        <section id="skills" ref={sectionRef} className="relative h-[500vh] text-slate-200">
            <div ref={typeof (carouselInviewRef) != "boolean" ? carouselInviewRef : undefined} className="sticky top-32 md:top-20 flex flex-row md:flex-row">
                <div
                    className="sticky top-32 md:top-20 h-screen flex items-start justify-center flex-1"
                >
                    <div className="absolute inset-0">
                        <div className="flex flex-col justify-start items-center md:sticky top-0 h-screen flex-1">
                            <div className="flex flex-col  items-center gap-16 justify-between">
                                <h1 className="text-2xl md:text-5xl font-bold">{"Welcome to My Portfolio"}</h1>
                                <DotLottieReact
                                    className=''
                                    src={`${prefix}/animatedSVG.lottie`}
                                    loop
                                    autoplay
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        ref={carouselRef}
                        className="relative flex items-center justify-center w-80 h-96 card-carousel"

                    >
                        {skillData.map((data, index) => (
                            <div
                                key={index}
                                className={`individual-card absolute w-36 h-64 md:w-48 md:h-64 flex items-center justify-center left-1000 text-white shadow-lg rounded-lg ${isCenterCard(index) ? 'highlighted-card' : ''}`}
                                style={{
                                    transform: `rotateX(-10deg) rotateY(${getCardRotation(index)}deg) translateZ(${isMobile ? 180 : 400}px) translateY(100px)`,
                                    // backfaceVisibility: "hidden",
                                    opacity: 0.1,
                                }}
                            >
                                <div className="relative h-full flex flex-col items-center justify-center">
                                    <div className="w-full h-full -z-50 absolute rounded-lg">
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
                                    <div className="p-1 h-full flex flex-col items-center justify-center gap-2">
                                        <div className="absolute skill-icon -top-4 overflow-hidden">
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
                                        </div>
                                        <div className="flex h-full flex-col items-center justify-between">
                                            <div className="flex flex-col items-center justify-center gap-5 pt-10">
                                                <h3
                                                    className="font-bold text-xs md:text-sm text-center"
                                                >{data.label}</h3>
                                                <p
                                                    className="text-xs text-center"
                                                >
                                                    {data.description}
                                                </p>
                                                <CircularProgressBar color="#032112" labelClassName="text-[12px]" size={45} strokeWidth={4} percentage={data.progress} />
                                            </div>
                                            <div>
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
                            </div>
                        ))}
                    </div>
                </div >
                <div className="hidden flex-1 md:flex justify-center font-bold">
                    {
                        <div className="md:w-3/4 flex flex-col gap-24 md:py-24 justify-center items-center">
                            {
                                scrollingSection?.map((item) => {
                                    return <TransitionComponent key={item.title} transitionProps={{ transitionType: 'down-to-top', threshold: 0.2 }}>
                                        <div className={`relative flex flex-col box-content justify-start w-full border-t-2 border-t-slate-300 pt-2 md:pt-6 md:min-h-72`}>
                                            <div className="animated-bar"></div>
                                            <div className="flex flex-col gap-6 md:w-full">
                                                <h1 className="text-2xl md:text-4xl">{item.title}</h1>
                                                <h1 className="text-lg md:text-lg text-slate-400">{item.desc}</h1>
                                            </div>
                                        </div>
                                    </TransitionComponent>
                                }
                                )
                            }
                        </div>
                    }
                </div>
            </div >
        </section >
    );
};

export default SkillSection;
