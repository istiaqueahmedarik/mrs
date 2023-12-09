import JoinUsAndFooter from '@/components/JoinUsAndFooter'
import Navbar from '@/components/NavBar'
import { ImageGallery } from '@/components/component/image-gallery'
import React from 'react'

export default function page() {
  return (
    <div>
        <Navbar/>
        <ImageGallery type={"singleImageCard"}/>
        <JoinUsAndFooter/>
    </div>
  )
}
