"use client"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { urlFor } from "@/lib/sanity";
import Image from "next/image";

export function CoverCard(props) {
  return (
    (<Card className="shadow-md rounded-md overflow-hidden max-w-sm">
      <Image placeholder="blur" blurDataURL="/iconblur.jpg"
        alt="Cover image"
        className="w-full object-cover"
        height="200"
        src={urlFor(props.image).url()}
        style={{
          aspectRatio: "400/200",
          objectFit: "cover",
        }}
        width="400" />
      <CardHeader className="p-3">
        <CardTitle className="text-xl font-bold">{props.Title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <p className="text-xs">
          {props.description}
        </p>
      </CardContent>
    </Card>)
  );
}
