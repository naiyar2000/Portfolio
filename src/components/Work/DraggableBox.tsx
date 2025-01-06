"use client";
import React from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableBox = React.memo(({ id, initialX, initialY, children }: { id: string, initialX: number, initialY: number, children?: React.ReactNode }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
    const style: React.CSSProperties = React.useMemo(() => ({
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : '',
        position: 'absolute',
        top: initialY,
        left: initialX,
        display: 'flex',
        cursor: 'pointer',
        userSelect: 'none',
    }), [transform, initialX, initialY]);
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </div>
    );
});

DraggableBox.displayName = "DraggableBox";

export default DraggableBox;