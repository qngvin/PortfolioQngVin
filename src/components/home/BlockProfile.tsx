import { useState } from 'react'
import { HiMiniChevronDoubleRight } from 'react-icons/hi2'
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa'
export default function BlockProfile() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className={'flex flex-col gap-6  justify-between col-span-1 h-[16rem] bg-background_2 rounded-[2em] p-6 '}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='h-full bg-background_3  flex justify-center items-center gap-4 rounded-2xl'>
        <a
          href='https://www.facebook.com/hniv.gnauqnart'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full border border-solid border-border_color_2 p-4 bg-color_bg_icon'
        >
          <FaFacebook className='text-white text-[2rem]' />
        </a>
        <a
          href='https://www.instagram.com/qng.vin/'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full border border-solid border-border_color_2 p-4 bg-color_bg_icon'
        >
          <FaInstagram className='text-white text-[2rem]' />
        </a>
        <a
          href='https://github.com/qngvin'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full border border-solid border-border_color_2 p-4 bg-color_bg_icon'
        >
          <FaGithub className='text-white text-[2rem]' />
        </a>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <p className='text-[0.7rem] font-inter text-[#ffffff75] '>STAY WITH ME</p>
          <h1 className='text-white text-[20px] font-mina font-regular   '>Profile</h1>
        </div>
        <HiMiniChevronDoubleRight
          className={` ${isHovered ? 'text-white text-[2.3rem]' : 'text-[#ffffff75] text-[2.1rem]'}`}
        />
      </div>
    </div>
  )
}
