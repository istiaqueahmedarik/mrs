import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'

export function TeamLead({ data }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 gird place-content-center w-fit">
      <div className="flex flex-col items-center space-y-2">
        <div>
          <Avatar>
            <AvatarImage alt="image" src={urlFor(data.avatarImage).url()} />
          </Avatar>
        </div>
        <h3 className="font-semibold">{data.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{data.role}</p>
      </div>
    </div>
  )
}
