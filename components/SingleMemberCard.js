import React from 'react'
import { Avatar } from './ui/avatar'
import Image from 'next/image'

function SingleMemberCard(props) {
  return (
    <div className="text-center">
            <Image placeholder="blur" blurDataURL="/iconblur.jpg"
              alt="Member Name"
              height="96"
              src={props.image}
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
              className='rounded-full mx-auto mb-4 border-4 border-[#bd1e59] shadow-lg'
            />
            <h3 className="text-xl font-semibold">{props.name}</h3>
            <p className="text-sm">{props.subtitle}</p>
    </div>
  )
}

export default SingleMemberCard