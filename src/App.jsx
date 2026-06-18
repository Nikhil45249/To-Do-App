import React from 'react'
import Home from './pages/Home'
import Notes from './pages/Notes'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Notes' element={<Notes />} />
      </Routes>
      
    </div>
  )
}

export default App