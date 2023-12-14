import { PiPaperPlaneTilt } from 'react-icons/pi'
function Introduction() {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-white font-medium font-ubutun flex items-center gap-4 text-[55px]'>
        <span>Quang Vinh </span>
        <img src='src/assets/icons/wave.png' className='w-16' />
      </h1>
      <p className='text-white w-full text-[19px] flex items-center gap-6'>
        <hr className='w-1/5' />
        <span>Front-End Developer</span>
      </p>
      <p className='text-white text-[17px]'>
        A passionate Front-End Developer, I thrive on creativity, embrace challenges, and constantly push the boundaries
        to craft innovative and impactful web experiences
      </p>

      <div className='mt-8'>
        <button className='bg-white text-[17px] rounded-[10px] flex items-center gap-2 px-4 py-4 font-medium'>
          <span>Say Hello </span>
          <PiPaperPlaneTilt className='text-[20px]' />
        </button>
      </div>
    </div>
  )
}

export default Introduction
