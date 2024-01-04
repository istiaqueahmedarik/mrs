import Image from 'next/image';
import '../app/MainSec.css';
import Link from 'next/link';
import client, { getClient, urlFor } from '@/lib/sanity';
import { groq } from 'next-sanity';
import TypeWriting from './TypeWriting';
export const revalidate = 3600
async function fetchMainSec() {
  const query = `*[_type == "mainSection"][0]`;
  const res = await client.fetch(query);
  return res;
}
const MainSection = async() => {
  const data = await fetchMainSec();
  
    // if (!mainSection) return <div>Loading...</div>;
  return (
    <div className='top-[5rem]  relative lg:grid lg:grid-rows-[1fr]  text-left justify-around'>
    <div className='grid place-content-center lg:w-fit md:w-3/4  m-auto '>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center  w-full text-white font-bold m-2.5 p-0 font-custom '>{data.title}</h1>
      <span className='text-center m-auto grid place-content-center w-full'>
        {/* {data.subTitle} */}
        <TypeWriting textArray={data.typeWriting} className="text-center"/>
        </span>
       
      <div className='items-center flex flex-col md:flex-row gap-2.5 h-min justify-start overflow-hidden relative w-full p-[3%]'>
        <Link href={`/${data.button1Link}`} className='content-center items-center bg-[#b9d6f2] flex flex-row justify-center overflow-hidden relative w-full md:w-6/12 text-black px-5 py-2.5 rounded-full'>{data.button1Text}</Link>
        <Link href={`${data.button2Link}`} className='content-center items-center bg-white flex flex-row justify-center overflow-hidden relative w-full md:w-6/12 text-black px-5 py-2.5 rounded-full'>{data.button2Text}</Link>
      </div>
    </div>
    <div className='bg-transparent rounded-md object-cover w-full group-hover:scale-110 transform transition ease-in-out duration-200 m-auto'>
      <Image src={urlFor(data.image).url()} alt="Big Picture" className="" width={600} height={600} />
    </div>
  </div>
  
  );
};

export default MainSection;
