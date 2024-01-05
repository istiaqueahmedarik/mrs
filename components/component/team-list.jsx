
import { urlFor } from "@/lib/sanity";
import SingleMemberCard from "../SingleMemberCard";

export function TeamList(props) {
  return (
    (<div  className="bg-[#111827] text-white">
      <div className="text-center py-10">
        <h1
        id="teamList"
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          OUR AMAZING {props.name} TEAM
        </h1>
      </div>
      <div className="py-8">
        <h2
          className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          TEAM LEAD
        </h2>
        <div className="flex justify-center">
        <SingleMemberCard image={props.leaderImage} name={props.teamLeadName} subtitle={props.teamLeadSubtitle}/>
        </div>
      </div>
     
      <div className="py-8">
        <h2
          className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500">
          MEMBERS
        </h2>
        <div className={`grid grid-cols-2 md:grid-cols-${props.data.length>=4?4:2} gap-8 justify-items-center`}>
        {props.data.map((team, index) => {
        return (
          <SingleMemberCard key={index} image={urlFor(team.image).url()} name={team.name} subtitle={team.subtitle}/>
            
            
              
            
        )
      })}
        </div>
      </div>
      
    </div>)
  );
}
