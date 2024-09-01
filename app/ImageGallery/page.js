import ImageModals from '@/components/ImageModals';
import JoinUsAndFooter from '@/components/JoinUsAndFooter'
import Navbar from '@/components/NavBar'
import { ImageGallery } from '@/components/component/image-gallery'
import client from '@/lib/sanity';
import React, { Suspense } from 'react'
export const revalidate = 6000
async function loadData()
{
  const query = `*[_type == "singleImageCard"]`;
  const res = await client.fetch(query,{ next: { revalidate: 6000 } });
  return res;
}


export default async function page() {
  return (
    <div className='top-[2rem]  relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10'>
      <Suspense fallback={<div>Loading...</div>}>
        <ImageModalWrapper />
      </Suspense>
    </div>
  )
}

async function ImageModalWrapper()
{
  const data = await loadData();
  return (
    <>
      {
        data.map((item, index) => (
          <div key={index}>
            <ImageModals data={item} />
          </div>
        ))
      }
    </>
  )
}
