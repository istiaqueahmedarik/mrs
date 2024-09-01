import { Teams } from '@/components/teams'
import { client } from '@/sanity/lib/client';
import React from 'react'
async function loadData(id) {
  const query = `*[_type == "teamPage" && teamYear=="${id}"]`; 
    const res = await client.fetch(query, { next: { revalidate: 6000 } });
    return res;
}

export const experimental_ppr = true;

async function page({ params }) {
 
  return (
      <div>
    </div>
  )
}

export default page