import BoxAnimation from '~/3f/BoxAnimation'
import Text3d from '~/3f/Text3d'
import Navigation from '~/common/Navigation'
import Avatar from '~/components/home/Avatar'
import Introduction from '~/components/home/Introduction'
import Social from '~/components/home/Social'

function Home() {
  return (
    <div className='h-screen relative bg-black'>
      <Navigation />
      <div className='grid grid-cols-10 mt-28 gap-8 px-28 w-full relative z-[9999]'>
        <div className='col-span-1'>
          <Social />
        </div>
        <div className=' col-span-6 pr-72'>
          <Introduction />
        </div>
        <div className=' col-span-3'>
          <Avatar />
        </div>
      </div>

      <div className=' fixed w-full h-[150px] top-[-5%] left-[10%] translate-x-[-50%]'>
        <Text3d />
      </div>
      <div className='absolute h-[70%] w-full top-[15%]  loverflow-hidden'>
        <BoxAnimation />
      </div>
    </div>
  )
}

export default Home
