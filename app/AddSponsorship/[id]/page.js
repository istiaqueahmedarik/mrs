import Navbar from '@/components/NavBar'
import { Contact } from '@/components/component/contact'
import Contactleft from '@/components/component/contactleft'
import client from '@/lib/sanity';
import React from 'react'
async function loadSponsorData(id) {
    const query = `*[_type == "sponsorPage"][${id}]`;
    const res = await client.fetch(query, {
        next: {
            revalidate: 3600
        }
    });
    return res;
}
export default async function page({params}) {
    const data = await loadSponsorData(params.id);
  return (
    <div className='ContactMainContainer'>
        
        <Contactleft type={`Contacting for ${data.type} sponsorship`}/>
    </div>
  )
}
