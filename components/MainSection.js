import Image from 'next/image';
import '../app/MainSec.css';
import Link from 'next/link';
import client, { getClient, urlFor } from '@/lib/sanity';
import { groq } from 'next-sanity';
import TypeWriting from './TypeWriting';
import MainSectionContent from './MainSectionContent';
import { MainSectionSkeleton } from './main-section-skeleton';
export const revalidate = 6000
async function fetchMainSec() {
  const query = `*[_type == "mainSection"][0]`;
  const res = await client.fetch(query,{ next: { revalidate: 6000 } });
  return res;
}
const MainSection = async() => {
  const data = await fetchMainSec();
  if(!data) return <MainSectionSkeleton/>
  
    // if (!mainSection) return <div>Loading...</div>;
  return (
    <MainSectionContent data={data} />
  
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