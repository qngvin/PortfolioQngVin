import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa'
function Social() {
  return (
    <div className='h-full flex  flex-col gap-10 justify-center text-[22px] text-white'>
      <FaInstagram />
      <FaFacebook />
      <FaGithub />
    </div>
  )
}

export default Social
