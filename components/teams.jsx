import { client } from "@/sanity/lib/client";
import TeamDetails from "./TeamDetails";
import TeamCard from "./teamCard";
async function loadData(id) {
  const query = `*[_type == "teamPage" && teamYear=="${id}"]
    {
        specialTeams,
        teams
    }
    `;
  const res = await client.fetch(query, { next: { revalidate: 6000 } });
  return res;
}
export async function Teams({ year }) {
  const dt = await loadData(year)
  const data = dt[0];
  console.log(data);
  return (
    (
      <>
        {data?.specialTeams.map((team,idx) => { 
          return (
            <div key={idx} className="p-5">

              <section className="container mx-auto py-15 px-4 md:px-6">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl border-b-[5px] pb-2 border-[#ED4149] w-fit m-auto">{team.teamName}</h2>
                  <p className="mt-4 text-gray-400 md:text-xl">
                    {team.teamDescription}
                  </p>
                </div>
              </section>
              <div
                className="flex flex-wrap gap-8 w-[70%] m-auto justify-center">
                {
                  team.teamMembers.map((member) => {
                    console.log(member.role)
                    return (
                      
                      <div key = { member.leaderName } className="">
                        <TeamCard
                          name={member.name}
                          imageSrc={member.image}
                          subtitle={member.subtitle}
                          teamMemberSlug={member.teamMemberSlug?.current}
                          role={member.role}
                          year={year}
                        />
                      </div>
                    );
                   })
               }
              </div>
            </div>
         )
        })}
        <div className="mb-12 mt-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl  border-b-[5px] pb-2 border-[#ED4149] w-fit m-auto">Crew Members</h2>
          
        </div>
        <TeamDetails teams={data.teams} year={year} />
      </>
    )
  );
}

function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
