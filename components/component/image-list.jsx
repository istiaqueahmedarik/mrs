
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { HoverCardTrigger, HoverCardContent, HoverCard } from "@/components/ui/hover-card"
import client, { urlFor } from "@/lib/sanity";
import BlockContent from '@sanity/block-content-to-react';
import Image from "next/image";
import { PortableText } from "@portabletext/react";
async function loadData() {
  const query = `*[_type == "imageItem"]`;
  const res = await client.fetch(query, { next: { revalidate: 6000 } });
  return res;
}
export async function ImageList() {
  const data = await loadData();
  console.log(data)
  return (
    (<div className="mb-[4%] ">
    <h2 className="text-2xl font-semibold mb-4 text-center">Media Outreach</h2>
    <p className="text-center mb-8">We have been featured in the following publications</p>
      <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6 bg-gray-950">
        {data.map((item,index) => {
          return(
            <HoverCard key={index}>
        <HoverCardTrigger asChild>
          <Card className="relative group overflow-hidden rounded-lg">
            <Link href={item.link}>
              <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100}
                alt={item.title}
                className="object-cover w-full h-96"
                height="400"
                src={urlFor(item.image).url()}
                style={{
                  aspectRatio: "500/400",
                  objectFit: "cover",
                }}
                width="400" />
              <div className=" p-4 bg-gray-950">
                <h3 className="font-semibold text-lg md:text-xl text-white bg-[#111827]">{item.title}</h3>
                {/* <Button variant="link">Learn more</Button> */}
              </div>
            </Link>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-black">
          <div className="space-y-1">
            <PortableText value={item.description} />
          </div>
        </HoverCardContent>
      </HoverCard>
          )
        })}
      
     
    </section>
    </div>)
  );
}
