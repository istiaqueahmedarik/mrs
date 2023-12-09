
import SingleMemberCard from "../SingleMemberCard";

export function ScienceTeamList() {
  return (
    (<div className="bg-[#111827] text-white">
      <div className="text-center py-10">
        <h1
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          OUR AMAZING SCIENCE TEAM
        </h1>
      </div>
      <div className="py-8">
        <h2
          className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          TEAM LEAD
        </h2>
        <div className="flex justify-center">
          <SingleMemberCard/>
        </div>
      </div>
     
      <div className="py-8">
        <h2
          className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500">
          MEMBERS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          
          <SingleMemberCard/>
          <SingleMemberCard/>
          <SingleMemberCard/>
          <SingleMemberCard/>
        </div>
      </div>
      
    </div>)
  );
}
