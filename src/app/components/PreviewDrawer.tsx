"use client"
import { DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { skillData } from '@/components/Work/SkillSection'
import { useAppStore } from '@/store/appStore';
import React, { useEffect, useRef, useState } from 'react'
import useInView from '../hooks/useInView';
import { useClientMediaQuery } from '../hooks/useClientMediaQuery';
import Image from 'next/image';
import { prefix } from '@/prefix';
import CircularProgressBar from '@/components/ui/circularProgressBar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';

const PreviewDrawer = () => {
    const animationFrameId = useAppStore(state => state.animationFramId);
    const setAnimationFrameId = useAppStore(state => state.setAnimationFrameId);
    const [carouselInviewRef, isInView] = useInView();

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
        let tempanimationFrameId: number;

        const rotateCards = () => {

            console.log(rotationState)
            setRotationState(prev => prev-1)
            const tempanimationFrameId = requestAnimationFrame(rotateCards);
            setAnimationFrameId(tempanimationFrameId);
        };

        tempanimationFrameId = requestAnimationFrame(rotateCards);
        setAnimationFrameId(tempanimationFrameId);



        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isInView]);


    return (
        <DrawerContent className={"bg-drawer"}>
            <DrawerHeader>
                <DrawerTitle>{"3D Card Carousel"}</DrawerTitle>
            </DrawerHeader>
            <div ref={typeof (carouselInviewRef) != "boolean" ? carouselInviewRef : undefined} className="">
                <div
                    ref={carouselRef}
                    className="relative flex items-center justify-center w-full h-[70vh] md:h-[80vh] card-carousel"

                >
                    {skillData.map((data, index) => (
                        <div
                            key={index}
                            className={`individual-card absolute w-36 h-64 md:w-48 md:h-64 flex items-center justify-center text-white shadow-lg rounded-lg ${isCenterCard(index) ? 'highlighted-card' : ''}`}
                            style={{
                                transform: `rotateX(-20deg) rotateY(${getCardRotation(index)}deg) translateZ(${isMobile ? 180 : 400}px)`,
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
            </div>
        </DrawerContent>
    )
}

export default PreviewDrawer