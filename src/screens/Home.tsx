import BlockReusable from '~/components/home/BlockReusable'
import BlockIntroduction from '~/components/home/BlockIntroduction'
import BlockProfile from '~/components/home/BlockProfile'
import BlockDownload from '~/components/home/BlockDownload'
import TextInfinite from '~/components/home/TextInfinite'
import BlockSkill from '~/components/home/BlockSkill'
function Home() {
  return (
    <div className='h-screen flex justify-center items-center bg-color_2 pt-10'>
      {/* <div className='grid grid-cols-10 gap-8 px-28 w-full relative z-[9999]'>
        <div className='col-span-1'>
          <Social />
        </div>
        <div className=' col-span-6 pr-72'>
          <Introduction />
        </div>
        <div className=' col-span-3'>
          <Avatar />
        </div>
      </div> */}
      <div className='grid grid-cols-4 gap-4 px-28 w-full relative z-[9999]'>
        <BlockIntroduction />
        <div className='grid grid-cols-2 col-span-2 gap-4 h-[22rem]  rounded-[2em]'>
          <div className='col-span-2 flex items-center px-6 h-[4rem] bg-background_2 rounded-[2em]'>
            <TextInfinite />
          </div>
          <BlockReusable title='Credentials' subtitle='MORE ABOUT ME' img='/images/IMG_5823.jpg' to='/' />
          <BlockReusable title='Portfolios' subtitle='SHOWCASE' img='/images/IMG_5823.jpg' to='/' />
        </div>
        <BlockDownload title='Download' subtitle='MY CV' img='/images/IMG_5823.jpg' />
        <BlockSkill />
        <BlockProfile />
      </div>
      {/* <div className=' fixed w-full h-[150px] top-[-5%] left-[10%] translate-x-[-50%]'>
        <Text3d />
      </div> */}
      {/* <div className='absolute h-[70%] w-full top-[15%]  loverflow-hidden'>
        <BoxAnimation />
      </div> */}
    </div>
  )
}

export default Home
