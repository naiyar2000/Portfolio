"use client";
import React from 'react'
// import ThreeDSection from '../ThreeDSection/ThreeDSection'
import dynamic from 'next/dynamic';

const ThreeDSection = dynamic(() => import("../ThreeDSection/ThreeDSection"), { ssr: false })

const ThreejsCharacterSection = () => {
    return (
        <div className="flex flex-col md:flex-row w-full md:h-auto h-screen overflow-visible px-4 md:px-10 py-8 md:py-24 gap-2 items-stretch">
            <div className="animate-character-section w-full md:w-1/3 min-h-full  rounded-md">
                <ThreeDSection />
            </div>
            <div className="animate-character-description flex-1 px-4 md:px-8 rounded-md">
                <div className="flex flex-col  text-white py-6 md:p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">About This Project</h2>
                    <div className='mb-6'>
                        <h3 className="text-xl font-bold md:font-semibold">Character Model</h3>
                        <p className="text-gray-300 mt-2 sm:text-lg sm:font-semibold md:text-sm">
                            The 3D character model was sourced from{" "}
                            <a
                                href="https://sketchfab.com/3d-models/wade-wilson-deadpool-27e717dcd8dd491ab8fc4ed3bb9ece7f"
                                className="text-blue-400 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sketchfab
                            </a>{" "}
                            (credit to the original creator:{" "}
                            <span className="italic">[Tigerar1]</span>). The model
                            was optimized for smooth integration into a web-based portfolio.
                        </p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold">Animation Workflow</h3>
                        <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-2 sm:text-lg sm:font-semibold md:text-sm">
                            <li>
                                <span className="font-semibold">Base Animations:</span> Rigged and
                                animated using <span className="text-white">Mixamo</span> to add
                                dynamic movement sequences.
                            </li>
                            <li>
                                <span className="font-semibold">Customization:</span> Refined and
                                enhanced in <span className="text-white">Blender</span>, combining
                                multiple animations for fluid transitions.
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold">Tools & Technologies Used</h3>
                        <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-2 sm:text-lg sm:font-semibold md:text-sm">
                            <li>Next.js for creating a responsive portfolio</li>
                            <li>Three.js & React Three Fiber for 3D rendering</li>
                            <li>Blender & Mixamo for animation and model preparation</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Highlights</h3>
                        <ul className="list-disc pl-6 text-gray-300 mt-2 space-y-2 sm:text-lg sm:font-semibold md:text-sm">
                            <li>Custom animations for lifelike movement</li>
                            <li>Optimized for smooth web performance</li>
                            <li>Integrated lighting and textures for visual impact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ThreejsCharacterSection