import { client } from '@/lib/sanity'
import Timeline from './Timeline'

async function loadTime() {
    const query = `*[_type == "achievementsPage"]  | order(time desc)`
    const res = await client.fetch(query, { next: { revalidate: 6000 } })
    return res
}

export default async function TimelineContainer() {
    const data = await loadTime()
    return <Timeline data={data} />
}