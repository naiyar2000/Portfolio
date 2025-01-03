// "use client"
import React from 'react'
// import { SettingsComponent } from '../CustomLayouts/SettingComponent'
// import CustomizableLayout from '../CustomLayouts/CustomizableLayout'
import Header from '../Header'
import BlurLayout from '../CustomLayouts/BlurLayout'

const LayoutComponents = () => {

    return (
        <>
            {/* <SettingsComponent />
            <CustomizableLayout /> */}
            <BlurLayout />
            <Header />
        </>
    )
}

export default LayoutComponents