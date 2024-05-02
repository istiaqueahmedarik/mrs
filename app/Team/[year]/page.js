import { Teams } from '@/components/teams'
import { client } from '@/sanity/lib/client';
import React from 'react'
async function loadData(id) {
  const query = `*[_type == "teamPage" && teamYear=="${id}"]`; 
    const res = await client.fetch(query, { next: { revalidate: 3600 } });
    return res;
}


async function page({ params }) {
  const data = await loadData(params.year)
    console.log(data);
  return (
      <div>
      <Teams data={data[0]} year={params.year} />
    </div>
  )
}

export default page