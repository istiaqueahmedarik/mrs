import Navbar from '@/components/NavBar'
import { Achievment } from '@/components/component/achievment'
import { client } from '@/sanity/lib/client'
import React, { Suspense } from 'react'
export const revalidate = 6000
async function loadData() {
  const query = `*[_type == "achievementsPage"]  | order(time desc)`
  const res = await client.fetch(query,{ next: { revalidate: 6000 } })
  return res
}
export const experimental_ppr = true
export default async function page() {
  const data = await loadData()

  return (
    <div className=''>
        
      <Suspense fallback={<div>Loading...</div>}>
        <Achievment data={data} />
      </Suspense>
    </div>
  )
}
