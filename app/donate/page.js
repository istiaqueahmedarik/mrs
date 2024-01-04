import Payment from '@/components/Payment';
import React from 'react'
export const revalidate = 3600
function page() {
    return (
        <div className='top-[2rem]  relative mb-[4rem] mt-[2rem] bg-[#111827] h-[100vh]'>
            <Payment />
        </div>
    );
}

export default page