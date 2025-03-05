"use client"
import React from 'react'
import CatalogSection from '@/components/RentalCar/CatalogSection'
import HeroSection from '@/components/RentalCar/HeroSection'

const RentalHomePage = () => {
    return (
        <>
            <HeroSection />
            <div className='hidden md:block'>
                <CatalogSection />
            </div>
        </>

    )
}

export default RentalHomePage