import Link from 'next/link';
import React from 'react';

const DonateUs = () => {
    return (
        <div className='grid place-content-center text-center  pt-[3%] pb-[3%] bg-[#141A2B]  mt-12 md:mt-8 lg:mt-5'>
            <h1 className='text-4xl font-bold mb-4'>Donate Us</h1>
            <p className='text-lg mb-8'>

                You can donate us by clicking on the button below. 
            </p>
            <Link href={"/donate"} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Donate Now
            </Link>
        </div>
    );
};
export default DonateUs;
