import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TeamCard(props) {
  return (
      <div className="rounded-lg relative bg-gray-900 p-2 shadow-lg flex flex-auto justify-center">
              <Image placeholder="blur" blurDataURL="/iconblur.jpg" 
                  alt={`${props.name}`}
              className="parent h-full w-full  transition-transform duration-300  object-cover m-auto scale-100 rounded-lg hover:scale-120 hover:blur-xl"
                  height="800"
                  src={urlFor(props.imageSrc).url()}
                  style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                  }}
              width="800" />
          <div className='child absolute inset-1 flex items-end p-4 opacity-0 hover:opacity-100 transition-all  hover:bg-[#07070743]'>
              <div className='flex flex-col'>
                  <Link href={`/member/${props.teamMemberSlug}/${props.year}`} className="mb-2 text-[100%] text-[#fcfcfc] font-extrabold">{`${props.name}`}</Link>
                  <p className="mb-4 text-xl text-[#fcfcfc] font-bold">{props.role}</p>
                  <p className="text-sm text-[#fcfcfc]">
                      {props.subtitle}
                  </p>
              </div>
          </div>
      </div>
  )
}

export default TeamCard