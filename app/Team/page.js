import { client } from '@/sanity/lib/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
async function loadYear() {
  const query = `*[_type == "teamPage"] | order(time desc)
    {
        teamYear
    }
    `;
  const res = await client.fetch(query, { next: { revalidate: 6000 } });
  return res;
}


async function page() {
  const data = await loadYear();
  revalidatePath('/Team');
  redirect(`/Team/${data[0].teamYear}`);
  
}

export default page