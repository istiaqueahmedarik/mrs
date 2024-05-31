import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import React from 'react'

function CompCard(props) {
    console.log(props)
  return (
    <div class="grid items-center gap-4 p-4">
    <div class="relative overflow-hidden rounded-lg">
      <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100}
        src={urlFor(props.imageSrc).url()}
        alt="Cover"
        width="400"
        height="225"
        class="object-cover w-full h-60 transition-transform duration-300 scale-100 hover:scale-105"
        style="aspect-ratio: 400 / 225; object-fit: cover;"
      />
      <div class="absolute inset-0 flex items-end p-4 pointer-events-none">
        <div class="grid gap-1">
          <h1 class="font-bold text-2xl tracking-tight">
            {props.title}
          </h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CompCard