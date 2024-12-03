"use client";

import React, { useEffect, useRef } from 'react';
import { drawPolkatDot, matrixRain, mouseCloud } from './Utilities';
import { useAppStore } from '@/store/appStore';

const CanvaLayout = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { clipPath, pattern, isFixed, isClipEnabled } = useAppStore(state => state.canvaLayoutState);
    const clearCanvas = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => { context.clearRect(0, 0, canvas.width, canvas.height); };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;


        let cancelToken = { cancel: false, frameId: undefined };
        if (pattern !== "matrix-rain") {

            const context = canvas.getContext('2d');
            if (!context) return;

            // Create a cancel token 
            clearCanvas(canvas, context);

        }

        switch (pattern) {
            case "polka-dot":
            case "polka-dot-clipped":
                drawPolkatDot(canvas, cancelToken);
                break;
            case "matrix-rain":
            case "matrix-rain-clipped":
                matrixRain(canvas, cancelToken);
                break;
            case "mouse-cloud":
                mouseCloud(canvas);
                break;
            default:
                drawPolkatDot(canvas, cancelToken);
        }

        return () => {
            if (cancelToken.frameId !== undefined) { cancelAnimationFrame(cancelToken.frameId); }
            cancelToken.cancel = true;
        };

    }, [pattern, isClipEnabled, canvasRef]);

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

export default CanvaLayout;


