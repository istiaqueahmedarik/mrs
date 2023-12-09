import JoinUsAndFooter from '@/components/JoinUsAndFooter'
import Navbar from '@/components/NavBar'
import { ImageGallery } from '@/components/component/image-gallery'
import { ScienceTeamList } from '@/components/component/science-team-list'
import { ScienceTop } from '@/components/component/science-top'
import React from 'react'

export default function page() {
  return (
    <div className='ScienceMainContainer'>
        <Navbar/>
        <ScienceTop/>
        <ScienceTeamList/>
        <ImageGallery type="mechanicalImage"/>
        <JoinUsAndFooter/>
    </div>
  )
}
