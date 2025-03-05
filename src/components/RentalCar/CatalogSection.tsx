import Image from "next/image"
// import appleLogo from "../assets/apple-logo.png"
import { prefix } from "@/prefix"
import "./App.css"

const CatalogSection = () => {
    return (
        <div className='flex items-center flex-col gap-6 md:gap-0 md:flex-row justify-between md:-mt-4'>
            <div style={{ flex: 2 }} className="order-3 md:order-1 flex justify-center">
                <div className="flex gap-4">
                    <Image alt="" src={`${prefix}/rental_car/assets/apple-logo.png`} width={40} height={100} />
                    <div className="flex flex-col justify-center">
                        <h1 className='font-400 text-sm'>{"Available on the"}</h1>
                        <h1 className='font-bold text-xl'>{"App Store"}</h1>
                    </div>
                </div>
            </div>
            <div style={{ flex: 3 }} className="order-1 md:order-2 flex justify-center">
                <button onClick={() => alert("hello")} className="cursor-pointer rounded-md before:ease relative h-12 w-40 overflow-hidden border border-(--clr-primary-green) bg-custom-neon text-black transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-[0_20px_55px_rgb(124,207,0,0.3)] hover:before:-translate-x-40">Open Catalog</button>
            </div>
            <div style={{ flex: 2 }} className="order-2 md:order-3 flex justify-center">
                <div className="scrolldown">
                    <div className="chevrons">
                        <div className="chevrondown"></div>
                        <div className="chevrondown"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogSection