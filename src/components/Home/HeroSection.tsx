import { prefix } from '@/prefix'
import Image from 'next/image'
import React from 'react'
import TransitionComponent from '../AnimatedComponents/TransitionComponent'

const HeroSection = () => {
    return (
        <div className="relative h-full" style={{ backgroundColor: "#5a848c" }}>
            <div className="absolute rounded-sm bg-white text-black bg-opacity-50 top-20 left-5 md:bg-none md:bg-opacity-0 md:top-1/3 md:w-1/3 md:left-16 md:text-white flex flex-col gap-2">
                <span className="text-lg font-bold md:text-xl md:font-medium">{"WEBSITES > PORTFOLIOS"}</span>
                <TransitionComponent>
                    <h1 className="font-bold text-6xl pr-4">Create a portfolio website</h1>
                </TransitionComponent>
                <div className="pr-24 flex flex-col gap-6 items-start">
                    <TransitionComponent transitionProps={{ transitionType: "right-to-left" }}>
                        <h2 className="font-semibold text-xl leading-6">
                            {"Showcase your work online with a portfolio website. Get started with a professionally designed template that can be customized to fit your brand."}
                        </h2>
                    </TransitionComponent>
                    <TransitionComponent transitionProps={{ transitionType: "down-to-top" }}>
                        <a href={`${prefix}/pdf/Naiyar_resume.pdf`} download="Naiyar_Imam" className="no-underline bg-white text-slate-700 px-10 py-4 mt-2">
                            {"DOWNLOAD CV"}
                        </a>
                    </TransitionComponent>
                </div>
            </div>
            <div className="h-screen md:h-auto">
                <Image
                    src={`${prefix}/images/hero-image.jpg`}
                    alt=""
                    className="h-3/4 w-full object-cover object-[center_bottom] md:w-full md:h-auto"
                    width={5000}
                    height={200}
                />
            </div>
        </div>
    )
}

export default HeroSection