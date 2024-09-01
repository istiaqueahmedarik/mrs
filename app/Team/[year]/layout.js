import TeamYearList from '@/components/TeamYearList'
import { Teams } from '@/components/teams'
import { client } from '@/sanity/lib/client'
import { UsersRoundIcon } from 'lucide-react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const revalidate = 6000
export const metadata = {
    title: 'Mongor Barta',
    description: 'Mongor Barta is a club for developing and learning about mars rover and space science',
}
import { Manrope } from 'next/font/google'
import { Chivo } from 'next/font/google'
import Link from 'next/link'
import { Suspense } from 'react'

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
})

const chivo = Chivo({
    subsets: ['latin'],
    display: 'swap',
})



export default async function RootLayout({ children,params }) {
    
    return (
        <div className={`${manrope.className}  text-gray-50`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Teams year={params.year} />
            </Suspense>

            {children}


        </div>

    )
}
