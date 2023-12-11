import BlockContent from '@sanity/block-content-to-react'
import { Badge } from '@/components/ui/badge'
import client, { urlFor } from '@/lib/sanity'
import SanityBlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
async function loadData() {
  const query = `*[_type == "achievementsPage"]  | order(time desc)`
  const res = await client.fetch(query, {
    next: {
      revalidate: 3600,
    },
  })
  return res
}
export async function Achievment() {
  const data = await loadData()
  console.log(data)
  return (
    <div className="min-h-screen bg-[#111827] text-gray-200">
      <main className="p-6 space-y-6">
        <section>
          <h2 className="text-3xl font-bold">Our Achievements</h2>
          <p className="text-gray-400">
            We&apos;re proud to showcase our club&apos;s achievements over the years.
          </p>
        </section>

        <section>
          <div className="divide-y divide-gray-600 space-y-4">
            {data.map((achievement, index) => {
              return (
                <div
                  key={index}
                  className="pt-4 flex flex-col sm:flex-row items-start space-x-2 sm:space-x-4"
                >
                  <div className="order-2 sm:order-1 flex-shrink-0">
                    <Image
                      src={urlFor(achievement.image).url()}
                      alt={achievement.title}
                      width={500} // adjust as needed
                      height={500} // adjust as needed
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="order-1 sm:order-2">
                    <Badge
                      className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50 text-2xl"
                      variant="secondary"
                    >
                      {new Date(achievement.time).toLocaleDateString()}
                    </Badge>
                    <BlockContent blocks={achievement.description} />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
