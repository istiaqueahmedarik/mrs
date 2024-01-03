'use client'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import SingleImageCard from "./SingleImageCard"
import { urlFor } from "@/lib/sanity"

export function ImageSlider({ data }) {
    return (
        <div className="m-auto grid place-content-center">
            <h1 className="text-center">
                <span className="text-2xl font-bold">Our</span>
                <span className="text-2xl font-bold text-cyan-600"> Gallery</span>
            </h1>
            <Carousel>
                <CarouselContent>
                    {data.map((image, index) => (
                        <CarouselItem key={index} className="">
                            <SingleImageCard image={urlFor(image.image).url()} title={image.Title} desc={image.description} />
                        </CarouselItem>

                    ))}

                </CarouselContent>
                <CarouselPrevious />
      <CarouselNext />
            </Carousel>
        </div>
    )
}

