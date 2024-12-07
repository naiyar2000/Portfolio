"use client";
import React, { useEffect, useRef } from 'react';

const BlurLayout = () => {
    const devRef = useRef<HTMLDivElement | null>(null);
    let animationFrameId: number | null = null;

    useEffect(() => {
        const handlePointerMove = (event: PointerEvent) => {
            const { clientX, clientY } = event;
            if (!devRef.current) return;

            // Use requestAnimationFrame to control animation calls
            if (animationFrameId) return; // Throttle: skip if frame is already in progress

            animationFrameId = requestAnimationFrame(() => {
                devRef.current!.animate(
                    [
                        { left: `${clientX}px`, top: `${clientY}px` }
                    ],
                    { 
                        duration: 500, // Animation duration in ms
                        fill: 'forwards', // Keeps final position
                        easing: 'ease-out' // Smooth interpolation
                    }
                );
                animationFrameId = null; // Reset for the next frame
            });
        };

        window.addEventListener('pointermove', handlePointerMove);
        
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className='h-screen w-full overflow-hidden absolute'>
            <div ref={devRef} id='blob' />
            <div id="blur"></div>
        </div>
    );
};

export default BlurLayout;
