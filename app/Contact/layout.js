import { ContactRight } from "@/components/component/contact_right";
import client from "@/lib/sanity";
import Link from "next/link";
export const revalidate = 3600
async function loadData()
{
  const query = `*[_type == "contact"][0]`;
  const res =  client.fetch(query);
  return res;
}
export default async function ContactLayout({
    children, 
  }) {
    const data = await loadData();
    return (
        <section>
          
          <div className="top-[4rem] relative mb-[2rem] dark bg-[#111827] min-h-screen text-white">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg text-gray-300 mt-2">We&apos;d love to hear from you!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            
          {children}
            <ContactRight email = {data.email} facebook={data.facebook} instagram={data.instagram} subtitle={"Follow us on social media for updates and more."}/>
          </div>
        </div>
      </div>
        </section>
    )
  }

  
function TwitterIcon(props) {
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
        <path
          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>)
    );
  }
  
  
  function InstagramIcon(props) {
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
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>)
    );
  }
  
  
  function FacebookIcon(props) {
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>)
    );
  }
  
  
  function LinkedinIcon(props) {
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
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>)
    );
  }
  