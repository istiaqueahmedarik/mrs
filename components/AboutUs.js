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
    <div className='AboutUs'>
        <div className='AboutUsContainer AboutUsContainer0'>
            <div className='AboutUsLeftGrid'>
                <h1 className='AboutUsTitle'>{data.title}</h1>
            </div>
            <div className='AboutUsRightGrid'>
                <p className='AboutUsText'>
               {data.SubTitle}
                </p>
            </div>
         </div>

         <div className='AboutUsContainer AboutUsContainer1'>
            <div className='AboutUsLeftGrid'>
                <Image src={urlFor(data.section1.image).url()} className='AboutUsImage' width={400} height={400}/>
            </div>
            <div className='AboutUsRightGrid'>
                <div className='AboutUsText1'>
                    <h1 className='AboutUsTitle'>{data.section1.title}</h1>
                    
                    <BlockContent blocks={data.section1.text} />

                    
                </div>
            </div>
         </div>


         <div className='AboutUsContainer AboutUsContainer1 AboutUsContainer2'>
            
            <div className='AboutUsRightGrid'>
                <div className='AboutUsText1'>
                    <h1 className='AboutUsTitle'>{data.section2.title}</h1>
                    <BlockContent blocks={data.section2.text} />
                </div>
            </div>

            <div className='AboutUsLeftGrid2'>
                <Image src={urlFor(data.section2.image).url()} className='AboutUsImage1' width={400} height={400}/>
            </div>
         </div>
    </div>
  );
};

