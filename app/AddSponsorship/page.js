import { AddSponsor } from '@/components/component/add-sponsor'
import React from 'react'
export const revalidate = 3600
function page() {
  return (
    <div className='top-[2rem]  relative '>
        <AddSponsor />
    </div>
  )
}

export default page