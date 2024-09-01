import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import client, { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
async function fetchData() {
  const query = `*[_type == "events"]  | order(date desc)`;
  const res = await client.fetch(query, { next: { revalidate: 6000 } });
  return res;
}
export async function Announcement() {
  const data = await fetchData();

  
  return (
    (<div
      key="1"
      className=" text-white min-h-screen py-10 px-4 md:px-8 lg:px-16">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Blogs</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => {
          return (
            <Link href={`/blogs/${item.slug.current}`} key={index}>
              <Card className="bg-[#2d3748] rounded-lg p-2 mb-6 w-[90%]">
                <CardHeader>
                  <CardTitle
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    {item.eventTitle}
                  </CardTitle>
                  <CardDescription
                    className="text-[#f5f5f5] transition-all duration-300 transform bg-clip-text text-transparent bg-gradient-to-r from-white to-black text-xl">
                    Posted on {new Date(item.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <figure className="mb-4">
                    <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100}
                      alt="New update"
                      className="w-[200px] h-[200px] rounded-md shadow-md"
                      height="200"
                      src={urlFor(item.frontImage).url()}
                      style={{
                        aspectRatio: "400/200",
                        objectFit: "cover",
                      }}
                      width="400" />
                  </figure>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
     
      
    </div>)
  );
}
