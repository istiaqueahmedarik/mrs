"'use client'";
import { client } from "@/sanity/lib/client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TeamCard from "./teamCard"
import { ChevronDown } from "lucide-react"

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

export function TeamDetails({
  teams,
  year
}) {
  const [state, setState] = useState({
    team: teams[0],
    idx: 0
  })
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (idx) => {
    setState({
      team: teams[idx],
      idx
    })
    setIsOpen(false)
  }

  return (
    (<div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12">
        <h2
          className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Our Amazing Teams
        </h2>
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-full text-xl font-semibold shadow-lg flex justify-between items-center">
            {teams[state.idx].teamName}
            <ChevronDown
              className={`transform transition-transform ${isOpen ? "'rotate-180'" : "''"}`} />
          </motion.button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-xl overflow-hidden dark:bg-slate-950">
                {teams.map((item, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ backgroundColor: "rgba(var(--primary-rgb), 0.1)" }}
                    onClick={() => handleClick(idx)}
                    className="w-full text-left px-6 py-3 text-sm font-semibold transition-all duration-300">
                    {item.teamName}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <AnimatePresence mode="wait">
        {state.team && (
          <motion.div
            key={state.team.teamName}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-background to-secondary/10 shadow-lg rounded-lg p-8">
            <h3
              className="text-3xl font-bold text-center mb-8 pb-2 border-b-2 border-slate-900 inline-block dark:border-slate-50">
              {state.team.teamName}
            </h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
              className="mb-12">
              <h4 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Team Leads</h4>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {state.team.teamMembers.map((member, idx) => (
                  <React.Fragment key={idx}>
                    {hasThisString(member.role, "Lead") && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}>
                        <TeamCard
                          name={member.name}
                          imageSrc={member.image}
                          subtitle={member.subtitle}
                          teamMemberSlug={member.teamMemberSlug.current}
                          role={member.role}
                          year={year} />
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, staggerChildren: 0.05 }}>
              <h4
                className="text-2xl font-semibold mb-4 text-slate-100 dark:text-slate-800">Team Members</h4>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {state.team.teamMembers.map((member, idx) => (
                  <React.Fragment key={idx}>
                    {!hasThisString(member.role, "Lead") && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}>
                        <TeamCard
                          name={member.name}
                          imageSrc={member.image}
                          subtitle={member.subtitle}
                          teamMemberSlug={member.teamMemberSlug.current}
                          role={member.role}
                          year={year} />
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>)
  );
}