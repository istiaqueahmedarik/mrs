
import { Button } from "@/components/ui/button"
import client, { urlFor } from "@/lib/sanity";
import Image from "next/image";
async function fetch(type) {
  const query = `*[_type == "${type}"][0]`;
  const res = await client.fetch(query,{ next: { revalidate: 6000 } });
  return res;
}
export async function TeamTop({type}) {
  const data = await fetch(type);
  
  return (
    (<div
      key="1"
      className="relative bg-[#111827] text-white py-20 px-8 md:flex md:items-center md:justify-between">
      <div className="md:w-1/2">
        <h1
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400 cursor-text">
          {data.title}
        </h1>
        <p
          className="text-xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
          {data.description}
        </p>
        <Button className="bg-[#bd1e59]">{data.buttonText}</Button>
      </div>
      <div className="md:w-1/2  flex justify-center items-center">
        <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100}
          alt="Science Team"
          className="w-[70%] h-auto "
          height="1024"
          src={urlFor(data.image).url()}
          style={{
            aspectRatio: "600/600",
            objectFit: "cover",
          }}
          width="1024" />
      </div>
      <AtomIcon className="absolute top-0 left-0 w-32 h-32 text-[#bd1e59] opacity-20" />
      <MicroscopeIcon className="absolute bottom-0 right-0 w-32 h-32 text-[#bd1e59] opacity-20" />
      <MicroscopeIcon className="absolute top-0 right-0 w-32 h-32 text-[#bd1e59] opacity-20" />
      <SatelliteIcon className="absolute bottom-0 left-0 w-32 h-32 text-[#bd1e59] opacity-20" />
    </div>)
  );
}


function MicroscopeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>)
  );
}


function SatelliteIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M13 7 9 3 5 7l4 4" />
      <path d="m17 11 4 4-4 4-4-4" />
      <path d="m8 12 4 4 6-6-4-4Z" />
      <path d="m16 8 3-3" />
      <path d="M9 21a6 6 0 0 0-6-6" />
    </svg>)
  );
}


function AtomIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" />
      <path
        d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
      <path
        d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
    </svg>)
  );
}
