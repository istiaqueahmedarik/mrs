import Image from 'next/image'
import React from 'react'

function SingleImageCard(props) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer hover:filter hover:brightness-125 transition-all duration-200">
    <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100}
      alt="Gallery Image 2"
      className="object-center object-cover aspect-auto w-full h-72 group-hover:scale-110 transform transition ease-in-out duration-200"
      height="400"
      src={props.image}
      style={{
        aspectRatio: "400/400",
      }}
      width="400"
    />
    <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-4 w-full">
      <h3 className="font-bold text-xl text-white group-hover:text-blue-500 transition duration-200">{props.title}</h3>
      <p className="text-sm text-gray-400 group-hover:text-blue-300 transition duration-200">
        {props.desc}
      </p>
    </div>
  </div>
  )
}

export default SingleImageCard