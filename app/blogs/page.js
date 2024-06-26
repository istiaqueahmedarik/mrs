
import { Announcement } from '@/components/component/announcement'
import { client } from '@/sanity/lib/client';

export const revalidate = 10
async function fetchData() {
  const query = `*[_type == "events"]  | order(date desc)`;
  const res = await client.fetch(query,{ next: { revalidate: 10 } });
  return res;
}
export default async function page() {
  const data = await fetchData();
  return (
    <div className='top-[2rem]  relative  AnnouncementContainer  mb-2'>
        <Announcement data={data}/>
    </div>

  )
}
