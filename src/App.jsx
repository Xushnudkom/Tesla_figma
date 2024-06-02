import React from 'react'
import { ModelS, Model3 } from './pages'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

// import './App.css'
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
export default App
