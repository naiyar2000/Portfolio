"use client"
import { prefix } from '@/prefix'
import { useAppStore } from '@/store/appStore';
import React from 'react'

const VideoLayout = () => {
    const videoSrc = useAppStore(state => state.video);
    const isFixed = useAppStore(state => state.canvaLayoutState.isFixed);

    return (
        <video
            className={`${isFixed ? "fixed" : "absolute"} inset-0 h-screen w-full object-cover object-[center_bottom] md:w-full`}
            width={"100%"} height={"100%"} autoPlay
            loop
            muted preload="none">
            <source src={`${prefix}/videos/${videoSrc}.mp4`} type="video/mp4" />
        </video>
    )
}

export default VideoLayout