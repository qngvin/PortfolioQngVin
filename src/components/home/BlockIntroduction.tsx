import { useState } from 'react'
import { HiMiniChevronDoubleRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
export default function BlockIntroduction() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link
      to='about'
      className='flex items-center col-span-2 h-[21.5em] bg-background_2 rounded-[2em] p-7'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='grid grid-cols-2 gap-x-8 h-[18rem] relative '>
        <div
          className='w-full h-full rounded-tl-[1.5em] rounded-br-[1.5em]'
          style={{
            backgroundImage: `url('/images/IMG_5823.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className='flex flex-col  justify-center gap-2 '>
          <div>
            <p className='text-[0.8rem] font-inter text-[#ffffff75]'>A FRONT END DEVLOPER</p>
            <p className='text-white font-inter text-[2.4rem] leading-[1]   '>
              Tran
              <br /> Quang Vinh.
            </p>
            <p className='text-[0.8rem] font-inter text-[#ffffff75]'>
              A Passionate Front-End Developer Who Loves Crafting User Interfaces
            </p>
          </div>
          <div className='absolute bottom-0 right-0'>
            <HiMiniChevronDoubleRight
              className={` float-right ${isHovered ? 'text-white text-[2.3rem]' : 'text-[#ffffff75] text-[2.1rem]'}`}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
