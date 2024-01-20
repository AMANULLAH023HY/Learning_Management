// CSS file
import './app.css'
// Libraries for react  
import { Route, Routes } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'

// Component for use  

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
    </Routes>
    </>
  )
}

export default App
