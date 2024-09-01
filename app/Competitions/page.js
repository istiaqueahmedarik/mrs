import CompCard from '@/components/CompCard'
import { client } from '@/sanity/lib/client';
import React, { Suspense } from 'react'

export const revalidate = 6000
async function fetchData() {
  const query = `*[_type == "compCard"]`;
  const res = await client.fetch(query,{ next: { revalidate: 6000 } });
  return res;
}
export const experimental_ppr = true;

async function page() {

  return (
    <div className='pt-[5rem]'>
      <Suspense fallback={<div>Loading...</div>}>
        <CompCardWrapper />
      </Suspense>

    </div>
  )
}

export default page

async function CompCardWrapper()
{
  const data = await fetchData();

  return (
    <div>
      {
        data.map((item) => {
          return (
            <CompCard
              key={item._id}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
            />
          )
        })
      }
    </div>
  )
}