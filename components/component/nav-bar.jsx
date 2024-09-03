'use client'

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { CalendarDays, GalleryHorizontalEnd, HelpingHand, Home, ImagePlus, Menu, Users2 } from "lucide-react"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import useScroll from "../Hook/useScroll"

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/Team', label: 'Team', icon: Users2 },
  { href: '/blogs', label: 'Blogs', icon: CalendarDays },
  { href: '/Competitions', label: 'Competitions', icon: CalendarDays },
  { href: '/ImageGallery', label: 'Gallery', icon: GalleryHorizontalEnd },
  { href: '/mediaOutreach', label: 'Media Outreach', icon: ImagePlus },
  { href: '/Sponsors', label: 'Sponsors', icon: HelpingHand },
]

export function NavBar() {
  const path = usePathname()
  const scrollPos = useScroll()
  const [isOpen, setIsOpen] = useState(false)

  const NavLink = ({ href, label, icon, isMobile = false }) => (
    <NavigationMenuItem>
      <Link
        href={href}
        className={`group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white ${path===href ? "bg-gray-700 text-white" : ""
          } focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
      >
        { label}
      </Link>
    </NavigationMenuItem>
  )

  return (
    <header className={`w-full ${scrollPos <= 20 ? "bg-transparent" : ""} fixed top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#111827] text-white`}>
      <div className="flex items-center space-x-5">
        <Image
          placeholder="blur"
          blurDataURL="/iconblur.jpg"
          quality={100}
          alt="Mongol Barta Logo"
          className="w-10 h-10 rounded-full"
          height={100}
          width={100}
          src="/icon.jpg"
        />
        <p className="text-lg font-bold lg:block hidden">Mongol Barta</p>
      </div>

      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Sheet className="bg-transparent" open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6 bg-[#141A2B]" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-transparent text-white w-[300px] sm:w-[400px]">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink className="text-white" key={item.href} {...item} isMobile />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}