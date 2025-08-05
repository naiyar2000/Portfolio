"use client";
import React, { use, useEffect, useRef, useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers'
import CustomBox, { CustomBoxProps } from './CustomBox';
import { useClientMediaQuery } from '@/app/hooks/useClientMediaQuery';
import dynamic from 'next/dynamic';
import { prefix } from '@/prefix';
import TransitionComponent from '../AnimatedComponents/TransitionComponent';

const DraggableBox = dynamic(() => import('./DraggableBox'), { ssr: false });
interface Position {
    id: string;
    x: number;
    y: number;
    content?: CustomBoxProps;
}



const GallerySection: React.FC = () => {

    const [positions, setPositions] = useState<Position[]>([
        {
            id: 'box3',
            x: 95,
            y: 75,
            content: {
                title: "Fuid Effect",
                description: "An interactive canvas feature where fluid, flowing visuals respond dynamically to mouse hover, creating a captivating and immersive user experience.",
                sandboxCode: "x83n8l",
                imageSrc: "mousecloud.gif"
            }
        },
        {
            id: 'box2',
            x: 982,
            y: 167,
            content: {
                title: "Polka Dot",
                description: "An engaging canvas feature where dots move harmoniously in one direction, creating a mesmerizing flow and dynamic visual appeal.",
                sandboxCode: "7n9529",
                imageSrc: "polka_dot.gif"
            }
        },
        {
            id: 'box1',
            x: 549,
            y: 149,
            content: {
                title: "Glowy Blob",
                description: "An interactive canvas feature with a luminous, color-shifting blob that follows your cursor, creating an enchanting visual trail.",
                sandboxCode: "j59shq",
                imageSrc: "web_cloud.gif"
            }
        },
    ]);
    const handleDragEnd = (event: DragEndEvent) => {
        const { id } = event.active;
        const { x, y } = event.delta;
        setPositions((prevPositions) => prevPositions.map((pos) =>
            pos.id === id ? {
                ...pos,
                x: pos.x + x,
                y: pos.y + y
            } : pos
        ));
    };

    const isMobile = useClientMediaQuery('(max-width: 600px)')

    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOverlay(false);
        }, 8000); // Hide after 3 seconds

        return () => clearTimeout(timer);
    }, [showOverlay]);

    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    setShowOverlay(true);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(node);
        return () => observer.disconnect();
    }, []);


    return (
        <section id='gallery' ref={sectionRef} className='relative'>
            <div className="absolute top-0 inset-0 z-[100] pointer-events-none flex items-start justify-center mt-28">
                {showOverlay && <TransitionComponent transitionProps={{ transitionType: "down-to-top", threshold: 0.25 }}>
                    <div className="flex flex-col items-center justify-center animate-fade-in" style={{ maxWidth: 360 }}>
                        <img src={`${prefix}/videos/animate-mouse.gif`} alt="gesture" className="w-28 h-28 mb-2" />
                        <div className="text-white text-sm opacity-90">Drag the cards</div>
                    </div>
                </TransitionComponent>
                }
            </div>
            <DndContext modifiers={[restrictToParentElement]} onDragEnd={handleDragEnd}>
                <div className="md:h-screen w-full md:relative">
                    <div className="mb-4">
                        <span className="text-white text-4xl font-bold">{"Gallery"}</span>
                    </div>
                    {
                        isMobile ?
                            <div className="flex flex-col gap-4">
                                {positions.map(({ id, content }) => (
                                    <CustomBox key={id} {...content} />
                                ))}
                            </div>
                            : positions.map(({ id, x, y, content }) => (
                                <DraggableBox key={id} id={id} initialX={x} initialY={y}>
                                    <CustomBox {...content} />
                                </DraggableBox>
                            ))
                    }
                </div>
            </DndContext>
        </section>
    );
};

export default GallerySection;
