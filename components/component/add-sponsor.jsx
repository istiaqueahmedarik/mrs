import { CardHeader, CardContent, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import BlockContent from '@sanity/block-content-to-react';

import client from '@/lib/sanity'
import Link from 'next/link';
export const revalidate = 3600;
async function loadSponsorData(id) {
  const query = `*[_type == "sponsorPage"]`
  const res = await client.fetch(query)
  return res
}
export async function AddSponsor() {
  const data = await loadSponsorData()
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Become a Sponsor
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-center text-gray-300">
          You can sponsor our event and get a lot of benefits.
        </p>
        <div className="flex flex-wrap justify-center items-start gap-8">
          {data.map((sponsor, index) => {
            
            return (
              <Card key={index} className="bg-gray-800 text-white">
                <CardHeader>
                  <h2 className="text-2xl font-bold">{sponsor.type} Sponsor</h2>
                </CardHeader>
                <CardContent className="space-y-4">
                <BlockContent blocks={sponsor.benefits} />
                  <Button
                    className="text-gray-300 border-gray-300"
                    variant="outline"
                  >
                    <Link href={`/AddSponsorship/${index}`}>Become a {sponsor.type} Sponsor</Link>
                    
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
