import { prefix } from '@/prefix'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TransitionComponent from '../AnimatedComponents/TransitionComponent'

const sellPageData = [
    {
        title: "Sell Products",
        subTitle: "Allow visitors to browse your merchandise, add items to their cart, and check out simply and efficiently.",
        imgSrc: "inventory-panel-2-500w.jpg",
        link: "/"
    },
    {
        title: "Sell Services",
        subTitle: "Collect customer emails and build mailing lists.",
        imgSrc: "automation-500w.jpg",
        link: "/"
    },
    {
        title: "Schedule Appointments",
        subTitle: "Create a website that helps attract new customers and allows them to book your services.",
        imgSrc: "appointment-confirmation-500w.jpg",
        link: "/"
    },
]

const SellAnythingSection = () => {
    return (
        <div className="text-black bg-white text-xs font-semibold flex flex-col w-full justify-center items-center pt-10 pb-24">
            <div className=" flex flex-col items-center gap-6 mb-10">
                <div className="w-80 text-center">
                    <span className="text-4xl">
                        {"Sell anything"}
                    </span>
                </div>
                <div className="w-2/5 text-center">
                    <span className="text-xl">
                        {"Sell your art, photography, prints, and even services with Squarespace’s rich product offerings and scheduling tools."}
                    </span>
                </div>
            </div>
            <TransitionComponent transitionProps={{transitionType: "down-to-top"}} className="flex gap-5 text-black px-24">
                <>
                    {
                        sellPageData.map((i) => (
                            <div key={i.title} className="flex-1 flex flex-col gap-10">
                                <div className="max-h-72">
                                    <Image
                                        src={`${prefix}/images/${i.imgSrc}`}
                                        alt={i.title}
                                        width={580}
                                        height={580}
                                        className='w-full h-full'
                                    />
                                </div>
                                <div className="">
                                    <div className="flex flex-col gap-2 mb-4 font-bold">
                                        <div className="">
                                            <span className="text-3xl">{i.title}</span>
                                        </div>
                                        <div className="">
                                            <span className="text-base">{i.subTitle}</span>
                                        </div>
                                    </div>
                                    <Link href={i.link}>
                                        <span className="underline text-lg">
                                            {"LEARN MORE"}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </>
            </TransitionComponent>
        </div>
    )
}

export default SellAnythingSection