'use client'

import { client } from "@/sanity/lib/client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TeamCard from "./teamCard"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

async function loadData(id) {
    const query = `*[_type == "teamPage" && teamYear=="${id}"]
  {
    teams
  }
  `
    const res = await client.fetch(query, { next: { revalidate: 6000 } })
    return res
}

const hasThisString = (str, query) => str.toLowerCase().includes(query.toLowerCase())

export default function TeamDetails({ teams, year }) {
    const [activeTeam, setActiveTeam] = useState(teams[0])

    return (
        <div className="container mx-auto ">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <Tabs defaultValue={teams[0].teamName} onValueChange={(value) => setActiveTeam(teams.find(team => team.teamName === value))}>
                    <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-6">
                        {teams.map((team) => (
                            <TabsTrigger
                                key={team.teamName}
                                value={team.teamName}
                                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                            >
                                {team.teamName}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <AnimatePresence mode="wait">
                        <TabsContent value={activeTeam.teamName}>
                            <motion.div
                                key={activeTeam.teamName}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-br from-background to-secondary/10 shadow-lg rounded-lg p-8"
                            >
                                <h3 className="text-3xl font-bold text-center mb-8 pb-2 border-b-2 border-primary inline-block">
                                    {activeTeam.teamName}
                                </h3>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, staggerChildren: 0.1 }}
                                    className="mb-12"
                                >
                                    <h4 className="text-2xl font-semibold mb-4 text-foreground">Team Leads</h4>
                                    <div className="flex flex-wrap gap-8">
                                        {activeTeam.teamMembers.map((member, idx) => (
                                            <React.Fragment key={idx}>
                                                {hasThisString(member.role, "Lead") && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <TeamCard
                                                            name={member.name}
                                                            imageSrc={member.image}
                                                            subtitle={member.subtitle}
                                                            teamMemberSlug={member.teamMemberSlug.current}
                                                            role={member.role}
                                                            year={year}
                                                        />
                                                    </motion.div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, staggerChildren: 0.05 }}
                                >
                                    <h4 className="text-2xl font-semibold mb-4 text-foreground">Team Members</h4>
                                    <div className="flex flex-wrap gap-6">
                                        {activeTeam.teamMembers.map((member, idx) => (
                                            <React.Fragment key={idx}>
                                                {!hasThisString(member.role, "Lead") && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <TeamCard
                                                            name={member.name}
                                                            imageSrc={member.image}
                                                            subtitle={member.subtitle}
                                                            teamMemberSlug={member.teamMemberSlug.current}
                                                            role={member.role}
                                                            year={year}
                                                        />
                                                    </motion.div>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </TabsContent>
                    </AnimatePresence>
                </Tabs>
            </motion.div>
        </div>
    )
}