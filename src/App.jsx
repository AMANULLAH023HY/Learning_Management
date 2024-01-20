// CSS file
import './app.css'
// Libraries for react  
import { Route, Routes } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'

// Component for use  

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </>
  )
}

export default App
