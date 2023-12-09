import React from 'react'
import { Avatar } from './ui/avatar'
import Image from 'next/image'

function SingleMemberCard() {
  return (
    <div className="text-center">
            <Image
              alt="Member Name"
              height="96"
              src="/science.jpg"
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
              className='rounded-full mx-auto mb-4 border-4 border-[#bd1e59] shadow-lg'
            />
            <h3 className="text-xl font-semibold">Name</h3>
            <p className="text-sm">SubTitle</p>
    </div>
  )
}

export default SingleMemberCard