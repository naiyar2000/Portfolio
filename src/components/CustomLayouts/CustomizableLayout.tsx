"use client";
import React from 'react'
import CanvaLayout from './CanvaLayout'
import { useAppStore } from '@/store/appStore';
import VideoLayout from './VideoLayout';
import CanvaLayoutWebGl from './CanvaLayoutWebGl';
import BlurLayout from './BlurLayout';

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