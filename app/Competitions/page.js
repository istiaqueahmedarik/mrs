import CompCard from '@/components/CompCard'
import { client } from '@/sanity/lib/client';
import React from 'react'

export const revalidate = 10
async function fetchData() {
  const query = `*[_type == "compCard"]`;
  const res = await client.fetch(query,{ next: { revalidate: 10 } });
  return res;
}
async function page() {
    const data = await fetchData();

  return (
    <div className='pt-[5rem]'>
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

export default page