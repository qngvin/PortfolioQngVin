import About from '~/screens/About'
import Home from '~/screens/Home'
import Skills from '~/screens/Skills'

function Guest() {
  return (
    <>
      <Home />
      <div id='about'>
        <About />
      </div>
      <div id='skills'>
        <Skills />
      </div>
    </>
  )
}

export default Guest
