import Image from 'next/image'
import MainSection from '@/components/MainSection'
import AboutUs from '@/components/AboutUs'
import Team from '@/components/Team'
import JoinUsAndFooter from '@/components/JoinUsAndFooter'
import { ScienceTop } from '@/components/component/science-top'
import Navbar from '@/components/NavBar'
import { Sponsor } from '@/components/component/sponsor'

export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
        <MainSection/>
        <AboutUs/>
        {/* <Team/> */}
        <Sponsor/>
        <JoinUsAndFooter/>
      </div>
    </main>
  )
}
