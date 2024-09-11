"'use client'"

import { Skeleton } from "@/components/ui/skeleton"

export function MainSectionSkeleton() {
  return (
    (<div
      className="'top-[2rem] md:top-[1rem] lg:top-[0rem] relative lg:grid lg:grid-rows-[1fr] text-left justify-around bg-[#141A2B] h-screen p-4'">
      <div
        className="'bg-transparent z-10 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1'">
        <div className="'grid place-content-center lg:w-fit md:w-3/4 m-auto'">
          <Skeleton className="'h-12 w-3/4 mb-4 bg-gray-700'" />
          <div className="'space-y-2'">
            <Skeleton className="'h-4 w-full bg-gray-700'" />
            <Skeleton className="'h-4 w-5/6 bg-gray-700'" />
            <Skeleton className="'h-4 w-4/6 bg-gray-700'" />
          </div>
        </div>
        <div
          className="'bg-transparent rounded-md object-cover w-full m-auto relative'">
          <Skeleton className="'w-full aspect-square rounded-md bg-gray-700'" />
          <div className="'absolute inset-0'">
            <svg
              className="'hidden md:hidden lg:block blur-md w-full h-full'"
              viewBox="'0 0 200 200'"
              xmlns="'http://www.w3.org/2000/svg'">
              <rect width="'200'" height="'200'" fill="'url(#skeleton-gradient)'" />
              <defs>
                <linearGradient id="'skeleton-gradient'" x1="'0'" x2="'1'" y1="'0'" y2="'1'">
                  <stop offset="'0%'" stopColor="'#2a2a2a'">
                    <animate
                      attributeName="'stop-color'"
                      values="'#2a2a2a; #3a3a3a; #2a2a2a'"
                      dur="'2s'"
                      repeatCount="'indefinite'" />
                  </stop>
                  <stop offset="'100%'" stopColor="'#3a3a3a'">
                    <animate
                      attributeName="'stop-color'"
                      values="'#3a3a3a; #2a2a2a; #3a3a3a'"
                      dur="'2s'"
                      repeatCount="'indefinite'" />
                  </stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>)
  );
}