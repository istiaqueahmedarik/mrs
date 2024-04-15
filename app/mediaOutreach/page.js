import { ImageList } from '@/components/component/image-list'
import { client } from '@/sanity/lib/client';
import React from 'react'
export const revalidate = 3600
async function loadData()
{
  const query = `*[_type == "imageItem"]`;
  const res = await client.fetch(query,{ next: { revalidate: 3600 } });
  return res;
}
async function page() {
  const data = await loadData();
  return (
    <div className='top-[5rem]  relative '>
        <ImageList data={data}/>
    </div>
  )
}

export default page