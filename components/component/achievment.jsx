
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Achievment() {
  return (
    (<div className="min-h-screen bg-[#111827] text-gray-200">
      
      <main className="p-6 space-y-6">
        <section>
          <h2 className="text-3xl font-bold">Our Achievements</h2>
          <p className="text-gray-400">We're proud to showcase our club's achievements over the years.</p>
        </section>
       
        <section>
          <div className="divide-y divide-gray-600 space-y-4">
            <div className="pt-4 flex items-start space-x-2">
              <Badge
                className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                variant="secondary">
                XXXX
              </Badge>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quia assumenda earum molestiae pariatur libero expedita modi mollitia iusto placeat aliquam, consequuntur dolorum inventore officiis perferendis possimus esse tempore accusantium.</p>
            </div>
            <div className="pt-4 flex items-start space-x-2">
              <Badge
                className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                variant="secondary">
                XXXX
              </Badge>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nihil voluptatem, dolores reiciendis laborum fuga? Tempore nostrum maiores officia voluptas fugiat autem minima veritatis, earum quasi, voluptate qui voluptatum consequuntur!</p>
            </div>
            <div className="pt-4 flex items-start space-x-2">
              <Badge
                className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                variant="secondary">
                xxxx
              </Badge>
              <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, placeat! Quaerat, tempora, tempore inventore harum, rem fugit repudiandae consequuntur ea nostrum excepturi cum quisquam quae veniam maiores deserunt eos nesciunt?</p>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}


function PlaneIcon(props) {
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
        d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>)
  );
}
