import Image from 'next/image';
import '../app/MainSec.css';
import Link from 'next/link';
import client, { getClient, urlFor } from '@/lib/sanity';
import { groq } from 'next-sanity';
import TypeWriting from './TypeWriting';
export const revalidate = 3600
async function fetchMainSec() {
  const query = `*[_type == "mainSection"][0]`;
  const res = await client.fetch(query,{ next: { revalidate: 3600 } });
  return res;
}
const MainSection = async() => {
  const data = await fetchMainSec();
  
    // if (!mainSection) return <div>Loading...</div>;
  return (
    <div className='top-[5rem]  relative lg:grid lg:grid-rows-[1fr]  text-left justify-around bg-[#141A2B] h-screen'>
    <div className='bg-transparent z-10 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1'>
    <div className='grid place-content-center lg:w-fit md:w-3/4  m-auto '>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center  w-full text-white font-bold mb-2 p-0 font-custom '>{data.title}</h1>
      <span className='text-left grid  w-full'>
        {/* {data.subTitle} */}
        {data.typeWriting.map((item, index) => (
          <p key={index} className='text-left'>{item}</p>
        ))}
      </span>
       
      {/* <div className='items-center flex flex-col md:flex-row gap-2.5 h-min justify-start overflow-hidden relative w-full p-[3%]'>
        <Link href={`/${data.button1Link}`} className='content-center items-center bg-[#b9d6f2] flex flex-row justify-center overflow-hidden relative w-full md:w-6/12 text-black px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-all'>{data.button1Text}</Link>
        <Link href={`${data.button2Link}`} className='content-center items-center bg-white flex flex-row justify-center overflow-hidden relative w-full md:w-6/12 text-black px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-all'>{data.button2Text}</Link>
      </div> */}
    </div>
    <div className='bg-transparent rounded-md object-cover w-full group-hover:scale-110 transform transition ease-in-out duration-200 m-auto'>
      <Image src={urlFor(data.image).url()} alt="Big Picture" className="" width={600} height={600} />
      <GlowingBlobGradientLight className="hidden md:hidden lg:block blur-md absolute top-0 left-0 w-full h-full" />
    </div>
    </div>
    
  </div>
  
  );
};

export default MainSection;

function GlowingBlobGradientLight(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 200 200'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0ZM100 2C154.418 2 198 45.582 198 100C198 154.418 154.418 198 100 198C45.582 198 2 154.418 2 100C2 45.582 45.582 2 100 2Z'
        fill='url(#paint0_linear)'
      />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='100'
          y1='0'
          x2='100'
          y2='200'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F3F4F6' />
          <stop offset='1' stopColor='#F3F4F6' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  )

}