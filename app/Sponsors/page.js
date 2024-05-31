
import { Sponsor } from "@/components/component/sponsor";
import BlockContent from '@sanity/block-content-to-react';
import client, { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { AddSponsor } from "@/components/component/add-sponsor";
export const revalidate = 3600
async function loadSponsorData() {
    const query = `*[_type == "sponsorPage"]`;
    const res = await client.fetch(query,{ next: { revalidate: 3600 } });
    return res;
}
export default async function Page() {
    const Alldata = await loadSponsorData();
    
    return (
        <div>
            <AddSponsor/>

            {Alldata.map((data, index1) => {
                return(
                    <div key={index1} className=' bottom-[2rem]  relative  MainContainer'>
            <Sponsor id={index1} />
            {/* {data.sponsors.map((i, index) => {
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
                                <Link  href={i.link} className="rounded-md text-pink-400">Learn More</Link>
                            </div>
                            <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100} src={urlFor(i.logo).url()} width={300} height={300} alt="sponsor logo" className="rounded-md m-auto ml-[3%]" />
                        </div>
                    )
                )
            })} */}


        </div>
                )
            })}
        </div>
    )
}
