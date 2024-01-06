import JoinUsAndFooter from '@/components/JoinUsAndFooter'
import Navbar from '@/components/NavBar'
import { ImageGallery } from '@/components/component/image-gallery'
import client from '@/lib/sanity';
import React from 'react'
export const revalidate = 3600
async function loadData()
{
  const query = `*[_type == "singleImageCard"]`;
  const res = await client.fetch(query,{ next: { revalidate: 3600 } });
  return res;
}
export default async function page() {
  return (
    <div className='top-[2rem]  relative'>
        <ImageGallery data = {await loadData()}/>
    </div>
  )
}
