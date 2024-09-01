import { AddSponsor } from '@/components/component/add-sponsor'
import React, { Suspense } from 'react'
export const revalidate = 6000


function page() {
  return (
    <div className='top-[2rem]  relative '>
      <Suspense fallback={<div>Loading...</div>}>
        <AddSponsor />
      </Suspense>
    </div>
  )
}

export default page