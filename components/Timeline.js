'use client'
import React from 'react';
import { Avatar, AvatarFallback } from './ui/avatar';
import { TeamLead } from './component/team-lead';

const Timeline = ({ data }) => {
    console.log(data);
    return (

        <div className='m-auto grid place-content-center'>
            <div>
                <h1 className='text-3xl font-bold text-center'>Team Leaders</h1>
            </div>
            <div className='h-[48vh] overflow-y-scroll'>
                <ol class=" relative border-s border-gray-200 dark:border-gray-700 m-auto grid place-content-center">


                    {data.map((item, index) => {
                        return (
                            <li key={index} class="mb-10 ms-4">

                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.year}</time>
                                {
                                    item.leaders.map((leader, index) => {
                                        return (
                                            <TeamLead key={index} data={leader} />
                                        )
                                    })
                                }
                            </li>
                        )
                    })}



                </ol>
            </div>
        </div>


    );
};

export default Timeline;
