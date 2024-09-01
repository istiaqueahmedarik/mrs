
import { Sponsor } from "@/components/component/sponsor";
import BlockContent from '@sanity/block-content-to-react';
import client, { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import { Suspense } from "react";

export const revalidate = 6000
async function loadSponsorData(id) {
    const query = `*[_type == "sponsorPage"][${id}]`;
    const res = await client.fetch(query,{ next: { revalidate: 6000 } });
    return res;
}


export default async function Page({ params }) {
    
    return (
        <div className='top-[2rem]  relative  MainContainer'>
            <Suspense fallback={<div>Loading...</div>}>
                <Sponsor id={params.type} />
            </Suspense>
            
            <Suspense fallback={<div>Loading...</div>}>
                <SponsorData params={params} />
            </Suspense>

        </div>
    )
}



async function SponsorData({ params }) {
    const data = await loadSponsorData(params.type);

  return (
      <div>
          {data.sponsors.map((i, index) => {
              return (
                  (index % 2 == 0) ? (
                      <div key={index} className="grid grid-rows-1 p-[1%] place-content-center grid-cols-[1fr_2fr] m-[4%] gap-3 bg-[#1c253a] rounded-md">
                          <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100} src={urlFor(i.logo).url()} width={300} height={300} alt="sponsor logo" className="rounded-md m-auto ml-[3%]" />
                          <div className="grid grid-rows-[1fr_2fr_1fr] text-left">
                              <h1 className="text-3xl font-extrabold">{i.name}</h1>
                              <PortableText value={i.description} />
                              <Link href={i.link} className="rounded-md text-pink-400">Learn More</Link>
                          </div>
                      </div>
                  ) : (
                      <div key={index} className="grid grid-rows-1 p-[2%] place-content-center grid-cols-[2fr_1fr] m-[4%] gap-3 bg-[#1c253a] rounded-md">
                          <div className="grid grid-rows-[1fr_2fr_1fr] text-left">
                              <h1 className="text-3xl font-extrabold">{i.name}</h1>
                              <PortableText value={i.description} />
                              <Link href={i.link} className="rounded-md text-pink-400">Learn More</Link>
                          </div>
                          <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100} src={urlFor(i.logo).url()} width={300} height={300} alt="sponsor logo" className="rounded-md m-auto ml-[3%]" />
                      </div>
                  )
              )
          })}
    </div>
  )
}
