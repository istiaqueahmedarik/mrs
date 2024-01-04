
import { Announcement } from '@/components/component/announcement'

export const revalidate = 10;
export default function page() {
  return (
    <div className='top-[2rem]  relative  AnnouncementContainer'>
        <Announcement />
    </div>
  )
}
