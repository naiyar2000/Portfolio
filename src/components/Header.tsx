"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { prefix } from "@/prefix";
import Image from "next/image";
import Link from "next/link";

const Header = () => {

    const { scrollPosition } = useScrollPosition();

    return (
        <div className={`w-full text-white ${scrollPosition > 0 ? "bg-black" : "bg-transparent"} px-5 md:px-14 py-2 h-20 flex justify-between items-center fixed top-0 z-10`}>
            <div>
                <Link href={"/"}>
                    <span className="font-bold from-neutral-400 text-2xl">Portfolio</span>
                </Link>
            </div>
            <div className="hidden md:flex gap-4">
                <Link href={"/work"}>Work</Link>
                <Link href={"/template"}>Templates</Link>
                <Link href={"/resources"}>Resources</Link>
            </div>
            <div className="md:hidden">
                <Image
                    src={`${prefix}/icons/hamburgerIcon.svg`}
                    alt={"option"}
                    width={40}
                    height={30}
                />
            </div>
        </div>
    )
}

export default Header