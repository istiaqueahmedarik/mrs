import JoinUsAndFooter from '@/components/JoinUsAndFooter'
import Navbar from '@/components/NavBar'
import { Rover } from '@/components/component/rover'
import React, { Suspense } from 'react'


export default function page() {
  return (
    <div className='RoverMainContainer'>
        
      <Suspense fallback={<div>Loading...</div>}>
        <Rover />
      </Suspense>
    </div>
  )
}
