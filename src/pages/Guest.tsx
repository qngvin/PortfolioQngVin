import About from '~/screens/About'
import Home from '~/screens/Home'

function Guest() {
  return (
    <>
      <Home />
      <div id='about'>
        <About />
      </div>
    </>
  )
}

export default Guest
