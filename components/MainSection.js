import Image from 'next/image';
import '../app/MainSec.css';
import Link from 'next/link';
import client, { getClient, urlFor } from '@/lib/sanity';
import { groq } from 'next-sanity';
async function fetchMainSec() {
  const query = `*[_type == "mainSection"][0]`;
  const res = await client.fetch(query,{next: {
    revalidate: 3600
  }});
  return res;
}
const MainSection = async() => {
  const data = await fetchMainSec();
  console.log(data);
    // if (!mainSection) return <div>Loading...</div>;
  return (
   <div className='w-full h-full'>
     <div className='w-full h-full grid  lg:grid-cols-[1fr_1fr] lg:grid-rows-[1fr] gap-2.5 text-left justify-around m-2.5'>
      <div className='grid content-center w-6/12 m-auto'>
        <h1 className='text-5xl md:text-center lg:text-left w-full text-white font-[bolder] m-2.5 p-0 font-custom'>{data.title}</h1>
        <div className='items-center flex flex-none md:flex-col lg:flex-row flex-nowrap gap-2.5 h-min justify-start overflow-hidden relative w-full  p-[3%]'>
          <Link href={`/${data.button1Link}`} className='content-center items-center bg-[#b9d6f2] flex flex-none flex-row flex-nowrap gap-2.5 h-min justify-center overflow-hidden relative w-6/12 text-[black] px-5 py-2.5 rounded-full'>{data.button1Text}</Link>
          <Link href={`/${data.button2Link}`} className='content-center items-center bg-white flex flex-none flex-row flex-nowrap gap-2.5 h-min justify-center overflow-hidden relative text-[black] w-6/12 px-5 py-2.5 rounded-full'>{data.button2Text}</Link>
        </div>
      </div>
      <div className='bg-transparent rounded-md  object-cover w-full  group-hover:scale-110 transform transition ease-in-out duration-200 m-auto'>
        <Image src={urlFor(data.image).url()} alt="Big Picture" className="" width={600} height={600} />
      </div>
    </div>
   </div>
  );
};

export default MainSection;
