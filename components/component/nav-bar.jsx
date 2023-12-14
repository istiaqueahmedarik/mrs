'use client'
import { NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import client from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link"
async function loadTeamData()
{
  const query = `*[_type == "teamPage"]`;
  const res = await client.fetch(query,{next: {
    revalidate: 3600
  }});
  return res;
}

async function loadSponsorData()
{
  const query = `*[_type == "sponsorPage"]`;
  const res = await client.fetch(query,{next: {
    revalidate: 3600
  }});
  return res;
}
export async function NavBar() {
  const data = await loadTeamData();
  const sponsorData = await loadSponsorData();
  console.log(data)

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
              className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Team</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid bg-gray-800 w-[200px] p-2 text-white">
                {data.map((team, index) =>{
                  return(
                    <NavigationMenuLink key={index} asChild>
                  <Link
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-800 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href={`/team/${index}`}>
                    <div className="text-sm font-medium leading-none bg-gray-800 group-hover:underline">{team.teamName}</div>
                  </Link>
                </NavigationMenuLink>
                  )
                })}
               
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger>Sponsors</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid bg-gray-800 w-[200px] p-2 text-white">
                {sponsorData.map((sponsors, index) =>{
                  return(
                    <NavigationMenuLink key={index} asChild>
                  <Link
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-800 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href={`/Sponsors/${index}`}>
                    <div className="text-sm font-medium leading-none bg-gray-800 group-hover:underline">{sponsors.type}</div>
                  </Link>
                </NavigationMenuLink>
                  )
                })}
                <NavigationMenuLink asChild>
                  <Link
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-800 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href={`/AddSponsorship`}>
                    <div className="text-sm font-medium leading-none bg-gray-800 group-hover:underline">Sponsor Us</div>
                  </Link>
                </NavigationMenuLink>
               
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/events">
              Events
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/ImageGallery">
              Image Gallery
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Rover">
              Rover
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Achievement">
              Achievements
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/donate">
              Donate
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Contact">
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>)
  );
}



