"use client";
import React from 'react'
import CanvaLayout from './CanvaLayout'
import { useAppStore } from '@/store/appStore';
import VideoLayout from './VideoLayout';

const CustomizableLayout = () => {
    const layoutType = useAppStore(state => state.layoutType);
    switch (layoutType) {
        case "canvas":
            return <CanvaLayout />
        case "video":
            return <VideoLayout />
        case "default":
            return <></>
        default:
            return <></>
    }
}

export default CustomizableLayout