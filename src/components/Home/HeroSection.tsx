"use client"
import React, { useEffect } from 'react'
import { useHomeStore } from '@/store/homeStore'
import useAuthStore from '@/store/authStore'
import TextComponent from './TextComponent'
import { Button } from '../ui/button'
import { RefreshCcw } from 'lucide-react'
import Image from 'next/image'
import { prefix } from '@/prefix'
// import GitHubCalendar from 'react-github-calendar';


const HeroSection = () => {
    const { homePageData, setHomePageData } = useHomeStore();

    const { user } = useAuthStore();

    useEffect(() => {
        // setHomePageData();
    }, [user])

    return (
        <div className="relative min-h-screen">
            <div className="absolute top-40 left-5 md:left-16 z-10 flex">
                {
                    !homePageData.loading && <TextComponent />
                }
                {/* <Button onClick={setHomePageData}><RefreshCcw /></Button> */}

            </div>
            <div className="absolute right-1/4 top-36 portfolio-image md:block hidden z-40">
                <div className="relative scale-110">
                    <div className='absolute bottom-0 -z-10' style={{
                        borderRadius: "82% 18% 44% 56% / 47% 24% 76% 53%",
                        height: "370px",
                        background: "#748174",
                        width: "300px",
                    }}></div>
                    <Image
                        src={`${prefix}/images/naiyar.png`}
                        alt=""
                        height={500}
                        width={500}
                        className=""
                        style={{
                            borderRadius: "0% 18% 44% 56% / 47% 24% 76% 53%",
                            height: "auto",
                            width: "300px",
                        }}
                    />
                </div>
            </div>

        </div >
    )
}

export default HeroSection
