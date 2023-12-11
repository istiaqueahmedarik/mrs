

import Image from "next/image";
import SingleImageCard from "../SingleImageCard";
import client, { urlFor } from "@/lib/sanity";


export async function ImageGallery({data}) {
  console.log(data)
  return (
    (<div className="bg-[#111827] p-6">
      <h1
    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center p-10">
    Image Gallery
</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {data.map((image, index) => (
          <SingleImageCard key={index} image={urlFor(image.image).url()} title={image.Title} desc={image.description}/>
        ))}
        
      </section>
    </div>)
  );
}
