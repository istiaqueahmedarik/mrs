import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import client, { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
export const revalidate = 3600
async function fetchData() {
  const query = `*[_type == "events"]  | order(date desc)`;
  const res = await client.fetch(query);
  return res;
}
export async function Announcement() {
  const data = await fetchData();
  
  return (
    (<div
      key="1"
      className="bg-[#111827] text-white min-h-screen py-10 px-4 md:px-8 lg:px-16">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Announcements</h1>
      </header>
      {data.map((item, index) => {
        return(
          <Link href={`/events/${item.slug.current}`} key={index}>
            <Card  className="bg-[#2d3748] rounded-lg p-2 mb-6">
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
              <Image
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
     
      
    </div>)
  );
}
