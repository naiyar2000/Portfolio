import { prefix } from '@/prefix'
import Image from 'next/image'
import React from 'react'
import TransitionComponent from '../AnimatedComponents/TransitionComponent'

interface CustomPortfolioWorkProps {
    title: string,
    subTitle: string,
    image: string,
    backgroundColor?: string
}

const CustomPortfolioWork = ({ title, subTitle, image, backgroundColor = "#3d3d3d" }: CustomPortfolioWorkProps) => {
    return (
        <TransitionComponent style={{ background: backgroundColor }} >
            <div className="px-32 py-24 flex gap-28">
                <div className="text-white flex flex-col gap-6 flex-1">
                    <span className="text-6xl font-bold">
                        {title}
                    </span>
                    <span className='text-2xl font-bold'>
                        {subTitle}
                    </span>
                </div>
                <div className="">
                    <Image
                        src={`${prefix}/images/${image}`}
                        alt='template'
                        width={600}
                        height={700}
                    />
                </div>
            </div>
        </TransitionComponent>
    )
}

export default CustomPortfolioWork