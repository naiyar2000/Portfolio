import { prefix } from '@/prefix'
import Image from 'next/image'
import React from 'react'

const CustomPortfolioWork = () => {
    return (
        <div style={{background: "#3d3d3d"}} className="p-32 flex gap-28">
            <div className="text-white flex flex-col gap-6 flex-1">
                <span className="text-6xl font-bold">
                    {"A custom portfolio for your custom work"}
                </span>
                <span className='text-2xl font-bold'>
                    {"Create a cohesive portfolio for your body of work, no matter what you make. Upload and manage all your files from one central hub, then use text, imagery, or videos to highlight each project."}
                </span>
            </div>
            <div className="">
                <Image 
                    src={`${prefix}/images/ui-3-750w.jpg`}
                    alt='template'
                    width={600}
                    height={700}
                />
            </div>
        </div>
    )
}

export default CustomPortfolioWork