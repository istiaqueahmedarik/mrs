import TeamYearList from '@/components/TeamYearList'
import { Teams } from '@/components/teams'
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

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
})

const chivo = Chivo({
    subsets: ['latin'],
    display: 'swap',
})
async function loadData(id) {
    const query = `*[_type == "teamPage" && teamYear=="${id}"]
    {
        specialTeams,
        teams
    }
    `;
    const res = await client.fetch(query, { next: { revalidate: 10 } });
    return res;
}

export default async function RootLayout({ children,params }) {
    const data = await loadData(params.year)
    console.log(data);
    return (
        <div className={`${manrope.className}  text-gray-50`}>
            <Teams data={data[0]} year={params.year} />

            {children}


        </div>

    )
}
