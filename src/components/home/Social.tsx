import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa'
import React from 'react'
function Social() {
  return (
    <div className='h-full flex  flex-col gap-10 justify-center text-[22px] text-black'>
      <FaInstagram />
      <FaFacebook />
      <FaGithub />
    </div>
  )
}

export default Social
