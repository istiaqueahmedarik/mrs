import React from 'react'
import { NavBar } from './component/nav-bar'
import client from '@/lib/sanity';
export const revalidate = 10;
async function loadTeamData()
{
  const query = `*[_type == "teamPage"]`;
  const res = await client.fetch(query);
  return res;
}

async function Navbar() {
  return (
    <NavBar data={await loadTeamData()} />
  )
}

export default Navbar