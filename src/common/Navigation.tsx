export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      })
    }
  }
  return (
    <div className='relative z-[99999] flex items-center justify-end w-full p-28  py-8'>
      {/* <h1 className='text-white text-[30px] font-pacifico'>v:dev</h1> */}

      <div className='text-white  font-mina text-[22px] flex gap-10'>
        <p onClick={() => scrollToSection('home')} className='cursor-pointer'>
          Home
        </p>
        <p onClick={() => scrollToSection('about')} className='cursor-pointer'>
          About
        </p>
        <p onClick={() => scrollToSection('skills')} className='cursor-pointer'>
          Skills
        </p>
        <p onClick={() => scrollToSection('services')} className='cursor-pointer'>
          Services
        </p>
        <p onClick={() => scrollToSection('portfolio')} className='cursor-pointer'>
          Portfolio
        </p>
        <p onClick={() => scrollToSection('contact')} className='cursor-pointer'>
          Contact
        </p>
      </div>
    </div>
  )
}
