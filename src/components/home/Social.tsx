import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa'

function Social() {
  return (
    <div className='h-full flex flex-col justify-center items-center  gap-4  text-[22px] text-black'>
      <FaInstagram />
      <hr className='w-px h-1/6 bg-[#afafaf]' />
      <FaFacebook />
      <hr className='w-px h-1/6 bg-[#afafaf]' />
      <FaGithub />
    </div>
  )
}

export default Social
