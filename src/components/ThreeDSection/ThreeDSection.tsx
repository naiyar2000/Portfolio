"use client"
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { Deadpool } from './Deadpool'
import * as THREE from 'three'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { MyAvatar } from './MyAvatar'
import { Button } from '../ui/button'
import { useClientMediaQuery } from '@/app/hooks/useClientMediaQuery'
import { Clapperboard, PartyPopper, FerrisWheel, Laugh, Play, Pause, Frame } from "lucide-react"
import { Slider } from "@/components/ui/slider";
import CanvasLoader from './CanvasLoader'

type ActionTypes = "dance" | "backflip" | "sideflip" | "laugh";

interface ThreeDSectionProps {
    isAvatar?: boolean,
    isControlEnabled?: boolean,
    initialPosition?: number[]
}

const ThreeDSection = ({
    isAvatar = false,
    isControlEnabled = true,
    initialPosition = [1, -3, -3, 4]
}: ThreeDSectionProps) => {

    const isMobile = useClientMediaQuery('(max-width: 600px)')

    const [position, setPosition] = useState(initialPosition);

    const [characterAction, setCharacterAction] = useState<ActionTypes>("laugh");
    const [pause, setPause] = useState(false);

    useEffect(() => {
        if (isMobile) {
            setPosition(prev => {
                const temp = [...prev];
                temp[3] = isAvatar ? temp[3] * 1 : temp[3] * 2;
                temp[0] = isAvatar ? temp[0] * 1 : temp[0] * 3;
                return temp;
            })
        }
    }, [isMobile, isAvatar])

    // Update position based on slider value
    const handleInputChange = (axis: "x" | "y" | "z" | "scale", values: number[]) => {
        const value = values[0];
        if (axis === 'x') {
            setPosition([value, position[1], position[2], position[3]]);
        } else if (axis === 'y') {
            setPosition([position[0], value, position[2], position[3]]);
        } else if (axis === 'z') {
            setPosition([position[0], position[1], value, position[3]]);
        } else if (axis === 'scale') {
            setPosition([position[0], position[1], position[2], value]);
        }
    };

    const getIcons = (action: ActionTypes) => {
        switch (action) {
            case "dance":
                return <PartyPopper />
            case "backflip":
                return <FerrisWheel />
            case "sideflip":
                return <Clapperboard />
            case "laugh":
                return <Laugh />;
            default:
                return <Laugh />;
        }
    }

    return (
        <div className={`group relative w-full ${isMobile ? "h-full" : "h-screen"}`}>
            {isControlEnabled && ControlUnit()}
            {isControlEnabled && (
                <div className="group-hover:flex flex cursor-pointer md:flex-col gap-2 z-10 md:hidden absolute top-5 left-5">
                    {(["dance", "backflip", "sideflip", "laugh"] as ActionTypes[]).map((action) => (
                        <Button className='p-2 cursor-pointer rounded-md' key={action} onClick={() => {
                            action === "sideflip" ? setPosition(isMobile ? [2, -3, -28, 7.4] : [1, -4, -30, 4]) : setPosition(isMobile ? [3, -3, -3, 8] : [1, -3, -3, 4])
                            setCharacterAction(action)
                        }}>{getIcons(action)}</Button>
                    ))}
                    <Button className='p-2 rounded-md' onClick={() => {
                        setPause(e => !e)
                    }}>{pause ? <Play /> : <Pause />}</Button>
                </div>
            )}
            <Canvas className='flex h-full w-full items-center justify-center'>
                <Suspense fallback={null}>
                    <ambientLight intensity={7} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    {!isMobile && <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                    }
                    {
                        isAvatar ? <MyAvatar
                            position={new THREE.Vector3(position[0], position[1], position[2])}
                            scale={position[3]}
                        /> :
                            <Deadpool
                                props={{ "position": new THREE.Vector3(position[0], position[1], position[2]), scale: position[3] }}
                                characterAction={characterAction}
                                pause={pause}
                            />
                    }
                </Suspense>
            </Canvas>
        </div >
    )

    function ControlUnit() {
        return <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}>
            <Popover>
                <PopoverTrigger className='bg-black opacity-65 rounded-sm backdrop-blur-md text-white text-sm px-2 py-1'>
                    <Frame />
                </PopoverTrigger>
                <PopoverContent align='start' className='bg-black text-white'>
                    <div className="flex flex-col gap-2 text-sm">
                        <div className='flex flex-col gap-2'>
                            <label>X Position: {position[0]}</label>
                            <Slider
                                min={-10}
                                max={10}
                                step={0.2}
                                value={[position[0]]}
                                onValueChange={(e) => handleInputChange('x', e)} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Y Position: {position[1]}</label>
                            <Slider
                                min={-10}
                                max={10}
                                step={.2}
                                value={[position[1]]}
                                onValueChange={(e) => handleInputChange('y', e)} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Z Position: {position[2]}</label>
                            <Slider
                                min={-10}
                                max={10}
                                step={0.2}
                                value={[position[2]]}
                                onValueChange={(e) => handleInputChange('z', e)} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Scale: {position[3]}</label>
                            <Slider
                                min={0}
                                max={1}
                                step={0.2}
                                value={[position[3]]}
                                onValueChange={(e) => handleInputChange('scale', e)} />
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    }
}

export default ThreeDSection