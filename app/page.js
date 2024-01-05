import MainSection from '@/components/MainSection'
import AboutUs from '@/components/AboutUs'
import DonateUs from '@/components/DonateUs'
import { client } from '@/sanity/lib/client';
import { TeamLead } from '@/components/component/team-lead';
export const revalidate = 3600
async function loadData()
{
  const query = `*[_type == "singleImageCard"]`;
  const res = await client.fetch(query);
  return res;
}
async function loadLead()
{
  const query = `*[_type == "Leader"]`;
  const res = await client.fetch(query);
  return res;
}
export default async function Home() {
  const [aboutUs,teamLead] = await Promise.all([loadData(),loadLead()]);
  return (
    <main>
      <div className=''>
        
        <MainSection/>
        <AboutUs dt={aboutUs}/>
        {/* <Team/> */}
        {/* <Sponsor/> */}
        <TeamLead data={teamLead}/>
        <DonateUs/>
        
      </div>
    </main>
  )
}
