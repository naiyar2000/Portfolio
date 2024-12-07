"use client";
import React, { useEffect, useRef } from 'react'

const BlurLayout = () => {
    const devRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        window.onpointermove = event => {

            const { clientX, clientY } = event;
            if (devRef.current === null) return;
            devRef.current.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 2000, fill: "forwards" });
        }
    }, [])

    return (
        <div className='h-full w-full overflow-hidden fixed'>
            <div ref={devRef} id='blob'></div>
            <div id='blur'></div>
        </div>
    )
}

export default BlurLayout