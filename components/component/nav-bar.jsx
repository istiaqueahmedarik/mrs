
import { NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import Image from "next/image";
import Link from "next/link"

export function NavBar() {
  return (
    (<header
      className="flex items-center justify-between px-6 py-4 bg-[#111827] text-white">
      <div className="flex items-center space-x-5">
        <Image className="w-10 h-10 rounded-full" height={100} width={100} src="/icon.jpg"/>
        <p className="text-lg font-bold">Mongol Barta</p>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Team</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[200px] p-2 bg-gray-800 text-white">
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-gray-800 p-4 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href="/Science">
                    <div className="text-sm font-medium leading-none group-hover:underline">Science</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-gray-800 p-4 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href="/Electrical">
                    <div className="text-sm font-medium leading-none group-hover:underline">Electrical</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-gray-800 p-4 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href="/Mechanical">
                    <div className="text-sm font-medium leading-none group-hover:underline">Mechanical</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-gray-800 p-4 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href="/Software">
                    <div className="text-sm font-medium leading-none group-hover:underline">Software</div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Announcement">
              Announcements
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/ImageGallery">
              Image Gallery
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Rover">
              The Rover
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Achievement">
              Our Achievement
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Contact">
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>)
  );
}



