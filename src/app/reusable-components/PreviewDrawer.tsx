"use client"
import { DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import React from 'react'

interface PreviewDrawerProps {
    content: JSX.Element,
    title: string
}

const PreviewDrawer = ({ content, title }: PreviewDrawerProps) => {


    return (
        <DrawerContent className={"bg-drawer text-white"}>
            <DrawerHeader>
                <DrawerTitle>{title}</DrawerTitle>
            </DrawerHeader>
            {content}
        </DrawerContent>
    )
}

export default PreviewDrawer