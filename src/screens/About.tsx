import TitleResuable from '../resuable/TitleResuable'
import React from 'react'
import MySelf from '../components/about/MySelf'
function About() {
  return (
    <div className='h-screen bg-white'>
      <TitleResuable  text="Storytelling: Who I Am" color='black' />
      <div className='grid grid-cols-10 gap-8 py-4 px-28 '>
        <div className='col-span-5'></div>
        <MySelf />
      </div>
    </div>
  )
}

export default About
