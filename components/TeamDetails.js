'use client'
import { client } from "@/sanity/lib/client";
import React, { useState } from "react";
import TeamCard from "./teamCard";
async function loadData(id) {
    const query = `*[_type == "teamPage" && teamYear=="${id}"]
    {
        teams
    }
    `;
    const res = await client.fetch(query, { next: { revalidate: 3600 } });
    return res;
}


function TeamDetails(props) {
    // const data = await loadData(props.year);
    const [state,setState] =useState({
        team: props.teams[0],
        idx:0
    })
    
    const handleClick = (idx) => {
        setSt(idx);
        setState({
            team: props.teams[idx],
            idx
        });
    }
    console.log("teams", props.teams);
    console.log(state, "state")
    const [st, setSt] = React.useState(0);
  return (
      <div className="">
          <div className="flex flex-row w-full justify-around text-center m-auto">
              {props.teams.map((item, idx) => {
            console.log("item", item)
              return (
                  
                  <button key={idx} onClick={() => handleClick(idx)} className={`${st === idx ? "bg-[#ED4149] text-black  font-extrabold" : " bg-[#374151]"} pt-5 pb-5 pl-10 pr-10 rounded-lg text-xl  w-fit `} name="team"  >{item.teamName}</button>
              )
           })} 
          </div>
           
          {
              state && (
                  <div  className="p-5">

                      <section className="container mx-auto py-15 px-4 md:px-6">
                          <div className="mb-12 text-center">
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl  border-b-[5px] pb-2 border-[#ED4149] w-fit m-auto">{state.team.teamName}</h2>
                              <p className="mt-4 text-gray-400 md:text-xl">
                                  {state.team.teamDescription}
                              </p>
                          </div>
                      </section>
                      <div
                          className="grid gap-8 auto-cols-[22%] p-2 grid-flow-col justify-center"> 
                          {
                              state.team.teamMembers.map((member) => {
                                  console.log(member.role)
                                  return (

                                      <div key={member.leaderName} className="">
                                          <TeamCard
                                              name={member.name}
                                              imageSrc={member.image}
                                              subtitle={member.subtitle}
                                              teamMemberSlug={member.teamMemberSlug.current}
                                              role={member.role}
                                              year={props.year}
                                          />
                                      </div>
                                  );
                              })
                          }
                      </div>
                  </div>
              )
          }
          

    </div>
  )
}

export default TeamDetails