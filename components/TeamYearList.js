'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

function TeamYearList({ years }) {
    const pathname = usePathname()

    return (
        <div className="w-full max-w-3xl mx-auto">
            <nav className="flex flex-wrap gap-2" role="tablist" aria-label="Team Years">
                {years.map((year) => {
                    const isActive = pathname === `/Team/${year.teamYear}`
                    return (
                        <Link
                            key={year.teamYear}
                            href={`/Team/${year.teamYear}`}
                            className={`
                px-4 py-2 rounded-md text-4xl mx-auto font-medium transition-colors
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                ${isActive
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }
              `}
                            role="tab"
                            aria-selected={isActive}
                        >
                            {year.teamYear}
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}

export default TeamYearList