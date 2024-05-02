import Image from "next/image";
import TeamCard from "./teamCard";
import Link from "next/link";

export function Teams({ data,year }) {
  console.log(data);
  return (
    (
      <>
        {data?.teams.map((team) => { 
          return (
            <div key={1} className="p-5">

              <section className="container mx-auto py-15 px-4 md:px-6">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{team.teamName}</h2>
                  <p className="mt-4 text-gray-400 md:text-xl">
                    {team.teamDescription}
                  </p>
                </div>
              </section>
              <div
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2">
                {
                  team.teamMembers.map((member) => {
                    console.log(member.role)
                    return (
                      <TeamCard
                        key={member.leaderName}
                        name={member.name}
                        imageSrc={member.image}
                        subtitle={member.subtitle}
                        teamMemberSlug={member.teamMemberSlug.current}
                        role={member.role}
                        year={year}
                      />
                    );
                   })
               }
              </div>
            </div>
         )
        })}
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
