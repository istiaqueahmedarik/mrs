import { urlFor } from '@/lib/sanity';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image'
import React, { Suspense } from 'react'
async function loadData(id, year) {
    console.log(id, year)
    const query = `*[_type == 'teamPage' && teamYear == "${year}"] {
        "specialTeamMember": specialTeams[].teamMembers[teamMemberSlug.current == "${id}"][0] {
            name,
            role,
            subtitle,
            image,
            teamMemberDescription
        },
        "teamMember": teams[].teamMembers[teamMemberSlug.current == "${id}"][0] {
            name,
            role,
            subtitle,
            image,
            teamMemberDescription
        }
    }[0]`;
    const res = await client.fetch(query, { next: { revalidate: 6000 } });
    if (res) {
        res.teamMember = res.teamMember.filter(member => member !== null);
    }
    return res;
}
export const experimental_ppr = true;

async function page({ params }) {
    // const id = params.id;
    console.log(params)
   
  return (
      <div className="flex flex-col items-center justify-center  h-[130vh] bg-gray-900 text-gray-300  font-sans m-5">
          <div className="bg-gray-800  rounded-lg p-4 mb-5">
              <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100}
                  alt="Profile Picture"
                  className=" w-[30rem] rounded-lg bg-cover"
                  height={500}
                  src={urlFor(data[0].image).url()}
                  style={{
                      objectFit: "cover",
                  }}
                  width={500}
              />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
              <TeamMember params={params} />
            </Suspense>
          
      </div>
  )
}

export default page




async function TeamMember({ params }) {
    const res = await loadData(params.id, params.year);
    const data = res.teamMember.length > 0 ? res.teamMember : res.specialTeamMember;
    console.log(data)
  return (
      <div className='text-center'>

          <h2 className="text-6xl font-bold mb-2 font-sans">{data[0].name}</h2>
          <PortableText
              className="text-center text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl w-[50%] m-auto"
              value={data[0].teamMemberDescription}
              components={{
                  types: {
                      image: props => (
                          <Image placeholder="blur" blurDataURL="/iconblur.jpg" quality={100} src={urlFor(props.value).url()} alt="Big Picture" className="rounded-md mt-[2%] mb-[2%]" width={400} height={400} />
                      ),

                  }
              }}
          />
      </div>
  )
}

