import '../app/AboutUs.css';
import Image from 'next/image';
import client, { urlFor } from '@/lib/sanity';
import BlockContent from '@sanity/block-content-to-react';
import { ImageSlider } from './ImageSlider';
export const revalidate = 3600
async function fetchAboutUs() {
    const query = `*[_type == "aboutUs"][0]`;
    const res = await client.fetch(query,{ next: { revalidate: 3600 } });
    return res;
}

export default async function AboutUs({ dt }) {

    const data = await fetchAboutUs();


    return (
        <div className='place-content-center pt-10 bg-[#141A2B]' id="aboutUs">
            <div className="grid lg:grid-cols-[1fr_1fr] w-full h-full justify-around text-center content-center m-auto p-[53px] md:p-10 ">
                <div className="sm:text-center grid content-center w-full md:w-6/12 text-[1.5em] font-[bolder] m-auto">
                    <h1 className="text-[1.5em] font-custom font-[bolder] my-[3%] sm:text-center">{data.title}</h1>
                </div>
                <div className="font-custom2 md:w-2/3 font-light text-[1.3em] text-left m-auto sm:text-left">
                    <p className="AboutUsText">
                        {data.SubTitle}
                    </p>
                </div>
            </div>



            <div className="grid lg:grid-cols-[1fr_1fr] w-full h-full justify-around text-center content-center m-auto p-[53px] md:p-10 ">
                <div className="sm:text-center grid content-center w-fit text-[1.5em] font-[bolder] m-auto">
                    <Image
                        src={urlFor(data.section1.image).url()}
                        alt=""
                        className="rounded-md object-cover w-auto h-full group-hover:scale-110 transform transition ease-in-out duration-200"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="font-custom2 md:w-2/3 font-light text-[1.3em] text-left m-auto sm:text-left">
                    <h1 className="font-custom text-[1.5em] font-[bolder] my-[3%] lg:text-left md:text-center">
                        {data.section1.title}
                    </h1>
                    <BlockContent blocks={data.section1.text} />
                </div>
            </div>
            <div className='m-auto grid place-content-center'>
            <ImageSlider data={dt} />
                </div>


            <div className="grid lg:grid-cols-[1fr_1fr] w-full h-full justify-around text-center content-center m-auto p-[53px] md:p-10">

                <div className="font-custom2 md:w-2/3 font-light text-[1.3em] text-left m-auto sm:text-left">
                    <h1 className="font-custom text-[1.5em] font-[bolder] my-[3%] lg:text-left md:text-center">
                        {data.section2.title}
                    </h1>
                    <BlockContent blocks={data.section2.text} />
                </div>
                <div className="sm:text-center grid content-center w-fit text-[1.5em] font-[bolder] m-auto">
                    <Image
                        src={urlFor(data.section2.image).url()}
                        alt=""
                        className="rounded-md object-cover w-auto h-full group-hover:scale-110 transform transition ease-in-out duration-200"
                        width={400}
                        height={400}
                    />
                </div>
            </div>

        </div>
    );
};
