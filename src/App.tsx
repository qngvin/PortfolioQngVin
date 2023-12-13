import { Route, Routes } from 'react-router-dom'
import './App.css'
import Guest from './screens/Guest'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Guest />} />
    </Routes>
  )
}

export default App
