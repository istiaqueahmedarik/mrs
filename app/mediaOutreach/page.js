import { ImageList } from '@/components/component/image-list'
import React from 'react'
export const revalidate = 3600
function page() {
  return (
    <div className='top-[5rem]  relative '>
        <ImageList/>
    </div>
  )
}

export default page