import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage'
function App() {
  return (
    <div>
      <BrowserRouter>  <HomePage></HomePage></BrowserRouter>
   
    </div>
  )
}

export default App