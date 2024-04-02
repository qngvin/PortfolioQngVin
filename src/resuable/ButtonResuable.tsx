import { PiPaperPlaneTilt } from 'react-icons/pi'

function ButtonResuable({ text }: { text: string }) {
  return (
    <button className='relative border border-black  bg-white text-[17px] rounded-[10px] flex items-center gap-2 px-4 py-4 font-medium overflow-hidden group'>
      <span className='mr-2 z-10'>{text}</span>
      <PiPaperPlaneTilt className='text-[20px] z-10' />
      <div className='absolute inset-0 bg-gradient-to-r from-blue-300 to-[#FFE382] w-0 group-hover:w-full  transition-width duration-500 ease-in-out'></div>
    </button>
  )
}

export default ButtonResuable
