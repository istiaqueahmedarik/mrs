
import React from 'react';
import '../app/Team.css';
import Image from 'next/image';
import Link from 'next/link';
const Team = () => {
  return (
    <div className="team-container">
      <div className="team-card">
        <Image placeholder="blur" blurDataURL="/icon.jpg" src="/soft.jpg" alt="Team member 1" className="team-image" width={400} height={400}/>
        <Link href="/Software" className="team-title">Software Team</Link>
      </div>
      <div className="team-card">
        <Image placeholder="blur" blurDataURL="/icon.jpg" height={400} width={400} src="/electrical.jpg" alt="Team member 2" className="team-image" />
        <Link href="/Electrical" className="team-title">Electrical Team</Link>
      </div>
      <div className="team-card">
        <Image placeholder="blur" blurDataURL="/icon.jpg" height={400} width={400} src="/science.jpg" alt="Team member 3" className="team-image" />
        <Link href="/Science" className="team-title">Science Team</Link>
      </div>
      <div className="team-card">
        <Image placeholder="blur" blurDataURL="/icon.jpg" height={400} width={400} src="/mecha.jpg" alt="Team member 4" className="team-image" />
        <Link href="/Mechanical" className="team-title">Mechanical Team</Link>
      </div>
    </div>
  );
};

export default Team;


