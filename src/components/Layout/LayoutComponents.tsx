"use client"
import React from 'react'
import { SettingsComponent } from '../CustomLayouts/SettingComponent'
import CustomizableLayout from '../CustomLayouts/CustomizableLayout'
import Header from '../Header'

const LayoutComponents = () => {

    return (
        <>
            <SettingsComponent />
            <CustomizableLayout />
            <Header />
        </>
    )
}

export default LayoutComponents