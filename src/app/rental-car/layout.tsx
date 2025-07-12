import Footer from '@/components/RentalCar/Footer'
import Header from '@/components/RentalCar/Header'
import React from 'react'
import "../globals.css";
import '@fontsource/poppins';


const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="relative min-h-[120vh]" style={{ color: 'rgba(255, 255, 255, 0.87)' }}>
            <div className="absolute hidden z-10 md:flex h-full w-full">
                <div style={{ flex: 2 }} className='bg-[#1B1B1B]'></div>
                <div style={{ flex: 3 }} className='bg-custom-gradient'></div>
                <div style={{ flex: 2 }} className='bg-[#1B1B1B]'></div>
            </div>
            <div className="absolute z-10 w-full h-full flex flex-col" id='app-layout'>
                <Header />
                <div className='flex-1'>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default layout