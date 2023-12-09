import Navbar from '@/components/NavBar'
import { Contact } from '@/components/component/contact'
import React from 'react'

export default function page() {
  return (
    <div className='ContactMainContainer'>
        <Navbar/>
        <Contact/>
    </div>
  )
}
