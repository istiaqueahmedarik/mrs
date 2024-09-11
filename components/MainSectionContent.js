'use client'

import Image from 'next/image'
import '../app/MainSec.css'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MainSectionSkeleton } from './main-section-skeleton'

export default function MainSectionContent({ data }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <MainSectionSkeleton />

    return (
        <div className='top-[2rem] md:top-[1rem] lg:top-[0rem] relative lg:grid lg:grid-rows-[1fr] text-left justify-around bg-[#141A2B] h-screen p-4'>
            <div className='bg-transparent z-10 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='grid place-content-center lg:w-fit md:w-3/4 m-auto'
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center w-full text-white font-bold mb-2 p-0'
                    >
                        {data.title}
                    </motion.h1>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className='text-left grid w-full'
                    >
                        {data.typeWriting.map((item, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                                className='text-center md:text-left text-xl'
                            >
                                {item}
                            </motion.p>
                        ))}
                    </motion.span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className='bg-transparent rounded-md object-cover w-full group-hover:scale-110 transform transition ease-in-out duration-200 m-auto relative'
                >
                    <Image
                        placeholder="blur"
                        blurDataURL="/iconblur.jpg"
                        quality={100}
                        src={urlFor(data.image).url()}
                        alt="Big Picture"
                        className=""
                        width={600}
                        height={600}
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="absolute inset-0"
                    >
                        <GlowingBlobGradientLight className="hidden md:hidden lg:block blur-md w-full h-full" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

function GlowingBlobGradientLight(props) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 200 200'
            fill='none'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0ZM100 2C154.418 2 198 45.582 198 100C198 154.418 154.418 198 100 198C45.582 198 2 154.418 2 100C2 45.582 45.582 2 100 2Z'
                fill='url(#paint0_linear)'
            />
            <defs>
                <linearGradient
                    id='paint0_linear'
                    x1='100'
                    y1='0'
                    x2='100'
                    y2='200'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stopColor='#F3F4F6' />
                    <stop offset='1' stopColor='#F3F4F6' stopOpacity='0' />
                </linearGradient>
            </defs>
        </svg>
    )
}