// CSS file
import './app.css'
// Libraries for react  
import { Route, Routes } from 'react-router-dom'

import HomePage from './Pages/HomePage'

// Component for use  

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
    </Routes>
    </>
  )
}

export default App
