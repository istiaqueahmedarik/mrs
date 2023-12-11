import '../app/AboutUs.css';
import Image from 'next/image';
import client, { urlFor } from '@/lib/sanity';
import BlockContent from '@sanity/block-content-to-react';
async function fetchAboutUs() {
    const query = `*[_type == "aboutUs"][0]`;
    const res = await client.fetch(query,{next: {
        revalidate: 3600
      }});
    return res;
}

export default async function AboutUs() {
    
const data = await fetchAboutUs();

console.log(data);
  return (
    <div className='place-content-center mb-[2%]'>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr]  md:grid-cols-[1fr_1fr] lg:grid-rows-[1fr] w-full h-full justify-around text-center content-center m-auto p-[100px] md:p-10 sm:text-center mb-[2%]">
            <div className='sm:text-center grid content-center w-full md:w-6/12 text-[1.5em] font-[bolder] m-auto'>
                <h1 className='text-[1.5em] font-custom font-[bolder] my-[3%] sm:text-center'>{data.title}</h1>
            </div>
            <div className='font-custom2 w-full md:w-[70%] font-light text-[1.3em] text-left m-auto'>
                <p className='AboutUsText'>
               {data.SubTitle}
                </p>
            </div>
         </div>

         <div className='grid grid-cols-1 sm:grid-cols-[1fr]  md:grid-cols-[1fr_1fr] lg:grid-rows-[1fr] w-full h-full justify-around text-center content-center m-auto p-[100px] md:p-10 sm:text-center mb-[2%]
         '>
            <div className='grid content-center w-6/12 text-[1.5em] font-[bolder] m-auto'>
                <Image src={urlFor(data.section1.image).url()} alt="" className='rounded-md object-cover w-full h-64 group-hover:scale-110 transform transition ease-in-out duration-200 m-auto' width={400} height={400}/>
            </div>
            <div className='w-[70%] font-light text-[1.3em] text-left m-auto'>
                <div className='grid content-center mt-auto font-custom2 '>
                    <h1 className='font-custom text-[1.5em]  font-[bolder] my-[3%]'>{data.section1.title}</h1>
                    
                    <BlockContent blocks={data.section1.text} />

                    
                </div>
            </div>
         </div>


         <div className='grid grid-cols-1 sm:grid-cols-[1fr]  md:grid-cols-[1fr_1fr] lg:grid-rows-[1fr] w-full h-full justify-around text-center content-center m-auto p-[100px] md:p-10 sm:text-center'>
            
            <div className=' w-[70%] font-light text-[1.3em] text-left m-auto'>
                <div className='grid content-center mt-auto font-custom2'>
                    <h1 className='text-[1.5em] font-custom font-[bolder] my-[3%]'>{data.section2.title}</h1>
                    <BlockContent blocks={data.section2.text} />
                </div>
            </div>

            <div className='grid content-center w-6/12 text-[1.5em] font-[bolder] m-auto'>
                <Image src={urlFor(data.section2.image).url()} alt="" className='rounded-md  object-cover w-full h-64 group-hover:scale-110 transform transition ease-in-out duration-200 m-auto' width={1000} height={1000}/>
            </div>
         </div>
    </div>
  );
};

