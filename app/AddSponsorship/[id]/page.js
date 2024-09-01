import Navbar from '@/components/NavBar'
import { Contact } from '@/components/component/contact'
import Contactleft from '@/components/component/contactleft'
import client from '@/lib/sanity';
import React from 'react'
export const revalidate = 6000
async function loadSponsorData(id) {
    const query = `*[_type == "sponsorPage"][${id}]`;
    const res = await client.fetch(query,{ next: { revalidate: 6000 } });
    return res;
}
export default async function page({params}) {
    const data = await loadSponsorData(params.id);
  return (
    <div className='top-[8rem] ContactMainContainer'>
        
        <Contactleft type={`Contacting for ${data.type} sponsorship`}/>
    </div>
  )
}
