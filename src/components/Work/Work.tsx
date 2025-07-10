"use client";

import Image from "next/image";
import { Tabs } from "../ui/custom-tabs";
import GallerySection from "./GallerySection";


export function Work() {
    const tabs = [
        {
            title: "Canvas",
            value: "canvas",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold bg-slate-600">
                    <GallerySection />
                </div>
            ),
        },
        {
            title: "Projects",
            value: "projects",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-glass">
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Playground",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-glass">
                    <p>Playground tab</p>
                    {/* <DummyContent /> */}
                </div>
            ),
        }
    ];

    return (
        <div className="h-[80vh] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-8xl mx-auto w-full  items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <Image
            src="/images/turbonote_ui.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%] md:h-[100%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
