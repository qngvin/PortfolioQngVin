import { BiSupport } from 'react-icons/bi'
import { IoBagHandleOutline } from 'react-icons/io5'
import { MdLightbulbOutline } from 'react-icons/md'
import { CgFileDocument } from 'react-icons/cg'
import ButtonResuable from '~/resuable/ButtonResuable'
function MySelf() {
  return (
    <div className='flex flex-col items-start gap-10 w-3/4 '>
      <div className='grid grid-cols-3 w-full gap-4'>
        <div className=' col-span-1  px-4 py-4 flex flex-col items-center gap-1 rounded-[10px] bg-white border border-color_1 border-solid '>
          <MdLightbulbOutline className='text-[25px]' />
          <h1 className='text-black text-[15px]'>Experience</h1>
          <p className='text-[13px] text-[#5f5e5d]'>1+ Years</p>
        </div>
        <div className=' col-span-1  px-4 py-4 flex flex-col items-center gap-1  rounded-[10px] bg-white border border-color_1 border-solid'>
          <IoBagHandleOutline className='text-[25px]' />
          <h1 className='text-black text-[15px]'>Completed</h1>
          <p className='text-[13px] text-[#5f5e5d]'>4+ Projects</p>
        </div>
        <div className=' col-span-1 px-4 py-4 flex flex-col items-center gap-1 rounded-[10px] bg-white border border-color_1 border-solid'>
          <BiSupport className='text-[25px]' />
          <h1 className='text-black text-[15px]'>Support</h1>
          <p className='text-[13px] text-[#5f5e5d]'>24/7</p>
        </div>
      </div>
      <p className='w-full text-[14px] text-[#5f5e5d]'>
        {' '}
        Front-end Developer, with confidence in my creative abilities and a passion for crafting unique user
        experiences. I'm ready to bring forth new ideas and actively contribute to the development of distinctive and
        engaging web products.{' '}
      </p>
      <ButtonResuable text='Download CV' color='#605f5f' colorText='white' icon={<CgFileDocument />}></ButtonResuable>
    </div>
  )
}

export default MySelf
