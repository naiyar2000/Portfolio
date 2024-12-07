"use client";
import React, { useEffect, useRef } from 'react';
import { initFluid } from "./fluidSimulation.js"
import { useAppStore } from '@/store/appStore';

const CanvaLayoutWebGl = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { clipPath, isFixed, isClipEnabled } = useAppStore(state => state.canvaLayoutState);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        initFluid(canvas)


    }, [canvasRef]);

    return (
        <div className={`${isFixed ? "fixed" : "absolute"} layout-canvas top-0 left-0 h-full w-full -z-10`}>
            <canvas
                style={{
                    clipPath: isClipEnabled ? clipPath : undefined,
                }}
                className='h-screen w-full text-clip'
                ref={canvasRef}
            />
        </div>
    );


};

export default CanvaLayoutWebGl;


