"use client"
import { useState } from 'react';
import { useScrollPosition } from '@/app/hooks/useScrollPosition';
const Header = () => {

    const { scrollPosition } = useScrollPosition();
    const appName = "rent";

    const [showOption, setShowOptions] = useState(false);

    return (
        <div id='header' className={`container m-auto p-0 md:p-10  flex justify-between sticky top-0 z-50`}>
            <div className={`flex w-full items-center justify-center p-3 ${scrollPosition > 0 ? "bg-[#484848] opacity-90 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg" : "bg-transparent"}`}>
                <div style={{ flex: 2 }} className='flex md:justify-center items-center gap-5 md:gap-11 font-bold text-3xl'>
                    {
                        appName.split('').map((letter, index) => {
                            return <h1 key={index} className={`${index % 2 === 0 ? "text-custom-neon" : "text-white"}`}>{letter}</h1>
                        })
                    }
                    {/* <h1 className="text-3xl font-bold tracking-[35px] text-custom-neon">rent</h1> */}
                </div>
                <nav style={{ flex: 3 }} className={`hidden flex-grow md:flex justify-center space-x-20 font-500 text-grey-400`}>
                    <a href="#" className={`hover:text-white`}>Home</a>
                    <a href="#" className={`hover:text-white`}>Cars</a>
                    <a href="#" className={`hover:text-white`}>Our Services</a>
                </nav>
                <div style={{ flex: 2 }} className='hidden md:flex justify-end'>
                    <button onClick={() => alert("hello")} className="p-2 w-32 cursor-pointer bg-white text-black font-semibold rounded-md shadow-[0_20px_55px_rgba(255,255,255,0.3)]">Contact Us</button>
                </div>
                {/* <div className="md:hidden" onClick={() => setShowOptions(prev => !prev)}>
                    {
                        showOption ? <Delete size={"40px"} /> : <Image
                            src={`${prefix}/rental_car/assets/icons/hamburgerIcon.svg`}
                            alt={"option"}
                            width={40}
                            height={30}
                        />
                    }
                </div> */}
            </div>
        </div>
    )
}

export default Header