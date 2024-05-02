'use client'
import React from 'react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { TeamLead } from './component/team-lead';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import BlockContent from '@sanity/block-content-to-react'

const Timeline = ({ data }) => {
    console.log(data);
    return (

        <div className=" text-gray-50 p-6 md:p-10 lg:p-12 rounded-lg">
            <div className="flex items-center justify-center mb-6 text-center">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">Our Achievment</h2>
                
            </div>
            <div className="flex items-center overflow-x-auto gap-6 pb-4">
                {data?.map((item,id) => { 
                    return (
                        <div key={id} className="transition-all bg-[#121826] hover:bg-[#182034] p-4 flex-shrink-0 w-80 space-y-4 m-auto">
                            <Image
                                alt="Timeline Item"
                                className="rounded-lg object-cover"
                                height={300}
                                src={urlFor(item.image).url()}
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <div className="h-2 w-2 bg-gray-500 rounded-full" />
                                    <span>{new Date(item.time).toLocaleDateString()}</span>
                                </div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                
                                    <BlockContent blocks={item.description} />
                            </div>
                        </div>
                    )
                })}
               
                
            </div>
        </div>


    );
};

export default Timeline;
