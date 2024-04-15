import Navbar from '@/components/NavBar'
import { Achievment } from '@/components/component/achievment'
import { client } from '@/sanity/lib/client'
import React from 'react'
export const revalidate = 3600
async function loadData() {
  const query = `*[_type == "achievementsPage"]  | order(time desc)`
  const res = await client.fetch(query,{ next: { revalidate: 3600 } })
  return res
}
export default async function page() {
  const data = await loadData()

  return (
    <div className=''>
        
        <Achievment data={data}/>
    </div>
  )
}
