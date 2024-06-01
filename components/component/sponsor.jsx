
import client, { urlFor } from "@/lib/sanity";
import Image from "next/image";
export const revalidate = 10
async function loadSponsorData(id)
{
  const query = `*[_type == "sponsorPage"][${id}]`;
  const res = await client.fetch(query,{ next: { revalidate: 10 } });
  return res;
}
export async function Sponsor({id}) {
  const data = await loadSponsorData(id);
  
  return (
    (<section className="w-full py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#B9D6F2] to-[#a7cef2]">
           {data.type}
          </h2>
          <p
            className="mt-4 mx-auto max-w-[700px] text-gray-400 md:text-lg lg:text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#B9D6F2] to-[#a7cef2]">
            {data.subtitle}
          </p>
        </div>
        <div
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {data.sponsors.map((sponsor, index) => (
            <a  key={index} className="group" href="#">
            <div
              className="w-full h-24 bg-white rounded-md overflow-hidden flex items-center justify-center p-4 transition-colors duration-300 ease-in-out transform hover:scale-110">
              <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100}
                alt="Logo 1"
                className="w-2/3 h-auto object-contain"
                height="100"
                src={urlFor(sponsor.logo).url()}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100" />
            </div>
          </a>
          ))}
        </div>
        {/* <div className="flex justify-center mt-8">
          <Button
            className="text-white border-gray-400 hover:bg-gray-800"
            variant="outline">
            Become a Sponsor
          </Button>
        </div> */}
      </div>
    </section>)
  );
}
