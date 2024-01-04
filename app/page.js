import MainSection from '@/components/MainSection'
import AboutUs from '@/components/AboutUs'
import DonateUs from '@/components/DonateUs'
import { ImageSlider } from '@/components/ImageSlider'
import { client } from '@/sanity/lib/client';
import TypeWriting from '@/components/TypeWriting';
async function loadData()
{
  const query = `*[_type == "singleImageCard"]`;
  const res = await client.fetch(query);
  return res;
}
export default async function Home() {
  
  return (
    <main>
      <div className=''>
        
        <MainSection/>
        <AboutUs dt={await loadData()}/>
        {/* <Team/> */}
        {/* <Sponsor/> */}
        <DonateUs/>
        
      </div>
    </main>
  )
}
