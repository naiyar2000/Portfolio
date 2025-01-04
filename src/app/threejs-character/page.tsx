"use client";
import ThreejsCharacterSection from '@/components/Work/ThreejsCharacterSection'
import { useAppStore } from '@/store/appStore'
import React, { useEffect } from 'react'

const ThreeJsProject = () => {
    const setIsHome = useAppStore(state => state.setIsHome)
    useEffect(() => {
        setIsHome(false)
    }, [])
    return (
        <ThreejsCharacterSection />
    )
}

export default ThreeJsProject;