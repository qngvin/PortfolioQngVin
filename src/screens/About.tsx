// import TitleResuable from '../resuable/TitleResuable'

import BlockExp from '~/components/about/BlockExp'
import SelfSummary from '~/components/about/SelfSummary'
import education from '~/data/education'
import experiences from '~/data/experience'

// import MySelf from '../components/about/MySelf'
function About() {
  return (
    <div className='h-screen  bg-color_2 pt-40'>
      {/* <div className='py-[5%]'>
        <TitleResuable text='Storytelling: Who I Am' color='black' />
      </div>
      <div className='grid grid-cols-10 gap-8  px-28 '>
        <div className='col-span-5'></div>
        <div className='col-span-5'>
          <MySelf />
        </div>
      </div> */}
      <div className='grid grid-cols-4 gap-4 px-28 w-full relative z-[9999]'>
        <div className='col-span-1 h-[20em] bg-background_2 rounded-[2em] p-7'>
          <div
            className='w-full h-full rounded-tl-[1.5em] rounded-br-[1.5em]'
            style={{
              backgroundImage: `url('/images/IMG_5823.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        <SelfSummary />

        <BlockExp title='Experience' expData={experiences} type='experience' />
        <BlockExp title='Education' eduData={education} type='education' />
      </div>
    </div>
  )
}

export default About
