import JoinUsAndFooter from '@/components/JoinUsAndFooter'
import Navbar from '@/components/NavBar'
import { Announcement } from '@/components/component/announcement'
import { ImageGallery } from '@/components/component/image-gallery'
import { ScienceTeamList } from '@/components/component/team-list'
import { ScienceTop } from '@/components/component/team-top'
import React from 'react'

export default function page() {
  return (
    <div className='AnnouncementContainer'>
        <Announcement />
    </div>
  )
}
