"use client";
import { Search } from "lucide-react"
import locationLogo from "/assets/location.png"
import Image from "next/image"
import { prefix } from "@/prefix"

const Footer = () => {
    return (
        <div className='mt-12 bg-[#484848] p-2 md:p-0 min-h-48 w-full flex justify-center items-center rounded-t-2xl'>
            <div className="bg-glass flex justify-between items-start w-full md:w-3/4 p-4 md:p-8 rounded-4xl">
                <div className="flex flex-1 gap-2 flex-col items-start md:flex-row">
                    <div className="flex-1 flex gap-2 justify-center items-start md:border-r-2">
                        <Image alt="" src={`${prefix}/rental_car/assets/location.png`} width={25} height={25} style={{ width: "25px" }} />
                        <div className="flex flex-col">
                            <h1>
                                {"Choose a location"}
                            </h1>
                            <h1>
                                {"London, Great Britain"}
                            </h1>
                        </div>
                    </div>
                    <div className="flex-1 flex gap-2 justify-center items-start md:border-r-2">
                        <Image alt="" src={`${prefix}/rental_car/assets/location.png`} width={25} height={25} style={{ width: "25px" }} />
                        <div className="flex flex-col">
                            <h1>
                                {"Pick-up date"}
                            </h1>
                            <h1>
                                {"Dec 08, 10:00 PM"}
                            </h1>
                        </div>
                    </div>
                    <div className="flex-1 flex gap-2 justify-center items-start">
                        <Image alt="" src={`${prefix}/rental_car/assets/location.png`} width={25} height={25} style={{ width: "25px" }} />
                        <div className="flex flex-col">
                            <h1>
                                {"Return date"}
                            </h1>
                            <h1>
                                {"Dec 08, 10:00 PM"}
                            </h1>
                        </div>
                    </div>
                </div>
                <button onClick={() => alert("hello")} className="w-40 h-14 before:ease cursor-pointer relative overflow-hidden bg-custom-neon text-black font-semibold rounded-md flex justify-center items-center gap-2 transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[0_20px_55px_rgb(124,207,0,0.3)] hover:before:-translate-x-40">
                    <Search />
                    {"Search"}
                </button>
            </div>
        </div>
    )
}

export default Footer