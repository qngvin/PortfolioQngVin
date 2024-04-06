import { useState } from 'react'
import { HiMiniChevronDoubleRight } from 'react-icons/hi2'

export default function BlockSkill() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className={'flex flex-col gap-6  justify-between col-span-2 h-[16rem] bg-background_2 rounded-[2em] p-6 '}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='h-full bg-background_3   flex justify-between items-center gap-4 px-10 rounded-2xl'>
        <img className=' w-20 p-4' src='/images/mongodb.svg' />
        <img className='bg-white rounded-full  w-16 p-2' src='/images/express.svg' />
        <img className=' w-20 p-4' src='/images/react.svg' />
        <img className=' w-20 p-4' src='/images/nodejs.svg' />
      </div>
      <div className={`flex  justify-between ${isHovered ? 'items-center' : 'items-end '} `}>
        <div className='flex flex-col gap-1'>
          <p className='text-[0.7rem] font-inter text-[#ffffff75] '>MERN</p>
          <h1 className='text-white text-[20px] font-mina font-regular   '>Skills</h1>
        </div>
        <HiMiniChevronDoubleRight
          className={` ${isHovered ? 'text-white text-[2.3rem]' : 'text-[#ffffff75] text-[2.1rem]'}`}
        />
      </div>
    </div>
  )
}
