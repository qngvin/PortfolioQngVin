import { useState } from 'react'
import { HiMiniChevronDoubleRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

interface BlockReusableProps {
  title: string
  subtitle: string
  img: string
  to: string
}

export default function BlockReusable({ title, subtitle, img, to }: BlockReusableProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      to={to}
      className={'flex flex-col justify-between col-span-1 h-[16rem] bg-background_2 rounded-[2em] p-6 '}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className=' w-full h-full'
        style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      <div className={`flex  justify-between ${isHovered ? 'items-center' : 'items-end '} `}>
        <div className='flex flex-col gap-1'>
          <p className='text-[0.7rem] font-inter text-[#ffffff75] '>{subtitle}</p>
          <h1 className='text-white text-[20px] font-mina font-regular   '>{title}</h1>
        </div>
        <HiMiniChevronDoubleRight
          className={` ${isHovered ? 'text-white text-[2.3rem]' : 'text-[#ffffff75] text-[2.1rem]'}`}
        />
      </div>
    </Link>
  )
}
