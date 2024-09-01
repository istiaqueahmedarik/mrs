
import { Announcement } from '@/components/component/announcement'
import { client } from '@/sanity/lib/client';
import { Suspense } from 'react';

export const revalidate = 6000



export default async function page() {
  return (
    <div className='top-[2rem]  relative  AnnouncementContainer  mb-2'>
      <Suspense fallback={<div>Loading...</div>}>
        <Announcement />
      </Suspense>
    </div>

  )
}
