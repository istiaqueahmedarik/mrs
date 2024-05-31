import Image from 'next/image'
import React from 'react'

function page() {
  return (
    
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-300 p-6 font-sans">
          <div className="bg-gray-800 rounded-full p-1 mb-4">
              <Image placeholder="blur" blurDataURL="/icon.jpg"
                  alt="Profile Picture"
                  className="rounded-full"
                  height={500}
                  src="/placeholder.svg"
                  style={{
                      aspectRatio: "128/128",
                      objectFit: "cover",
                  }}
                  width={128}
              />
          </div>
          <h2 className="text-2xl font-bold mb-2 font-sans">John Doe</h2>
          <p className="text-gray-400 text-center max-w-md font-sans">
              Software Engineer with a passion for building innovative products. Loves exploring new technologies and sharing
              knowledge with the community.
          </p>
      </div>
  )
}

export default page