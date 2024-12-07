"use client";
import React, { useState } from 'react';
import { DndContext, useDraggable, DragEndEvent } from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers'
import CustomBox, { CustomBoxProps } from './CustomBox';
import { useClientMediaQuery } from '@/app/hooks/useClientMediaQuery';

interface Position {
    id: string;
    x: number;
    y: number;
    content?: CustomBoxProps;
}

// Define a Box component that uses the useDraggable hook
const DraggableBox = ({ id, initialX, initialY, children }: { id: string, initialX: number, initialY: number, children?: React.ReactNode }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

    return (
        <div ref={setNodeRef} style={{
            transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : '',
            position: 'absolute',
            top: initialY,
            left: initialX,
            display: 'flex',
            cursor: 'pointer',
            userSelect: 'none',
        }} {...attributes} {...listeners}>
            {children}
        </div>
    );
};

const DraggableBoxes: React.FC = () => {


    const [positions, setPositions] = useState<Position[]>([
        {
            id: 'box1',
            x: 549,
            y: 149,
            content: {
                title: "Glowy Blob",
                description: "An interactive canvas feature with a luminous, color-shifting blob that follows your cursor, creating an enchanting visual trail.",
                sandboxCode: "j59shq"
            }
        },
        {
            id: 'box2',
            x: 982,
            y: 167,
            content: {
                title: "Polka Dot",
                description: "An engaging canvas feature where dots move harmoniously in one direction, creating a mesmerizing flow and dynamic visual appeal.",
                sandboxCode: "7n9529"
            }
        },
        {
            id: 'box3',
            x: 95,
            y: 75,
            content: {
                title: "Fuid Effect",
                description: "An interactive canvas feature where fluid, flowing visuals respond dynamically to mouse hover, creating a captivating and immersive user experience.",
                sandboxCode: "x83n8l"
            }
        }
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



    return (
        <DndContext modifiers={[restrictToParentElement]} onDragEnd={handleDragEnd}>
            <div className="md:h-screen w-full relative px-3 md:px-16">
                <span className="text-white text-4xl font-bold">{"Gallery"}</span>
                {
                    isMobile ?
                        <div className="flex flex-col gap-4">
                            {positions.map(({ content }) => (
                                <CustomBox {...content} />
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
    );
};

export default DraggableBoxes;
