"use client"
import React, { useEffect } from 'react'
import useAuthStore from '@/store/authStore'
import TextComponent from './TextComponent'
import Image from 'next/image'
import { prefix } from '@/prefix'

const HeroSection = () => {

    const { user } = useAuthStore();

    return (
        <section className="relative min-h-screen flex flex-col pt-48 md:pt-0 md:flex-row md:items-center md:justify-between md:px-10">
            <TextComponent />
            <div className="hidden relative scale-110 flex-1 md:flex md:justify-center">
                <div className='absolute bottom-0 -z-10' style={{
                    borderRadius: "82% 18% 44% 56% / 47% 24% 76% 53%",
                    height: "370px",
                    background: "#748174",
                    width: "300px",
                }}></div>
                <Image
                    src={`${prefix}/images/naiyar_2.png`}
                    alt=""
                    height={320}
                    width={300}
                    // layout='fill'
                    className="profile-image"
                    priority
                />
            </div>
        </section>
    )
}

export default HeroSection
