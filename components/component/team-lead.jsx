import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { urlFor } from "@/lib/sanity";
import Link from "next/link"

export function TeamLead({data}) {
  return (
    (<div>
      
      <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        
        <div  className="flex flex-col items-center space-y-2">
        <Link href="#">
          <Avatar>
            <AvatarImage alt="image" src={urlFor(data.avatarImage).url()} />
          </Avatar>
        </Link>
        <h3 className="font-semibold">{data.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{data.role}</p>
      </div>
     
      
    </div>
    </div>)
  );
}
