import TeamYearList from '@/components/TeamYearList'
import { client } from '@/sanity/lib/client'
import { UsersRoundIcon } from 'lucide-react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const revalidate = 10
export const metadata = {
    title: 'Mongor Barta',
    description: 'Mongor Barta is a club for developing and learning about mars rover and space science',
}
import { Manrope } from 'next/font/google'
import { Chivo } from 'next/font/google'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
})

const chivo = Chivo({
    subsets: ['latin'],
    display: 'swap',
})
async function loadYear() {
    const query = `*[_type == "teamPage"]
    {
        teamYear
    }
    `;
    const res = await client.fetch(query, { next: { revalidate: 10 } });
    return res;
}
export default async function RootLayout({ children }) {
    const years = await loadYear();
    console.log(years)
    return (
        <div className={`${manrope.className}  text-gray-50`}>
            <section className="container mx-auto py-15 px-4 md:px-6 lg:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-8">
                        <UsersRoundIcon className="mx-auto h-12 w-12" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Meet Our Talented Team</h1>
                    <p className="mt-4 text-gray-400 md:text-xl">
                        We are a diverse group of passionate individuals dedicated to pushing the boundaries of what&pos;s possible.
                    </p>
                </div>
            </section>
            <div className="p-2 flex flex-row justify-center w-full overflow-scroll text-5xl">
                <TeamYearList years={years} />
                


            </div>
            {children}

            
            </div>
            
    )
}
