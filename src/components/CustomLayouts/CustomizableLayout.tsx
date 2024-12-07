"use client";
import React from 'react'
import { useAppStore } from '@/store/appStore';
import BlurLayout from './BlurLayout';
import dynamic from 'next/dynamic';

const VideoLayout = dynamic(() => import('./VideoLayout'));
const CanvaLayoutWebGl = dynamic(() => import('./CanvaLayoutWebGl'));
const CanvaLayout = dynamic(() => import('./CanvaLayout'));


const CustomizableLayout = () => {
    const layoutType = useAppStore(state => state.layoutType);
    switch (layoutType) {
        case "canvas":
            return <CanvaLayout />
        case "canvasWebGl":
            return <CanvaLayoutWebGl />
        case "video":
            return <VideoLayout />
        case "default":
            return <BlurLayout />
        default:
            return <></>
    }
}

export default CustomizableLayout