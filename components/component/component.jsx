
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

export function Component() {
  return (
    (<div className="bg-white">
      <nav className="flex items-center justify-between p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <PinIcon
            className="h-8 w-8 text-red-600 hover:text-red-800 transition-colors duration-200" />
          <Button
            className="bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
            variant="default">
            Home
          </Button>
          <Button
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            variant="ghost">
            Create
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <SearchIcon
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              className="pl-10 hover:border-gray-400 transition-colors duration-200"
              placeholder="Search" />
          </div>
          <BellIcon
            className="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors duration-200" />
          <MessageCircleIcon
            className="h-6 w-6 text-gray-700 hover:text-gray-900 transition-colors duration-200" />
          <Avatar
            alt="user avatar"
            className="hover:opacity-80 transition-opacity duration-200"
            src="/placeholder.svg?height=32&width=32" />
          <ArrowDownIcon
            className="h-4 w-4 text-gray-700 hover:text-gray-900 transition-colors duration-200" />
        </div>
      </nav>
      <div className="grid grid-cols-5 gap-4 p-4">
        <Card className="col-span-1 hover:shadow-lg transition-shadow duration-200">
          <img
            alt="Artistic portrait"
            className="rounded-lg"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200" />
        </Card>
        <Card className="col-span-1 hover:shadow-lg transition-shadow duration-200">
          <img
            alt="Photoshop Keyboard Shortcuts"
            className="rounded-lg"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200" />
        </Card>
        <Card className="col-span-1 hover:shadow-lg transition-shadow duration-200">
          <img
            alt="Fashion model"
            className="rounded-lg"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/400",
              objectFit: "cover",
            }}
            width="200" />
        </Card>
        <Card className="col-span-1 hover:shadow-lg transition-shadow duration-200">
          <img
            alt="Black and white portrait"
            className="rounded-lg"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200" />
        </Card>
        <Card className="col-span-1 hover:shadow-lg transition-shadow duration-200">
          <img
            alt="Movie poster"
            className="rounded-lg"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200" />
        </Card>
        <Card className="col-span-1 hover:shadow-lg transition-shadow duration-200">
          <img
            alt="Moon surface"
            className="rounded-lg"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200" />
        </Card>
        <Card className="col-span-1 hover:shadow-lg transition-shadow duration-200">
          <img
            alt="Abstract painting"
            className="rounded-lg"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200" />
        </Card>
        <Card className="col-span-1 hover:shadow-lg transition-shadow duration-200">
          <img
            alt="Shave map"
            className="rounded-lg"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200" />
        </Card>
        <Card className="col-span-1 hover:shadow-lg transition-shadow duration-200">
          <img
            alt="YouTube channels to learn Notion"
            className="rounded-lg"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200" />
        </Card>
        <Card className="col-span-1 hover:shadow-lg transition-shadow duration-200">
          <img
            alt="Male model"
            className="rounded-lg"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200" />
        </Card>
        <Card className="col-span-1 hover:shadow-lg transition-shadow duration-200">
          <img
            alt="Group of friends"
            className="rounded-lg"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200" />
        </Card>
        <Card className="col-span-1 hover:shadow-lg transition-shadow duration-200">
          <img
            alt="Help icon"
            className="rounded-lg"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200" />
        </Card>
      </div>
    </div>)
  );
}


function PinIcon(props) {
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
      <line x1="12" x2="12" y1="17" y2="22" />
      <path
        d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>)
  );
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>)
  );
}


function MessageCircleIcon(props) {
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
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>)
  );
}


function ArrowDownIcon(props) {
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
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>)
  );
}
