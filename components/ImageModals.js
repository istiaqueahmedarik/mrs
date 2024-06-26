import Image from 'next/image';
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ImageSlider } from './ImageSlider';
import { urlFor } from '@/lib/sanity';
function ImageModals({data}) {
  console.log(urlFor(data.children[0].image).url(),"data");
  const imageUrl = urlFor(data.image).url();
  return (
    <Drawer>
    <DrawerTrigger> <div className='cursor-pointer flex flex-col m-3 bg-[#222a3e] w-fit p-1 rounded-md text-white '>
          <Image placeholder="blur" blurDataURL="/iconblur.jpg" height={400} width={400} src={imageUrl} alt={data.Title} />
          <h1>{data.Title}</h1>
          <p>{data.description}</p>
          
      </div></DrawerTrigger>
    <DrawerContent className=" bg-transparent border-none w-full">
        <div className='w-full m-auto'><ImageSlider className="m-5" data={data.children} /></div>
    
    </DrawerContent>
  </Drawer>
    
  )
}

export default ImageModals

