import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from "next/image";

export function Announcement() {
  return (
    (<div
      key="1"
      className="bg-[#111827] text-white min-h-screen py-10 px-4 md:px-8 lg:px-16">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Announcements</h1>
      </header>
      <Card className="bg-[#2d3748] rounded-lg p-6 mb-6">
        <CardHeader>
          <CardTitle
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            New Update!
          </CardTitle>
          <CardDescription
            className="text-[#f5f5f5] transition-all duration-300 transform bg-clip-text text-transparent bg-gradient-to-r from-white to-black text-xl">
            Posted on December 9, 2023
          </CardDescription>
        </CardHeader>
        <CardContent>
          <figure className="mb-4 flex justify-center">
            <Image
              alt="New update"
              className="w-[400px] h-[350px] rounded-md shadow-md"
              height="350"
              src="/science.svg"
              style={{
                aspectRatio: "400/350",
                objectFit: "cover",
              }}
              width="400" />
          </figure>
          <p className="text-white">
            We&apos;re excited to announce the release of our new feature. This will help you manage your tasks more
            effectively. Check it out now!
          </p>
        </CardContent>
      </Card>
      
    </div>)
  );
}
