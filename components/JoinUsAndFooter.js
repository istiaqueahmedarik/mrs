import React from 'react';
import '../app/JoinUs.css';
import Link from 'next/link';
import client from '@/lib/sanity';
const GetJoinUsAndFooter = async () => {
    const query = `*[_type == "joinUsAndFooter"][0]`;
    const res = await client.fetch(query);
    return res;
}
async function JoinUsAndFooter() {
    const data = await GetJoinUsAndFooter();

  return (
    <div className="join-us-and-footer">
      <div className="join-us">
        <h1 className="title">{data.title}</h1>
        <p className="subtitle">{data.subtitle}</p>
        <Link href={'/Contact'} className="join-button">{data.buttonText}</Link>
      </div>
      <div className="footer">
        
        <p className="copyright">
          &copy; {data.copyright}
        </p>
      </div>
    </div>
  );
}

export default JoinUsAndFooter;

