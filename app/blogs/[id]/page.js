import client, { urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import React from 'react'
export const revalidate = 6000
async function fetchData(id) {
    const query = `*[_type == "events" && slug.current == "${id}"][0]`;
    const res = await client.fetch(query,{ next: { revalidate: 6000 } });
    return res;
}


async function page({params}) {
    const data = await fetchData(params.id);
    console.log(data);
    
  return (
       <div className='top-[5rem] mb-[2rem] relative  m-auto md:w-[60%] sm:w-[70%] w-[80%] lg:w-[50%] customHead'>
        <PortableText
            className="text-center text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl w-[50%] m-auto"
          value={data.eventPost}
          components={{
            types: {
              image: props => (
                <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100} src={urlFor(props.value).url()} alt="Big Picture" className="rounded-md mt-[2%] mb-[2%]" width={400} height={400} />
              ),

            }
          }}
        />
       </div>
  )
}

export default page