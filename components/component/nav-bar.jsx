"use client"
import { NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import client from "@/lib/sanity";
import { Award, CalendarDays, Contact, GalleryHorizontalEnd, HeartHandshake, HelpingHand, Home, ImagePlusIcon, Rotate3D, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import useScroll from "../Hook/useScroll";

export function NavBar({data}) {
 
  const scrollPos = useScroll();
  console.log(scrollPos);
  return (
    ( <header className={`w-full ${scrollPos<=20?"bg-transparent":""} fixed top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#111827] text-white `}>
    <div className="flex items-center space-x-5">
      <Image alt="" className="w-10 h-10 rounded-full" height={100} width={100} src="/icon.jpg"/>
      <p className="text-lg font-bold lg:grid md:hidden sm:hidden hidden">Mongol Barta</p>
    </div>
 
    <NavigationMenu className="hidden lg:block md:hidden sm:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/">
               <Home className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Home</div> 
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
            <Users className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Teams</div> 
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid bg-gray-800 w-[200px] p-2 text-white">
                {data.map((team, index) =>{
                  return(
                    <NavigationMenuLink key={index} asChild>
                  <Link
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-800 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    href={`/team/${team.teamNameSlug.current}`}>
                    <div className="text-sm font-medium leading-none bg-gray-800 group-hover:underline">{team.teamName}</div>
                  </Link>
                </NavigationMenuLink>
                  )
                })}
               
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Rover">
               <Rotate3D className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Rover</div> 
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Achievement">
               <Award className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Achievements</div> 
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/blogs">
              <CalendarDays className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Blogs</div> 
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Competitions">
              <CalendarDays className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Competitions</div> 
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/ImageGallery">
               <GalleryHorizontalEnd className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Gallery</div> 
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/mediaOutreach">
               <ImagePlusIcon className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Media Outreach</div> 
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Sponsors">
              <HelpingHand className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Sponsors</div> 
            </NavigationMenuLink>
          </NavigationMenuItem>
         

          
          
          
          
          {/* <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/donate">
               <HelpingHand className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Donate</div> 
            </NavigationMenuLink>
          </NavigationMenuItem> */}
          
          {/* <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Contact">
               <Contact className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Contact</div> 
            </NavigationMenuLink>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>

    
      <NavigationMenu className='block lg:hidden md:block sm:block transition-all duration-1000 '>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            href="/">
             <Home className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Home</div> 
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
          <Users className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Teams</div> 
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid bg-gray-800 w-[200px] p-2 text-white">
              {data.map((team, index) =>{
                return(
                  <NavigationMenuLink key={index} asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-800 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href={`/team/${team.teamNameSlug.current}`}>
                  <div className="text-sm font-medium leading-none bg-gray-800 group-hover:underline">{team.teamName}</div>
                </Link>
              </NavigationMenuLink>
                )
              })}
             
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
            <NavigationMenuLink
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="/Sponsors">
              <HelpingHand className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Sponsors</div> 
            </NavigationMenuLink>
          </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <NavigationMenuLink
            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            href="/Contact">
             <Contact className="grid md:hidden lg:hidden sm:grid" size={18} /> <div className="hidden sm:hidden md:grid lg:grid">Contact</div> 
          </NavigationMenuLink>
        </NavigationMenuItem> */}
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>
           <div className="hidden sm:hidden md:grid lg:grid">Others</div> 
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid bg-gray-800 w-[200px] p-2 text-white">
            <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-800 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href={`/Rover`}>
                  <div className="text-sm font-medium leading-none bg-gray-800 group-hover:underline">Rover</div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-800 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href={`/Achievement`}>
                  <div className="text-sm font-medium leading-none bg-gray-800 group-hover:underline">Achievements</div>
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-800 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href={`/blogs`}>
                  <div className="text-sm font-medium leading-none bg-gray-800 group-hover:underline">Blogs </div>
                </Link>
              </NavigationMenuLink>


              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-800 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href={`/Competitions`}>
                  <div className="text-sm font-medium leading-none bg-gray-800 group-hover:underline">Competitions </div>
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-800 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href={`/ImageGallery`}>
                  <div className="text-sm font-medium leading-none bg-gray-800 group-hover:underline">Image Gallery</div>
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-800 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href={`/mediaOutreach`}>
                  <div className="text-sm font-medium leading-none bg-gray-800 group-hover:underline">Media Outreach</div>
                </Link>
              </NavigationMenuLink>

              

             

              

              {/* <NavigationMenuLink asChild>
                <Link
                  className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors bg-gray-800 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href={`/donate`}>
                  <div className="text-sm font-medium leading-none bg-gray-800 group-hover:underline">Donate Us </div>
                </Link>
              </NavigationMenuLink> */}

             
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        
       
       
      </NavigationMenuList>
    </NavigationMenu>
    
  </header>)
  );
}



