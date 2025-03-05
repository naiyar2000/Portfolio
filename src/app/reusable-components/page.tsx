"use client";
import { Button } from '@/components/ui/button'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import React, { useState } from 'react'
import PreviewDrawer from './PreviewDrawer'
import Image from 'next/image'
import { prefix } from '@/prefix'
import "./component.css"
import ThreeDScrollingCards from './DemoComponents/ThreeDScrollingCards';
import CustomizableLayout from '@/components/CustomLayouts/CustomizableLayout';
import BlurLayout from '@/components/CustomLayouts/BlurLayout2';
import { SettingsComponent } from '@/components/CustomLayouts/SettingComponent';

const ReusableComponentList = [
  {
    id: 1,
    title: "3D Card Carousel",
    image: "scrolling-cards.png"
  },
  {
    id: 2,
    title: "Customizable Layout",
    image: "layouts.png",
  },
]

const ComponentsPage = () => {
  const [animate, setAnimate] = useState(false);
  const [selectedComponentId, setSelectedComponentId] = useState<number | null>(null);

  const getContent = (id?: number) => {
    if (id === undefined) return <></>;

    switch (id) {
      case 1:
        return <ThreeDScrollingCards animate={animate} />
      case 2:
        return <div className='h-[80vh] w-full'>
          <SettingsComponent />
          <CustomizableLayout />
        </div>
      default:
        return <ThreeDScrollingCards animate={animate} />
    }
  }
  return (
    <div className='min-h-[40vh] md:min-h-[50vh]'>
      <Drawer onClose={() => setAnimate(false)}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {ReusableComponentList.map(x => (
            <div key={x.id} className="bg-glass flex flex-col gap-2 p-2">
              <Image
                width={500}
                height={350}
                style={{
                  height: "300px",
                  borderRadius: "5px"
                }}
                src={`${prefix}/images/${x.image}`}
                alt="sample preview"
                unoptimized
              />
              <DrawerTrigger asChild>
                <Button variant="outline" onClick={() => {
                  setSelectedComponentId(x.id)
                  setAnimate(true)
                }}>View</Button>
              </DrawerTrigger>
            </div>
          ))}
        </div>
        <PreviewDrawer content={getContent(selectedComponentId)} title={ReusableComponentList?.[selectedComponentId]?.title ?? ""} />
      </Drawer>
    </div>
  )
}

export default ComponentsPage