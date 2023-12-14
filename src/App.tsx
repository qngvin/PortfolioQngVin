import { Route, Routes } from 'react-router-dom'
import './App.css'

import Guest from './pages/Guest'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Guest />} />
    </Routes>
  )
}

export default App
