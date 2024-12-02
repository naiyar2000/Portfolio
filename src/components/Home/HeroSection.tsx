import { prefix } from '@/prefix'
import React from 'react'
import TransitionComponent from '../AnimatedComponents/TransitionComponent'

const title = "Build with Code, Design with Purpose";
const subTitle = "Showcasing the work of a passionate frontend developer.";

const HeroSection = () => {
    return (
        <div className="relative h-full">
            <div className="absolute rounded-sm text-slate-300 bg-opacity-50 top-40 z-10 left-5 md:bg-none md:bg-opacity-0 md:top-1/4 md:w-1/3 md:left-16 md:text-white flex flex-col md:gap-2 gap-5">
                <span className="text-lg font-bold md:text-xl md:font-medium">{"CODE > CREATIONS"}</span>
                <TransitionComponent transitionProps={{ transitionType: "left-to-right" }}>
                    <h1 className="font-bold text-4xl md:text-6xl pr-4">{title}</h1>
                </TransitionComponent>
                <div className="pr-24 flex flex-col gap-16 md:gap-10 items-start">
                    <TransitionComponent transitionProps={{ transitionType: "right-to-left" }}>
                        <h2 className="font-semibold text-2xl leading-6">
                            {subTitle}
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
                <video
                    className="h-full w-full object-cover object-[center_bottom] md:w-full md:h-auto"
                    width={"100%"} height={"100%"} autoPlay
                    loop
                    muted preload="none">
                    <source src={`${prefix}/videos/home_video.mp4`} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default HeroSection