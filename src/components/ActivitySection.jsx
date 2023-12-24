import React from 'react'
import { activitiesdata } from './Data/Data'

const ActivitySection = () => {
    return (
        <div className=' bg-[#FEFEFE] w-full'>
            <div className='container mx-auto w-full'>
                <div className='py-6 md:py-12'>
                    <div className="flex flex-col items-center sm:max-auto">
                        <h2 className="mb-4 tracking-wide text-center "> Explore Our Ongoing Causes</h2>
                        <div className="w-32 h-1 mb-5 bg-status-purple-70 rounded-b-lg"></div>
                        <p className="max-w-md font-medium text-center leading-5 text-[#515151] text-md">
                          Each cause is a chapter in our collective story of compassion. Explore,
                          engage, and make a lasting impact – because changing
                          the world starts with your support.
                        </p>
                    </div>
                    <div className=''></div>
              </div>
            </div>
        </div>
  )
}

export default ActivitySection