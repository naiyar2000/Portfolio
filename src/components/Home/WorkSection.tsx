import { prefix } from '@/prefix'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TransitionComponent from '../AnimatedComponents/TransitionComponent'

const templateData = [
    {
        imagePath: "images/template-1.jpg",
        title: "STANTON"
    },
    {
        imagePath: "images/template-2.jpg",
        title: "FILLMORE"
    },
    {
        imagePath: "images/template-3.jpg",
        title: "NOLAN"
    },
    {
        imagePath: "images/template-4.jpeg",
        title: "UTICA"
    },
    {
        imagePath: "images/template-5.jpeg",
        title: "PALMO"
    },
]

const WorkSection = () => {
    return (
        <div className="bg-white flex flex-col gap-4 pb-20">
            <div className="flex text-black gap-28 px-10 pt-16">
                <div className='flex flex-col'>
                    <TransitionComponent transitionProps={{ threshold: 0.5, transitionType: "down-to-top" }}>
                        <div className="flex flex-col">
                            <span className="text-4xl font-bold">{"Pick your"}</span>
                            <span className="text-4xl font-bold">{"starting point"}</span>
                        </div>
                    </TransitionComponent>
                </div>
                <TransitionComponent transitionProps={{ threshold: 0.5, transitionType: "down-to-top" }} className="flex-1 flex flex-col items-center">
                    <div className="w-1/2">
                        <span className="text-xl font-semibold">{"Simply add a portfolio page or section to the Squarespace template of your choice. Or, get inspired by browsing the most popular portfolio website templates."}</span>
                        <Link href={"/"}>
                            <div className="flex gap-2 mt-4 font-bold border-b border-black mb-1 w-max">
                                <span>
                                    {"BROWSE TEMPLATE"}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </TransitionComponent>
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-10 text-black">
                {
                    templateData.map((i) => (
                        <div key={i.title} style={{
                            minWidth: "580px"
                        }} className="flex flex-col gap-2">
                            <Image
                                src={`${prefix}/${i.imagePath}`}
                                alt={i.title}
                                width={1000}
                                height={500}
                                className='w-full h-full'
                            />
                            <span className="underline font-semibold text-xl">{i.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WorkSection