import { AddSponsor } from '@/components/component/add-sponsor'
import React from 'react'
export const revalidate = 10
function page() {
  return (
    <div className='top-[2rem]  relative '>
        <AddSponsor />
    </div>
  )
}

export default page