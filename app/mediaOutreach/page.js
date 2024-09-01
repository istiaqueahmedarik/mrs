import { ImageList } from '@/components/component/image-list'
import { client } from '@/sanity/lib/client';
import React, { Suspense } from 'react'
export const revalidate = 6000




async function page() {

  return (
    <div className='top-[5rem]  relative '>
      <Suspense fallback={<div>Loading...</div>}>
        <ImageList />
      </Suspense>
    </div>
  )
}

export default page