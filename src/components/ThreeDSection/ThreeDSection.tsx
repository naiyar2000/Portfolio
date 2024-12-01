"use client"
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { Deadpool } from './Deadpool'
import * as THREE from 'three'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { MyAvatar } from './MyAvatar'
import { Button } from '../ui/button'
import { useClientMediaQuery } from '@/hooks/useClientMediaQuery'


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
                let temp = [...prev];
                temp[3] = isAvatar ? temp[3] * 1 : temp[3] * 2;
                temp[0] = isAvatar ? temp[0] * 1 : temp[0] * 3;
                return temp;
            })
        }
    }, [isMobile])

    // Update position based on slider value
    const handleInputChange = (axis: "x" | "y" | "z" | "scale", event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
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

    return (
        <div className={`relative w-full ${isMobile ? "h-full" : "h-screen"}`}>
            {isControlEnabled && ControlUnit()}
            <Canvas className='flex h-full w-full items-center justify-center'>
                <ambientLight intensity={7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                <Suspense fallback={<>{"loading"}</>}>
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
                    Controls
                </PopoverTrigger>
                <PopoverContent>
                    <div className='flex flex-col'>
                        <label>X Position: {position[0]}</label>
                        <input
                            min={"-100"}
                            max={"100"}
                            step={1}
                            type="range"
                            value={position[0]}
                            onChange={(e) => handleInputChange('x', e)} />
                    </div>
                    <div className='flex flex-col'>
                        <label>Y Position: {position[1]}</label>
                        <input
                            min={"-100"}
                            max={"100"}
                            step={1}
                            type="range"
                            value={position[1]}
                            onChange={(e) => handleInputChange('y', e)} />
                    </div>
                    <div className='flex flex-col'>
                        <label>Z Position: {position[2]}</label>
                        <input
                            min={"-100"}
                            max={"100"}
                            step={1}
                            type="range"
                            value={position[2]}
                            onChange={(e) => handleInputChange('z', e)} />
                    </div>
                    <div className='flex flex-col'>
                        <label>Scale: {position[3]}</label>
                        <input
                            min={"0"}
                            max={"10"}
                            step={0.2}
                            type="range"
                            value={position[3]}
                            onChange={(e) => handleInputChange('scale', e)} />
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {(["dance", "backflip", "sideflip", "laugh"] as ActionTypes[]).map((action) => (
                            <Button className='p-2 text-yellow-50 bg-red-500 rounded-md' key={action} onClick={() => {
                                action === "sideflip" ? setPosition(isMobile ? [2, -3, -28, 7.4] : [1, -4, -30, 4]) : setPosition(isMobile ? [3, -3, -3, 8] : [1, -3, -3, 4])
                                setCharacterAction(action)
                            }}>{action}</Button>
                        ))}
                        <Button className='p-2 text-yellow-50 bg-red-500 rounded-md' onClick={() => {
                            setPause(e => !e)
                        }}>{"Pause/Play"}</Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    }
}

export default ThreeDSection