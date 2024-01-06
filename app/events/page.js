
import { Announcement } from '@/components/component/announcement'
import { client } from '@/sanity/lib/client';

export const revalidate = 3600
async function fetchData() {
  const query = `*[_type == "events"]  | order(date desc)`;
  const res = await client.fetch(query);
  return res;
}
export default async function page() {
  const data = await fetchData();
  return (
    <div className='top-[2rem]  relative  AnnouncementContainer'>
        <Announcement data={data}/>
    </div>

  )
}
