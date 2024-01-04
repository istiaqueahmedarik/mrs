
import { Announcement } from '@/components/component/announcement'

export const revalidate = 3600
export default function page() {
  return (
    <div className='top-[2rem]  relative  AnnouncementContainer'>
        <Announcement />
    </div>
  )
}
