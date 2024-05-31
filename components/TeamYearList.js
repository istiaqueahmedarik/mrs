"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

function TeamYearList(props) {
    const years = props.years;
    const path = usePathname();
    console.log("path", path)
  return (
      <>
          {years.map((year, id) => (
              <div key={year.teamYear} className="flex justify-between h-auto">
                  <Link className={`hover:text-red-500 ${path==='/Team/'+year.teamYear && 'text-red-500'}`} href={`/Team/${year.teamYear}`}>{year.teamYear}</Link>
                  {id !== years.length - 1 ? <span className="ml-2 mr-2">|</span> : null}
              </div>
          ))}
    </>
  )
}

export default TeamYearList