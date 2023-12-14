import Image from 'next/image'
import MainSection from '@/components/MainSection'
import AboutUs from '@/components/AboutUs'
import Team from '@/components/Team'
import JoinUsAndFooter from '@/components/JoinUsAndFooter'
import { ScienceTop } from '@/components/component/team-top'
import Navbar from '@/components/NavBar'
import { Sponsor } from '@/components/component/sponsor'
import DonateUs from '@/components/DonateUs'

export default function Home() {
  console.log("Home") 
  return (
    <main>
      <div>
        <MainSection/>
        <AboutUs/>
        {/* <Team/> */}
        {/* <Sponsor/> */}
        <DonateUs/>
        
      </div>
    </main>
  )
}
