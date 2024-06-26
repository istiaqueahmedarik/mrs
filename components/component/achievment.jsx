import BlockContent from '@sanity/block-content-to-react'
import { Badge } from '@/components/ui/badge'
import client, { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { PortableText } from '@portabletext/react';

export async function Achievment({data}) {
  
  return (
    <div className="top-[3rem]  relative  min-h-screen bg-[#111827] text-gray-200">
      <main className="p-6 space-y-6">
        <section>
          <h2 className="text-3xl font-bold">Our Achievements</h2>
          <p className="text-gray-400">
            We&apos;re proud to showcase our club&apos;s achievements over the years.
          </p>
        </section>

        <section>
          <div className="divide-y divide-gray-600 space-y-4">
            {data.map((achievement, index) => {
              return (
                (index&1^1)?(
                  <div
                  key={index}
                  className="grid lg:grid-cols-[1fr_2fr] lg:grid-rows-[1fr] gap-4  pt-4 md:grid-cols-1 md:grid-rows-[2fr_1fr]  sm:grid-cols-1 sm:grid-rows-[2fr_1fr] 
                  md:gap-6 sm:gap-6 p-2 rounded-md bg-[#171e2e]"
                >
                   <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100}
                      src={urlFor(achievement.image).url()}
                      alt={achievement.title}
                      width={400} 
                      height={400} 
                      objectFit="cover"
                      className="rounded-lg"
                    />
                    <div className='flex flex-col'>
                      
                      <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-2xl" variant="secondary">
                        {new Date(achievement.time).toLocaleDateString()}
                      </Badge>
                      <PortableText value={achievement.description} />
                      </div>
                  
                </div>
                ):(
                  <div
                  key={index}
                  className="grid lg:grid-cols-[2fr_1fr] lg:grid-rows-[1fr] gap-4  pt-4 md:grid-cols-1 md:grid-rows-[1fr_2fr]  sm:grid-cols-1 sm:grid-rows-[1fr_2fr] 
                  md:gap-6 sm:gap-6 p-2 rounded-md bg-[#192235]"
                >
                  
                    <div className='flex flex-col'>
                      
                      <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-2xl" variant="secondary">
                        {new Date(achievement.time).toLocaleDateString()}
                      </Badge>
                      <PortableText value={achievement.description} />
                      </div>
                      <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100}
                      src={urlFor(achievement.image).url()}
                      alt={achievement.title}
                      width={400} 
                      height={400} 
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  
                </div>
                )
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
