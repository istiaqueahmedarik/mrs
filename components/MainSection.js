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
   <div className='MainSec'>
     <div className='Main_SectionContainer'>
      <div className='Main_SectionLeftGrid'>
        <h1 className='Main_SectionTitle'>{data.title}</h1>
        <div className='Main_SectionButtons'>
          <Link href={`/${data.button1Link}`} className='Main_SectionButton'>{data.button1Text}</Link>
          <Link href={`/${data.button2Link}`} className='Main_SectionButton1'>{data.button2Text}</Link>
        </div>
      </div>
      <div className='Main_SectionRightGrid'>
        <Image src={urlFor(data.image).url()} alt="Big Picture" className="" width={600} height={600} />
      </div>
    </div>
   </div>
  );
};

export default MainSection;
