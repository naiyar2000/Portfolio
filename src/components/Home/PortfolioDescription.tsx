"use client";

import { prefix } from '@/prefix'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

let layoutTypes = [
    {
        title: "Grid: Overlay",
        src: "grid-overlay-1000w.png"
    },
    {
        title: "Grid: Simple",
        src: "grid-simple-1000w.png"
    },
    {
        title: "Hover: Follow Cursor",
        src: "hover-follow-cursor-1000w.png"
    },
    {
        title: "Hover: Background",
        src: "hover-background-1000w.png"
    },
]

const PortfolioDescription = () => {

    const [selectedLayoutType, setSelectedLayoutType] = useState<{ title: string, src: string }>(layoutTypes[0]);

    return (
        <div style={{ backgroundColor: "#9a9190" }} className="text-black text-xs font-semibold flex flex-col w-full justify-center items-center pt-10 pb-24">
            <div className="text-white flex flex-col items-center gap-6 mb-10">
                <div className="w-80 text-center">
                    <span className="text-4xl">
                        {"Create a portfolio that stands out."}
                    </span>
                </div>
                <div className="w-2/5 text-center">
                    <span className="text-xl">
                        {"Choose from a variety of unique layouts to build an online portfolio that best displays your work. Add individual projects to keep your website organized and easy-to-navigate."}
                    </span>
                </div>
            </div>
            <div className="w-1/2">
                <div className="flex px-4 bg-white ">
                    <div className="flex-1 content-center">
                        <span className="">Edit</span>
                    </div>
                    <div style={{ gap: "1px" }} className="flex-1 flex flex-col items-center justify-center">
                        <span className="">Edit</span>
                        <span className="text-gray-500">{"Page(Draft)"}</span>
                    </div>
                    <div className="flex-1 flex gap-2 items-center justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                </div>
                <div className="w-full" style={{height: "0.8px"}}></div>
                <div className="w-full relative">
                    <Image src={`${prefix}/images/${selectedLayoutType.src}`} className="w-full mb-3" alt='description image' width={10000} height={10000} />
                    <div className="absolute bg-white -bottom-10 -right-40 w-56 rounded-sm">
                        <div className="p-3 text-sm font-light text-slate-500">Layout</div>
                        {
                            layoutTypes.map(item => (
                                <div
                                    key={item.title}
                                    className={`p-3 flex justify-between text-sm font-light text-slate-700 hover:bg-slate-100 cursor-pointer ${selectedLayoutType.src === item.src && "bg-slate-100"}`}
                                    onClick={() => setSelectedLayoutType(item)}
                                >
                                    <span>
                                        {item.title}
                                    </span>
                                    {
                                        selectedLayoutType.src === item.src && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                        </svg>
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className="absolute -bottom-20 -right-28">
                        <Link href={"/"}>
                            <span className="text-xl font-semibold underline text-white">VIEW SPOT TEMPLATE</span>
                        </Link>
                    </div>
                    <span className="text-white mt-2">{"Click to see how easy it is to change layouts"}</span>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDescription