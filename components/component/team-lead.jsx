import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { urlFor } from "@/lib/sanity";
import Link from "next/link"

export function TeamLead({data}) {
  return (
    (<div>
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-2">Lead Team</h2>
        </div>
      <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        
      {data.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center space-y-2">
        <Link href="#">
          <Avatar>
            <AvatarImage alt="John Doe" src={urlFor(data[index].avatarImage).url()} />
          </Avatar>
        </Link>
        <h3 className="font-semibold">{data[index].name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{data[index].role}</p>
      </div>
        )
      })}
     
      
    </div>
    </div>)
  );
}
