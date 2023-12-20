import Image from 'next/image'
import MainSection from '@/components/MainSection'
import AboutUs from '@/components/AboutUs'
import Team from '@/components/Team'
import JoinUsAndFooter from '@/components/JoinUsAndFooter'
import { ScienceTop } from '@/components/component/team-top'
import Navbar from '@/components/NavBar'
import { Sponsor } from '@/components/component/sponsor'
import DonateUs from '@/components/DonateUs'
import { Component } from '@/components/component/component'
import { ImageList } from '@/components/component/image-list'

export default function Home() {
  
  return (
    <main>
      <div className=''>
        
        <MainSection/>
        <AboutUs/>
        {/* <Team/> */}
        {/* <Sponsor/> */}
        <DonateUs/>
        
      </div>
    </main>
  )
}
