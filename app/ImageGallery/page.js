import JoinUsAndFooter from '@/components/JoinUsAndFooter'
import Navbar from '@/components/NavBar'
import { ImageGallery } from '@/components/component/image-gallery'
import client from '@/lib/sanity';
import React from 'react'
async function loadData()
{
  const query = `*[_type == "singleImageCard"]`;
  const res = await client.fetch(query,{next: {
    revalidate: 3600
  }});
  return res;
}
export default async function page() {
  return (
    <div>
        <ImageGallery data = {await loadData()}/>
    </div>
  )
}
