import ImageModals from '@/components/ImageModals';
import JoinUsAndFooter from '@/components/JoinUsAndFooter'
import Navbar from '@/components/NavBar'
import { ImageGallery } from '@/components/component/image-gallery'
import client from '@/lib/sanity';
import React from 'react'
export const revalidate = 10
async function loadData()
{
  const query = `*[_type == "singleImageCard"]`;
  const res = await client.fetch(query,{ next: { revalidate: 10 } });
  return res;
}
export default async function page() {
  const data = await loadData();
  return (
    <div className='top-[2rem]  relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10'>
      {
        data.map((item, index) => (
          <div key={index}>
            <ImageModals data={item} />
          </div>
        ))
      }
    </div>
  )
}
