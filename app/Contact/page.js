import Navbar from '@/components/NavBar'
import { Contact } from '@/components/component/contact'
import Contactleft from '@/components/component/contactleft'
import React from 'react'
export const revalidate = 3600
export default function page() {
  return (
    <div className='top-[2rem]  relative  ContactMainContainer'>
        
        <Contactleft type={`Contacting for communication`}/>
    </div>
  )
}
