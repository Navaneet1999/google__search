import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import { Home } from './component/home'
import { Search } from './component/serch/search'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/search/:q=YourQuery' element={<Search/>}></Route>
      </Routes>
      
      
    </div>
  )
}

export default App
