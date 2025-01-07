import { Button } from '@/components/ui/button'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import React from 'react'
import PreviewDrawer from './PreviewDrawer'
import Image from 'next/image'
import { prefix } from '@/prefix'

const ComponentsPage = () => {
  return (
    <div className='min-h-[40vh] md:min-h-[50vh]'>
      <Drawer>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[1, 2].map(x => (
            <div key={x} className="bg-glass flex flex-col gap-2 p-2">
              <Image
                width={500}
                height={250}
                style={{
                  height: "220px"
                }}
                src={`${prefix}/images/mousecloud.gif`}
                alt="sample preview"
                unoptimized
              />
              <DrawerTrigger asChild>
                <Button variant="outline">View</Button>
              </DrawerTrigger>
            </div>
          ))}
        </div>
        <PreviewDrawer />
      </Drawer>
    </div>
  )
}

export default ComponentsPage