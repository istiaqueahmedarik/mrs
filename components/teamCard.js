import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TeamCard(props) {
  return (
      <div className='flex flex-col w-fit m-auto p-4 rounded-md group mb-4'>
          <Image placeholder="blur" blurDataURL="/iconblur.jpg"
              alt={`${props.name}`}
              className="transition-transform duration-300 max-w-xs rounded-full object-cover m-auto scale-100  hover:scale-120"
              height="500"
              src={urlFor(props.imageSrc).url()}
              style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
              }}
              width="500" />
          
          <div className='flex flex-col m-auto text-center'>
              <Link href={`/member/${props.teamMemberSlug}/${props.year}`} className="mb-2 text-[100%] text-[#fcfcfc] font-extrabold">{`${props.name}`}</Link>
              <p className="mb-4 text-xl text-[#fcfcfc] font-bold">{props.role}</p>
              <p className="text-sm text-[#fcfcfc]">
                  {props.subtitle}
              </p>
          </div>
      </div>
  )
}



   

export default TeamCard