import Image from "next/image"
import carImage from "../assets/car_image.png"
import CatalogSection from './CatalogSection'
import { prefix } from "@/prefix"
// import carImage from "../assets/car_image2.png"

const HeroSection = () => {
    return (
        <div className='flex w-full justify-center mt-8'>
            <div className="relative w-full flex justify-center">
                <div className="absolute md:w-2/6">
                    <h1 className='md:text-6xl text-wrap text-center font-bold hero-section-title'>Rent the best cars</h1>
                </div>
                <Image alt="" src={`${prefix}/rental_car/assets/car_image.png`} height={1000} width={400} className='w-1/3 -z-10 scale-x-[-2] scale-y-[1.6]' />
                <div className='absolute w-full flex md:flex-row md:mt-0 flex-col mt-36'>
                    <div style={{ flex: 2 }} className="flex flex-col justify-center items-center">
                        <div className="flex md:flex-col gap-12 flex-row">
                            <div className="flex flex-col">
                                <h1 className='text-3xl font-bold'>{"100+"}</h1>
                                <h1 className='text-md text-[#848484]'>{"Types of machines"}</h1>
                            </div>
                            <div className="flex flex-col items-start">
                                <h1 className='text-3xl font-bold'>{"20k+"}</h1>
                                <h1 className='text-md text-[#848484]'>{"Clients served"}</h1>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 3 }}></div>
                    <div style={{ flex: 2 }}>
                        <div className="w-3/4 m-auto mt-12">
                            <h1 className='text-md text-[#848484] text-justify'>
                                {"We want you to have a stress-free rental experience. so we make it easy to hire a car - by providing simple search tools, customer reviews and plenty of pick-up locations across the city."}
                            </h1>
                        </div>
                    </div>
                    <div className='md:hidden mt-10'>
                        <CatalogSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection