import TeamTop from "@/components/TeamTop";
import { ImageGallery } from "@/components/component/image-gallery";
import { TeamList } from "@/components/component/team-list";
import client, { urlFor } from "@/lib/sanity";
export const revalidate = 10;
async function loadTeamData(id)
{
  const query = `*[_type == "teamPage"][${id}]`;
  const res = await client.fetch(query);
  return res;
}
export default async function Page({ params }) {
    const data = await loadTeamData(params.slug);
    
    return (
        <div className='top-[2rem]  relative  ScienceMainContainer'>
        
        <TeamTop title={data.teamName} description={data.description} image={urlFor(data.teamImage).url()}/>
        <TeamList name={data?.teamName} teamLeadName={data?.leaderName} teamLeadSubtitle={data?.leaderSubtitle} leaderImage={urlFor(data?.leaderImage).url()} data={data?.teamMembers}/>
        <ImageGallery data={data.teamImageGallery}/>
        {/*
         */}
    </div>
    )
}
