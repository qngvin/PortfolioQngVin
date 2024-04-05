import TitleResuable from '../resuable/TitleResuable'

import MySelf from '../components/about/MySelf'
function About() {
  return (
    <div className='h-screen   bg-color_2'>
      <div className='py-[5%]'>
        <TitleResuable text='Storytelling: Who I Am' color='black' />
      </div>
      <div className='grid grid-cols-10 gap-8  px-28 '>
        <div className='col-span-5'></div>
        <div className='col-span-5'>
          <MySelf />
        </div>
      </div>
    </div>
  )
}

export default About
