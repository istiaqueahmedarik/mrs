import MainSection from '@/components/MainSection'
import AboutUs from '@/components/AboutUs'
import DonateUs from '@/components/DonateUs'
import { client } from '@/sanity/lib/client';
import { TeamLead } from '@/components/component/team-lead';
import Timeline from '@/components/Timeline';
import { Suspense } from 'react';
import LoadingSkeleton from '@/components/Loading';
import { MainSectionSkeleton } from '@/components/main-section-skeleton';
export const revalidate = 6000
async function loadData()
{
  const query = `*[_type == "singleImageCard"]`;
  const res = await client.fetch(query,{ next: { revalidate: 6000 } });
  return res;
}
async function loadTime()
{
  const query = `*[_type == "achievementsPage"]  | order(time desc)`
  const res = await client.fetch(query,{ next: { revalidate: 6000 } });
  return res;
}

export default async function Home() {
  const [timeLine] = await Promise.all([loadTime()]);
  return (
    <main>
      <div className=''>
        <Suspense fallback={<MainSectionSkeleton/>}>
          <MainSection />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <AboutUs />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Timeline data={timeLine} />
        </Suspense>
        <DonateUs/>
        
        {/* <Team/> */}
        {/* <Sponsor/> */}
      </div>
    </main>
  )
}
