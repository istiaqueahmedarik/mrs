import React from 'react';
import '../app/JoinUs.css';
import Link from 'next/link';
import client from '@/lib/sanity';
const GetJoinUsAndFooter = async () => {
    const query = `*[_type == "joinUsAndFooter"][0]`;
    const res = await client.fetch(query,{next: {
      revalidate: 3600
    }});
    return res;
}
async function JoinUsAndFooter() {
    const data = await GetJoinUsAndFooter();

    return (
      <div className="flex flex-col justify-between items-center bg-gray-900 text-[#b9d6f2] p-[50px] md:p-[30px] lg:p-[20px]">
        <div className="text-center w-full md:w-3/5 lg:w-2/5 grid place-items-center m-auto">
          <h1 className="text-[2rem] md:text-[1.8rem] lg:text-[1.6rem] font-extralight font-[bolder] mb-5">{data.title}</h1>
          <p className="text-[1.1rem] md:text-[1rem] lg:text-[0.9rem] mb-[30px]">{data.subtitle}</p>
          <Link href={'/Contact'} className="content-center items-center bg-[#b9d6f2] flex flex-none flex-row flex-nowrap gap-2.5 h-min justify-center overflow-hidden relative text-[black] w-full md:w-8/12 lg:w-6/12 px-5 py-2.5 rounded-full">{data.buttonText}</Link>
        </div>
        <div className="flex justify-between items-center w-full mt-[50px] md:mt-[40px] lg:mt-[30px]">
          
          <p className="copyright">
            &copy; {data.copyright}
          </p>
        </div>
      </div>
  )
}

export default JoinUsAndFooter;

