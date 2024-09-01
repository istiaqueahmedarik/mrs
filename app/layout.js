import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/NavBar'
import JoinUsAndFooter from '@/components/JoinUsAndFooter'
import { NavBar } from '@/components/component/nav-bar'
import Script from 'next/script'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from '@/components/ui/toaster'
import DonateUs from '@/components/DonateUs'
const inter = Inter({ subsets: ['latin'] })
export const revalidate = 6000
export const metadata = {
  title: 'Mongor Barta',
  description: 'Mongor Barta is a club for developing and learning about mars rover and space science',
}
import { Manrope } from 'next/font/google'
import { Chivo } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} flex flex-col content-around`}>
        <Navbar className=""/>
        <SpeedInsights/>
        {children}

        <JoinUsAndFooter/>
        <Toaster />
        </body>
    </html>
  )
}
