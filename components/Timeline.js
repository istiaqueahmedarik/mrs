'use client'

import React from 'react'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { urlFor } from '@/lib/sanity'



export default function Timeline({ data }) {
    const scrollRef = React.useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef
        if (current) {
            if (direction === 'left') {
                current.scrollBy({ left: -200, behavior: 'smooth' })
            } else {
                current.scrollBy({ left: 200, behavior: 'smooth' })
            }
        }
    }

    return (
        <div className="bg-background text-foreground p-6 md:p-10 lg:p-12 rounded-lg">
            <div className="flex items-center justify-center mb-6 text-center">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Our Achievements</h2>
            </div>
            <div className="relative">
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                    onClick={() => scroll('left')}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                    onClick={() => scroll('right')}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
                <div
                    ref={scrollRef}
                    className="flex items-start overflow-x-auto gap-6 pb-4 px-4 snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] space-y-4 snap-start"
                        >
                            <div className="bg-card hover:bg-card/80 transition-colors rounded-lg p-4 shadow-lg">
                                <Image
                                    alt={item.title}
                                    className="rounded-lg object-cover w-full"
                                    height={225}
                                    src={urlFor(item.image).url()}
                                    width={300}
                                />
                                <div className="space-y-2 mt-4">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-2 w-2 bg-primary rounded-full" />
                                        <span>{new Date(item.time).toLocaleDateString()}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <div className="text-sm text-muted-foreground">
                                        <PortableText value={item.description} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}