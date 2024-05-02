import MainSection from '@/components/MainSection'
import AboutUs from '@/components/AboutUs'
import DonateUs from '@/components/DonateUs'
import { client } from '@/sanity/lib/client';
import { TeamLead } from '@/components/component/team-lead';
import Timeline from '@/components/Timeline';
export const revalidate = 3600
async function loadData()
{
  const query = `*[_type == "singleImageCard"]`;
  const res = await client.fetch(query,{ next: { revalidate: 3600 } });
  return res;
}
async function loadTime()
{
  const query = `*[_type == "achievementsPage"]  | order(time desc)`
  const res = await client.fetch(query,{ next: { revalidate: 3600 } });
  return res;
}

export default async function Home() {
  const [aboutUs, timeLine] = await Promise.all([loadData(), loadTime()]);
  return (
    <main>
      <div className=''>
        
        <MainSection/>
        <AboutUs dt={aboutUs}/>
        {/* <Team/> */}
        {/* <Sponsor/> */}
        <Timeline data={timeLine}/>
        <DonateUs/>
        
      </div>
    </main>
  )
}
