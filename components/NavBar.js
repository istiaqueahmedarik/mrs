import React, { Suspense } from 'react'
import { NavBar } from './component/nav-bar'
import client from '@/lib/sanity';
export const revalidate = 6000
// async function loadTeamData()
// {
//   const query = `*[_type == "teamPage"]`;
//   const res = await client.fetch(query,{ next: { revalidate: 6000 } });
//   return res;
// }

async function Navbar() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
    </Suspense>
  )
}

export default Navbar